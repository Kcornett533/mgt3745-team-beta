# Individual Retrospective: Regina Choi

> **Draft written by Claude Code from my PR and review history ([DDR-005](../DDR-005.md)). I rewrite it in my own words and fill in every `[CONFIRM]` before this PR merges.**

## My role in each phase

- **Phase 1: Reviewer.** I owned the opportunity solution tree, the RAT, and the planned evals in `context/EVALS.md` ([#6](https://github.com/Kcornett533/mgt3745-team-beta/pull/6)), and added the reviewer and AI columns to the RACI ([#7](https://github.com/Kcornett533/mgt3745-team-beta/pull/7)). I reviewed the specification ([#1](https://github.com/Kcornett533/mgt3745-team-beta/pull/1), [#3](https://github.com/Kcornett533/mgt3745-team-beta/pull/3), [#8](https://github.com/Kcornett533/mgt3745-team-beta/pull/8)), the architecture ([#4](https://github.com/Kcornett533/mgt3745-team-beta/pull/4), [#5](https://github.com/Kcornett533/mgt3745-team-beta/pull/5)), and the DACI ([#12](https://github.com/Kcornett533/mgt3745-team-beta/pull/12)).
- **Phase 2: Implementer.** I started F-02 ([#17](https://github.com/Kcornett533/mgt3745-team-beta/pull/17), DDR-003), took over Cloudflare ownership in `TOOLS.md` ([#19](https://github.com/Kcornett533/mgt3745-team-beta/pull/19)), and built and deployed F-01 to F-03 with Claude Code ([#20](https://github.com/Kcornett533/mgt3745-team-beta/pull/20), DDR-004). I also reviewed the Phase 2 roster ([#16](https://github.com/Kcornett533/mgt3745-team-beta/pull/16)) and requested changes on ADR-002 ([#21](https://github.com/Kcornett533/mgt3745-team-beta/pull/21)).
- **Final: Specifier, Reviewer, & Evaluator.** After two teammates withdrew, Kenneth and I split every role. I reviewed the rotation PR ([#22](https://github.com/Kcornett533/mgt3745-team-beta/pull/22)), realigned CODEOWNERS and the README ([#23](https://github.com/Kcornett533/mgt3745-team-beta/pull/23)), and own `FEATURES.md` final, `EVALS.md` final, `docs/DDR-LOG.md`, the scaffold pruning, and most of `docs/RETRO.md`.

## One decision I would make differently

**I would have run the RAT interviews before building, even with a smaller build.** I wrote the RAT and its decision rule in Phase 1: 3 students and 2 recruiters by October 22. Then, as Phase 2 Implementer, I spent October 22 shipping F-01 to F-03 (#20 merged at 03:30 UTC October 23), and the interviews never happened. The evidence: zero interview records in the repository, both user-facing Stakes (mine and Kenneth's) are still untested, and the DACI-001 reopen trigger fired without anyone acting on it. My own INT-03 interviewee was exactly the kind of student the RAT needed, so one conversation would have tested half of my own Stake. A working build with no measurement taught us less than a smaller build with one would have.

A second, smaller one: my two Phase 1 review commits ("reviewer #1", "reviewer #2") went directly to `main`. Those are two of the ten direct Phase 1 commits counted in RETRO.md.

## The artifact I am proudest of

**My Changes Requested review on [#21](https://github.com/Kcornett533/mgt3745-team-beta/pull/21).** ADR-002 and the diagram described our old HW4 app (the `evidence` table, `/api/evidence` on Pages, and `#15803d`) instead of what #20 had just deployed. I named each mismatch against the file that showed it, and the fix (`d42b9e2`) brought the architecture back in line with the build. It is the only check in the whole project that changed what the team did (see [Evals against plan](../RETRO.md#evals-against-plan)). `[CONFIRM: or pick another artifact you'd rather name]`

## My delegation record

| Tool | Used for | How I verified it | Record |
|---|---|---|---|
| Claude Code (Claude Opus 5.5) | Phase 2 build of F-01 to F-03: Worker, D1 schema and seed, page, smoke tests; D1 creation and deploy under my Cloudflare login | Read every generated line before committing; `npm test` 4/4; live `GET`/`POST` checks against the deployed URL; checked for `innerHTML`, unbound SQL, new dependencies, and secrets | [DDR-004](../DDR-004.md) |
| `[CONFIRM: tool name]` | F-02 validation drafts and DDR-003 wording | `[CONFIRM]` | [DDR-003](../DDR-003.md). PR #17 says `AI use: None`, which was wrong, and I am correcting the record here. |
| Claude Code (Claude Opus 5.5) | Phase 3: review of #22, CODEOWNERS and README alignment, DDR-LOG, RETRO, Stake resolutions, scaffold pruning, and this draft | Read every line; re-ran `npm test` and the live checks myself; checked every cited PR and commit against GitHub | [DDR-005](../DDR-005.md) |
| `[CONFIRM: any other tool used in Phase 1, e.g. for EVALS.md or reviews, or "none"]` | | | |

What I learned about delegating: the tool was fastest where I could check its output mechanically (tests, HTTP status codes, grep for `innerHTML`), and least trustworthy where checking needed judgment, such as whether old HW4 names had leaked into new files. That is the failure SKILLS.md now records.
