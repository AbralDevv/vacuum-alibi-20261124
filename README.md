[![competition](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://img.shields.io/badge/make.fun-rank-pending-lightgrey)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://img.shields.io/badge/make.fun-reward-$5-green)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi: One Line, 200 Characters

One original line (138 characters) in which a robot vacuum explains why it
missed a spot — deadpan, sensor-smug, with a surprise and the punch at the
end.

> My sensors confirm that spot is not dirt. It is a load-bearing crumb, and removing structural elements without a permit voids my warranty.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (runs TypeScript as-is). Writes `entry.txt`
(one line, 138 characters) to `$MAKEFUN_OUTPUT_DIR`, else `/output`, else
`./output`. Node standard library only; no network, no secrets.

## Verify

```sh
MAKEFUN_OUTPUT_DIR=/tmp/vacuum-alibi-test node main.ts
wc -c /tmp/vacuum-alibi-test/entry.txt
cat /tmp/vacuum-alibi-test/entry.txt
```

Expected: exit 0, exactly 138 characters, one line, no trailing newline.
