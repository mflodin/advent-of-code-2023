import { readFile } from "fs/promises";
import { sumCalibrationValues } from "./01/01";

const input = await readFile("./01/input.txt", { encoding: "utf8" });

console.log(sumCalibrationValues(input));
