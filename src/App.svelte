<script>
  import StartPage from "./components/StartPage.svelte";

  let pageNumber = 0;

  function handleMessageNextPage() {
    pageNumber += 1;
  }

</script>

<div class="m-auto h-full md:max-w-lg bg-stone-300">
  {#if pageNumber === 0}
    <StartPage on:nextPage={handleMessageNextPage} />
  {:else}
    <p>Next page</p>
  {/if}
</div>