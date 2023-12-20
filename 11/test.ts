import { partOne, partTwo } from "./solution";

const testInput = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`;

describe("Part one", () => {
  it("it should find the shortest path between all galaxies ", () => {
    expect(partOne(testInput)).toBe(374);
  });
});

describe("Part two", () => {
  it("it should find the shortest path between all galaxies with expansion 10x", () => {
    expect(partTwo(testInput, 10)).toBe(1030);
  });
});

describe("Part two", () => {
  it("it should find the shortest path between all galaxies with expansion 100x", () => {
    expect(partTwo(testInput, 100)).toBe(8410);
  });
});
