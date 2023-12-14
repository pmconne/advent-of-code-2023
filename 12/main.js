
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

function part1(input) {
  const map = parse(input);
  console.log(map);
  return 0;
}

console.log(part1(sampleInput));
