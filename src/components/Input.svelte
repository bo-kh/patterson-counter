<script>
  export let disabled = false;
  export let value;

  $: bgColor = disabled ? 'bg-stone-300' : 'bg-stone-200';
</script>

<input bind:value class="grow {bgColor} border-orange-700 border-b-2 focus:outline-none px-2" type="text" disabled={disabled}>

<style>
  input {
    min-width: 1rem;
  }
</style>