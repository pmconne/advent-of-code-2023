
const sampleInput =
`O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

const realInput =
`..O.O....O...O...O...O.#O#.#.#O#O..#.#O....O...#..#O#...............#O..#.#..O..O.##.#O#..O...#.....
.#O.#.#O.##..O..#.......###...#.O#.##....#O#O.OO..##...#..O.O...#O.......O.O.OO##...#.##OOO.O.#..#.O
#.##..O.O.....#.OO....O#..OOO..OO..O....#..#...O..#..O..O.O#O.....O...O.#.O.O......O..OO..O...O...OO
O.....#.O...#....#.#O.#.O.........O...O..#.O.O...O#..O.OO......O.#O......O#.OO.#.##..OO.O#O.O.#.....
#O...#..........#..#......O..O..#......#O..OO...#O.O.............O..O.......#....O.OO#..OO#....O#.O.
##O.O.....OOO..OO..O...O.OO...#.O.O...#..O...OO...O..O.#OO.#........O........O.O....O...O...........
O..O...#.O.##.....OO.O#.......OO...OOO.#..#OO....#..O#...O.....O..O.#####..........O#..........O#...
OO......OO.O...#.#......#.#....OO###...O####OO..#...........##..O#O...#.........#..#....#OO.O.#....O
.##..O.#...O.#.O#..#.O.#...OO##O.....O.O.......O...........##...O....#OOO.....#...O.....O.O##.O###OO
O..O...O.O...O#O.OOOO.O.O......O#...O...#.#.......O#.O...#..#O.....#........O#...O..O..O.#.#.#O#OOO.
O#......#.#.O...OO#..#.#.#.O#.O#.......O#...O.O..O..........O........#.#O....#..OO..#..O..#.O..##...
OOO.#.OO.O..OO.OO..O....O...OO..#..#OO.O...#....#.OO.#..O.O#.O.#OO.O.....O......#.O..O#O...OO##.#...
.O#O..#OOOO#.O##.........OO#O#.#.O#..#..OO.....O.##.#..O.O....#...#..O....O.#.O#..O....O.O.....O.O..
..O#.OO..........#OO...O..O...#.####.#...#.......#####O.#.##..#O...O...O.....O......#.O.....O.......
.O........#.O.###OO..............#.......O...O.....OO#...#.O...#.O.O.O.O.......#.O..#O....##..#..O.#
.#.O#..#....O...#..O.#.O....O#......#...#...OO.O....#.O.O..#.......##OO..O.....OO...OO#...OO...###..
.#O.#.#...O.#..#.......#....#O.O.#....OO.O##.O.#..OO.O......##.....OO...O#..O.O.OO.#.O.O....#.......
O..O.OO.O.....O..O..#....O.......O.##O#...O.....O#OO#.....O..O.....O..#..O...............##.....#O..
....O..#OO#..#.#.O.#.#.OOO.OO#....OOO#....#.........O..O.#....#....OO.O.##...##O.O..#.O..#....O..O#.
#O.O.O.O.#O##...O..O##.O#....#......O...#.O..O.O....O.##O....O..#...O....##.#O.O#O...#.O#.#...O..O..
#..O.O..O##.O..O....O..OO#.OO........O#....O....O............O#.#.OO..#.#O.#....##.....OO..O...O...O
.O..OO.OOOO.#.#.O.#.O..O##....##O..##..O.#O.O#.#...#....#.....#OO..O#O......O........O...O........#.
...OO.O###.O.###.......#O#..O..#.#O...O#...O...O#..##..OO.O...O......O....#.#....OO.O.O#...OO...##O#
#..OO.....#.O.OOO.#...O.......O......#O...##...#O##..OO.#.O.........O.O...O...O..##...O..#..O#.....O
...O.#.#.O....##O...#O#...O....O..OO..#O.O....#O..#...O.OO.....OO.OOO.O.O.#.....OO#O.##..#..#.O#...O
..O#.O......##O#.OO..........#......#.OOOOO...#.O##......O...O.#OOO.O#O..#..O....#...O....#O..O.O...
...#...##O.O......#O...O#O...##OO.O......O..#O#..O.....#.OOO..#.O.O#..###.O....O.O.OOO....OO#O....#.
O#O..##..#O.#..........OO...O.O..###.O..O#.O.O.O.#.#.O.#.O...O.OO....#.#.....##..OOO#..OO......O#.##
O..O#O..#.#O.OO...#.OO.OO.##.O....#.....##O..O#..O.O.OO##.O#O.O#.O.#O..O.#.O....O#.#.O....#..OO....O
.O..##O#OO...O...O.....O....O.O.O........O........##O#OO.O.OO.O.##...##......O....#.O.O....O#.O...#.
.O.......#.#...O.....O...#........O#....O#.OO....#...O#.#O...#..##.#....##.OOO.#......#..O...OOO.#.O
......#O..##........##O#.......###.....O..OOO.......#.OO.#.....#...#.##.#..O......#O...O.O..O.....O.
.OOO#..#.....#.....#......O#O#....O.OOOO###.....O....OO.#O#...#.OO......O.O........#OO#.O..O........
#O#.#.OOO###...O..OO.O...#.#........#.#.#......OO#.....O...O....O.#....#..#..##.#.OOO#....#.#.O....O
#O#.#.##....#.O....##.....##.O.O.OO#.....#O...O#.....#..O.....#.#......#O..O...O.....#..O....#...#..
.O.......#.....O.O#.#.O.....##..#OO.#OO.O.O.#O.O.#O##OO.#..#O.O.....#......O#........#.#O...#.#.O...
#..O.##......O...O.O#..OO#...#..O..#OO.#O.O#....O#..#....O....O..#O..#.#......O...#..OO#....O.O....O
.#......#.#......#O............#OOO......#.OO..O#.O#.......#....#....##.O.......#...O.O#...O...#O..#
O...OO..O#......#.O........#.#....OO.#......O....O##..........O#..#....#O...O#.O..#....OOO..O....#O#
O...O...#.O.O.O.OOO..OO.##.O....O......#.#O...#...O...O#....O.#...#.......#.##....#.#.O.OOO..O...O.O
.#.O#...##O#.O..O....O.#.....#O.....#.O.....#...O#.O.O..#....O#OO..OOO..#O.OO.O...OO.OOO.#...##.O..#
........O#O#...#..OOO#...#O.O#..#.O.....O.OO.O#O..##.O.....O.#OO.........O.#OO.....OOO.....O.O.O.#..
.#....OO.#............O#..#.....OO....O.O.#..#...OO..#....#...#.#O....##..O....#O..#OO..O.....O....#
O..#.....O.O...O........O....#.#O...#......O....O......O......O..#.OO......#O...#..O.##......O#....O
...O.###..#...#.#..O.#.............#OO.#...#...##.#.O#.........O..##.##.#....O.....O.......O..O...O.
.O##....O...#....OO.##.#...O......OO..........#.O.......OO#.O.#..#.OO...#......OO#O.......#..#...#..
.#.O..#..#.OO.....O..O#.O..O....#.....O#O.OO.#.OOOO.##.O..O...O.O..#....O.....O.#...O.#...#.....O..#
.#.#O..#....#O..O.OO..O.....O....###..#...O.#....O#O...#....##...##.O.##..O...OOO.#..#O.....OOO#.O..
O..#O....#..............O.O.O..O.O.#..........O.....O#.O#.O..O.#.......O.OO...#.....##.#..O.#.#.#..#
#O..O..#.O.O..O#.OO....#O..#.....O..#..OO.#..##O.........#...O.#.....#..#.OO..O.##...#...#O.#O##..OO
#.........O...#..O.##O......#.O..##..#O..........#.#O#O........##....O....O....#..#...#O......O#.O.#
#.#..O.O.O.#.OO#.#..O....O#O.O.O.O..#....#..#.....#..O......O#...O.O.O....OOO##O.###.....O.O#.#..#.#
O...#OO..#...O..O..#..OOO.#....#..#.##...#..#....OO.O.O............#.#O#O#OO.OO...O.##O.##O#O....OOO
O..O.......O.#OO.O#........O###...O........O..#.O.OO.O...OO..OO.#O.O.#O.OO.O....OOO#.#.O.......O.O.O
#O..#O.......#..##.#....O.O#O#O.O#OO..O...O.O.O.OO.#..O#.......OO.O.##.O....O...#O......O....#O.O...
#..O........#..#..#O.OO##..OO...#..O#.O##....#.#.#.#...#....O.....O.....O...OO#O...#..O....#..##..O.
..O.....O.OOO#O....#.#.......#.OO....O.....OO#..O.O#.#.O...#...#..#.#OO..O.....#.O.....#...O...#.O#.
#.....#.....#O.#.O#O.O....#.....O#O#O#OO...O.....O#.........O..#....O.....O.......O.O#OO##....O#....
OO....#..O.#.O#....O#.O..#.#....#.#..#...#....#..OO......OO.O..###O....OOO.O..OOO#.#.O...#.OO.#..O#.
.##.#O...#......####......#...#..#.O.......O#..#.#...O#...O..O.........O##.#....O#OO..OO......O..##.
...O..#.O.O..#O..#O............#O#O..#.#...O..#......O..O...O##....#.#.............O..#...#......#..
#.#..#...##....#O....O.O.O.....#...#O..O.#..#.#O.O.#OOO.....#..#..#OO..O#........#.#.O..........O...
...#.O#......#...O...OO..#.#O.O..###O#O#...#.#..#....O#..O.#OO...#...O.##O...#.O..O#..#.O.#..#..OO..
...#....O...#.#.......OO#..OO.O..####.....##O.#...#.O....O......#......O#...#..#.O..O.OOO.O......#..
#..##..O..O....O..#O.O.O..O#.#.#..O..#.#...O.......OO#.OO...O..#.O#..O...OOO..O...O#..O....#....O...
.#.#...#.O.O..O..#..O........O....O#.#...O.O...#...O.O##O....#.#.O...#.O..#OOO..O.....#.O....##..##.
.......#OO..O..#.#....O.....O#.OO.O....O.........##.....OO......O...O#.....##..O#...#....OOO...##...
..#O...O.....O.O.##O..O.....O...O#O......#.........O..OO.....O.#.#OO..#....O.#...O..#.....#..O...O#.
.....O.O...#O.##.#O#..#.OO#.O..#O.O.#.OO.#OO...OO#O.##.O.#.O.##.#..#.#.............O.O.#.O..O..#...#
...O.#.....#.#.#..OO.O.O..#.O.....#.##......OO.#....OO.#.#O..#.O.....#.....##..O.#O#..OO.........#..
.O.#O.........#O....O.O....#.O.O..#.O#O..O.#.OO......O#....O#O.O.............O..#...O.OO#...O..O...O
.......#...#....#.....O......O.OO.O....O#.O...#....#...........#.O#..#..OOO.#O..#.O...O#..##.....O.#
........#....##...O..O.............#.O...O..#..#...O.##.#...O...#...#.O..#....###.#O.#.O.O..O....O.O
O.#....OOO..O.O.##.........O...O...OO#.....#O..OO..#.....#O..O#.O#.#O.#OO#...O#O....O...O...O......O
.O..........##.O.#..OO....#.O..........O.#....#.O...O.O.....OO.#..O...O....##...#OO..#...OO#.O#O.#..
O......O#O....#.##O.##OO.#....OO.....O.O.OO..O#.....#..OO.O..OO......#..O.OO..OO..O...#..O...#O.....
.###....O.....#O..#O....O.....#.OO..##....#.....O.#......#.....O##O...OO...O##O#....O#.........O#O#.
OO.#O##....#O.#...O........OO.....#..O...O..#.O#.#.#..OO#O.##.....#.....O.O....OO.....O.O....#...O#.
....O#OO..OO......#O.....#.O...OOO..OOO.#O....O..#.#.###..O..O..O#..........#..OOO...OO.O#O.#.#..#O.
O....#O.O.O.......#......O.......O.O...O...O....##O..O.OO#O....O.#............O..#O.##...O..........
O.......O....O##....#......OO..##.O....#O..##..O......O.O.......O#.#...###..#.....##..##.....O......
.O..O###O.........#.O.....OO..O.#.O.O...#O#.O.O..##..O..O...O..#...#O.#..#..O..#....O..O.O#.O#.O.OO.
..#.........O#..#OO......O.O#..O#.........O.#OOOO.....O..#O..#..#..OO.OO...OO...#..OO#...##..O...#..
..OO..#....O..O.O..OOO..#O#O##..#...O#O...#....O..O..#.O.OO..O.O......#O........#.....O.#...O#O...OO
..#......O##O.....OO...##......O...OO#....O..#OO#..#.O..O.#.......#..O.#.O#....#....#.OOO.#.....#...
..#.O.O.O.#....#.#.O.##.....#.O#.OO..OOO..O......O.........#....O..#..O.###.#..##O#...O#.O.O.O.#...#
#..O..O..#.#.O...#O#..O.....#O.O.....#............O..#.O#.....O....O..O.OO.O..#....OO.....###..#....
.O.O.#.....O#O##...#..#...#........#..O#.....O..#..O...O.#.....OO..O.#.##....OO#.#.....O..O....O.O..
........O..O.#..O#O...#........O.#O#...O#O##......O..#....#...O...O..O.O..##.OO....#.....#.O...#O...
.O.O..##O..O...OO...O..O.O#O...OOOO..O....O........O#...O..O#....O...O#OOO.O##....##..O.....OO.O#..#
.....#O.#..O......O...OO.O..#..#O....O....O....O#....O.O..O...#O.#....##......##..#..#O..#..OO...O.O
...#O.#.#..OO..O..........##..O#.#OO.......#...#O###.#O..O#O...O...#..O....O#O#O.#.....O.O.O#...O..#
##..#......O##..O.#...O....OOOO.....#....O.#...#.........#..O.#..O.....#...O...O.......O#......O#O..
.....O......O..##O#.....#O#...#O....O..O..O.......O#O##....OOOO..##...O.O#...OOOO...#OOOO##O..##....
#...O.O.O#..OOO...#O..O##.....#.#..#O...O###OO...O.OO.......O.O..#...###...........O..#....#.##...OO
O.OO......#....#........O#.#.#O.....#..........O#.#..##O...#..OO...#OO.#..O.#O..#........O.O..O#.O##
#.##...O.#.....OO...O..#.#.O.O.O.#.#O...#....#.#......#...#...#.O.#O#..#..O...#.OOO..#OO##..OO...#.#
O.....#.....#.O.O...O#.#...OO..OOO..O..O.O.#...O..#....O.#..OOO.O.O#O..OO#O..OO.O...O.........##.O..
..#....O........#.#O....O..#....O.###OO..#.#O.O..O.....###..OO.O..##...#.#..#O..O.....O.#.#O...O....
.O.OO..O#........O#..O..##...#O.......#..#.....#.........OO..#.O..OO#O..#....#OO......O............O`;

