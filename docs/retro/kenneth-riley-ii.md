# Individual Retrospective: Kenneth Riley II

## 1. Role History
* **Phase 1: Specifier & Probe Owner.** 
  - Initialized foundational specifications in [`context/PROJECT.md`](../../context/PROJECT.md), candidate/recruiter personas in [`context/USERS.md`](../../context/USERS.md), and foundational EARS acceptance criteria in [`context/FEATURES.md`](../../context/FEATURES.md) via PR [#1](https://github.com/Kcornett533/mgt3745-team-beta/pull/1), subsequently implementing reviewer feedback in PR [#8](https://github.com/Kcornett533/mgt3745-team-beta/pull/8).
  - Served as Accountable owner for the rapid technical spike in [`docs/PROBE-001.md`](../PROBE-001.md) evaluating Bolt.new prototype generation constraints and updated [`context/FEATURES.md`](../../context/FEATURES.md) to formally reflect probe discoveries via PR [#3](https://github.com/Kcornett533/mgt3745-team-beta/pull/3)

* **Phase 2: Architect.** 
  - Authored the system architecture, established ADR-002, and defined the D1 relational database schema in [`context/ARCHITECTURE.md`](../../context/ARCHITECTURE.md) via PR [#21](https://github.com/Kcornett533/mgt3745-team-beta/pull/21).
  - Re-architected data flows to prevent unvalidated client writes from reaching D1 storage.

* **Phase 3: Architect & Implementer.** 
  - Assumed dual responsibilities following team consolidation to two members recorded in PR [#22](https://github.com/Kcornett533/mgt3745-team-beta/pull/22).
  - Authored the deployment runbook [`docs/DEPLOY.md`](../DEPLOY.md) to ensure reproducibility from a clean checkout, provisioned the team's live Cloudflare D1 relational database (`498b72f2-22a4-47c2-a89d-53416a39616a`), executed remote schema/seed migrations, and deployed the edge Worker to [`team-beta-screening.kdotll.workers.dev`](https://team-beta-screening.kdotll.workers.dev) in PR [#30](https://github.com/Kcornett533/mgt3745-team-beta/pull/30).
  - Integrated the verified build onto `main`, finalized the production [`README.md`](../../README.md), made final updates to [`docs/DEPLOY.md`](../DEPLOY.md), [`context/ARCHITECTURE.md`](../../context/ARCHITECTURE.md), and [`context/TOOLS.md`](../../context/TOOLS.md)and recorded the final presentation walkthrough video via PR [#31](https://github.com/Kcornett533/mgt3745-team-beta/pull/31)

## 2. One Decision Made Differently, Tied to Evidence
If I were to start this project over, I would change how we verify candidate qualifications. In our deployed app, candidate triage relies almost entirely on self-reported form fields and dropdown selections. While our Cloudflare Worker successfully runs deterministic knockout logic to filter submissions, our evaluation of the build showed a major limitation where the system can only verify what a student *types*, not what they can actually *do*. An applicant can easily mark that they have internal control or audit experience without providing any real proof. If I could rebuild the system, I would design an artifact-first verification step, such as requiring candidates to upload a sample reconciliation workpaper or complete a short, scenario-based audit assessment. That would give recruiters actual evidence of competence rather than just a checked box.

## 3. Artifact Proudest Of
I am proudest of `docs/DEPLOY.md`. Because our team experienced mid-semester turnover and role restructuring, maintaining environment consistency and deployment clarity was one of our biggest hurdles. I wrote `DEPLOY.md` from scratch to bridge the gap between our raw code and the live Cloudflare infrastructure. It takes our complex repository and worker configurations and condenses it into a clear, reproducible runbook that passes the "stranger test". Knowing that anyone can clone our repo, follow those numbered steps, and have our app live in minutes makes it the most satisfying piece of work I completed.

## 4. Personal Delegation & AI Verification Record
- **Tools Used:** Gemini for idea brainstorming, technical outlining, and Markdown formatting assistance.
- **Verification Performed:** Every generated command in `docs/DEPLOY.md` was executed and verified live in the GitHub Codespaces environment against Wrangler CLI, ensuring zero broken dependencies or unauthenticated API assumptions. All code PR descriptions ended with the required AI Use declarations.