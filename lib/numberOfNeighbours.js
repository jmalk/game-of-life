const neighbourValues = require("./neighbourValues");

function numberOfNeighbours(coordinate, grid) {
  const neighbours = neighbourValues(coordinate, grid);
  const liveNeighbours = neighbours.filter(n => !!n);
  return liveNeighbours.length;
}

module.exports = numberOfNeighbours;
