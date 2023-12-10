import { sum } from "../utils";
const cardRanking = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

const handType = {
  FIVE_OF_A_KIND: 6,
  FOUR_OF_A_KIND: 5,
  FULL_HOUSE: 4,
  THREE_OF_A_KIND: 3,
  TWO_PAIR: 2,
  ONE_PAIR: 1,
  HIGH_CARD: 0,
};

function calculateType(hand: string[]) {
  let cardMap = {};
  hand.forEach((card) => {
    if (cardMap[card]) {
      cardMap[card] += 1;
    } else {
      cardMap[card] = 1;
    }
  });
  const cardCounts = Object.values(cardMap);

  if (cardCounts.length === 1) {
    return handType.FIVE_OF_A_KIND;
  }

  if (cardCounts.some((count) => count === 4)) {
    return handType.FOUR_OF_A_KIND;
  }

  if (cardCounts.length === 2) {
    return handType.FULL_HOUSE;
  }

  if (cardCounts.some((count) => count === 3)) {
    return handType.THREE_OF_A_KIND;
  }

  if (cardCounts.length === 3) {
    return handType.TWO_PAIR;
  }

  if (cardCounts.length === 4) {
    return handType.ONE_PAIR;
  }

  return handType.HIGH_CARD;
}

function parseInput(input: string) {
  return input
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      // Example line: 32T3K 765
      const [cardString, bidString] = line.split(/\s+/);
      const hand = cardString.split("");
      const type = calculateType(hand);
      return { hand, type, bid: Number(bidString) };
    });
}

export function calculateTotalWinnings(input: string) {
  const hands = parseInput(input);
  hands.sort(byHandStrength);
  //   console.log(hands);
  const bids = hands.map(({ bid }, i) => bid * (i + 1));
  //   console.log(bids);

  return sum(bids);
}

function byHandStrength(a, b) {
  if (a.type !== b.type) {
    return a.type - b.type;
  }

  for (let i = 0; i < a.hand.length; i++) {
    const rankA = cardRanking.indexOf(a.hand[i]);
    const rankB = cardRanking.indexOf(b.hand[i]);

    if (rankA !== rankB) {
      return rankB - rankA;
    }
  }

  return 0;
}
