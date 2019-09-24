const { newCellState } = require("./gameOfLife");

test("Any live cell with fewer than two live neighbours dies, as if by underpopulation.", () => {
  expect(newCellState(true, 0)).toBe(false);
  expect(newCellState(true, 1)).toBe(false);
});

test("Any live cell with two or three live neighbours lives on to the next generation.", () => {
  expect(newCellState(true, 2)).toBe(true);
  expect(newCellState(true, 3)).toBe(true);
});

test("Any live cell with more than three live neighbours dies, as if by overpopulation.", () => {
  expect(newCellState(true, 4)).toBe(false);
  expect(newCellState(true, 5)).toBe(false);
  expect(newCellState(true, 6)).toBe(false);
  expect(newCellState(true, 7)).toBe(false);
  expect(newCellState(true, 8)).toBe(false);
});

test("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.", () => {
  // Dead with exactly three neighbours is 'born'
  expect(newCellState(false, 3)).toBe(true);

  // Dead with any other number of neighbours stays dead
  expect(newCellState(false, 0)).toBe(false);
  expect(newCellState(false, 1)).toBe(false);
  expect(newCellState(false, 2)).toBe(false);
  expect(newCellState(false, 4)).toBe(false);
  expect(newCellState(false, 5)).toBe(false);
  expect(newCellState(false, 6)).toBe(false);
  expect(newCellState(false, 7)).toBe(false);
  expect(newCellState(false, 8)).toBe(false);
});
