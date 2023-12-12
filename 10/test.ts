import { partOne } from "./solution";

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
