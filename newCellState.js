function newCellState(isCurrentlyAlive, numberOfNeighbours) {
  if (!isCurrentlyAlive) {
    return numberOfNeighbours === 3;
  }
  return numberOfNeighbours >= 2 && numberOfNeighbours < 4;
}

module.exports = newCellState;
