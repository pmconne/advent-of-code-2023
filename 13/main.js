
const sampleInput =
`#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`;

// each pattern = { rows: string[], column: string[] }
function parsePatterns(input) {
  const patterns = input.split("\n\n").map((pattern) => { return { rows: pattern.split("\n") }; });
  for (const pattern of patterns) {
    pattern.columns = [];
    for (let i = 0; i < pattern.rows[0].length; i++)
      pattern.columns.push(pattern.rows.map((row) => row[i]).join(""));

    // console.log(`${pattern.rows.length}x${pattern.rows[0].length} ${pattern.columns.length}x${pattern.columns[0].length}`);
  }

  return patterns;
}

function findLineOfReflection(rows) {
  for (let i = 1; i < rows.length; i++) {
    let a = rows[i - 1];
    let b = rows[i];
    if (a !== b)
      continue;

    let j = 1;
    while (true) {
      if (i - j === 0 || i + j === rows.length)
        return i;

      a = rows[i - 1 - j];
      b = rows[i + j];
      if (a !== b)
        break;

      j++;
    }
  }

  return undefined;
}

function part1(input) {
  const patterns = parsePatterns(input);
  // console.log(patterns);
  let total = 0;
  for (const pattern of patterns) {
    let line = findLineOfReflection(pattern.columns);
    if (undefined !== line) {
      total += line;
    } else {
      line = findLineOfReflection(pattern.rows);
      if (undefined === line)
        throw new Error("No line of reflection");

      total += line * 100;
    }
  }
    
  return total;
}

console.log(part1(sampleInput));
