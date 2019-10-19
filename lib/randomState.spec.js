const randomState = require("./randomState");

const desiredHeight = 3;
const expectedHeight = 3;
const rowIndices = [0, 1, 2];
const desiredWidth = 4;
const expectedWidth = 4;
const columnIndices = [0, 1, 2, 3];

let result;

beforeEach(() => {
  result = randomState(desiredHeight, desiredWidth);
});

test("Random board has requested number of rows", () => {
  expect(result.length).toBe(expectedHeight);
});

describe("All rows contain the right number of columns", () => {
  // TODO: Remove coupling between the array here and the height of the table
  test.each(rowIndices)("Row %i is the expected width", i => {
    expect(result[i].length).toBe(expectedWidth);
  });
});

describe.each(rowIndices)("Row %i", row => {
  test.each(columnIndices)("Column %i", column => {
    expect(typeof result[row][column]).toBe("boolean");
  });
});
