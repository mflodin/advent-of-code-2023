// .....
// .S-7.
// .|.|.
// .L-J.
// .....
function parseInput(input: string) {
  const map: string[][] = input
    .split("\n")
    .filter((l) => l)
    .map((l) => l.split(""));

  const row = map.findIndex((row) => row.includes("S"));
  const index = map[row].findIndex((pos) => pos === "S");
  const start = { row, index };

  return { map, start };
}

interface Position {
  row: number;
  index: number;
  type?: string;
}

const tileType = {
  START: "S",
  GROUND: ".",
  SOUTH_WEST: "7",
  SOUTH_EAST: "F",
  NORTH_SOUTH: "|",
  NORTH_WEST: "J",
  NORTH_EAST: "L",
  WEST_EAST: "-",
};

const pipeMap = {
  "-": "═",
  "|": "║",
  "7": "╗",
  F: "╔",
  J: "╝",
  L: "╚",
};

const tileTypes = Object.values(tileType);

export function partOne(input: string) {
  const { map, start } = parseInput(input);
  // console.log({ map, start });
  const { stepCount } = walkPipe(map, start);

  return stepCount;
}

function walkPipe(map: string[][], start: { row: number; index: number }) {
  let { a, b, startType } = findFirstStep({ map, start });
  // console.log({ a, b });
  let lastA = start;
  let lastB = start;

  let stepCount = 1;
  map[start.row][start.index] = pipeMap[startType];

  try {
    while (!(a.index === b.index && a.row === b.row) && stepCount < 1e9) {
      map[a.row][a.index] = pipeMap[a.type];
      map[b.row][b.index] = pipeMap[b.type];

      [a, lastA] = step(a, lastA, map);
      [b, lastB] = step(b, lastB, map);
      stepCount += 1;
      // logMap(map);
      // console.log({ a, b, map });
    }
  } catch (e) {
    console.error(e.message);
  } finally {
    map[a.row][a.index] = pipeMap[a.type];
    // logMap(map);
  }
  return { stepCount, map };
}

function step(pos, lastPos, map) {
  let potentialNextSteps: Position[] = [];

  if (pos.type === tileType.NORTH_SOUTH) {
    potentialNextSteps.push(
      { index: pos.index, row: pos.row - 1 },
      { index: pos.index, row: pos.row + 1 },
    );
  }

  if (pos.type === tileType.NORTH_WEST) {
    potentialNextSteps.push(
      { index: pos.index, row: pos.row - 1 },
      { index: pos.index - 1, row: pos.row },
    );
  }

  if (pos.type === tileType.NORTH_EAST) {
    potentialNextSteps.push(
      { index: pos.index, row: pos.row - 1 },
      { index: pos.index + 1, row: pos.row },
    );
  }

  if (pos.type === tileType.WEST_EAST) {
    potentialNextSteps.push(
      { index: pos.index - 1, row: pos.row },
      { index: pos.index + 1, row: pos.row },
    );
  }

  if (pos.type === tileType.SOUTH_WEST) {
    potentialNextSteps.push(
      { index: pos.index, row: pos.row + 1 },
      { index: pos.index - 1, row: pos.row },
    );
  }

  if (pos.type === tileType.SOUTH_EAST) {
    potentialNextSteps.push(
      { index: pos.index, row: pos.row + 1 },
      { index: pos.index + 1, row: pos.row },
    );
  }

  const nextStep = potentialNextSteps.find(
    (p) => !(p.index === lastPos.index && p.row === lastPos.row),
  );

  if (!nextStep) {
    throw new Error("No next step found");
  }
  nextStep.type = map[nextStep.row][nextStep.index];
  // console.log({ potentialNextSteps, pos, nextStep, lastPos });

  return [nextStep, pos];
}

function findFirstStep({ map, start }: { map: string[][]; start: Position }) {
  let a: Position, b: Position;
  let potentialStartTypes = Object.values(tileTypes);

  // Above
  let row = start.row - 1;
  let index = start.index;
  let type = map[row]?.[index];
  if (
    [tileType.SOUTH_EAST, tileType.SOUTH_WEST, tileType.NORTH_SOUTH].includes(
      type,
    )
  ) {
    a = { row, index, type };
    potentialStartTypes = potentialStartTypes.filter((t) =>
      [tileType.NORTH_EAST, tileType.NORTH_WEST, tileType.NORTH_SOUTH].includes(
        t,
      ),
    );
  }

  // Right
  row = start.row;
  index = start.index + 1;
  type = map[row]?.[index];
  if (
    [tileType.WEST_EAST, tileType.SOUTH_WEST, tileType.NORTH_WEST].includes(
      type,
    )
  ) {
    !a ? (a = { row, index, type }) : (b = { row, index, type });
    potentialStartTypes = potentialStartTypes.filter((t) =>
      [tileType.NORTH_EAST, tileType.WEST_EAST, tileType.SOUTH_EAST].includes(
        t,
      ),
    );
  }

  // Below
  row = start.row + 1;
  index = start.index;
  type = map[row]?.[index];
  if (
    [tileType.NORTH_EAST, tileType.NORTH_SOUTH, tileType.NORTH_WEST].includes(
      type,
    )
  ) {
    !a ? (a = { row, index, type }) : (b = { row, index, type });
    potentialStartTypes = potentialStartTypes.filter((t) =>
      [tileType.SOUTH_EAST, tileType.SOUTH_WEST, tileType.NORTH_SOUTH].includes(
        t,
      ),
    );
  }

  // Left
  row = start.row;
  index = start.index - 1;
  type = map[row]?.[index];
  if (
    [tileType.NORTH_EAST, tileType.WEST_EAST, tileType.SOUTH_EAST].includes(
      type,
    )
  ) {
    !a ? (a = { row, index, type }) : (b = { row, index, type });
    potentialStartTypes = potentialStartTypes.filter((t) =>
      [tileType.WEST_EAST, tileType.NORTH_WEST, tileType.SOUTH_WEST].includes(
        t,
      ),
    );
  }
  return { a, b, startType: potentialStartTypes[0] };
}

function logMap(map) {
  let mapString = map.map((line) => line.join("")).join("\n");
  // process.stdout.clearLine(0);
  // process.stdout.cursorTo(0);
  // process.stdout.write("\x1bc");
  // process.stdout.write(mapString);
  console.log(mapString);
}

export function partTwo(input) {
  // Run part one to mark up the map
  let { map, start } = parseInput(input);
  ({ map } = walkPipe(map, start));

  let enclosedCount = 0;
  let logString = "";
  map.forEach((row, r) => {
    let isEnclosed = false;
    let starts: string[] = [];

    logString += "\n";
    row.forEach((tile, i) => {
      logString +=
        tile + (isEnclosed ? "I" : "O") + (starts.at(-1) ?? " ") + " ";

      if (tile === "═") {
        return;
      }

      if (tile === "╔") {
        starts.push(tile);
        return;
      }

      if (tile === "╚") {
        starts.push(tile);
        return;
      }

      if (tile === "╗") {
        if (starts.pop() === "╚") {
          isEnclosed = !isEnclosed;
        }
        return;
      }

      if (tile === "╝") {
        if (starts.pop() === "╔") {
          isEnclosed = !isEnclosed;
        }
        return;
      }

      if (tile === "║") {
        isEnclosed = !isEnclosed;
        return;
      }

      if (isEnclosed) {
        enclosedCount += 1;
        map[r][i] = "I";
      } else {
        map[r][i] = "O";
      }
    });
  });

  logMap(map);
  // console.log(logString);

  return enclosedCount;
}
