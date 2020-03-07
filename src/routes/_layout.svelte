<script>
  import Nav from "../components/Nav.svelte";
  import Auth from "../auth";
  import { loggedIn } from "../main.store";
  import LoggedOut from "../components/LoggedOut.svelte";
  let ready = false;
  if (process.browser) {
    (async () => {
      if (!$loggedIn) {
        const user = await Auth.getUser();
        console.log("USER", user);
      }
      ready = true;
    })();
  }

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

{#if ready}
  {#if $loggedIn}
    <Nav {segment} />
    <main>
      <slot />
    </main>
  {:else}
    <main>
      <LoggedOut />
    </main>
  {/if}
{/if}
