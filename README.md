# Conway's Game of Life

First, run `npm install`.

To start a Game of Life in the terminal: `npm run start`.

See what parameters you can change: `npm run start -- --help`.

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
