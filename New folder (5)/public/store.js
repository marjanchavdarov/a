export function createStore() {
  return {
    state: {
      dice: [0, 0],
      turn: 1,
      points: Array(24).fill(null).map(() => []),
    },
    rollDice() {
      this.state.dice = [
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1)
      ];
      return this.state.dice;
    }
  };
}
