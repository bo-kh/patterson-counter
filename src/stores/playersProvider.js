import { writable, get } from 'svelte/store';
import Player from './models/player';
import { getNextId } from './playerIdProvider';

const players = writable([]);

class PlayersProvider {
  /**
   * @param {string} playerName
   */
  add(playerName) {
    players.update(p => [...p, new Player(getNextId(), playerName.trim())]);
    return [...get(players)];
  }

  /**
   * @param {number} playerId 
   */
  remove(playerId) {
    const p = get(players);
    const index = p.findIndex(item => item.id === playerId);
    if (index >= 0) {
      p.splice(index, 1);
      players.update(() => [...p]);
    }
    return [...get(players)];
  }

  reset() {
    players.update(p => []);
  }

  /**
   * @param {string} playerName 
   */
  isNameExists(playerName) {
    const desiredValue = playerName.trim().toLowerCase();
    const p = get(players);
    return p.findIndex(item => item.name.toLowerCase() === desiredValue) >= 0;
  }

  get players() {
    return [...get(players)];
  }
}

export const createPlayerProvider = () => new PlayersProvider();
