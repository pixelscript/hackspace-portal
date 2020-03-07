<script>
  import CONST from "../constants";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  import LoggedOut from "../components/LoggedOut.svelte";
  import Auth from "../auth";
  import { loggedIn } from "../main.store";
  const userPromise = Auth.getUser();
</script>

<style>
  p {
    background: #eee;
    padding: 10px;
    border: 1px solid #888;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: User</title>
</svelte:head>

{#await userPromise}
  <h1>WAITING</h1>
{:then user}
  {#if user.profile && loggedIn}
    <HackspaceLogo />
    <h1>🎉 Welcome {user.profile.name} 🎉</h1>
    <h2>Username</h2>
    <p>{user.profile.preferred_username}</p>
    <h2>Email</h2>
    <p>{user.profile.email}</p>
  {:else}
    <LoggedOut></LoggedOut>
  {/if}
{/await}
