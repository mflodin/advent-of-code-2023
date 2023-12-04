import { readFile } from "fs/promises";
import { sumPartNumbers } from "./03/03";

const input = await readFile("./03/input.txt", { encoding: "utf8" });

console.log("Part number sum:", sumPartNumbers(input));