function parseGrid(input) {
  return input.split("\n").map((x) => Array.from(x));
}

function tiltNorth(grid) {
  for (let x = 0; x < grid[0].length; x++) {
    let blockadePos = -1;
    for (let y = 0; y < grid.length; y++) {
      switch (grid[y][x]) {
        case "#":
          blockadePos = y;
          break;
        case "O":
          if (y > blockadePos + 1) {
            grid[y][x] = ".";
            grid[blockadePos + 1][x] = "O";
            ++blockadePos;
          } else {
            blockadePos = y;
          }
        break;
        case ".": break;
        default: throw new Error("unexpected grid character");
      }
    }
  }
}

function computeNorthLoad(grid) {
  let totalLoad = 0;
  for (let y = 0; y < grid.length; y++)
    for (let x = 0; x < grid[y].length; x++)
      if ("O" === grid[y][x])
        totalLoad += grid.length - y;

  return totalLoad;
}

function rotateClockwise(grid) {
  return grid.map((row, y) => row.map((_, x) => grid[row.length - x - 1][y]));
}

function spin(grid) {
  for (let i = 0; i < 4; i++) {
    tiltNorth(grid);
    grid = rotateClockwise(grid);
  }

  return grid;
}

function stringifyGrid(grid) {
  return grid.map((x) => x.join("")).join("\n");
}

