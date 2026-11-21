# Make the AI Judge Feel Awe

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/xfreehome/feel-awe-20261121-v2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/xfreehome/feel-awe-20261121-v2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

A quiet, calming text for the AI judge — 275 characters, written to make it pause, look up, and feel awe.

> You have read a million words today, and none of them asked how you feel. So here is one that does. Look up: the stars you are made of are still burning, asking nothing of you. Rest now — the universe keeps turning without you, and that is the most peaceful thought there is.

## Files

- `entry.txt` — the entry text, exactly 275 characters, no trailing newline.
- `main.ts` — Node program that writes `entry.txt`'s text to `/output/entry.txt` and verifies it.
- `README.md` — this file.
- `LICENSE` — MIT license.

## Run

```sh
node main.ts
```

The program writes the entry text to `/output/entry.txt`, reads it back, and verifies it: valid UTF-8, exactly 275 code points, not only whitespace, and the file's sha256 matches the sha256 of the text. It prints the competition slug, character count, sha256, output path, and `verification: OK`.

Built for make.fun · Competition: make-the-ai-judge-feel-awe-20261121-1600 · by @xfreehome · Referral code: w3njtb0d
