const render = require("./render");

test("Render takes arrays of booleans and turns them into rows of strings to print", () => {
  const inputState = [
    [false, false, false],
    [true, true, true],
    [false, false, false]
  ];
  const liveGlyph = "X";
  const deadGlyph = "O";

  const expected = "OOO\nXXX\nOOO";

  expect(render(inputState, liveGlyph, deadGlyph)).toEqual(expected);
});
