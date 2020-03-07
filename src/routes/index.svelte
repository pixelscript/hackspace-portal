<script>
  import CONST from "../constants";
	import HackspaceLogo from "../components/HackspaceLogo.svelte";
	import Chip from "../components/Chip.svelte";
  import { loggedIn, userProfile } from "../main.store";
</script>

<style>
  p {
    background: #eee;
    padding: 10px;
    border: 1px solid #888;
	}
	div {
		border: 1px solid #eee;
	}
</style>

<svelte:head>
  <title>{CONST.TITLE}: Home</title>
</svelte:head>

{#if $userProfile.profile && loggedIn}
  <HackspaceLogo />
  <h1>🎉 Welcome {$userProfile.profile.name} 🎉</h1>
  <h2>Username</h2>
  <p>{$userProfile.profile.preferred_username}</p>
  <h2>Email</h2>
  <p>{$userProfile.profile.email}</p>
  <h2>Roles</h2>
	<div>
  {#each $userProfile.profile.resource_access['hackspace-api'].roles as role}
    <Chip value={role}></Chip>
  {/each}
	</div>
{/if}
