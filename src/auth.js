import oidc from '../node_modules/oidc-client';
oidc.Log.logger = console;

const settings = {
  authority: 'https://auth.teessidehackspace.org.uk/auth/realms/master',
  client_id: 'hackspace-api',
  redirect_uri: 'http://localhost:3000/auth',
  post_logout_redirect_uri: 'http://localhost:3000/auth',
  response_type: 'id_token token',
  scope: 'openid profile resource_access',
  filterProtocolClaims: true,
  loadUserInfo: true
}


export async function login() {
  const UserManager = new oidc.UserManager(settings);
  return UserManager.signinRedirect();
}

export async function logoutSession() {
  const UserManager = new oidc.UserManager(settings);
  return UserManager.signoutRedirect();
}

export async function getUser() {
  const UserManager = new oidc.UserManager(settings);
  try {
    let user = await UserManager.getUser();
    if (!user) {
      user = await UserManager.signinRedirectCallback();
    }
    return user
  } catch (e) {
    return e;
  }
}