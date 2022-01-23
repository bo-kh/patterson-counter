<script>
  import { createEventDispatcher } from 'svelte';

  import PageMainLayout from './components/PageMainLayout.svelte';
  import PageHeader from './components/PageHeader.svelte';
  import ContentLayout from './components/ContentLayout.svelte';
  import PageFooter from './components/PageFooter.svelte';
  import Button from './components/Button.svelte';
  import Em from './components/Em.svelte';
  import { Events } from './events/events';

  const dispatch = createEventDispatcher();

  function handleClickStart() {
    dispatch(Events.nextPage);
  }
</script>

<PageMainLayout>
  <PageHeader>
    <h1 class="text-4xl text-orange-700">Patterson counter</h1>
    <h2 class="text-xl text-orange-700">for Patterson card game</h2>
  </PageHeader>
  <ContentLayout justifyCenter>
    <p class="text-center">This is an application that helps players to count points in Patterson card game</p>
    <p class="pt-4 text-center">Press <Em>Start</Em> button to add players and start counting points.</p>
  </ContentLayout>
  <PageFooter>
    <Button text="Start" on:click={handleClickStart} />
  </PageFooter>
</PageMainLayout>
