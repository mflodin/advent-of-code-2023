export function findLowestLocationNumber(input: string) {
  const { seeds, maps } = parseInput(input);
  let lowestLocationNumber = Infinity;
  seeds.forEach((seed) => {
    let value = seed;
    maps.forEach(({ instructions }) => {
      for (let { start, end, delta } of instructions) {
        if (value >= start && value <= end) {
          value += delta;
          break;
        }
      }
    });
    if (value < lowestLocationNumber) {
      lowestLocationNumber = value;
    }
  });
  return lowestLocationNumber;
}

function parseInput(input: string) {
  const [seedsString, ...rest] = input.split("\n\n");
  const seeds = seedsString.replace("seeds: ", "").split(/\s+/).map(Number);
  const maps = rest.map((section) => {
    const [label, ...lines] = section.split("\n").filter((l) => l);
    const instructions = lines.map((line) => {
      const [destinationStart, sourceStart, length] = line
        .split(/\s+/)
        .map(Number);

      return {
        start: sourceStart,
        end: sourceStart + length - 1,
        delta: destinationStart - sourceStart,
      };
    });
    return { label, instructions };
  });
  return { seeds, maps };
}
