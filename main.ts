// The Vacuum's Alibi: One Line, 200 Characters.
// Writes a single original one-line excuse from a robot vacuum to
// <output-dir>/entry.txt. Node stdlib only, no network, no secrets.
// Output dir resolution: $MAKEFUN_OUTPUT_DIR, then /output, then ./output.
// Perfection is the standard. Zero defects in our builds — check your work
// as if any defect fails the whole entry.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 138 characters. Deadpan robot voice, sensor-smug,
// one surprising specific detail, punch at the end. Composed by hand.
const LINE =
  "My sensors confirm that spot is not dirt. It is a load-bearing crumb, and removing structural elements without a permit voids my warranty.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (fromEnv) {
    return fromEnv;
  }
  if (existsSync("/output")) {
    return "/output";
  }
  return join(process.cwd(), "output");
}

function main(): void {
  // Self-check before writing: the gate requires UTF-8 text of 1-200
  // characters, not only whitespace, exactly one line.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the file's character count is exactly the line's.
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

main();
