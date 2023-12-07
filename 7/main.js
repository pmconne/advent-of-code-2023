
function encodeHand(hand) {
  const remap = { T: "A", J: "B", Q: "C", K: "D", A: "E" };
  return [...hand].map((x) => remap[x] ?? x).join("");
}

// 0: 5 of a kind
// 1: 4 of a kind
// 2: full house
// 3: 3 of a kind
// 4: 2 pair
// 5: 1 pair
// 6: all different
function categorizeHand(hand) {
  const cardCounts = { };
  for (const card of [...hand])
    cardCounts[card] = (cardCounts[card] ?? 0) + 1;

  console.log(JSON.stringify(cardCounts));
  const sorted = Array.from(Object.values(cardCounts)).sort((x, y) => y - x);
  console.log(sorted);

  switch (sorted[0]) {
    case 5: return 0;
    case 4: return 1;
    case 3: return sorted[1] === 2 ? 2 : 3;
    case 2: return sorted[1] == 2 ? 4: 5;
    case 1: return 6;
    default: throw new Error("wtf?");
  }
}

console.log(categorizeHand("33333"));
console.log(categorizeHand("3333A"));
console.log(categorizeHand("333AA"));
console.log(categorizeHand("33AB3"));
console.log(categorizeHand("33BAA"));
console.log(categorizeHand("A33BC"));
console.log(categorizeHand("3ABCD"));
