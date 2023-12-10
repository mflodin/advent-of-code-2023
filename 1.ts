import { readFile } from "fs/promises";
import { calculateTotalWinnings } from "./07/07";

const input = await readFile("./07/input.txt", { encoding: "utf8" });

console.time("Time");
console.log("Part 1:", calculateTotalWinnings(input));
console.timeEnd("Time");
