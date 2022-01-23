<script>
  import { createEventDispatcher } from 'svelte';

  import RoundRows from './RoundRows.svelte';
  import PageMainLayout from './components/PageMainLayout.svelte';
  import PageHeader from './components/PageHeader.svelte';
  import ContentLayout from './components/ContentLayout.svelte';
  import PageFooter from './components/PageFooter.svelte';
  import Button from './components/Button.svelte';
  import MessageBox from './components/MessageBox.svelte';
  import { Events } from './events/events';
  import { createPlayerProvider } from './stores/playersProvider';

  const dispatch = createEventDispatcher();
  const playerProvider = createPlayerProvider();

  let showMessageBox = false; 

  function handleClickFinish() {
    showMessageBox = true;
  }
  function handleClickYes() {
    showMessageBox = false;
    playerProvider.reset();
    dispatch(Events.finish);
  }
  function handleClickNo() {
    showMessageBox = false;
  }
</script>

<PageMainLayout>
  <PageHeader>
    <h1 class="text-4xl text-orange-700">Points counting</h1>
  </PageHeader>
  <ContentLayout>
    <RoundRows players={playerProvider.players} />
  </ContentLayout>
  <PageFooter>
    <Button text="Finish" on:click={handleClickFinish}/>
  </PageFooter>
  {#if showMessageBox}
    <MessageBox on:clickYes={handleClickYes} on:clickNo={handleClickNo} isConfirm>
      <p class="text-center">Are you sure you want to finish counting points and reset game state?</p>
    </MessageBox>
  {/if}
</PageMainLayout>
