
const sampleInput =
`???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

function parse(input) {
  const rows = input.split("\n");
  const map = rows.map((row) => {
    const parts = row.split(" ");
    return { springs: parts[0], groups: parts[1].split(",").map((x) => Number.parseInt(x, 10)) };
  });

  return map;
}

function collectArrangements(springs, output) {
  for (let i = 0; i < springs.length; i++) {
    if ("?" === springs[i]) {
      collectArrangements(springs.slice(0, i) + "." + springs.slice(i + 1), output);
      collectArrangements(springs.slice(0, i) + "#" + springs.slice(i + 1), output);
      return;
    }
  }

  output.push(springs);
}

function countDamagedGroups(springs) {
  const groups = springs.split(".").filter((x) => x.length > 0).map((x) => x.length);
  return groups;
}

function countArrangements(row) {
  const arrangements = [];
  collectArrangements(row.springs, arrangements);
  let numMatches = 0;
  for (const arrangement of arrangements) {
    const groups = countDamagedGroups(arrangement);
    if (groups.length === row.groups.length && groups.every((value, index) => value === row.groups[index]))
      ++numMatches;
  }

  console.log(`${row.springs} => ${numMatches}`);
  return numMatches;
}

function part1(input) {
  const map = parse(input);
  return map.map((row) => countArrangements(row)).reduce((prev, cur) => prev + cur, 0);
}

console.log(part1(sampleInput));
