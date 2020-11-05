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
    this.neighbors = new Neighbors(this.values, this.percenteages);
  }

  answer = () => {
    this._itemA();
    console.log("\n\n");
    this._itemB();
  };

  _itemA = () => {
    console.log("ITEM A: \n");
    const initialWallet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    console.log(this.neighbors.solution(initialWallet));
  };

  _itemB = () => {
    console.log("ITEM B: \n");

    const RANDOM_WALLETS = 10;
    const wallets = [];

    for (let i = 0; i < RANDOM_WALLETS; i++) {
      const solution = this.neighbors.solution(this._getRandomWallet());
      this._outputSolution(i + 1, solution);
    }
  };

  _getRandomWallet = () => {
    let possibilities = Object.keys(this.values);
    let counter = possibilities.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = possibilities[counter];
      possibilities[counter] = possibilities[index];
      possibilities[index] = temp;
    }

    return possibilities;
  };

  _outputSolution = (name, solution) => {
    console.log(`Wallet ${name}:`);
    console.log(`30%    --> ${solution.stocks[0]}`);
    console.log(`25%    --> ${solution.stocks[1]}`);
    console.log(`20%    --> ${solution.stocks[2]}`);
    console.log(`15%    --> ${solution.stocks[3]}`);
    console.log(`10%    --> ${solution.stocks[4]}`);
    console.log(`PROFIT --> ${solution.profit}`);
    console.log("\n");
  };
}

module.exports = new Controller();
