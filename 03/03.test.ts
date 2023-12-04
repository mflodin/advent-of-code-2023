import { sumPartNumbers } from "./03";

const testInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

it("Should find all numbers adjacent to a symbol and sum them", () => {
  expect(sumPartNumbers(testInput)).toBe(4361);
});
