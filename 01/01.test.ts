import { getCalibrationValue, sumCalibrationValues } from "./01";

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

test("finds the first and last digits of each line", () => {
  expect(getCalibrationValue("1abc2")).toBe(12);
  expect(getCalibrationValue("pqr3stu8vwx")).toBe(38);
  expect(getCalibrationValue("a1b2c3d4e5f")).toBe(15);
  expect(getCalibrationValue("treb7uchet")).toBe(77);
});

test("sums all the lines first and last digits", () => {
  const actual = sumCalibrationValues(testInput);

  expect(actual).toBe(142);
});
