import { sum } from "../utils";
// ...#......
// .......#..
// #.........
// ..........
// ......#...
// .#........
// .........#
// ..........
// .......#..
// #...#.....
function parseInput(input: string) {
  let id = 1;
  const map: Position[][] = input
    .split("\n")
    .filter((l) => l)
    .map((l, row) => {
      return l.split("").map((p, index) => {
        return {
          row,
          index,
          content: p === "." ? null : { id: id++ },
        };
      });
    });

  return map;
}

type Space = null;

type Galaxy = {
  id: number;
};

interface Position {
  row: number;
  index: number;
  content: Space | Galaxy;
}

export function partOne(input: string, expansionRate = 2) {
  const map = parseInput(input);
  logMap(map);
  const { expandedRows, expandedColumns } = getExpanded(map);
  const pairs = getPairs(map);
  const distances = pairs.map(([a, b]) => {
    const minRow = Math.min(a.row, b.row);
    const maxRow = Math.max(a.row, b.row);
    const minIndex = Math.min(a.index, b.index);
    const maxIndex = Math.max(a.index, b.index);
    const distance = maxRow - minRow + maxIndex - minIndex;
    const extraDistance =
      expandedRows.filter((r) => r > minRow && r < maxRow).length +
      expandedColumns.filter((c) => c > minIndex && c < maxIndex).length;

    return distance + extraDistance * (expansionRate - 1);
  });
  return sum(distances);
}

function getExpanded(map: Position[][]) {
  const expandedRows = map
    .filter((row) => {
      return row.every((p) => p.content === null);
    })
    .map((p) => p[0].row);

  const expandedColumns = map[0]
    .filter((_, index) => {
      return map.every((row) => row[index].content === null);
    })
    .map((p) => p.index);

  return { expandedRows, expandedColumns };
}

function logMap(map: Position[][]) {
  console.log(
    map
      .map((row) => row.map((p) => (p.content === null ? "." : "#")).join(""))
      .join("\n"),
  );
}

function getPairs(map: Position[][]) {
  const galaxies = map.flat().filter((p) => p.content !== null);
  const pairs: [Position, Position][] = [];
  for (let i = 0; i < galaxies.length; i++) {
    for (let j = i + 1; j < galaxies.length; j++) {
      pairs.push([galaxies[i], galaxies[j]]);
    }
  }

  return pairs;
}

export function partTwo(input, expansionRate = 2) {
  return partOne(input, expansionRate);
}