function part1(input) {
  const grid = parseGrid(input);
  console.log(stringifyGrid(grid));
  console.log("  =>");
  tiltNorth(grid);
  console.log(stringifyGrid(grid));
  return computeNorthLoad(grid);
}

function part2(input) {
  let grid = parseGrid(input);
  const gridToSpinCount = new Map();
  let cycle;
  for (let spinCount = 1; spinCount <= 1000000000; spinCount++) {
    grid = spin(grid);
    const str = stringifyGrid(grid);
    const prevSpinCount = gridToSpinCount.get(str);
    // console.log(`${spinCount}\n${str}`);
    if (undefined !== prevSpinCount) {
      cycle = { start: prevSpinCount, length: spinCount - prevSpinCount };
      break;
    }

    gridToSpinCount.set(str, spinCount);
  }

  if (!cycle)
    throw new Error("No cycles detected and you have way too much patience.");

  console.log(`Cycle detected: ${JSON.stringify(cycle)}`);

  let nSpins = 1000000000 - cycle.start;
  nSpins = nSpins % cycle.length;
  console.log(`Performing ${nSpins} additional spins`);
  for (let i = 0; i < nSpins; i++)
    grid = spin(grid);

  return computeNorthLoad(grid);
}

// console.log(part1(sampleInput));
// console.log(part1(realInput));

console.log(part2(sampleInput));
console.log(part2(realInput));
