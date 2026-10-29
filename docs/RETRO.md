# RETRO.md: Learn-Loop Retrospective

Status: ACTIVE
Accountable: Regina Choi (Final-phase Specifier, Reviewer, & Evaluator). Drafted with Claude Code ([DDR-005](DDR-005.md)).

This retrospective follows the order in the Phase 3 assignment. Every claim cites a pull request, commit, file, or a check anyone can re-run. Where the evidence does not exist, it says so.

---

## RAT verdict

**Riskiest assumption** (from [EVALS.md](../context/EVALS.md#riskiest-assumption-rat)): *Accounting students and recruiters will find it useful to evaluate accounting skills using actual coursework and project evidence.*

**The planned test:** interview at least 3 students or recent graduates and at least 2 recruiters by October 22. Continue if at least 2 of the 3 students can name real evidence they could submit, and at least 1 of the 2 recruiters says this kind of evidence would help them screen.

**Result: Untested.**

**Why:** No interview notes, participant counts, or user-test records were committed to the repository, and neither remaining member can confirm that the interviews took place. The October 22 meeting log records "a workload shift within our team" and a denied extension on the same day the interviews were due. Two of the four members then withdrew. The team used its remaining Phase 2 hours to ship the build (PR #20, merged 03:30 UTC October 23) instead of running the test.

**The decision rule was never applied.** [DACI-001](DACI-001.md#what-would-reopen-this) said to reopen the problem choice "if the team is unable to recruit at least 3 accounting/business students or recruiters ... by October 22, 2026." That trigger fired, and nobody reopened the decision or recorded that it had fired.

**What testing would have cost:** five interviews of about 30 minutes, plus scheduling and notes. That is roughly 4 to 5 person-hours in total (an estimate; no timing was logged), about 1 to 1.5 hours per member across four members. The team already had contacts in both groups: Regina's INT-03 interviewee was a 2025 accounting graduate, and Kenneth's INT-01 interviewee was a corporate recruiter (see [USERS.md](../context/USERS.md#research-sources)). The cost was small. What the team lacked was a person assigned to run the test: the Phase 2 RACI row for `context/EVALS.md (OST, RAT)` names no Responsible or Accountable person, only Kenneth as Consulted.

---

## Evals against plan

Every check listed in [EVALS.md](../context/EVALS.md), plus the code checks the team actually ran.

| Check | Source | Ran? | Result | Did it change anything? |
|---|---|---|---|---|
| RAT interviews (3 students, 2 recruiters) | EVALS.md, RAT | No | None | No. The build went ahead without it, which is the central finding of this retrospective. |
| Evaluation 1: Requirement clarity | EVALS.md | No | None | No |
| Evaluation 2: Evidence submission | EVALS.md | No | None | No |
| Evaluation 3: Verification and screening | EVALS.md | No | None | No |
| Evaluation 4: User value | EVALS.md | No | None | No |
| Stake: Regina Choi (evidence friction) | EVALS.md | No | Untested | No |
| Stake: Kamyaab Cornett (PR discipline, review catches) | EVALS.md | Yes, Phase 3 | Split: first half supported, second half refuted | Yes. It produced the "re-review after changes" decision below. |
| Stake: Kenneth Riley II (30-second triage) | EVALS.md | No | Untested | No |
| Stake: Rishi Ajith (persistence, 400 on malformed) | EVALS.md | Yes, Phase 3 | Supported | No. It confirmed the existing build. |
| `npm test`: 4 smoke checks on `eligibility.js` | [DDR-004](DDR-004.md) | Yes, Phase 2 and Phase 3 | 4 of 4 pass | No. They passed on the first run, so they never caught anything. Because they were written by the same tool that wrote the code, they test what the tool believed the spec said. |
| Live checks: `GET /`, `GET /entries`, empty `POST` (400), valid `POST` (201) | DDR-004 | Yes, Phase 2; read-only subset in Phase 3 | All pass | No |
| Human review of the F-01 to F-03 build | PR #20, Kenneth Riley II | Yes | Approved | No. The review is the independent check on the AI-built code, but it cites `#15803d` for the Eligible badge while the code uses `#1b8036`, so it did not read the stylesheet closely. |
| Human review of ADR-002 | PR #21, Regina Choi | Yes | Changes Requested: wrong table, route, and color | **Yes.** It produced commit `d42b9e2`, which aligned ADR-002 and the diagram with the built system. |

**Finding about the checks.** Every user-facing eval went unrun. Every check that did run was a code check, and only one of them (a human review on #21) changed what the team did. The automated checks never failed, which says more about how they were written than about the code.

**Independence.** Claude Code built F-01 to F-03 (DDR-004) and drafted this table (DDR-005). Its only role is assembling the evidence. Two independent checks stand beside it: Kenneth Riley II's review on #20, and Regina Choi re-running `npm test` and the live checks before approving this PR.

---

## Stakes resolved

Each Stake is quoted unchanged from [EVALS.md](../context/EVALS.md#prediction-stakes), with its resolution beneath. The full evidence is in EVALS.md.

**Regina Choi.** *"I predict that accounting students and recent graduates will find a clear list of role-related requirements useful, but some will struggle to identify strong evidence of their skills when they have limited internship or practical experience."*
> **Untested.** No student or graduate used the prototype.

**Kamyaab Cornett (Implementer).** *"I predict that our team will maintain 100% compliance with our pull request and review rules with zero direct commits to `main` during Phase 2. Enforcing our DOM safety rules and database input checks during code reviews will catch and fix at least two data formatting or payload bugs before any code is merged."*
> **Split.** Zero direct commits to `main` in Phase 2: **supported**. All five Phase 2 commits on `main` are merges (#16, #17, #19, #20, #21). At least two payload bugs caught in review: **refuted**. Reviews caught zero code bugs and one documentation and schema mismatch (#21). PR #21 merged without re-review after the fix, and the approvals on #17 and #20 describe code that was not in their diffs. 100% compliance with review rules: **refuted**, for the same reason, and because PRs #17 and #21 declare `AI use: None` while DDR-003 says AI assistance was used.

**Kenneth Riley II (Specifier).** *"When recruiters evaluate applicant profiles using the real-time filter gate, at least 85% will identify whether a candidate is Eligible or Ineligible in under 30 seconds without needing secondary transcript checks or asking clarifying questions."*
> **Untested.** No recruiter used the prototype. The real-time filter (F-04) was also not built.

**Rishi Ajith (Architect).** *"During Phase 2 testing, valid synthetic candidate records will survive a page reload and appear in a second browser. At least one request sent directly to the Worker with a missing required field will be rejected without creating a database row."*
> **Supported.** Records seeded on October 23 were still returned on October 29 by a client with no browser storage. A malformed POST returned 400, and the row count stayed at 5.

**Where our predictions were systematically off.** We predicted well about our own system and could not check our predictions about other people. Both Stakes that resolved (Rishi's and Kamyaab's) could be checked using only the repository and the deployed Worker. Both Stakes that depended on users (Regina's and Kenneth's) stayed untested. The error was not in what we predicted but in when: every Stake said "during Phase 2 testing with users", and nobody owned that testing. Kamyaab's Stake also shows a second bias. We predicted that the review *rules* would catch bugs, and the rules were followed in form (every Phase 2 change came through a PR) but not in substance (approvals that did not match the diff).

---

## Delegation against plan

### Phase 1 RACI and DACI beside what happened

| Plan (Phase 1 RACI, DACI-001) | What happened | Changed? Why? |
|---|---|---|
| The **AI tools column is empty on every row** of the Phase 1 and Phase 2 RACI. | AI was Responsible for the spec probe (bolt.new, DDR-001), Consulted on Phase 1 wording (ChatGPT, DDR-002), Responsible for F-02 drafts (DDR-003), and Responsible for the whole Phase 2 build (Claude Code, DDR-004). | Yes. The RACI described a plan with no delegation, and the DDRs record four. The RACI was never updated to match. |
| A human Accountable owner beside every AI row. | Held. Every DDR names a human: Kenneth (DDR-001), Rishi (DDR-002), Regina (DDR-003, DDR-004, DDR-005). | No |
| Approved tools: Claude 3.5 Sonnet / Claude 3 Opus, Gemini, Copilot, bolt.new (`CLAUDE.md` rule 1). | ChatGPT (DDR-002) and Claude Opus 5.5 (DDR-004, DDR-005) were used. DDR-004 and DDR-005 flag the deviation. DDR-002 does not. | Yes. The list was never amended. |
| Every PR has `## AI use`, linking a DDR when AI was used (`CLAUDE.md` rule 4). | #17 and #21 say `None`. DDR-003, added in #17 itself, says AI was used. | Yes. Undisclosed in two PRs. |
| DACI-001 Approver: Kenneth Riley II. Reopen if users can't be recruited by October 22. | Option A was built as planned. The reopen trigger fired and was ignored (see the RAT verdict). | No. It should have changed. |
| Four members rotate four roles (TEAM.md Rotation Plan). | Two members withdrew mid-semester. In Phase 3, two members hold all five roles, with instructor approval (PR #22). | Yes. The withdrawals forced it. |
| Kamyaab Cornett Accountable for the `CLAUDE.md`, `STANDARDS.md`, and `TOOLS.md` rules, and for CODEOWNERS. | `TOOLS.md` moved to Regina in Phase 2 (#19). CODEOWNERS still listed the withdrawn members until #23. | Partly. The withdrawals made the owners unreachable. |

### Net hours delegated

Summed from [DDR-LOG.md](DDR-LOG.md): **0.05 hours recorded** (the DDR-001 probe). DDR-002 to DDR-004 recorded no time, and DDR-005 is estimated at about 1 hour from timestamps. The honest total is "unknown, at least about 1 hour". The DDR template had no hours field, so nobody measured the trade the DDRs were meant to justify. Each DDR has an "Economic Rationale" section and no economic numbers.

---

## What we would build differently

Each decision is tied to the measurement that would have changed it.

1. **Run the RAT before writing the Worker.** *Measurement:* zero of the five planned interviews were recorded by the October 22 deadline, and the DACI-001 reopen trigger fired that day. If the decision rule had been applied, the team would have either confirmed that students can name evidence (worth building F-05 for) or revised the problem before spending the build. Instead, F-01 to F-03 shipped against an assumption with no data, and F-05 (artifact verification), the feature that most directly tests the RAT, was not built.

2. **Require re-review after Changes Requested, and require reviewers to quote the diff.** *Measurement:* of the three Phase 2 feature PRs, two approvals (#17 and #20) describe code that was not in the diff, and the one Changes Requested review (#21) was followed by a merge five minutes after the fix, with no re-review. A rule requiring "a reviewer cites a file and line from this diff" and "Changes Requested is cleared by the same reviewer" would have turned two of three approvals into real checks.

3. **Settle the F-01/F-02 schema conflict during Phase 1 review, not at build time.** *Measurement:* F-01 criterion 4 needs a coursework field, and F-02 listed five attributes without one. DDR-003 flagged the conflict on October 23, and DDR-004 resolved it by adding a sixth field without a spec PR. The conflict was visible in Phase 1. On October 9, Rishi commented on #3: "F-02's allowed payload only includes an artifact URL, with no field recording coursework completion. How will the Worker evaluate that requirement?" The comment arrived three hours after #3 merged, and no later PR answered it until DDR-004 did so in code. Resolving it there would have cost one EARS edit instead of an undocumented build-time decision.

---

## Spec findings

Every EARS change the project forced, with the pull request that made it.

| # | Change to FEATURES.md | What forced it | Pull request |
|---|---|---|---|
| 1 | F-01: status is strictly binary, with no `Conditionally Eligible` | bolt.new invented a third tier (PROBE-001 #1) | #3 (`f086149`) |
| 2 | Exclusions: no multi-page marketing routes | bolt.new added a landing page (PROBE-001 #2) | #3 |
| 3 | F-03: persistence is restricted to Cloudflare D1 via `env.DB` | bolt.new provisioned its own cloud database (PROBE-001 #3) | #3 |
| 4 | Exclusions: no record deletion or status mutation | bolt.new added delete and overwrite controls (PROBE-001 #4) | #3 |
| 5 | F-02: the payload is restricted to named attributes | bolt.new added institution and phone fields (PROBE-001 #5) | #3 |
| 6 | Explicit JOB-01 to JOB-03 trace IDs, deterministic F-01 rules, and an F-06 Unwanted-behavior row | Regina Choi's review on #3, items 1 to 3 | #8 (`ef6bdd3`) |
| 7 | F-02: adds the governance coursework declaration as a sixth attribute | F-01 criterion 4 could not be evaluated (DDR-003, DDR-004 decision 1) | The Phase 3 RETRO PR |
| 8 | F-01 criterion 2: names the target intake year 2027 | DDR-004 decision 2 had to assume it | The Phase 3 RETRO PR |
| 9 | F-01 criterion 3: names the `Verified Work Visa` and `None` options | DDR-004 decision 3 | The Phase 3 RETRO PR |

Five of the nine changes came from a three-minute AI probe (DDR-001). The probe was the most productive specification check the team ran, measured in EARS changes per hour.
