import { calculateTotalWinnings } from "./07";

const testInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
`;

it("should calculate the total winnings", () => {
  expect(calculateTotalWinnings(testInput)).toBe(6440);
});
