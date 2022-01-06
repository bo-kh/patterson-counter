<script>
import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';
  import { Events } from './events.js';

  const dispatch = createEventDispatcher();

  function handleClickStart() {
    dispatch(Events.nextPage);
  }
</script>

<div class="flex flex-col items-center h-full">
  <div class="flex flex-col items-center grow-0 mt-8">
    <h1 class="text-4xl text-orange-700">Patterson counter</h1>
    <h2 class="text-xl text-orange-700">for Patterson card game</h2>
    </div>
  <div class="flex flex-col grow justify-center text-stone-600 p-10">
    <p>This is an application that helps players to count points in Patterson card game</p>
    <p class="pt-4">Press <span class="text-orange-700 font-medium">Start</span> button to add players and start counting points.</p>
  </div>
  <div class="flex grow-0 w-full pb-6 px-4 justify-end">
    <Button text="Start" on:click={handleClickStart} />
  </div>
</div>