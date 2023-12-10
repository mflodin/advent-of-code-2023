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
  while (position !== "ZZZ") {
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
