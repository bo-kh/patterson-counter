export default class PlayerRound {
  #player = null;
  #previousPoints = 0;
  /**
   * @type {number}
   */
  #currentPoints;

  /**
   * @type {number}
   */
  #takesFact;

  /**
   * @type {number}
   */
  #takesPredicted;

  /**
   * @param {number} takesFact 
   * @param {number} takesPredicted 
   * @param {number} previousPoints 
   * @returns 
   */
  #calculateCurrentPoints(takesFact, takesPredicted, previousPoints) {
    return takesFact === takesPredicted ? 10 + takesFact + previousPoints : previousPoints;
  }

  /**
   * @param {object} player
   * @param {number} previousPoints 
   */
  constructor(player, previousPoints) {
    this.#player = player;
    this.#previousPoints = previousPoints;
  }

  get player() {
    return {...this.#player};
  }

  get previousPoints() {
    return this.#previousPoints;
  }

  get currentPoints() {
    return this.#currentPoints;
  }

  get takesPredicted() {
    return this.#takesPredicted
  }

  get takesFact() {
    return this.#takesFact;
  }

  /**
   * @param {number} value
   */
   set takesPredicted(value) {
    if (value === undefined || value === null) return;

    this.#takesPredicted = value;

    if (this.#takesFact === undefined) return;

    this.#currentPoints = this.#calculateCurrentPoints(this.#takesFact, this.#takesPredicted, this.#previousPoints);    
  }

  /**
   * @param {number} value
   */
  set takesFact(value) {
    if (value === undefined || value === null) return;

    this.#takesFact = value;

    if (this.#takesPredicted === undefined) return;

    this.#currentPoints = this.#calculateCurrentPoints(this.#takesFact, this.#takesPredicted, this.#previousPoints);
  }
}