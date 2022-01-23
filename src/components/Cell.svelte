<script>
  export let leftValue = undefined;
  export let rightValue = undefined;
  export let mainValue = '-';
  export let rounded = false;

  const roundedClass = rounded ? 'rounded-xl' : 'rounded-none';
</script>

<div 
  class="relative flex justify-center items-center bg-stone-300 border-l border-t border-stone-500 h-16"
  on:click
>
  {#if leftValue !== undefined}
    <span class="left-corner-info text-sm px-2 bg-stone-200 border-r border-b border-stone-500 {roundedClass}">{leftValue}</span>    
  {/if}
  <span class="text-xl font-semibold p-1 text-ellipsis overflow-hidden whitespace-nowrap">{mainValue}</span>
  {#if rightValue !== undefined}
    <span class="right-corner-info text-sm px-2 bg-stone-200 border-l border-b border-stone-500 {{roundedClass}}">{rightValue}</span>    
  {/if}
</div>

<style>
  .left-corner-info {
    position: absolute;
    top: 0;
    left: 0;
  }
  .right-corner-info {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>