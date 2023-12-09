import { readFile } from "fs/promises";
import { findCorrectNumberOfWaysToBeatRecord } from "./06/06";

const input = await readFile("./06/input.txt", { encoding: "utf8" });

console.time("Time");
console.log("Part 2:", findCorrectNumberOfWaysToBeatRecord(input));
console.timeEnd("Time");
