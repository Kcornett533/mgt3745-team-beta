// worker.js
// The API for the candidate screening prototype (ADR-001: Worker + D1).
// Static pages in public/ are served by Workers static assets from the same
// origin, so only /entries reaches this code and no cross-origin CORS is needed.

import { validatePayload, evaluateEligibility } from "./eligibility.js";

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };

function json(data, status) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

export default {
  async fetch(request, env) {
    // A thrown error becomes a readable 500 instead of "Error 1101".
    try {
      return await handle(request, env);
    } catch (err) {
      return json({ error: "server error: " + err.message }, 500);
    }
  },
};

async function handle(request, env) {
  const url = new URL(request.url);

  if (url.pathname !== "/entries") {
    return json({ error: "not found" }, 404);
  }
  if (!env.DB) {
    return json({ error: "server error: no D1 binding" }, 500);
  }

  // F-03 Event-driven: GET /entries returns all evaluations in chronological order.
  if (request.method === "GET") {
    const { results } = await env.DB.prepare(
      "SELECT id, candidate_name, degree, graduation_year, work_authorization, coursework, artifact_url, status, unmet_reasons, created_at FROM candidates ORDER BY created_at, id"
    ).all();
    return json(results.map(toApi), 200);
  }

  // F-02 / F-01 / F-03: validate, evaluate, then persist.
  if (request.method === "POST") {
    let body;
    try {
      body = await request.json();
    } catch {
      body = null;
    }

    // F-02 Event-driven: missing, null, or empty fields -> 400 with the specified JSON error.
    const result = validatePayload(body);
    if (!result.ok) {
      return json({ error: result.error, fields: result.fields }, 400);
    }

    // F-01: binary status; Ineligible records are still stored (ADR-001 Decision).
    const r = result.record;
    const { status, unmet } = evaluateEligibility(r);

    // F-03 Ubiquitous: parameterized insert through env.DB.
    const row = await env.DB.prepare(
      "INSERT INTO candidates (candidate_name, degree, graduation_year, work_authorization, coursework, artifact_url, status, unmet_reasons) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id, candidate_name, degree, graduation_year, work_authorization, coursework, artifact_url, status, unmet_reasons, created_at"
    ).bind(r.candidateName, r.degree, r.graduationYear, r.workAuthorization, r.coursework, r.artifactUrl, status, JSON.stringify(unmet)).first();

    // F-03 Event-driven: HTTP 201 with the persisted candidate data.
    return json(toApi(row), 201);
  }

  return json({ error: "method not allowed" }, 405);
}

function toApi(row) {
  return {
    id: row.id,
    candidateName: row.candidate_name,
    degree: row.degree,
    graduationYear: row.graduation_year,
    workAuthorization: row.work_authorization,
    coursework: row.coursework,
    artifactUrl: row.artifact_url,
    status: row.status,
    unmet: JSON.parse(row.unmet_reasons || "[]"),
    createdAt: row.created_at,
  };
}
