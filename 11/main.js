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

function parseGalaxies(input) {
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

  let galaxies = [];
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++)
      if (row[x] === "#")
        galaxies.push({ x, y });
  }

  return galaxies;
}

function part1(input) {
  const galaxies = parseGalaxies(input);
  console.log(galaxies);
}

console.log(part1(sampleInput1));
