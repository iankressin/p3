const Neighbors = require("./neighbors.js");

class Controller {
  constructor() {
    this.values = {
      A: 0.42292,
      B: 0.25685,
      C: 0.04128,
      D: 0.05812,
      E: -0.01731,
      F: 0.09615,
      G: 0.12039,
      H: 0.05166,
      I: -0.00424,
      J: 0.21782
    };
    this.percenteages = [0.3, 0.25, 0.2, 0.15, 0.1];
  }

  itemA = () => {
    const initialWallet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let neighbors = new Neighbors(this.values, this.percenteages);
    return neighbors.solution(initialWallet);
  };

  itemB = () => {};

  itemC = () => {};

  _getRandomWallet = () => {
    for (let i = 0; i < this.values.length; i++) {}
  };

  _randomPosition = () =>
    Math.round(Math.random() * (Object.keys(this.values).length - 0)) + 0;
}

module.exports = new Controller();
