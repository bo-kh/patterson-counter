<script>
  import StartPage from './StartPage.svelte';
  import PlayersPage from './PlayersPage.svelte';
  import PointsPage from './PointsPage.svelte';

  let pageNumber = 0;

  function handleMessageNextPage() {
    pageNumber += 1;
  }
  function handleMessagePrevPage() {
    pageNumber -= 1;
  }
  function handleMessageFinish() {
    pageNumber = 0;
  }
</script>

<div class="m-auto h-full md:max-w-lg bg-stone-300">
  {#if pageNumber === 0}
    <StartPage on:nextPage={handleMessageNextPage} />
  {:else if pageNumber === 1}
    <PlayersPage on:prevPage={handleMessagePrevPage} on:nextPage={handleMessageNextPage} />
  {:else}
    <PointsPage on:finish={handleMessageFinish} />
  {/if}
</div>