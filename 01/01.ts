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

const digitMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
};

export function getCorrectCalibrationValue(line: string) {
  const firstDigitRegex =
    /^.*?(\d|one|two|three|four|five|six|seven|eight|nine)/;
  const lastDigitRegex =
    /.*(\d|one|two|three|four|five|six|seven|eight|nine).*?$/;

  const [_, firstDigit] = line.match(firstDigitRegex) ?? [];
  const [__, lastDigit] = line.match(lastDigitRegex) ?? [];
  return Number(digitMap[firstDigit] + digitMap[lastDigit]);
}

export function sumCorrectCalibrationValues(input) {
  const lines = readInput(input);
  const calibrationValues = lines.map(getCorrectCalibrationValue);
  return sum(calibrationValues);
}

function readInput(input) {
  return input.split("\n").filter((e) => e);
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
