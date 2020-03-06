<script>
  import CONST from "../constants.js";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  let loggedIn;
</script>

<style>
  section {
    width: 100%;
    max-width: 300px;
    text-align: center;
    margin: auto;
  }

  input {
    width:100%;
    box-sizing: border-box;
  }
</style>

<section>
  <HackspaceLogo />
  <h1>Login</h1>
  <input placeholder="username" type="text" />
  <input placeholder="password" type="password" />
  <button
    on:click={() => {
      loggedIn = !loggedIn;
    }}
    type="button">
    log in
  </button>
</section>
