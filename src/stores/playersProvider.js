import Player from './models/player.js';
import { getNextId } from './playerIdProvider.js';

export default class PlayersProvider {
  /**
   * @type {Player[]}
   * @private
   */
  #players = [];

  /**
   * @param {string} playerName
   */
  add(playerName) {
    this.#players.push(new Player(getNextId(), playerName.trim()));
    return [...this.#players];
  }

  /**
   * @param {number} playerId 
   */
  remove(playerId) {
    const index = this.#players.findIndex(item => item.id === playerId);
    if (index >= 0) {
      this.#players.splice(index, 1);
    }
    return [...this.#players];
  }

  /**
   * @param {string} playerName 
   */
  isNameExists(playerName) {
    const desiredValue = playerName.trim().toLowerCase();
    return this.#players.findIndex(item => item.name.toLowerCase() === desiredValue) >= 0;
  }
}