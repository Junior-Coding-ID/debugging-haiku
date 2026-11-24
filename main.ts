import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU =
  "Two strings look the same\n" +
  "The watch pane reads false again\n" +
  "A space that won't break";

if (HAIKU.length !== 83) {
  throw new Error(`Haiku must be exactly 83 characters, got ${HAIKU.length}`);
}

const lines = HAIKU.split("\n");
if (lines.length !== 3) {
  throw new Error(`Haiku must have exactly 3 lines, got ${lines.length}`);
}

const args = process.argv.slice(2);
let outputDir = "/output";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--output" && i + 1 < args.length) {
    outputDir = args[i + 1];
    i++;
  }
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), HAIKU, "utf8");
