// Smoke checks the Implementer ran on the delegated code (DDR-004).
// The Reviewer owns the full EVALS.md code evals.
import { test } from "node:test";
import assert from "node:assert/strict";
import { validatePayload, evaluateEligibility, MISSING_FIELDS_ERROR } from "../eligibility.js";

const good = {
  candidateName: "Test Candidate", degree: "Accounting", graduationYear: 2027,
  workAuthorization: "Citizen", coursework: "Auditing", artifactUrl: "https://example.com/x",
};

test("F-02: empty field is rejected with the specified error", () => {
  const r = validatePayload({ ...good, degree: "" });
  assert.equal(r.ok, false);
  assert.equal(r.error, MISSING_FIELDS_ERROR);
  assert.deepEqual(r.fields, ["degree"]);
});

test("F-02: null body is rejected", () => {
  assert.equal(validatePayload(null).ok, false);
});

test("F-01: all four criteria met -> Eligible", () => {
  const r = validatePayload(good);
  assert.deepEqual(evaluateEligibility(r.record), { status: "Eligible", unmet: [] });
});

test("F-01: each failed criterion is named -> Ineligible", () => {
  const r = validatePayload({ ...good, degree: "Marketing", graduationYear: 2020, workAuthorization: "None", coursework: "None" });
  const e = evaluateEligibility(r.record);
  assert.equal(e.status, "Ineligible");
  assert.equal(e.unmet.length, 4);
});
