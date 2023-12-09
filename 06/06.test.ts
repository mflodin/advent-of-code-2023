import {
  multiplyNumberOfWaysToBeatRecord,
  findCorrectNumberOfWaysToBeatRecord,
} from "./06";

const testInput = `Time:      7  15   30
Distance:  9  40  200
`;

it("should find the number of ways you can beat the record", () => {
  expect(multiplyNumberOfWaysToBeatRecord(testInput)).toBe(288);
});

it("should find the number of ways you can beat the record", () => {
  expect(findCorrectNumberOfWaysToBeatRecord(testInput)).toBe(71503);
});
