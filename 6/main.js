const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;

const realInput = `Time:        44     80     65     72
Distance:   208   1581   1050   1102`;

function parse(input) {
  //console.log(input);
  const lines = input.split("\n");
  //console.log(lines);
  const times = lines[0].split(" ").filter((x) => x.length > 0).map((x) => Number.parseInt(x.trim(), 10));
  const records = lines[1].split(" ").filter((x) => x.length > 0).map((x) => Number.parseInt(x.trim(), 10));
  const races = [];
  for (let i = 1; i < times.length; i++)
    races.push({ time: times[i], record: records[i] });

  return races;
}

function computeMinAndMaxHoldTime(race) {
  let min = 0;
  for (; min < race.time; min++) {
    const distance = min * (race.time - min);
    if (distance > race.record)
      break;
  }

  let max = min;
  while (max < race.time) {
    const n = max + 1;
    const distance = n * (race.time - n);
    if (distance <= race.record)
      break;

    max = n;
  }

  return { min, max };
}

function part1(input) {
  const races = parse(input);
  console.log(JSON.stringify(races, null, "\t"));
  let score = 1;
  for (const race of races) {
    const bounds = computeMinAndMaxHoldTime(race);
    const margin = bounds.max + 1 - bounds.min;
    console.log(`time=${race.time} record=${race.record} min=${bounds.min} max=${bounds.max} margin=${margin}`);
    score *= margin;
  }

  return score;
}

console.log(part1(sampleInput));
console.log(part1(realInput));
