<script>
  import CONST from "../constants.js";
  import {logoutSession} from "../auth.js";
	(async () => {
    const ls = await logoutSession();
    console.log(ls);
  })();
</script>

<svelte:head>
  <title>{CONST.TITLE}: Logout</title>
</svelte:head>

<h1>

</h1>