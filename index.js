const tick = require("./lib/tick");
const render = require("./lib/render");
const randomState = require("./lib/randomState");
const defaults = require("./default-config");

const argv = require("yargs").argv;
const tickLength = argv.tickLength || defaults.tickLength;
const liveGlyph = argv.liveGlyph || defaults.liveGlyph;
const deadGlyph = argv.deadGlyph || defaults.deadGlyph;

// These dimensions are only used for random initial state.
// The default initial state has it's own dimensions, which don't need
// specifying. They just are what they are.
const width = argv.width || defaults.width;
const height = argv.height || defaults.height;

let state = argv.random ? randomState(height, width) : defaults.initialState;

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickLength);
