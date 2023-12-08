const sampleInput1 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const sampleInput2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

// returns {
//   directions: Array<0|1>,
//   nodes: {
//     [key: string]: [string, string],
//   },
// }
function parseMap(input) {
  const lines = input.split("\n").filter((x) => x.length > 0);
  const result = {
    directions: [...lines.shift()].map((x) => x === "L" ? 0 : 1),
    nodes: { },
  };

  for (const line of lines) {
    let parts = line.split("=");
    const node = parts[0].trim();
    parts = parts[1].trim().split(" ");
    const left = parts[0].substring(1, 4);
    const right = parts[1].substring(0, 3);
    result.nodes[node] = [left, right];
  }

  return result;
}

function part1(input) {
  console.log(input);
  const map = parseMap(input);
  console.log(JSON.stringify(map));
  console.log("");
}

part1(sampleInput1);
part1(sampleInput2);
