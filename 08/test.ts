import { partOne, partTwo } from "./solution";

const map1 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)
`;

const map2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)
`;

it("should take 2 steps to get to ZZZ with map 1", () => {
  expect(partOne(map1)).toBe(2);
});

it("should take 6 steps to get to ZZZ with map 2", () => {
  expect(partOne(map2)).toBe(6);
});

const map3 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)
`;

it("should take 6 ghost steps to get all positions ending with Z using map 3", () => {
  expect(partTwo(map3)).toBe(6);
});
