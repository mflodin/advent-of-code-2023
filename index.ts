import { readFile } from "fs/promises";
import { sumPartNumbers, sumGearRatio } from "./03/03";

const input = await readFile("./03/input.txt", { encoding: "utf8" });

console.log("Part number sum:", sumPartNumbers(input));
console.log("Gear ratio sum:", sumGearRatio(input));
