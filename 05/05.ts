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
export function findLowestLocationNumberForRange(input: string) {
  const { seeds: seedRow, maps } = parseInput(input);

  let seedRanges: any = [];
  for (let i = 0; i < seedRow.length; i += 2) {
    let start = seedRow[i];
    let length = seedRow[i + 1];
    let end = start + length - 1;
    seedRanges.push({ start, length, end });
  }

  // Within each range inside a map the destination increases along with the source,
  // so we only need the "edges". But each map layer adds new edges that needs to be checked.
  // We start at the last layer and work our way up the stack, making sure to update what we've
  // added in the last layer
  let candidateSeeds: any[] = [];
  [...maps].reverse().forEach((map) => {
    // add the seed candidates for this level
    candidateSeeds = candidateSeeds.concat(
      map.instructions.map((i) => i.destinationStart),
    );

    // update existing candidate seeds
    candidateSeeds = candidateSeeds.map((seed) => {
      for (let {
        destinationStart,
        destinationEnd,
        delta,
      } of map.instructions) {
        if (seed >= destinationStart && seed <= destinationEnd) {
          return seed - delta;
        }
      }
      return seed;
    });
  });

  let infos: any[] = [];
  let lowestLocationNumber = Infinity;

  // Some candidate seeds are not within the ranges of seeds, so we remove those
  const seeds = candidateSeeds.filter((seed) => {
    return seedRanges.some((range) => seed >= range.start && seed <= range.end);
  });

  // This part is basically the same as in part one and should probably be extracted out =)
  for (let seed of seeds) {
    let info = { seed };
    let value = seed;
    maps.forEach(({ label, instructions }) => {
      for (let { start, end, delta } of instructions) {
        if (value >= start && value <= end) {
          value += delta;
          break;
        }
      }
      info[label] = value;
    });
    if (value < lowestLocationNumber) {
      lowestLocationNumber = value;
    }
    infos.push(info);
  }
  //   console.table(infos);
  return lowestLocationNumber;
}

function parseInput(input: string) {
  const [seedsString, ...rest] = input.split("\n\n");
  const seeds = seedsString.replace("seeds: ", "").split(/\s+/).map(Number);
  const maps = rest.map((section) => {
    const [labelString, ...lines] = section.split("\n").filter((l) => l);
    const [_, label] = labelString.match(/to-(\w+)/) ?? [];
    const instructions = lines
      .map((line) => {
        const [destinationStart, sourceStart, length] = line
          .split(/\s+/)
          .map(Number);

        return {
          destinationStart,
          destinationEnd: destinationStart + length - 1,
          start: sourceStart,
          end: sourceStart + length - 1,
          delta: destinationStart - sourceStart,
        };
      })
      .sort((a, b) => a.start - b.start);
    return { label, instructions };
  });
  return { seeds, maps };
}
