# The Moon Gets One Star — make.fun entry

One one-star review of the Moon, 93 characters, written for the [The Moon Gets One Star](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/prosky1/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/prosky1/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

## The review

> One star. Promised romance, delivered a bright rock that follows me home and never pays rent.

## How it works

`main.ts` collects every rule violation first — 1 to 120 characters, not only whitespace, exactly one line, opening with the one-star verdict, plain ASCII — then writes the review to `/output/entry.txt` and reads the file back to confirm it matches byte for byte, with no trailing newline.

Run it with Node 22.18 or later:

```sh
node main.ts
```
