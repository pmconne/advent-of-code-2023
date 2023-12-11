const sampleInput1 = `.....
.S-7.
.|.|.
.L-J.
.....`;

const sampleInput2 = `-L|F7
7S-7|
L|7||
-L-J|
L|-JF`;

const sampleInput3 = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const sampleInput4 = `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`;

const deltas = {
  N: [0, -1],
  S: [0, 1],
  E: [1, 0],
  W: [-1, 0],
};

function getTileCoords(start, direction) {
  const delta = deltas[direction];
  return { x: start.x + delta[0], y: start.y + delta[1] };
}

function getTile(rows, coords, direction) {
  if (direction)
    coords = getTileCoords(coords, direction);

  return rows[coords.y][coords.x];
}

function getDirections(tile) {
  const directions = {
    "|": ["N", "S"],
    "-": ["E", "W"],
    J: ["W", "N"],
    L: ["E", "N"],
    "7": ["W", "S"],
    F: ["E", "S"],
  };

  return directions[tile] ?? [];
}

function getExitDirection(tile, entranceDir) {
  switch (tile) {
    case "|": return entranceDir === "S" ? "S" : "N";
    case "-": return entranceDir === "W" ? "W" : "E";
    case "J": return entranceDir === "E" ? "N" : "W";
    case "L": return entranceDir === "W" ? "N" : "E";
    case "7": return entranceDir === "E" ? "S" : "W";
    case "F": return entranceDir === "W" ? "S" : "E";
    default: throw new Error(`Unhandled entrance direction ${tile}`);
  }
}

function part1(input) {
  const rows = input.split("\n");
  const start = { };
  for (start.y = 0; start.y < rows.length; start.y++)
    if (-1 !== (start.x = rows[start.y].indexOf("S")))
      break;

  if (-1 === start.x || -1 === start.y)
    throw new Error("no starting tile");

  let neighbors = [];
  if (getDirections(getTile(rows, start, "N")).includes("S"))
    neighbors.push("N");
  if (getDirections(getTile(rows, start, "S")).includes("N"))
    neighbors.push("S");
  if (getDirections(getTile(rows, start, "E")).includes("W"))
    neighbors.push("E");
  if (getDirections(getTile(rows, start, "W")).includes("E"))
    neighbors.push("W");

  if (2 !== neighbors.length)
    throw new Error("Starting tile should have exactly two connecting pipes");

  console.log(`neighbors: ${neighbors}`);

  let dist = 0;
  let dir = neighbors[0];
  let coords = start;
  while (true) {
    dist++;
    coords = getTileCoords(coords, dir);
    const tile = getTile(rows, coords);
    if (tile === "S")
      break;

    dir = getExitDirection(tile, dir);
    console.log(`${dist} (${coords.x},${coords.y}) ${tile} => ${dir}`);
  }

  return dist / 2;
}


// expect 4, 4, 8, 8
console.log(part1(sampleInput1));
console.log(part1(sampleInput2));
console.log(part1(sampleInput3));
console.log(part1(sampleInput4));
