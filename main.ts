// Funniest Time Machine Warning Label — program/v1 entry.
// Writes a single one-line warning label (120 characters or fewer)
// to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: If you meet yourself, do not shake hands. Only one of you is under warranty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
