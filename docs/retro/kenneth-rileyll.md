# Individual Retrospective: Kenneth Riley II

## 1. Role History
- **Phase 1:** Specifier
- **Phase 2:** Architect
- **Phase 3:** Implementer & Architect

## 2. One Decision Made Differently, Tied to Evidence
If I were to start this project over, I would change how we verify candidate qualifications. In our deployed app, candidate triage relies almost entirely on self-reported form fields and dropdown selections. While our Cloudflare Worker successfully runs deterministic knockout logic to filter submissions, our user testing and project evaluations showed a major limitation where the system can only verify what a student *types*, not what they can actually *do*. An applicant can easily mark that they have internal control or audit experience without providing any real proof. If I could rebuild the system, I would design an artifact-first verification step, such as requiring candidates to upload a sample reconciliation workpaper or complete a short, scenario-based audit assessment. That would give recruiters actual evidence of competence rather than just a checked box.

## 3. Artifact Proudest Of
I am proudest of `docs/DEPLOY.md`. Because our team experienced mid-semester turnover and role restructuring, maintaining environment consistency and deployment clarity was one of our biggest hurdles. I wrote `DEPLOY.md` from scratch to bridge the gap between our raw code and the live Cloudflare infrastructure. It takes our complex repository and worker configurations and condenses it into a clear, reproducible runbook that passes the "stranger test". Knowing that anyone can clone our repo, follow those numbered steps, and have our app live in minutes makes it the most satisfying piece of work I completed.

## 4. Personal Delegation & AI Verification Record
- **Tools Used:** Gemini for idea brainstorming, technical outlining, and Markdown formatting assistance.
- **Verification Performed:** Every generated command in `docs/DEPLOY.md` was executed and verified live in the GitHub Codespaces environment against Wrangler CLI, ensuring zero broken dependencies or unauthenticated API assumptions. All code PR descriptions ended with the required AI Use declarations.