import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

type ReviewDraft = {
  verdict: string;
  complaints: string[];
  closing: string;
};

function composeReview(draft: ReviewDraft): string {
  const parts: string[] = [draft.verdict, ...draft.complaints, draft.closing];
  return parts.join(" ");
}

function assertReviewWithinGate(body: string): void {
  if (body.trim().length === 0) {
    throw new Error("review text must not be empty");
  }
  const charCount = [...body].length;
  if (charCount < 1 || charCount > 120) {
    throw new Error(`review length ${charCount} outside gate 1-120`);
  }
}

function persistReview(targetPath: string, body: string): void {
  assertReviewWithinGate(body);
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, body, "utf8");
}

const moonReview: ReviewDraft = {
  verdict: "One star.",
  complaints: [
    "Takes credit for sunlight it didn't make.",
    "Ghosts a week a month.",
  ],
  closing: "Still wants tides.",
};

const finalText = composeReview(moonReview);
persistReview("/output/entry.txt", finalText);
