# EVALS.md

Accountable: Regina Choi (Final-phase Evaluator; Reviewer in Phase 1). This file holds our opportunity solution tree, our riskiest assumption, the evals we planned for Phase 2, and each member's prediction. Phase 3 added a resolution under each Stake and left the text above it unchanged. The full accounting of every check is in [docs/RETRO.md](../docs/RETRO.md).

**Phase 3 status:** The RAT and Evaluations 1 to 4 were **not run** (see [RETRO.md](../docs/RETRO.md#rat-verdict)). The code checks that did run are listed in [Evals against plan](../docs/RETRO.md#evals-against-plan).

## Opportunity Solution Tree

```mermaid
flowchart TD
    O["Outcome: Help accounting and finance students demonstrate entry-level audit readiness through verifiable evidence"]

    O --> P1["Opportunity 1: Students lack clarity about the skills employers expect"]
    O --> P2["Opportunity 2: Students struggle to demonstrate skills beyond coursework and self-reported claims"]
    O --> P3["Opportunity 3: Recruiters need to verify qualifications efficiently"]

    P1 --> S1["Solution: Provide a clear list of role-related requirements"]
    P2 --> S2["Solution: Let students submit coursework and project evidence"]
    P3 --> S3["Solution: Provide transparent eligibility checks and filtering"]

    S1 --> A1["Test: Ask accounting students whether the requirements are clear and useful"]
    S2 --> A2["Test: Ask students and recruiters whether submitted evidence helps demonstrate readiness"]
    S3 --> A3["Test: Ask recruiters whether the proposed checks match actual screening needs"]
```

## Riskiest Assumption (RAT)

**Assumption:** Accounting students and recruiters will find it useful to evaluate accounting skills using actual coursework and project evidence.

**Where it comes from in the tree:** This is the assumption test under Solution 2 (let students submit coursework and project evidence). If this fails, Solutions 1 and 3 do not matter much, because the checks would have nothing real to look at.

**Why it is risky:** Students may not have enough practical experience to provide this evidence, and recruiters may prefer their existing screening methods. Our interviews support parts of the problem, but they do not prove that users would use our proposed tool.

**Test:** Interview accounting students or recent graduates and recruiters about how they currently prepare for or evaluate entry-level accounting applications. Ask them to review the proposed requirements and explain whether the evidence would help them.

**Evidence to collect:** Examples of evidence students can provide, how recruiters currently check qualifications, and specific feedback about the proposed tool.

**Deadline:** We will run these interviews by October 22, so the results can change Phase 2 before we build too much.

**Decision rule:** We will talk to at least 3 students or recent graduates and at least 2 recruiters. We continue with the current solution if at least 2 of the 3 students can name a real piece of coursework or project evidence they could submit, and at least 1 of the 2 recruiters says this kind of evidence would help them screen. If fewer people say that, we revise the problem or the solution before building more.


## Evals Planned for Phase 2

### Evaluation 1: Requirement Clarity

* **Question:** Can accounting students understand the role requirements and identify what they need to demonstrate?
* **Method:** Ask students or recent graduates to review the proposed requirements and explain them in their own words.
* **Evidence:** Record misunderstandings, questions, and whether participants can identify relevant next steps.

### Evaluation 2: Evidence Submission

* **Question:** Can a student identify relevant coursework or project evidence and associate it with the appropriate skill or requirement?
* **Method:** Ask a participant to complete a representative evidence-submission task using the prototype.
* **Evidence:** Record task completion, errors, confusion, and feedback.

### Evaluation 3: Verification and Screening

* **Question:** Can a recruiter understand the eligibility result and identify which requirements a candidate meets or does not meet?
* **Method:** Ask a recruiter or a suitable proxy to evaluate example candidate profiles using the proposed checks.
* **Evidence:** Record incorrect interpretations, missing information, and whether the results are understandable.

### Evaluation 4: User Value

* **Question:** Does the proposed tool address a problem that students or recruiters actually experience?
* **Method:** Compare prototype feedback with examples from participant interviews about their existing preparation or screening process.
* **Evidence:** Record supporting evidence, contradictory evidence, and changes needed to the proposed solution.

## Prediction Stakes

### Prediction Stake: Regina Choi

**Prediction:** I predict that accounting students and recent graduates will find a clear list of role-related requirements useful, but some will struggle to identify strong evidence of their skills when they have limited internship or practical experience.

**Reasoning:** The team's research includes an interview with a 2025 accounting graduate who struggled to identify the skills employers expected and lacked internship evidence to point to. However, one interview does not establish how common this experience is.

**What would support my prediction:** During Phase 2 evaluation, participants identify the requirements as useful but have difficulty connecting their coursework or projects to the evidence requested.

**What would contradict my prediction:** Participants consistently identify appropriate evidence without difficulty, or they do not find the requirements useful.

**When to check:** During Phase 2, after the team tests the relevant prototype with intended users.

**Resolution (Phase 3, October 29, 2026): Untested.** The prototype was never tested with students or recent graduates, so there is no evidence either way about whether participants find the requirements useful or struggle to connect their coursework to evidence. The only evidence behind the prediction is still the single INT-03 interview it started from.

### Prediction Stake: Kamyaab Cornett (Implementer)

**Prediction:** I predict that our team will maintain 100% compliance with our pull request and review rules with zero direct commits to `main` during Phase 2. Enforcing our DOM safety rules and database input checks during code reviews will catch and fix at least two data formatting or payload bugs before any code is merged.
  
**Reasoning:** In HW5 and individual projects, unvalidated inputs and direct branch edits caused silent UI breakages and database errors. Having strict branch protection, CODEOWNERS enforcement, and clear review standards creates a reliable filter before code reaches production.

**What would support my prediction:** Review logs on pull requests show identified input/formatting issues that were corrected before merging, and zero direct commits appear on `main`.

**What would contradict my prediction:** Unvetted code bypasses PR review into `main`, or input validation errors slip through into production without being caught during review.

**When to check:** At the conclusion of Phase 2, by inspecting the repository's git commit history, pull request review logs, and database error traces.

**Resolution (Phase 3, October 29, 2026): Split. The first half is supported; the second half is refuted.**
- *Zero direct commits to `main` during Phase 2: supported.* All five Phase 2 commits on `main`'s first-parent history are pull request merges (#16, #17, #19, #20, #21). Phase 1 had ten direct commits to `main` between October 7 and 9, made before protection was in place.
- *Reviews catch at least two data formatting or payload bugs before merge: refuted.* No Phase 2 review caught a code payload bug. One review (Regina Choi on #21, Changes Requested) caught a schema mismatch in the documentation: ADR-002 described the old `evidence` table, the `/api/evidence` route, and the color `#15803d` instead of the built `candidates` table, `/entries`, and `#1b8036`. That was fixed in `d42b9e2` before merge, but #21 merged five minutes later with no re-review. The approving review on #20 cites `#15803d`, which is not in its diff. The approving review on #17 accurately cites the HW4 `bind(pathId, skillName, evidenceText)` call that *was* in its diff, but it cites color tokens (`#0f172a`, `#15803d`) that are not, and does not flag that the PR titled F-002 contained the HW4 evidence-tracker code. *(Corrected in Phase 3; the first version of this resolution said both reviews described code absent from their diffs. See judgment eval J6.)*
- *Database error traces* were not inspected. No error logging was set up.

### Prediction Stake: Kenneth Riley II (Specifier)

**Prediction:** When recruiters evaluate applicant profiles using the real-time filter gate, at least 85% will identify whether a candidate is Eligible or Ineligible in under 30 seconds without needing secondary transcript checks or asking clarifying questions.

**Reasoning:** In HW2 INT-01 recruiter discovery, recruiters reported spending under 45 seconds per resume and facing fatigue from unstructured, keyword-stuffed submissions. Grounding the intake gate in four explicit deterministic rules (accredited degree, graduation timeline, work authorization, and required governance coursework) produces an unambiguous binary outcome that removes recruiter guesswork.

**What would support my prediction:** Recruiters or user testers triage candidate profiles in under 30 seconds each, with 85% or higher accuracy in identifying the exact qualifying or failing criterion.

**What would contradict my prediction:** Reviewers take longer than 45 seconds per profile, or more than 15% misinterpret the reason why a candidate received an Ineligible status.

**When to check:** During user testing of the working prototype before the final project submission.

**Resolution (Phase 3, October 29, 2026): Untested.** No recruiter or user tester triaged profiles on the prototype, so there is no timing or accuracy data. The deployed page does name each unmet criterion beside an `Ineligible` badge (F-01 Unwanted-behavior), which is the mechanism the prediction relies on, but a mechanism is not a measurement.

### Prediction Stake: Rishi Ajith (Architect)

**Prediction:** During Phase 2 testing, valid synthetic candidate records will survive a page reload and appear in a second browser. At least one request sent directly to the Worker with a missing required field will be rejected without creating a database row.

**Reasoning:** Cloudflare D1 should preserve records independently of browser storage. Server-side validation should enforce required fields even when a request skips the form.

**What would support my prediction:** A saved record appears after reloading and in a second browser. The malformed request returns HTTP 400, and no corresponding row is stored.

**What would contradict my prediction:** The saved record disappears, cannot be retrieved in the second browser, or the Worker stores the malformed submission.

**When to check:** During Phase 2 integration testing, using synthetic data.

**Resolution (Phase 3, October 29, 2026): Supported, with one substitution.**
- *Persistence:* all five synthetic records from October 23 (four from `seed.sql` at 03:10 UTC, and one valid `POST` from the DDR-004 live check at 03:11 UTC) were still returned by `GET /entries` on October 29, from a client with no browser storage (`curl`). A second browser was not literally used; a client with no shared storage stands in for it.
- *Malformed request:* `POST /entries` with five required fields missing returned HTTP 400 and `{"error":"Missing required verification fields","fields":[...]}`. The row count stayed at 5 before and after.
- *Who checked:* these checks were run by Claude Code (DDR-005), which also built the Worker (DDR-004). Regina Choi re-ran them on October 29 (PR #25), so the tool that built the feature is not its only grader.

## Where the Stakes Disagree

- **Candidate Artifact Friction vs. Recruiter Triage Speed:** Regina predicts candidates will struggle to supply tangible artifact evidence due to limited internship experience. Kenneth predicts that as long as the intake rules are deterministic, recruiters will triage applicants in under 30 seconds regardless of artifact depth. If candidates cannot identify evidence, recruiter triage may stall on incomplete inputs rather than speed up.

## Judgment Evals: RETRO.md Claims (Phase 3)

Each load-bearing claim in [docs/RETRO.md](../docs/RETRO.md) was checked against the primary evidence: the git history, the PR diffs and reviews on GitHub, or the deployed Worker. A claim **passes** only if the evidence shows it as worded. Claude Code drafted RETRO.md (DDR-005), so it ran the mechanical checks below but is not the judge: Regina Choi (Evaluator) checked each row against the linked evidence before approving this PR.

| # | Claim in RETRO.md | How it was checked | Evidence found | Verdict |
|---|---|---|---|---|
| J1 | The RAT was untested | Searched the repository tree for interview, notes, user-test, or RAT data files. Asked Kenneth for any notes (PR #25, issue #28). | No such files; no notes supplied | **Pass.** Absence in the repo is not proof the interviews never happened, so the verdict is "untested", not "refuted". |
| J2 | The DACI-001 reopen trigger fired on October 22 and nobody acted on it | `git log -- docs/DACI-001.md` | Last change is `5beb673` on October 9 | **Pass** |
| J3 | Zero direct commits to `main` in Phase 2 | `git log --first-parent --no-merges --since=2026-10-10 --until=2026-10-24 main` | 0 commits | **Pass** |
| J4 | Ten direct commits to `main` in Phase 1 | Same command up to October 10, excluding the initial commit | 10 commits | **Pass** |
| J5 | #21 merged about five minutes after the fix, with no re-review | `gh pr view 21`: review times and merge time; commit time of `d42b9e2` | Changes Requested 03:20:56Z; fix 03:53:54Z; merge 03:58:39Z; no later review | **Pass** (4 min 45 s) |
| J6 | "The approvals on #17 and #20 describe code that was not in their diffs" | `gh pr diff 17` and `gh pr diff 20`, searched for each value the reviews cite | #20: `#15803d` is absent from its diff. #17: `bind(pathId, skillName, evidenceText)` **is** in its diff (worker.js), while `#0f172a` and `#15803d` are not. | **Fail as worded.** It was half true. Corrected in RETRO.md and in Kamyaab's Stake resolution: the #17 review described the diff it had, but did not notice that the diff was HW4 code, not F-002. |
| J7 | Rishi's Stake is supported (persistence, plus a 400 on a malformed request) | Re-run by Regina Choi on October 29 (comment on PR #25) | 5 records from October 23; empty POST returned 400; count unchanged | **Pass.** The re-run also corrected "five seeded" to "four seeded plus one live POST". |
| J8 | #17 and #21 declare no AI use, while DDR-003 says AI was used | PR bodies and DDR-003 | #17: `## AI use` None. #21: `AI Use: None`. DDR-003: "AI assistance was used" | **Pass** |
| J9 | Spec findings 1 to 5 came from PROBE-001 via #3 | `git show --stat f086149` | Changes `FEATURES.md`, `PROBE-001.md`, and `DDR-001.md` | **Pass** |
| J10 | "Only one check changed what the team did" | Reviewed every row of the evals-against-plan table | True for Phases 1 and 2. In Phase 3, J6 and J7 also changed documents. | **Fail as worded.** Narrowed to "in Phases 1 and 2", with the Phase 3 changes listed. |
| J11 | Each "build differently" decision is tied to a measurement | Read each decision for a number or a record that would have changed it | 1: zero interviews and the DACI trigger. 2: review and merge timestamps and diff contents (J5, J6). 3: Rishi's #3 comment and DDR-003/004. | **Pass** |
| J12 | RETRO.md follows the assignment's section order | Compared the headings with the Phase 3 brief | RAT, Evals, Stakes, Delegation, Build differently, Spec findings | **Pass** |

**Result:** 10 of 12 claims pass as written. The two that failed (J6 and J10) were overstated, not invented: each had a true core and wording broader than the evidence. Both were corrected in this PR. The pattern matches what RETRO.md says about the reviews: claims got checked against what we expected to find rather than against the diff itself.
