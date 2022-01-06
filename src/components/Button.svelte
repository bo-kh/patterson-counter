<script>
  export let text = '...';
</script>

<button on:click class="bg-orange-700 active:bg-orange-800 text-stone-200 p-2 focus:outline-none">{text}</button>

<style>
  button {
    min-width: 8rem;
  }
</style>