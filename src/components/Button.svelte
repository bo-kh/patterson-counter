<script>
  export let text = '...';
  export let secondary = false;
  export let disabled = false;

  $: bgColor = disabled ? 'bg-gray-400' : (secondary ? 'bg-stone-500' : 'bg-orange-700');
  $: activeColor = secondary ? 'active:bg-stone-600' : 'active:bg-orange-800';
</script>

<button on:click class="{bgColor} grow-0 {activeColor} text-stone-200 py-2 px-4 focus:outline-none ml-2" disabled={disabled}>{text}</button>

<style>
  button {
    min-width: 8rem;
  }
</style>