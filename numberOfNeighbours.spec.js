const numberOfNeighbours = require("./numberOfNeighbours");

test("Number of neighbours returns 0 when the cell at the target coordinate has no neighbours.", () => {
  const coordinate = { column: 1, row: 1 };
  const grid = [
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ];

  expect(numberOfNeighbours(coordinate, grid)).toBe(0);
});

test("Number of neighbours returns 1 when the cell at the target coordinate has one neighbour.", () => {
  const coordinate = { column: 1, row: 1 };
  const grid = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ];

  expect(numberOfNeighbours(coordinate, grid)).toBe(1);

  // const gridTwo = [
  //   [false, true, false],
  //   [false, true, false],
  //   [false, false, false]
  // ];

  // expect(numberOfNeighbours(coordinate, gridTwo)).toBe(1);

  // const gridThree = [
  //   [false, false, false],
  //   [false, true, false],
  //   [false, true, false]
  // ];

  // expect(numberOfNeighbours(coordinate, gridThree)).toBe(1);
});
