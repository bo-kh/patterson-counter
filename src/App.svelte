<script>
  import StartPage from "./StartPage.svelte";
  import PlayersPage from "./PlayersPage.svelte";

  let pageNumber = 0;

  function handleMessageNextPage() {
    pageNumber += 1;
  }
  function handleMessagePrevPage() {
    pageNumber -= 1;
  }
</script>

<div class="m-auto h-full md:max-w-lg bg-stone-300">
  {#if pageNumber === 0}
    <StartPage on:nextPage={handleMessageNextPage} />
  {:else}
    <PlayersPage on:prevPage={handleMessagePrevPage} on:nextPage={handleMessageNextPage} />
  {/if}
</div>