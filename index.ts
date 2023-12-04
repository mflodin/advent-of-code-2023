import { readFile } from "fs/promises";
import { powerSum, sumPossibleGames } from "./02/02";

const input = await readFile("./02/input.txt", { encoding: "utf8" });

console.log("Possible games sum:", sumPossibleGames(input));
console.log("Power sum:", powerSum(input));
