
// Remap so that lexical sort puts the highest-valued cards first
function encodeHand(hand) {
  const remap = {
    A: "A", K: "B", Q: "C", J: "D", T: "E",
    9: "F", 8: "G", 7: "H", 6: "I", 5: "J", 4: "K", 3: "L", 2: "M",
  };
  return [...hand].map((x) => remap[x]).join("");
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
