export function getCalibrationValue(line: string) {
  const firstDigitRegex = /^.*?(\d)/;
  const lastDigitRegex = /.*(\d).*?$/;

  const [_, firstDigit] = line.match(firstDigitRegex) ?? [];
  const [__, lastDigit] = line.match(lastDigitRegex) ?? [];
  return Number(firstDigit + lastDigit);
}

export function sumCalibrationValues(input) {
  const lines = readInput(input);
  const calibrationValues = lines.map(getCalibrationValue);
  return sum(calibrationValues);
}

function readInput(input) {
  return input.split("\n").filter((e) => e);
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
