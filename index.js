const tick = require("./tick");
const tickDuration = 1000;

let state = [[false, false, false], [true, true, true], [false, false, false]];

setInterval(function() {
  console.clear();
  state = tick(state);
  console.log(state);
}, tickDuration);
