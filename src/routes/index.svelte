<script>
  import CONST from "../constants.js";
  import Login from "../components/Login.svelte";
  let loggedIn = false;
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: The Happiest Place on Earth &trade;</title>
</svelte:head>


{#if !loggedIn}
  <Login/>
{/if}