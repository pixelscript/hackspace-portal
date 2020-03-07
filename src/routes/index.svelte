<script>
	import CONST from "../constants.js";
	import Auth from '../auth';
	import {loggedIn} from '../main.store';
	if($loggedIn){
    window.open('/about', '_self');
  } else {
		Auth.login();
	}
</script>

<svelte:head>
  <title>{CONST.TITLE}: Logging you in</title>
</svelte:head>