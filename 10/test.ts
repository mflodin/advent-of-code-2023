import { partOne, partTwo } from "./solution";

describe("Part one", () => {
  it("it should find the farthest pipe from the start ", () => {
    expect(
      partOne(`
.....
.S-7.
.|.|.
.L-J.
.....
  `),
    ).toBe(4);
  });

  it("it should find the farthest pipe from the start", () => {
    expect(
      partOne(`
..F7.
.FJ|.
SJ.L7
|F--J
LJ...
  `),
    ).toBe(8);
  });

  it("it should find the farthest pipe from the start ", () => {
    expect(
      partOne(`
.....
.FS7.
.|.|.
.L-J.
.....
  `),
    ).toBe(4);
  });

  it("it should find the farthest pipe from the start ", () => {
    expect(
      partOne(`
.F-7
J|L|
7S7|
JFLJ
`),
    ).toBe(5);
  });
});

describe("Part two", () => {
  it("should find the number of tiles enclosed by the pipe", () => {
    expect(
      partTwo(`
...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........
`),
    ).toBe(4);
  });

  it("should find the number of tiles enclosed by the pipe", () => {
    expect(
      partTwo(`
.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...
`),
    ).toBe(8);
  });

  it("should find the number of tiles enclosed by the pipe", () => {
    expect(
      partTwo(`
FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L
`),
    ).toBe(10);
  });
});
