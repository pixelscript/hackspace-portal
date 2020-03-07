import Oicd from '../node_modules/oidc-client/index';
import { loggedIn, userProfile } from './main.store';
Oicd.Log.logger = console;

const settings = {
  authority: 'https://auth.teessidehackspace.org.uk/auth/realms/master',
  client_id: 'hackspace-api',
  redirect_uri: 'http://localhost:3000',
  post_logout_redirect_uri: 'http://localhost:3000',
  response_type: 'id_token token',
  scope: 'openid profile resource_access',
  filterProtocolClaims: true,
  loadUserInfo: true
};

class Auth {
  constructor() {
    this.user = null;
  }

  get isLoggedIn() {
    return this.user !== null && this.user && !this.user.expired;
  }

  login() {
    this.user = null;
    this.updateStore();
    return this.userManager.signinRedirect();
  }

  updateStore() {
    loggedIn.set(this.isLoggedIn);
    userProfile.set(this.user);
  }

  logoutSession() {
    this.user = null;
    this.updateStore();
    return this.userManager.signoutRedirect();
  }

  async getUser() {
    try {
      this.user = await this.userManager.getUser();
      if (!this.user || this.user.expired) {
        this.user = await this.userManager.signinRedirectCallback();
      }
      this.updateStore();
    } catch (e) {}
    return this.user;
  }

  get userManager() {
    if (this._userManager) {
      return this._userManager;
    } else {
      return (this._userManager = new Oicd.UserManager(settings));
    }
  }
}

export default new Auth();
