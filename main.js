const Neighbors = require("./neighbors.js");

const values = {
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
const percenteages = [0.3, 0.25, 0.2, 0.15, 0.1];
const initialSolution = ["A", "B", "C", "D", "E"];
const stocks = Object.keys(values);

const neighbors = new Neighbors(stocks, initialSolution, values, percenteages);

const solution = neighbors.getNeighbors();
const bestSolution = neighbors.getBestNeighbor();

console.log(bestSolution);
