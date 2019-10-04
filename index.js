const tick = require("./tick");
const render = require("./render");
const tickDuration = 1000;
const liveGlyph = "•";
const deadGlyph = "_";

let state = [[false, false, false], [true, true, true], [false, false, false]];

setInterval(function() {
  state = tick(state);
  console.clear();
  console.log(render(state, liveGlyph, deadGlyph));
}, tickDuration);