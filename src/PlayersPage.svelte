<script>
  import { createEventDispatcher } from 'svelte';

  import PageMainLayout from './components/PageMainLayout.svelte';
  import PageHeader from './components/PageHeader.svelte';
  import ContentLayout from './components/ContentLayout.svelte';
  import PageFooter from './components/PageFooter.svelte';
  import Button from './components/Button.svelte';
  import Input from './components/Input.svelte';
  import Em from './components/Em.svelte';
  import { Events } from './events/events';
  import { createPlayerProvider } from './stores/playersProvider';
  
  const dispatch = createEventDispatcher();

  let playersProvider = createPlayerProvider();
  let players = playersProvider.players;
  let playerName = '';
  let playerAlreadyExists = false;

  $: playerAlreadyExists = playersProvider.isNameExists(playerName);

  function handleClickCalculate() {
    dispatch(Events.nextPage);
  }

  function handleClickBack() {
    dispatch(Events.prevPage);
  }

  function handleClickAddPlayer() {
    if (!playerAlreadyExists) {
      players = playersProvider.add(playerName);
      playerName = '';
    }
  }

  /**
   * @param {number} playerId
   */
  function removePlayer(playerId) {
    return () => {
      players = playersProvider.remove(playerId);
    };
  }
</script>

<PageMainLayout>
  <PageHeader>
    <h1 class="text-4xl text-orange-700">Add players</h1>
    <p class="text-orange-900 mt-4 px-5">Add players by typing their names and clicking <Em>Add player</Em>. The minimum amount of players is 2 and maximum is 6.</p>
  </PageHeader>
  <ContentLayout>
    <div class="flex mt-8">
      <Input bind:value={playerName} disabled={players.length === 6} />
      <Button text="Add player" on:click={handleClickAddPlayer} disabled={playerName.trim() === '' || playerAlreadyExists || players.length === 6}/>
    </div>
    <p class="h-2 text-red-600">
      {#if playerAlreadyExists}
      <span>Player with this name already exists</span>
      {/if}
    </p>
    <h2 class="text-xl text-orange-800 mt-10">Players (total number <span>{players.length}</span>):</h2>
    <div class="flex flex-col mt-4">
      {#each players as player (player.id)}
        <p class="mt-3"><button class="bg-orange-700 text-stone-300 font-semibold px-2 mr-5 rounded-xl" on:click={removePlayer(player.id)}>X</button><span>{player.name}</span></p>
      {/each}
    </div>
  </ContentLayout>
  <PageFooter>
    <Button text="Back" secondary on:click={handleClickBack}/>
    <Button text="Calculate points" on:click={handleClickCalculate} disabled={players.length < 2} />
  </PageFooter>
</PageMainLayout>
