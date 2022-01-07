import { writable, get } from 'svelte/store';

const id = writable(0);

export const getNextId = () => {
  id.update(v => v + 1);
  return get(id);
}