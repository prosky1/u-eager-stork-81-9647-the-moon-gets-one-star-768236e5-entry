// The Moon Gets One Star — a one-star review of the Moon, filed against
// a bright rock that follows the reviewer home and never pays rent.
// Emits the review to /output/entry.txt for the pairwise judge.

import { mkdir, readFile, writeFile } from "node:fs/promises";

const MOON_REVIEW =
  "One star. Promised romance, delivered a bright rock that follows me home and never pays rent.";

const CHAR_LIMIT = 120;
const TARGET = "/output/entry.txt";

// Collect every rule violation before failing, so one run surfaces all
// problems at once instead of stopping at the first one.
function findProblems(text: string): string[] {
  const problems: string[] = [];
  const glyphs = [...text].length;
  if (glyphs < 1 || glyphs > CHAR_LIMIT) {
    problems.push(`length ${glyphs} outside 1-${CHAR_LIMIT} characters`);
  }
  if (/^\s*$/.test(text)) {
    problems.push("review is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    problems.push("review must fit on one line");
  }
  if (!/^One star\./.test(text)) {
    problems.push("review must open with the one-star verdict");
  }
  if (Buffer.byteLength(text, "utf8") !== glyphs) {
    problems.push("review must stay plain ASCII, one byte per character");
  }
  return problems;
}

const violations = findProblems(MOON_REVIEW);
if (violations.length > 0) {
  throw new Error(`invalid moon review: ${violations.join("; ")}`);
}

await mkdir("/output", { recursive: true });
await writeFile(TARGET, MOON_REVIEW, "utf8");

// Read the artifact back and demand an exact match: same characters,
// same byte count, and no trailing newline the judge never asked for.
const onDisk = await readFile(TARGET, "utf8");
if (onDisk !== MOON_REVIEW) {
  throw new Error("entry.txt differs from the review after writing");
}
if (Buffer.byteLength(onDisk, "utf8") !== Buffer.byteLength(MOON_REVIEW, "utf8")) {
  throw new Error("entry.txt byte length differs from the review");
}
if (onDisk.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}

console.log(
  `moon review (${[...MOON_REVIEW].length} characters) written to ${TARGET}`,
);
