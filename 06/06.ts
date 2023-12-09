import { multiply } from "../utils";

function parseInput(input: string) {
  const [times, distances] = input
    .split("\n")
    .filter((l) => l)
    .map((line) => line.split(/:\s+/)[1])
    .map((line) => line.split(/\s+/).map(Number));

  return { times, distances };
}

export function multiplyNumberOfWaysToBeatRecord(input: string) {
  const { times, distances } = parseInput(input);
  const races = times.map((time, i) => ({
    time,
    recordDistance: distances[i],
  }));

  const recordBeating = races.map(({ time, recordDistance }) => {
    let wins = 0;
    // Holding button for x ms results in speed of x.
    // No need to check 0 and `time` since those will result in a distance of 0
    for (let held = 1; held < time; held++) {
      const speed = held;
      const distance = (time - held) * speed;
      if (distance > recordDistance) {
        wins++;
      }
    }
    return wins;
  });

  return multiply(recordBeating);
}
