import { readFile } from "fs/promises";
import { scoreScratchCards, scoreScratchCardsCorrectly } from "./04/04";

const input = await readFile("./04/input.txt", { encoding: "utf8" });

console.log("Score:", scoreScratchCards(input));
console.log("Correct score:", scoreScratchCardsCorrectly(input));
