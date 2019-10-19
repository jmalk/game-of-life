const tick = require("./lib/tick");
const render = require("./lib/render");
const randomState = require("./lib/randomState");
const defaults = require("./default-config");

const argv = require("yargs").argv;
const tickLength = argv.tickLength || defaults.tickLength;
const liveGlyph = argv.liveGlyph || defaults.liveGlyph;
const deadGlyph = argv.deadGlyph || defaults.deadGlyph;
let state = argv.random ? randomState(20, 20) : defaults.initialState;

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickLength);
