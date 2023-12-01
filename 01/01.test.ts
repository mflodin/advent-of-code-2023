import {
  getCalibrationValue,
  getCorrectCalibrationValue,
  sumCalibrationValues,
  sumCorrectCalibrationValues,
} from "./01";

test("finds the first and last digits of each line", () => {
  expect(getCalibrationValue("1abc2")).toBe(12);
  expect(getCalibrationValue("pqr3stu8vwx")).toBe(38);
  expect(getCalibrationValue("a1b2c3d4e5f")).toBe(15);
  expect(getCalibrationValue("treb7uchet")).toBe(77);
});

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

test("sums all the lines first and last digits", () => {
  const actual = sumCalibrationValues(testInput);

  expect(actual).toBe(142);
});

test("finds the first and last digits of each line", () => {
  expect(getCorrectCalibrationValue("two1nine")).toBe(29);
  expect(getCorrectCalibrationValue("eightwothree")).toBe(83);
  expect(getCorrectCalibrationValue("abcone2threexyz")).toBe(13);
  expect(getCorrectCalibrationValue("xtwone3four")).toBe(24);
  expect(getCorrectCalibrationValue("4nineeightseven2")).toBe(42);
  expect(getCorrectCalibrationValue("zoneight234")).toBe(14);
  expect(getCorrectCalibrationValue("7pqrstsixteen")).toBe(76);
});

const testInput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

test("sums all the lines first and last digits", () => {
  const actual = sumCorrectCalibrationValues(testInput2);

  expect(actual).toBe(281);
});
