import { readFile } from "fs/promises";
import { findLowestLocationNumber } from "./05/05";

const input = await readFile("./05/input.txt", { encoding: "utf8" });

console.log("Lowest location number:", findLowestLocationNumber(input));
