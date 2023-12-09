import { readFile } from "fs/promises";
import { multiplyNumberOfWaysToBeatRecord } from "./06/06";

const input = await readFile("./06/input.txt", { encoding: "utf8" });

console.log("Part 1:", multiplyNumberOfWaysToBeatRecord(input));
