import PlayerRound from './models/playerRound';
import Round from './models/round';

export default class PlayerRoundProvider {
  /**
   * @type {object[]}
   */
  #rounds = [];
  #players;
  #roundNumber = 0;
  #lastRoundNumber = 19;

  /**
   * @param {number} roundNumber 
   * @returns {number} number of cards to deal
   */
   #cardsToDeal(roundNumber) {
    const middlePoint = Math.ceil(this.#lastRoundNumber / 2);
    return roundNumber <= middlePoint 
      ? roundNumber 
      : this.#lastRoundNumber - roundNumber + 1;
  } 

  /**
   * 
   * @param {Array} players 
   */
  constructor(players) {
    this.#players = players;
    if (players.length === 6) {
      this.#lastRoundNumber = 17;
    }
  }

  get valid() {
    const playersNumber = this.#players.length;
    return playersNumber > 1 && playersNumber < 7;
  }

  get isLastRound() {
    return this.#roundNumber === this.#lastRoundNumber
  }

  /**
   * @returns {Round}
   */
  get lastRound() {
    return this.#rounds.length > 0 ? this.#rounds[this.#rounds.length - 1] : undefined;
  }

  get rounds() {
    return [...this.#rounds];
  }

  get players() {
    return this.#players.map(p => ({...p}));
  }

  addRound() {
    if (this.#roundNumber > 0 && this.isNextRoundDisabled())
      return false;

    this.#roundNumber += 1;

    const lastRound = this.lastRound;
    const round = new Round(
      this.#players.map(p => {
        const previousPoints = lastRound ? lastRound.getPlayerRound(p.id).currentPoints : 0;
        return new PlayerRound(p, previousPoints);
      }),
      this.#roundNumber,
      this.#cardsToDeal(this.#roundNumber)
    );
    this.#rounds.push(round);

    return true;
  }

  /**
   * @param {number} playerId 
   * @param {number} value 
   */
   setTakesPredicted(playerId, value) {
    const lastRound = this.lastRound;

    if (lastRound && lastRound[playerId]) {
      lastRound[playerId].takesPredicted = value;
      return true;
    }
    return false;
  }

  /**
   * @param {number} playerId 
   * @param {number} value 
   */
  setTakesFact(playerId, value) {
    const lastRound = this.lastRound;

    if (lastRound && lastRound[playerId]) {
      lastRound[playerId].takesFact = value;
      return true;
    }
    return false;
  }

  isNextRoundDisabled() {
    if (this.isLastRound) return true;

    if (this.lastRound.getRemainingTakesFact() > 0) return true;

    // If there's at least one player with unfilled fact or predicted takesn,
    // then the button is disabled  
    if (this.#players.find(p => {
      const playerRound = this.lastRound.getPlayerRound(p.id);
      return playerRound.takesFact === undefined || playerRound.takesPredicted === undefined;
    })) {
      return true;
    }
    
    return false;
  }
}