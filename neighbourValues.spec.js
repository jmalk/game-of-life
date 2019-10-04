const neighbourValues = require("./neighbourValues");

test("Returns the values of all neighbours of cell at a coordinate", () => {
  const coordinate = { column: 1, row: 1 };

  // Values would be true/false for Game of Life, but easier to read tests this way.
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // TODO: This locks in order even though we don't care about order.
  const expected = [1, 2, 3, 4, 6, 7, 8, 9];

  expect(neighbourValues(coordinate, grid)).toEqual(expected);
});

test("Returns the values of neighbours for a corner cell", () => {
  const coordinate = { column: 0, row: 0 };

  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  const expected = [2, 4, 5];

  expect(neighbourValues(coordinate, grid)).toEqual(expected);
});

test("Still works if the board is bigger than 3x3", () => {
  const coordinate = { column: 2, row: 1 };

  // Row labels mainly to stop prettier making this one long line
  const grid = [
    // Row zero
    [1, 2, 3, 4],
    // Row one
    [5, 6, 7, 8],
    // Row two
    [9, 10, 11, 12],
    // Row three
    [13, 14, 15, 16]
  ];

  expected = [2, 3, 4, 6, 8, 10, 11, 12];

  expect(neighbourValues(coordinate, grid)).toEqual(expected);
});
