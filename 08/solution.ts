import { lcm, multiply } from "../utils";

function parseInput(input: string) {
  const [instructionsString, _, ...lines] = input.split("\n");
  const instructions = instructionsString.split("");
  let map = {};

  lines
    .filter((l) => l)
    .forEach((line) => {
      // AAA = (BBB, CCC)
      // @ts-ignore
      const { key, L, R } = /(?<key>\w+) = \((?<L>\w+), (?<R>\w+)/.exec(
        line,
      ).groups;

      map[key] = { L, R };
    });

  return { map, instructions };
}

export function partOne(input: string) {
  const { map, instructions } = parseInput(input);
  //   console.log({ map, instructions });
  let position = "AAA";
  let stepCount = 0;
  let i = 0;
  while (position !== "ZZZ" && stepCount < 1e9) {
    position = map[position][instructions[i]];
    stepCount += 1;
    i += 1;
    if (i === instructions.length) {
      i = 0;
    }
    // console.log({ position });
  }
  return stepCount;
}

export function partTwo(input: string) {
  const { map, instructions } = parseInput(input);

  let positions = Object.keys(map).filter((key) => key.match(/A$/));

  const stepCountPerPosition = positions.map((position) => {
    let stepCount = 0;
    let i = 0;
    while (!position.match(/Z$/) && stepCount < 1e9) {
      position = map[position][instructions[i]];
      stepCount += 1;
      i += 1;
      if (i === instructions.length) {
        i = 0;
      }
      // console.log({ position });
    }
    return stepCount;
  });

  //   console.log({ stepCountPerPosition });

  // We can't just multiply together the step counts, since they have a common factor

  var leastCommonMultiple = 1;
  stepCountPerPosition.forEach((stepCount) => {
    leastCommonMultiple = lcm(leastCommonMultiple, stepCount);
  });

  return leastCommonMultiple;
}
