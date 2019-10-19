const tick = require("./lib/tick");
const render = require("./lib/render");
const randomState = require("./lib/randomState");
const {
  initialState,
  tickLength,
  liveGlyph,
  deadGlyph
} = require("./default-config");

const argv = require("yargs").argv;

const randomStart = argv.random;

let state = randomStart ? randomState(20, 20) : initialState;

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickLength);
