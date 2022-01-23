<script>
  export let justifyCenter = false;

  const justify = justifyCenter ? 'justify-center' : 'justify-start';
</script>

<div class="flex flex-col w-full p-5 text-stone-600 grow {justify} min-h-0">
  <slot />
</div>