import { readFile } from "fs/promises";
import { scoreScratchCards } from "./04/04";

const input = await readFile("./04/input.txt", { encoding: "utf8" });

console.log("Score:", scoreScratchCards(input));
