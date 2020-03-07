<script>
  import Auth from "../auth.js";
  import { fade } from "svelte/transition";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
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
  <h1>You are logged out</h1>
  <button type="button" on:click={login}>Sign in</button>
</section>
