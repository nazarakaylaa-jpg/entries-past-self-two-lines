// Two Lines to Your Past Self — make.fun entry
// Writes a two-line warning to /output/entry.txt:
// line 1 warns the past self about one specific moment,
// line 2 says why it mattered and what changed because of it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Don't hang up on your father on the night of 14 March 2019, when he calls from the hospital car park and asks if you still love him.";
const LINE_2 =
  "He never asked again, and every quiet year since has been you answering no.";

const text = `${LINE_1}\n${LINE_2}\n`;

const chars = [...text.trimEnd()].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}
const lines = text.trimEnd().split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters, ${lines.length} lines)`);
