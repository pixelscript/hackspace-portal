<script>
  import Auth from "../auth.js";
  import { fade } from "svelte/transition";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  import {loggedInOnce} from "../main.store";
  function login() {
    Auth.login();
  }
</script>

<style>
  section {
    text-align: center;
  }
  button {
    margin:auto;
  }
</style>

<section in:fade={{ delay: 500, duration: 500 }}>
  <HackspaceLogo />
  {#if $loggedInOnce}
  <h1>You have been logged out</h1>
  {:else}
  <h1>Teesside Hackspace Portal</h1>
  {/if}
  <button type="button" on:click={login}>Sign in</button>
</section>
