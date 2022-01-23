<script>
  import PlayerRoundProvider from './stores/playerRoundProvider';
  import Cell from './components/Cell.svelte';
  import HeaderCell from './components/HeaderCell.svelte';
  import MessageBox from './components/MessageBox.svelte';
  import Button from './components/Button.svelte';

  export let players = [];

  // Initial states
  const roundProvider = new PlayerRoundProvider(players);
  roundProvider.addRound();  

  const colsCount = players.length + 1;
  let isDialogOpen = false;
  let isNextRoundDisabled = true;
  let dialogData = {};
  let rounds = roundProvider.rounds;

  /**
   * @param {object} round
   * @param {number} playerId
   */
  function getCurrentPoints(round, playerId) {
    const cp = round.getPlayerRound(playerId).currentPoints;
    return cp === undefined ? '-' : cp;
  }

  /**
   * @param {object} round
   * @param {number} playerId
   */
  function getTakesPreicted(round, playerId) {
    const tp = round.getPlayerRound(playerId).takesPredicted;
    return tp === undefined ? '-' : tp;
  }

  /**
   * @param {object} round
   * @param {number} playerId
   */
  function getTakesFact(round, playerId) {
    const tf = round.getPlayerRound(playerId).takesFact;
    return tf === undefined ? '-' : tf;
  }

  /**
   * @param {number} playerId
   */
  function handleCellClick(playerId) {
    return function() {
      const lastRound = roundProvider.lastRound;
      const playerRound = lastRound.getPlayerRound(playerId);
      dialogData = {
        player: playerRound.player,
        takesPredicted: playerRound.takesPredicted,
        takesFactInitial: playerRound.takesFact ?? 0,
        takesFactRemaining: lastRound.getRemainingTakesFact(),
        takesFact: playerRound.takesFact,
      };
      isDialogOpen = true;
    }
  }

  /**
   * @param {number} playerId
   */
  function handleDialogClickYes(playerId) {
    return function() {
      const playerRound = roundProvider.lastRound.getPlayerRound(playerId);
      playerRound.takesPredicted = dialogData.takesPredicted;
      playerRound.takesFact = dialogData.takesFact;
      isDialogOpen = false;
      isNextRoundDisabled = roundProvider.isNextRoundDisabled();

      // touching players variable to re-render view.
      players = players;
    }
  }

  function handleDialogClickNo() {
    isDialogOpen = false;
  }

  function handleClickNextRound() {
    roundProvider.addRound();
    rounds = roundProvider.rounds;
    isNextRoundDisabled = true;
  }
</script>

<div class="main-round-rows-element min-h-0 overflow-x-hideen overflow-y-auto">
  <div class="grid g-cols-{colsCount} border-b-2 border-stone-500">
    <HeaderCell value="Cards" />
    {#each players as player}
      <HeaderCell value={player.name} />
    {/each}
  </div>
  <div class="grid g-cols-{colsCount} border-b border-r border-stone-500 min-h-0">
    {#each rounds as round (round.roundNumber)}
      <Cell mainValue={round.cardsToDeal} leftValue={round.roundNumber} rounded />
      {#each players as player}
        <Cell 
          mainValue={getCurrentPoints(round, player.id)} 
          leftValue={getTakesPreicted(round, player.id)}
          rightValue={getTakesFact(round, player.id)}
          on:click={handleCellClick(player.id)}
        />
      {/each}
    {/each}
  </div>
  <div class="flex justify-end pt-2">
    <Button text="Next round" on:click={handleClickNextRound} disabled={isNextRoundDisabled} />
  </div>
  {#if isDialogOpen}
    <MessageBox 
      on:clickYes={handleDialogClickYes(dialogData.player.id)}
      on:clickNo={handleDialogClickNo}
      isConfirm
      textYes="Ok"
      textNo="Cancel"
      yesButtonDisabled={dialogData.takesPredicted > roundProvider.lastRound.cardsToDeal 
        || (dialogData.takesFactRemaining + dialogData.takesFactInitial) < dialogData.takesFact}
    >
      <p class="text-lg font-medium text-center">Player: {dialogData.player.name}</p>
      <div class="mt-4">
        <span class="h-8 leading-8">Predicated takes:</span>
        <input class="h-8 px-2" type="number" min="0" max={roundProvider.lastRound.cardsToDeal} bind:value={dialogData.takesPredicted}>
      </div>
      <div class="mt-4">
        <span class="h-8 leading-8">Fact takes:</span>
        <input class="h-8 px-2" type="number" min="0" max={roundProvider.lastRound.cardsToDeal} bind:value={dialogData.takesFact}>
      </div>
    </MessageBox>
  {/if}
</div>
