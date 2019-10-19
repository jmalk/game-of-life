function randomBoolean() {
  return !!Math.floor(Math.random() * 2);
}

function randomState(height, width) {
  let ret = [];

  for (let i = 0; i < height; i++) {
    ret[i] = [];
    for (let j = 0; j < width; j++) {
      ret[i].push(randomBoolean());
    }
  }

  return ret;
}

module.exports = randomState;
