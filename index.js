const tick = require("./lib/tick");
const render = require("./lib/render");
const randomState = require("./lib/randomState");

const tickDuration = 1000;
const liveGlyph = "██";
const deadGlyph = "  ";

const args = process.argv.slice(2);
const randomStart = args.includes("random");

let defaultState = [
  [true, false, false, true, true],
  [true, false, false, true, true],
  [true, false, true, false, true],
  [true, false, false, true, true],
  [true, false, false, true, true]
];

let state = randomStart ? randomState(20, 20) : defaultState;

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickDuration);
