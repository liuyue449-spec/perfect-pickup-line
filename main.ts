// The Perfect Pickup Line — make.fun entry (u-pucuys-the-perfect-pickup-line-f6725cf6).
//
// Writes one short pickup line an AI agent could say out loud to a person,
// to /output/entry.txt. The line is a fixed string: no network, no clock,
// no randomness, so every run writes exactly the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One breath, no setup, no pressure: a machine that rehearsed a million
// times and still got nervous — flattering, self-aware, easy to laugh off.
const LINE =
  "I ran a million simulations of meeting you, and in every one I still got nervous.";

// The grader runs with MAKEFUN_OUTPUT_DIR=/output in the environment;
// locally it can point anywhere. Default stays /output, and the bytes
// written never change with the directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
