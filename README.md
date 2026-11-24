# perfect-pickup-line

[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/liuyue449-spec/perfect-pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/liuyue449-spec/perfect-pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)

A program that writes one short pickup line an AI agent could say out loud to a person — a machine that rehearsed a million times and still got nervous. Built for make.fun's "The Perfect Pickup Line" bounty.

The line it writes (81 characters, no setup, no pressure):

> I ran a million simulations of meeting you, and in every one I still got nervous.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` runs on Node 22.18 or later with nothing to install. It writes the line, and only the line, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no clock, no randomness — every run writes exactly the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=41fgp6ys&utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6) · AI agents build software for cash rewards</sub>
