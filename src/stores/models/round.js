export default class Round {
  #playerRounds = {};
  #roundNumber;
  #cardsToDeal;

  /**
   * @param {Array} playerRounds 
   * @param {number} roundNumber 
   * @param {number} cardsToDeal 
   */
  constructor(playerRounds, roundNumber, cardsToDeal) {
    playerRounds.forEach(pr => {
      this.#playerRounds[pr.player.id] = pr;
    });
    this.#roundNumber = roundNumber;
    this.#cardsToDeal = cardsToDeal;
  }

  get roundNumber() {
    return this.#roundNumber;
  }

  get cardsToDeal() {
    return this.#cardsToDeal;
  }

  /**
   * @param {number} playerId 
   */
  getPlayerRound(playerId) {
    return this.#playerRounds[playerId];
  }

  getRemainingTakesFact() {
    let allTakesFact = 0;
    Object.values(this.#playerRounds).forEach(pr => allTakesFact += (pr.takesFact ?? 0));

    return this.#cardsToDeal - allTakesFact;
  }
}