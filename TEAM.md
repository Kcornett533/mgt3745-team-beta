# TEAM.md

## Working Agreement

- **Meetings.** We will meet once a week through Zoom or a group call for about 30 minutes. We will agree on the time through our group chat.
- **Channel.** We will use our group chat for regular communication. Changes to project files and decisions about project artifacts should be documented in GitHub pull requests or their comments.
- **Response time.** Team members should respond within 24 hours on weekdays and 48 hours on weekends. If someone needs more time, they should let the team know.
- **Quiet member clause.** After 48 hours without a response, we will send a reminder. After 72 hours, we will follow up again and ask whether the member needs help. After 96 hours without a response, if the delay affects the project, we will contact the instructor for guidance.
- **Disagreement.** We will first discuss disagreements in the group chat or during a meeting. If we cannot agree, a team member will document the options and trade-offs in a DACI document. The team will discuss the options and record the decision.
- **Dates.** We will set internal checkpoints for completing the Phase 1 documents, reviewing the requirements and architecture, completing evaluations, and checking that all required files are committed before the course deadline.

## Roster

| Name | Role | GitHub | Contact hours (ET) |
|---|---|---|---|
| Regina Choi | Specifier, Reviewer, & Evaluator | ReginaChoi | 17:00-00:00 |
| Kenneth Riley II | Architect & Implementer | kdotll | Flexible |
| Kamyaab Cornett | Withdrew From Course | Kcornett533 | Flexible |
| Rishi Ajith | Withdrew From Course | RishiA10 | Flexible |

## RACI Matrix (Phase 1)

R = Responsible (does the work), A = Accountable (answers for it; exactly one person, always a person), C = Consulted (asked before), I = Informed (told after). AI tools may be R or C and are never A. Every row where AI is R names the human A beside it.

| Artifact | Kenneth R. (Specifier) | Rishi A. (Architect) | Kamyaab C. (Implementer) | Regina C. (Reviewer) | AI tools |
|---|---|---|:---:|---|---|
| TEAM.md | C | C | A, R | C | |
| docs/DACI-001.md | A | C | R | C | |
| context/PROJECT.md | A | C | C | C | |
| context/USERS.md | A | C | C | C | |
| context/FEATURES.md | A | C | C | C | |
| context/ARCHITECTURE.md | C | A,R | C | C | |
| context/STANDARDS.md, TOOLS.md, CLAUDE.md | I | C | A, R | C | |
| .github/CODEOWNERS and branch protection | I | C | A, R | C | |
| docs/PROBE-001.md and docs/DDR-001.md | A | C | A (DDR), R | C | |
| context/EVALS.md (OST, RAT) | C | C | C | A, R | |
| context/EVALS.md (Prediction Stakes) | C | R | R | A, R | |
| Pull request reviews | R | R | C | A, R | |
| README.md | C | C | A, R | C | |

## RACI Matrix (Phase 2)

R = Responsible (does the work), A = Accountable (answers for it; exactly one person, always a person), C = Consulted (asked before), I = Informed (told after). AI tools may be R or C and are never A. Every row where AI is R names the human A beside it.

| Artifact | Kenneth R. (Architect) | Rishi A. (Reviewer) | Kamyaab C. (Specifier) | Regina C. (Implementer) | AI tools |
|---|---|---|:---:|---|---|
| TEAM.md | A, R | | | | |
| docs/DACI-001.md | I | | | | |
| context/PROJECT.md | C | | | | |
| context/USERS.md | C | | | | |
| context/FEATURES.md | C | | | | |
| context/ARCHITECTURE.md | A, R | | | | |
| context/STANDARDS.md, TOOLS.md, CLAUDE.md | C | | | | |
| .github/CODEOWNERS and branch protection | C | | | | |
| docs/PROBE-001.md and docs/DDR-001.md | I | | | | |
| context/EVALS.md (OST, RAT) | C | | | | |
| context/EVALS.md (Prediction Stakes) | C | | | | |
| Pull request reviews | R | | | | |
| README.md | C | | | | |

