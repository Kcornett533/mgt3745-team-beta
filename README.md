# Auditability and Verification Gate: Artifact-Based Student Competence Verification

## What

Computational workflows frequently lose data provenance across fragmented terminal logs and manual notes, making analytical results difficult to audit, verify, and reproduce.

## Team

| Member | Phase 1 role | Phase 2 role | Final role |
|---|---|---|---|
| **Kamyaab Cornett** | Implementer | Specifier | Withdrew from course |
| **Kenneth Riley II** | Specifier | Architect | Architect & Implementer |
| **Rishi Ajith** | Architect | Reviewer | Withdrew from course |
| **Regina Choi** | Reviewer | Implementer | Specifier, Reviewer, & Evaluator |

Working agreement, RACI matrix, and rotation plan: [TEAM.md](TEAM.md).

## Status

Phase 1 established the problem scope, domain model, architectural boundaries, and AI governance standards for the Auditability and Verification Gate. Phase 2 builds the core Cloudflare Worker API and D1 edge storage first, implementing EARS acceptance criteria for candidate evaluation uploads, cryptographic SHA-256 signature verifications, and status status responses.

## See It Work

Presentation: [Walkthrough Video](https://youtu.be/YOUR_LINK_HERE)

**Deployed URL:** https://team-beta-screening.kdotll.workers.dev

Enter a synthetic candidate profile and press **Evaluate and save**. The page shows a green **Eligible** or red **Ineligible** badge, names any unmet criteria, and adds the record to the triage list, which loads from D1. 

Screenshots: *to be added*.

## Build Status

| Feature | Class | State | Evidence |
|---|---|---|---|
| F-01 Accounting Compliance Knockout Gate | Must-be | Deployed; smoke tests pass | `test/eligibility.test.js`, live checks in [DDR-004](docs/DDR-004.md) |
| F-02 Strict Verification Schema & Error Gate | Must-be | Deployed; 400 + JSON error verified live | [DDR-004](docs/DDR-004.md) |
| F-03 Edge Relational Audit Persistence (D1) | Must-be | Deployed; POST 201 and GET /entries verified live | [DDR-004](docs/DDR-004.md) |
| F-04 to F-06 | Performance / Attractive | Not built | |

The full EVALS.md code evals are owned by the Reviewer. Judgment evals and Prediction Stakes are owned by the Evaluator and are recorded in [context/EVALS.md](context/EVALS.md).

**Run the tests:** `npm test` (Node 18 or later, no install needed).

**Deploy:** `npx wrangler d1 execute team-beta-candidates --remote --file=schema.sql`, then `--file=seed.sql`, then `npx wrangler deploy`.

## Links, in Reading Order

1. [TEAM.md](TEAM.md): who owns what
2. [docs/DACI-001.md](docs/DACI-001.md): why this problem
3. [context/PROJECT.md](context/PROJECT.md): the problem, reframed
4. [context/USERS.md](context/USERS.md): users and their jobs
5. [context/FEATURES.md](context/FEATURES.md): Kano and EARS
6. [docs/PROBE-001.md](docs/PROBE-001.md): what bolt.new had to guess
7. [context/ARCHITECTURE.md](context/ARCHITECTURE.md): the Gate, ADR-001, the diagram
8. [ADR-001: Cloudflare Worker and D1 Build Gate](context/ARCHITECTURE.md#adr-001-build-the-candidate-screening-prototype-with-cloudflare-worker-and-d1)
9. [ADR-002: Evidence Verification & Relational Schema](context/ARCHITECTURE.md#adr-002-formalize-cloudflare-worker-api-contracts-d1-relational-schema-and-evidence-verification)
10. [D1 Database Schema](context/ARCHITECTURE.md#d1-database-schema)
11. [DDR-003: Feature F-02 Implementation](docs/DDR-003.md)
12. [context/EVALS.md](context/EVALS.md): the tree, the RAT, every member's stake
13. [context/CLAUDE.md](context/CLAUDE.md), [context/STANDARDS.md](context/STANDARDS.md), [context/TOOLS.md](context/TOOLS.md): how we work
14. [docs/DDR-001.md](docs/DDR-001.md): the probe delegation
15. [STYLE.md](context/STYLE.md)
16. [SKILLS.md](context/SKILLS.md)

## AI Use

- **Specification Probing & Gap Identification**: Delegated to `bolt.new` (Claude 3.5 Sonnet) as documented in [docs/DDR-001.md](docs/DDR-001.md).
- **Standards & Policy Drafting**: Drafted with assistance from Claude 3.5 Sonnet and Gemini, reviewed and owned by Kamyaab Cornett as merged in Pull Request [#1](https://github.com/kcornett533/mgt3745-team-beta/pull/1).
