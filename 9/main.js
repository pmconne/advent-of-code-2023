const sampleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

function parseHistories(input) {
  return input.split("\n").map((line) => line.split(" ").map((word) => Number.parseInt(word, 10)));
}

function computeDelta(series) {
  const delta = [];
  for (let cur = 1; cur < series.length; cur++)
    delta.push(series[cur] - series[cur - 1]);

  return delta;
}

function computeDeltas(history) {
  const deltas = [];
  let cur = history;
  while (cur) {
    const delta = computeDelta(cur);
    if (delta.every((x) => x === 0))
      break;

    deltas.push(delta);
    cur = delta;
  }

  return deltas;
}

function part1(input) {
  const histories = parseHistories(input);
  for (const history of histories) {
    const deltas = computeDeltas(history);
    console.log(history);
    console.log(deltas);
  }
}

console.log(part1(sampleInput));
