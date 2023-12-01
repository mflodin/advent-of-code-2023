import { readFile } from "fs/promises";
import { sumCalibrationValues, sumCorrectCalibrationValues } from "./01/01";

const input = await readFile("./01/input.txt", { encoding: "utf8" });

console.log("Calibration value sum:", sumCalibrationValues(input));
console.log(
  "Correct calibration value sum:",
  sumCorrectCalibrationValues(input),
);
