const tick = require("./tick");

// These tests are testing integration;
// If the rules of birth and death change that will break these too.
// Is there a way to decouple testing ticks from the rules?
// Perhaps with a mock set of rules to be applied in the tick.

test("Tick on an empty board changes nothing", () => {
  const inputState = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  const expected = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  expect(tick(inputState)).toEqual(expected);
});

test("A single cell does not survive a tick", () => {
  const inputState = [
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ];

  const expected = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  expect(tick(inputState)).toEqual(expected);
});
