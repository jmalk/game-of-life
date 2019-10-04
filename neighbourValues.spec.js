const neighbourValues = require("./neighbourValues");

test("Returns the values of all neighbours of cell at a coordinate", () => {
  const coordinate = { column: 1, row: 1 };

  // Values would be true/false for Game of Life, but easier to read tests this way.
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // TODO: This locks in order even though we don't care about order.
  const expected = [1, 2, 3, 4, 6, 7, 8, 9];

  expect(neighbourValues(coordinate, grid)).toEqual(expected);
});
