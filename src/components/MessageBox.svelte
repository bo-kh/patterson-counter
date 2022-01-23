<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  const TEXT_YES = 'Yes';
  const TEXT_NO = 'No';

  export let isConfirm = false;
  export let textYes = TEXT_YES;
  export let textNo = TEXT_NO;
  export let yesButtonDisabled = false;

  textYes = !textYes ? TEXT_YES : textYes;
  textNo = !textNo ? TEXT_NO : textNo;

  const dispatch = createEventDispatcher();

  const events = Object.freeze({
    clickOk: 'clickOk',
    clickYes: 'clickYes',
    clickNo: 'clickNo',
  });

  function handleClickOk() {
    dispatch(events.clickOk);
  }
  function handleClickYes() {
    dispatch(events.clickYes);
  }
  function handleClickNo() {
    dispatch(events.clickNo);
  }
</script>

<div class="msgbox fixed top-0 -mx-5 m-auto w-full h-full md:max-w-lg overflow-hidden bg-stone-900/80">
  <div class="flex flex-col w-full h-full justify-center">
    <div class="w-full bg-stone-300 p-1">
      <div class="w-full h-full px-2 pt-1 pb-2 border-2 border-dashed border-orange-800">
        <h2 class="text-2xl text-orange-700 text-center">
          {#if isConfirm}
            Confirm
          {:else}
            Information
          {/if}
        </h2>
        <div class="mt-4">
          <slot />
        </div>
        <div class="flex w-full justify-center bg-stone-300 mt-8">
          {#if isConfirm}
            <Button text={textNo} secondary on:click={handleClickNo} />
            <Button text={textYes} on:click={handleClickYes} disabled={yesButtonDisabled} />
          {:else}
            <Button text="OK" on:click={handleClickOk} />
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
