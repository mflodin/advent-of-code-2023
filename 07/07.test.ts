import {
  calculateTotalWinnings,
  calculateTotalWinningsWithJokers,
  calculateTypeWithJokers,
  handType,
} from "./07";

const testInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
`;

it("should calculate the total winnings", () => {
  expect(calculateTotalWinnings(testInput)).toBe(6440);
});

it("should calculate the total winnings with jokers", () => {
  expect(calculateTotalWinningsWithJokers(testInput)).toBe(5905);
});

it("should turn a high card + joker into a pair", () => {
  expect(calculateTypeWithJokers(["A", "4", "1", "2", "J"])).toBe(
    handType.ONE_PAIR,
  );
});

it("should turn a pair + joker into three of a kind", () => {
  expect(calculateTypeWithJokers(["A", "A", "1", "2", "J"])).toBe(
    handType.THREE_OF_A_KIND,
  );
});

it("should turn two pair + joker into full house", () => {
  expect(calculateTypeWithJokers(["A", "A", "2", "2", "J"])).toBe(
    handType.FULL_HOUSE,
  );
});

it("should turn three of a kind + joker into four of a kind", () => {
  expect(calculateTypeWithJokers(["A", "A", "A", "2", "J"])).toBe(
    handType.FOUR_OF_A_KIND,
  );
});

it("should turn four of a kind + joker into five of a kind", () => {
  expect(calculateTypeWithJokers(["A", "A", "A", "A", "J"])).toBe(
    handType.FIVE_OF_A_KIND,
  );
});
