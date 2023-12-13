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

function computeShortestPathLength(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (dx === 0 && dy === 0)
    return 0;

  const next = { ...start };
  if (Math.abs(dx) > Math.abs(dy))
    next.x += dx > 0 ? 1 : -1;
  else
    next.y += dy > 0 ? 1 : -1;

  return 1 + computeShortestPathLength(next, end);
}

function part1(input) {
  const galaxies = parseGalaxies(input);
  let totalDistance = 0;
  for (let i = 0; i < galaxies.length; i++) {
    for (let j = i + 1; j < galaxies.length; j++) {
      const distance = computeShortestPathLength(galaxies[i], galaxies[j]);
      totalDistance += distance;
      console.log(`${i+1} => ${j+1} = ${distance}`);
    }
  }

  return totalDistance;
}

console.log(part1(sampleInput1));
