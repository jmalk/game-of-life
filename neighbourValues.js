function neighbourValues(coordinate, grid) {
  let neighbours = [];

  if (grid[coordinate.row - 1] !== undefined) {
    neighbours.push(grid[coordinate.row - 1][coordinate.column - 1]);
    neighbours.push(grid[coordinate.row - 1][coordinate.column]);
    neighbours.push(grid[coordinate.row - 1][coordinate.column + 1]);
  }

  if (grid[coordinate.row] !== undefined) {
    neighbours.push(grid[coordinate.row][coordinate.column - 1]);
    neighbours.push(grid[coordinate.row][coordinate.column + 1]);
  }

  if (grid[coordinate.row + 1] !== undefined) {
    neighbours.push(grid[coordinate.row + 1][coordinate.column - 1]);
    neighbours.push(grid[coordinate.row + 1][coordinate.column]);
    neighbours.push(grid[coordinate.row + 1][coordinate.column + 1]);
  }

  const definedNeighbours = neighbours.filter(
    neighbour => neighbour !== undefined
  );

  return definedNeighbours;
}

module.exports = neighbourValues;
