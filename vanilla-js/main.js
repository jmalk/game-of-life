const board = makeBoard(10, 10);

document.body.appendChild(board);

function makeBoard(width, height) {
  const board = document.createElement("div");
  for (let i = 0; i < height; i++) {
    board.appendChild(makeRow(width));
  }
  return board;
}

function makeRow(width) {
  const row = document.createElement("div");
  for (let i = 0; i < width; i++) {
    row.appendChild(makeCell());
  }
  return row;
}

function makeCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}