## RACI Matrix (Phase 3)

R = Responsible (does the work), A = Accountable (answers for it; exactly one person, always a person), C = Consulted (asked before), I = Informed (told after). AI tools may be R or C and are never A. Every row where AI is R names the human A beside it.

| Artifact | Kenneth R. (Architect & Implementer) | Rishi A. (Withdrew From Course) | Kamyaab C. (Withdrew From Course) | Regina C. (Specifier, Reviewer, & Evaluator) | AI tools |
|---|---|---|:---:|---|---|
| TEAM.md & context/CLAUDE.md | A, R |  | | C, I |  |
| context/ARCHITECTURE.md | A, R |  |  | C, I | C |
| docs/DEPLOY.md | A, R |  |  | C, I | R |
| Live Build & Worker Deployment | A, R | |  | C, I |  |
| Walkthrough Recording | A, R |  |  | C, I |  |
| Root README.md | A, R |  |  | C, I |  |
| context/FEATURES.md | C, I |  |  | A, R | C |
| docs/RETRO.md | C, I |  |  | A, R | |
| context/EVALS.md | C, I |  |  | A, R |  |
| Context Scaffold Pruning | C, I |  |  | A, R | |
| docs/DDR-LOG.md | C, I | |  | A, R | |
| Individual Retrospectives (docs/retro/<name>.md) | A, R (own file only) | | | A, R (own file only) | C |
| Pull Request Reviews | R | | | A, R | |

Each individual retrospective has one Accountable owner: its author. Each member reviews the other member's pull requests, so neither approves their own work; Regina Choi (Reviewer) is Accountable for review quality.

## Rotation Plan

Nobody holds the same role twice, and every role is filled in every phase.

> **Phase 3 exception (instructor-approved).** After the withdrawals of Kamyaab Cornett and Rishi Ajith, the instructor approved that the two remaining members are jointly responsible for all Phase 3 deliverables. Kenneth Riley II therefore holds Architect again (Phase 2 and Final), and Regina Choi holds Reviewer again (Phase 1 and Final).

| Member | Phase 1 | Phase 2 | Final |
|---|---|---|---|
| **Kamyaab Cornett** | Implementer | Specifier | Withdrew From Course |
| **Kenneth Riley II** | Specifier | Architect | Architect & Implementer |
| **Rishi Ajith** | Architect | Reviewer | Withdrew From Course |
| **Regina Choi** | Reviewer | Implementer | Specifier, Reviewer, & Evaluator |

---

## Meeting Log

| Date | Decision or note | Recorded by |
|---|---|---|
| **Sunday, October 4, 2026 (6:00 PM)** | Conducted first formal team sync after HW5 submission. Drafted working agreement, assigned Phase 1 roles, drew Approver by lot for DACI-001, and agreed on problem-selection criteria weights. | Kenneth Riley II |
| **Wednesday, October 7, 2026 (5:30 PM)** | Reviewed role artifact pull requests, reconciled STANDARDS.md conflicts, validated tools/governance files, and finalized README structure and cross-document link consistency before release. | Kamyaab Cornett |
| **Wednesday, October 14, 2026 (6:00 PM)** | Conducted first formal team sync after Phase 1 submission. clarified Phase 2 roles, created a timeline and plan on how we'll tackle each portion. | Kenneth Riley II |
| **Thursday, October 22, 2026 (3:00 PM)** | Informed of a workload shift within our team, discussed ideas to pivot, reached out to professor for extention and was denied. | Kenneth Riley II |
| **Wednesday, October 28, 2026 (7:00 PM)** | Final team sync for Phase 3 role rotation. Reconciled after withdrawals of Kamyaab Cornett and Rishi Ajith. Reassigned roles to 2-person structure. Updated Phase 3 RACI matrix and CLAUDE.md. | Kenneth Riley II |
