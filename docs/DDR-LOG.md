# DDR-LOG.md

Status: ACTIVE
Accountable: Regina Choi (Final-phase Reviewer)

Every delegation to an AI tool across Phases 1 to 3, one row per Delegation Decision Record. The full record is in each linked file.

## Log

| DDR | Phase | Task delegated | Tool (model) | AI role | Human Accountable | Pull request | Hours delegated |
|---|---|---|---|---|---|---|---|
| [DDR-001](DDR-001.md) | 1 | Zero-shot specification probe of `FEATURES.md` | bolt.new (Claude 3.5 Sonnet) | R | Kenneth Riley II | #3 | **0.05** (the run took "under 3 minutes", per DDR-001) |
| [DDR-002](DDR-002.md) | 1 | Clarity and consistency review of Phase 1 documents | ChatGPT (model not recorded) | C | Rishi Ajith | #11 | **Not recorded** ("Time saved was not measured", per DDR-002) |
| [DDR-003](DDR-003.md) | 2 | F-02 validation decision and drafts | Not named ("AI assistance", per DDR-003) | R | Regina Choi | #17 | **Not recorded** |
| [DDR-004](DDR-004.md) | 2 | Build of F-01, F-02, F-03 (Worker, D1 schema, page, tests) and deploy | Claude Code (Claude Opus 5.5) | R | Regina Choi | #20 | **Not recorded** |
| [DDR-005](DDR-005.md) | 3 | PR #22 review fixes, CODEOWNERS, DDR log, RETRO, Stake resolutions, scaffold pruning, individual retro draft | Claude Code (Claude Opus 5.5) | R | Regina Choi | #22, #23, and the Phase 3 docs PRs | **About 1.5** (first commit 17:19 ET; session still running at 17:45 ET; the final figure is added before merge) |

**Net hours delegated:** 0.05 hours are recorded. None of the Phase 1 or Phase 2 DDRs logged time, so the sum cannot honestly be completed. This is a finding in [RETRO.md](RETRO.md#delegation-against-plan).

## What the timestamps show

GitHub timestamps give the window between the first commit and the merge for each delegated PR. That window covers human review and fixes, not the AI session itself, so it is listed as evidence, not as hours delegated.

| DDR | First commit (UTC) | Merged (UTC) | Window |
|---|---|---|---|
| DDR-001 | Oct 9, 00:28 | Oct 9, 00:48 | 20 min |
| DDR-002 | Oct 9, 03:45 | Oct 9, 03:47 | 2 min |
| DDR-003 | Oct 23, 00:51 | Oct 23, 01:11 | 20 min |
| DDR-004 | Oct 23, 03:12 | Oct 23, 03:30 | 18 min |

## Gaps found while compiling the log

1. **PR #17 says `AI use: None`**, but the DDR it added (DDR-003) says AI assistance was used. The PR and its record disagree.
2. **PR #21 says `AI Use: None`** and links no DDR. DDR-002 (ChatGPT, wording) predates it and covers Phase 1 architecture wording only.
3. **ChatGPT is not on the approved-tools list** in `context/CLAUDE.md` (rule 1), and DDR-002 does not record an exception.
4. **Claude Opus 5.5 is not on the approved-tools list** either. DDR-004 and DDR-005 record the deviation, but nobody formally confirmed it.
5. **No DDR records hours.** The template the team used has no hours field.
