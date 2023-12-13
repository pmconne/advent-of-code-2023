const sampleInput1 =
`...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

function createUniverse(input) {
  console.log(`${input}\n`);
  
  const grid = input.split("\n").map((row) => Array.from(row));
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    if (row.every((x) => x === "."))
      grid.splice(y++, 0, [...row]);
  }

  for (let x = 0; x < grid[0].length; x++) {
    if (grid.every((row) => row[x] === ".")) {
      for (const row of grid)
        row.splice(x, 0, ".");

      x++;
    }
  }

  return grid;
}

function part1(input) {
  const universe = createUniverse(input);
  console.log(universe.map((row) => row.join("")).join("\n"));
}

console.log(part1(sampleInput1));
