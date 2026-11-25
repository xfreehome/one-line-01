// Entry for the make.fun "One Line" bounty.
// Writes a single funny line to /output/entry.txt (gate: 1-140 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones to finally hear myself think. Turns out I don't.";

// The gate rejects anything outside 1-140 characters or whitespace-only,
// so validate the line before writing it out.
function writeEntry(line: string, path: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`Entry must be 1-140 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, line, "utf8");
  console.log(`Wrote ${chars} characters to ${path}`);
}

writeEntry(LINE, "/output/entry.txt");
