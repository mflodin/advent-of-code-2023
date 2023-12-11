import { partOne, partTwo } from "./solution";

const testInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45
`;

it("should sum the extrapolated values", () => {
  expect(partOne(testInput)).toBe(114);
});

it("should sum the backwards extrapolated values", () => {
  expect(partTwo(testInput)).toBe(2);
});
