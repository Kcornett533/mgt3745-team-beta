# Individual Retrospective: Regina Choi

## My role in each phase

- **Phase 1: Reviewer.** I owned the opportunity solution tree, the RAT, and the planned evals in `context/EVALS.md` ([#6](https://github.com/Kcornett533/mgt3745-team-beta/pull/6)), and added the reviewer and AI columns to the RACI ([#7](https://github.com/Kcornett533/mgt3745-team-beta/pull/7)). I reviewed the specification ([#1](https://github.com/Kcornett533/mgt3745-team-beta/pull/1), [#3](https://github.com/Kcornett533/mgt3745-team-beta/pull/3), [#8](https://github.com/Kcornett533/mgt3745-team-beta/pull/8)), the architecture ([#4](https://github.com/Kcornett533/mgt3745-team-beta/pull/4), [#5](https://github.com/Kcornett533/mgt3745-team-beta/pull/5)), and the DACI ([#12](https://github.com/Kcornett533/mgt3745-team-beta/pull/12)).
- **Phase 2: Implementer.** I started F-02 ([#17](https://github.com/Kcornett533/mgt3745-team-beta/pull/17), DDR-003), took over Cloudflare ownership in `TOOLS.md` ([#19](https://github.com/Kcornett533/mgt3745-team-beta/pull/19)), and built and deployed F-01 to F-03 with Claude Code ([#20](https://github.com/Kcornett533/mgt3745-team-beta/pull/20), DDR-004). I also reviewed the Phase 2 roster ([#16](https://github.com/Kcornett533/mgt3745-team-beta/pull/16)) and requested changes on ADR-002 ([#21](https://github.com/Kcornett533/mgt3745-team-beta/pull/21)).
- **Final: Specifier, Reviewer, & Evaluator.** After two teammates withdrew, Kenneth and I split every role. I reviewed and merged the rotation PR ([#22](https://github.com/Kcornett533/mgt3745-team-beta/pull/22)), realigned CODEOWNERS and the README ([#23](https://github.com/Kcornett533/mgt3745-team-beta/pull/23)), and own `FEATURES.md` final, `EVALS.md` final, `docs/DDR-LOG.md`, the scaffold pruning, and most of `docs/RETRO.md`.

## One decision I would make differently

**I would have run the RAT interviews before building, even if we built less.** I wrote the RAT and its decision rule in Phase 1: 3 students and 2 recruiters by October 22. Then, as Phase 2 Implementer, I spent October 22 shipping F-01 to F-03 (#20 merged at 03:30 UTC October 23), and the interviews never happened. There are zero interview records in the repository, both user-facing Stakes (mine and Kenneth's) are still untested, and the DACI-001 reopen trigger fired without anyone acting on it. My own INT-03 interviewee was exactly the kind of student the RAT needed, so even one conversation would have tested half of my own Stake. We had a working build, but without measurement, we learned less than we could have from a smaller build with at least one interview.

A smaller issue was that my two Phase 1 review commits ("reviewer #1", "reviewer #2") went directly to `main`. Those are two of the ten direct Phase 1 commits counted in RETRO.md.

## The artifact I am proudest of

**My Changes Requested review on [#21](https://github.com/Kcornett533/mgt3745-team-beta/pull/21).** ADR-002 and the diagram still described our old HW4 app (the `evidence` table, `/api/evidence` on Pages, and `#15803d`) instead of what #20 had just deployed. I pointed out each mismatch and the file that showed it. The fix (`d42b9e2`) brought the architecture back in line with the build. This is the only check in Phases 1 and 2 that changed what the team actually did (see [Evals against plan](../RETRO.md#evals-against-plan)).

## My delegation record

| Tool | Used for | How I verified it | Record |
|---|---|---|---|
| Claude Code (Claude Opus 5.5) | Phase 2: build of F-01 to F-03 (Worker, D1 schema and seed, page, smoke tests), D1 creation and deploy under my Cloudflare login, the `TOOLS.md` Cloudflare row (#19), and the STYLE/SKILLS merge notes | Read every generated line before committing; `npm test` 4/4; live `GET`/`POST` checks against the deployed URL; checked for `innerHTML`, unbound SQL, new dependencies, and secrets | [DDR-004](../DDR-004.md) |
| Not recorded | F-02 validation drafts and DDR-003 wording | I did not record which tool I used. PR #17 incorrectly said `AI use: None`, and I am correcting that record here. | [DDR-003](../DDR-003.md) |
| Claude Code (Claude Opus 5.5) | Phase 3: review of #22, CODEOWNERS and README alignment, DDR-LOG, RETRO, Stake resolutions, scaffold pruning, and the first draft of this retrospective | Read every line; re-ran `npm test` and the live checks myself; checked every cited PR and commit against GitHub | [DDR-005](../DDR-005.md) |
| ChatGPT | Editing the wording of this retrospective | Checked every fact, PR number, and link against the original draft; added the missing rows myself | Disclosed here and in the PR #27 description |

I used no other AI tools in Phase 1. ChatGPT is not on the approved-tools list in `CLAUDE.md`, so I am disclosing it here.

What I learned about delegating: AI was most useful when I could check its output with tests, HTTP status codes, or grep for `innerHTML`. It was less reliable when the work needed judgment, like catching old HW4 names that had carried over into new files. ChatGPT did the same thing on this page: it dropped a row I asked for, and I only caught it by checking against the draft. That is the failure SKILLS.md now records.
