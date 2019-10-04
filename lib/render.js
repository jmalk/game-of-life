function render(boardState, liveGlyph, deadGlyph) {
  // TODO: There are two functions in this function, split them.
  const boardWithGlyphs = boardState.map(row => {
    return row.map(cell => (cell ? liveGlyph : deadGlyph));
  });

  const rowsToStrings = boardWithGlyphs.map(row => row.join(""));
  const boardAsString = rowsToStrings.join("\n");
  return boardAsString;
}

module.exports = render;
