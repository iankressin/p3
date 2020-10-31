class Neighbors {
  constructor(stocks, initialSolution, values, percenteages) {
    this._stocks = stocks;
    this._values = values;
    this._percentages = percenteages;
    this._initialSolution = initialSolution;
    this._neighbors = [this._initialSolution];
  }

  getNeighbors = () => {
    this._findNeighbors();

    return this._neighbors;
  };

  getBestNeighbor = () => {
    // Se bestSolution === 0, então nenhum vizinho possui uma solução melhor
    let bestSolution = { position: -1, value: 0 };

    if (this._neighbors.length === 0) this._findNeighbors();

    this._neighbors.forEach((neighbor, index) => {
      let total = 0;
      for (let i = 0; i < this._percentages.length; i++) {
        total += this._values[neighbor[i]] * this._percentages[i];
      }

      if (total > bestSolution.value) {
        bestSolution.position = index;
        bestSolution.value = total;
      }
    });

    return {
      investiments: this._neighbors[bestSolution.position],
      value: bestSolution.value
    };
  };

  _findNeighbors = () => {
    for (let i = 0; i < this._initialSolution.length; i++) {
      this._permutateStock(i);
    }
  };

  _permutateStock = currentIndex => {
    const stock = this._initialSolution[currentIndex];
    for (let j = currentIndex + 1; j < this._stocks.length; j++) {
      // Gambiarra do javascript para criar uma nova referência da propriedade da classe
      let neighbor = this._stocks.slice();
      const change = this._stocks[j];

      neighbor[currentIndex] = change;
      neighbor[j] = stock;

      this._neighbors.push(neighbor);
    }
  };
}

module.exports = Neighbors;
