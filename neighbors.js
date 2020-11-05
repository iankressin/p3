class Neighbors {
  constructor(values, percenteages) {
    this._values = values;
    this._percentages = percenteages;
  }

  solution = currentSolution => {
    const neighbors = this._findNeighbors(currentSolution);
    const currentBest = this._getBestNeighbor(neighbors, currentSolution);

    if (currentBest.position !== -1) {
      return currentBest;
    } else {
      this.solution(currentBest.stocks);
    }
  };

  _findNeighbors = initialSolution => {
    const neighbors = [];
    for (let i = 0; i < this._percentages.length; i++) {
      const permutations = this._permutateStock(
        i,
        initialSolution[i],
        initialSolution
      );
      neighbors.push(...permutations);
    }

    return neighbors;
  };

  _permutateStock = (currentIndex, currentStock, initialSolution) => {
    const permutations = [];

    for (let j = currentIndex + 1; j < initialSolution.length; j++) {
      const change = initialSolution[j];

      let neighbor = initialSolution.slice(); // Cria uma nova copia do array
      neighbor[currentIndex] = change;
      neighbor[j] = currentStock;

      permutations.push(neighbor);
    }

    return permutations;
  };

  _getBestNeighbor = (neighbors, currentBest) => {
    // Se position === -1, então nenhum vizinho possui uma solução melhor
    let bestSolution = {
      position: -1,
      stocks: currentBest,
      profit: this._calculateProfit(currentBest)
    };

    neighbors.forEach((neighbor, index) => {
      const profit = this._calculateProfit(neighbor);

      if (profit > bestSolution.profit) {
        bestSolution.position = index;
        bestSolution.stocks = neighbors[bestSolution.position];
        bestSolution.profit = profit;
      }
    });

    return bestSolution;
  };

  _calculateProfit = stocks => {
    let total = 0;

    for (let i = 0; i < this._percentages.length; i++) {
      total += this._values[stocks[i]] * this._percentages[i];
    }

    return total;
  };
}

module.exports = Neighbors;
