import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import { partTwo } from "./solution";

const input = await readFile(`${__dirname}/input.txt`, { encoding: "utf8" });

export default function () {
  return partTwo(input);
}
