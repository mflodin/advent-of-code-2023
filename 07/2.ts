import { readFile } from "fs/promises";
import { calculateTotalWinningsWithJokers } from "./07";

const input = await readFile("./07/input.txt", { encoding: "utf8" });

console.time("Time");
console.log("Part 2:", calculateTotalWinningsWithJokers(input));
console.timeEnd("Time");
