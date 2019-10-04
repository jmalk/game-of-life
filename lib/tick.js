const newCellState = require("./newCellState");
const numberOfNeighbours = require("./numberOfNeighbours");

function tick(boardState) {
  let newState = boardState.map((row, y) => {
    return row.map((cell, x) => {
      const neighbours = numberOfNeighbours({ row: y, column: x }, boardState);
      const newCell = newCellState(cell, neighbours);
      return newCell;
    });
  });
  return newState;
}

module.exports = tick;
