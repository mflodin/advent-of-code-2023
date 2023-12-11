import { sum } from "../utils";
// 0 3 6 9 12 15
// 1 3 6 10 15 21
// 10 13 16 21 30 45
function parseInput(input: string) {
  return input
    .split("\n")
    .filter((l) => l)
    .map((l) => l.split(/\s+/).map(Number));
}

export function partOne(input: string) {
  const histories = parseInput(input);
  // console.log({ histories });

  const diffTriangles = generateDiffTriangles(histories);
  // console.log("diffTriangles", JSON.stringify(diffTriangles, null, 2));
  const diffTrianglesWithPredictions = predict(diffTriangles);
  // console.log(
  //   "diffTrianglesWithPredictions",
  //   JSON.stringify(diffTrianglesWithPredictions, null, 2),
  // );

  const predictions = diffTrianglesWithPredictions.map(
    (triangle) => triangle[0]?.at(-1) ?? NaN,
  );
  return sum(predictions);
}

function generateDiffTriangles(histories: number[][]) {
  return histories.map((history) => {
    const diffTriangle: number[][] = [history];
    let currentRow = history;
    while (!currentRow.every((value) => value === 0)) {
      const diffs: number[] = [];
      for (let i = 0; i < currentRow.length - 1; i++) {
        diffs.push(currentRow[i + 1] - currentRow[i]);
      }
      diffTriangle.push(diffs);
      currentRow = diffs;
    }
    return diffTriangle;
  });
}

function predict(diffTriangles: number[][][]) {
  diffTriangles.forEach((triangle) => {
    for (let i = triangle.length - 1; i >= 0; i--) {
      let row = triangle[i];
      const rowBelow = triangle[i + 1];
      const valueBelow = rowBelow?.at(-1) ?? 0; // if there is no row below we should start at 0;
      const valueLeft = row.at(-1) ?? 0; // this should never be undefined, but typescipt was sad.
      row.push(valueBelow + valueLeft);
    }
  });

  return diffTriangles;
}

export function partTwo(input: string) {
  const histories = parseInput(input);
  // console.log({ histories });

  const diffTriangles = generateDiffTriangles(histories);
  // console.log("diffTriangles", JSON.stringify(diffTriangles, null, 2));
  const diffTrianglesWithPredictions = predictBackwards(diffTriangles);
  // console.log(
  //   "diffTrianglesWithPredictions",
  //   JSON.stringify(diffTrianglesWithPredictions, null, 2),
  // );

  const predictions = diffTrianglesWithPredictions.map(
    (triangle) => triangle[0]?.[0] ?? NaN,
  );
  return sum(predictions);
}

function predictBackwards(diffTriangles: number[][][]) {
  diffTriangles.forEach((triangle) => {
    for (let i = triangle.length - 1; i >= 0; i--) {
      let row = triangle[i];
      const rowBelow = triangle[i + 1];
      const valueBelow = rowBelow?.[0] ?? 0; // if there is no row below we should start at 0;
      const valueLeft = row[0] ?? 0; // this should never be undefined, but typescipt was sad.
      row.unshift(valueLeft - valueBelow);
    }
  });

  return diffTriangles;
}
