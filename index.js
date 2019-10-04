const tick = require("./lib/tick");
const render = require("./lib/render");
const tickDuration = 1000;
const liveGlyph = "██";
const deadGlyph = "  ";

let state = [
  [true, false, false, true, true],
  [true, false, false, true, true],
  [true, false, true, false, true],
  [true, false, false, true, true],
  [true, false, false, true, true]
];

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickDuration);
