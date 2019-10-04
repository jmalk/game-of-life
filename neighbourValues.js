function numberOfNeighbours(coordinate, grid) {
  const neighbours = [
    grid[coordinate.row - 1][coordinate.column - 1],
    grid[coordinate.row - 1][coordinate.column],
    grid[coordinate.row - 1][coordinate.column + 1],
    grid[coordinate.row][coordinate.column - 1],
    grid[coordinate.row][coordinate.column + 1],
    grid[coordinate.row + 1][coordinate.column - 1],
    grid[coordinate.row + 1][coordinate.column],
    grid[coordinate.row + 1][coordinate.column + 1]
  ];

  return neighbours;
}

module.exports = numberOfNeighbours;
