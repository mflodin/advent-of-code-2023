import { partOne } from "./solution";

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
