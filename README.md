# Conway's Game of Life

Run a game of life in your terminal.

```
npm ci
npm start
npm start -- --help
```

To randomly generate a game on a 20x20 grid, run

```
npm start -- -r -h 20 -w 20
```

```
Options:
  --help            Show help                                          [boolean]
  --version         Show version number                                [boolean]
  --tickLength, -t  Duration to show each evolution of the game for     [number]
  --liveGlyph, -l   Character(s) to show for each live cell             [string]
  --deadGlyph, -d   Character(s) to show for each dead cell             [string]
  --random, -r      Start with a randomly generated state              [boolean]
  --width, -w       How many cells wide to make a random state (see --random)
                                                                        [number]
  --height, -h      How many cells high to make a random state (see --random)
                                                                        [number]
```

To do some TDD: `npm run testwatch`.

To learn about Game of Life, here's the [Wikipedia page](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).
