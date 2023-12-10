import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import { partOne } from "./solution";

const input = await readFile(`${__dirname}/input.txt`, { encoding: "utf8" });

export default function () {
  return partOne(input);
}
