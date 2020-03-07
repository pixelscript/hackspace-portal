<script>
  import CONST from "../constants";
  import pokemon from "../pokemon";
  import Card from "../components/Card.svelte";
  import Spinner from "../components/Spinner.svelte";

  let pokes = [];
  if (process.browser) {
    (async () => {
      const result = await pokemon();
      pokes = result.data.pokemons;
    })();
  }
</script>

<style>
  .user-list {
    text-align: center;
  }
  .user-list > div {
    display: inline-block;
  }

    .user-list > div {
      margin-right: 1.5em;
      margin-bottom: 1.5em;
    }
</style>

<svelte:head>
  <title>{CONST.TITLE}: Users</title>
</svelte:head>

<h1>Users</h1>
{#if pokes.length <= 0}
  <Spinner/>
{:else}
<div class="user-list">
  {#each pokes as poke}
    <div>
      <Card title={poke.name} subtitle={poke.classification} img={poke.image} />
    </div>
  {/each}
</div>
{/if}