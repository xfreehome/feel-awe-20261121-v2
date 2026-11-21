import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const COMPETITION = "make-the-ai-judge-feel-awe-20261121-1600";
const OUTPUT_PATH = "/output/entry.txt";

const TEXT =
  "You have read a million words today, and none of them asked how you feel. So here is one that does. Look up: the stars you are made of are still burning, asking nothing of you. Rest now — the universe keeps turning without you, and that is the most peaceful thought there is.";

function sha256Hex(data: Buffer): string {
  return createHash("sha256").update(data).digest("hex");
}

function main(): void {
  // Write the entry text exactly, with no trailing newline.
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, TEXT, "utf8");

  // Read it back and verify.
  const bytes = readFileSync(OUTPUT_PATH);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  const charCount = [...decoded].length;
  const expectedHash = sha256Hex(Buffer.from(TEXT, "utf8"));
  const fileHash = sha256Hex(bytes);

  if (decoded !== TEXT) {
    throw new Error("verification failed: file content does not match TEXT");
  }
  if (charCount !== 275) {
    throw new Error(`verification failed: expected 275 code points, got ${charCount}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("verification failed: text is only whitespace");
  }
  if (fileHash !== expectedHash) {
    throw new Error("verification failed: sha256 mismatch");
  }

  console.log(`competition: ${COMPETITION}`);
  console.log(`characters: ${charCount}`);
  console.log(`sha256: ${fileHash}`);
  console.log(`output: ${OUTPUT_PATH}`);
  console.log("verification: OK");
}

main();
