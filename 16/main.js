
// Backslashes in input, how fun...
const sampleInput = String.raw
`.|...\....
|.-.\.....
.....|-...
........|.
..........
.........\
..../.\\..
.-.-/..|..
.|....-|.\
..//.|....`;

function parseMap(input) {
  return input.split("\n").map((row) => {
    return Array.from(row).map((symbol) => {
      return { symbol, visitedFrom: [] };
    });
  });
}

function add(vec1, vec2) {
  return {
    x: vec1.x + vec2.x,
    y: vec1.y + vec2.y,
  };
}

function tracePath(map, pos, dir, beamGeneration = 0) {
  while (true) {
    const row = map[pos.y];
    const tile = row ? row[pos.x] : undefined;
    if (!tile || undefined !== tile.visitedFrom.find((v) => v.x === dir.x && v.y === dir.y))
      return;
    
    tile.hot = true;
    tile.visitedFrom.push({ ...dir });

    console.log(`${beamGeneration} ${tile.symbol} p=(${pos.x},${pos.y}) d=(${dir.x},${dir.y})`);
    switch (tile.symbol) {
      case ".":
        pos = add(pos, dir);
        break;
      case "\\":
      case "/":
        const tmp = dir.x;
        dir.x = dir.y;
        dir.y = tmp;
        if ("/" === tile.symbol) {
          dir.x *= -1;
          dir.y *= -1;
        }

        pos = add(pos, dir);
        break;
      case "-": {
        if (dir.x !== 0) {
          pos = add(pos, dir);
          break;
        }

        const dir0 = { y: 0, x: -1 };
        const dir1 = { y: 0, x: 1 };
        tracePath(map, add(pos, dir0), dir0, beamGeneration + 1);
        tracePath(map, add(pos, dir1), dir1, beamGeneration + 1);
        return;
      }
      case "|": {
        if (dir.y !== 0) {
          pos = add(pos, dir);
          break;
        }

        const dir0 = { x: 0, y: -1 };
        const dir1 = { x: 0, y: 1 };
        tracePath(map, add(pos, dir0), dir0, beamGeneration + 1);
        tracePath(map, add(pos, dir1), dir1, beamGeneration + 1);
        return;
      }
      default:
        throw new Error(`Unexpected symbol ${tile.symbol}`);
    }
  }
}

function prettify(map) {
  return map.map((row) => row.map((tile) => tile.hot ? "#" : tile.symbol).join("")).join("\n");
}

function part1(input) {
  const map = parseMap(input);
  tracePath(map, { x: 0, y: 0 }, { x: 1, y: 0 });
  console.log(prettify(map));
  return map.reduce((accum, row) => row.reduce((accum, tile) => accum + tile.hot ? 1 : 0, accum), 0);
}

console.log(part1(sampleInput));