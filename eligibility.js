// eligibility.js
// Pure validation and eligibility rules, shared by worker.js and the node:test
// evals. No I/O here, so every rule can be tested without Cloudflare.

export const DISCIPLINES = ["Accounting", "Finance", "Accounting Information Systems", "Internal Audit"];
export const WORK_AUTHORIZATIONS = ["Citizen", "Permanent Resident", "F-1 OPT", "Verified Work Visa", "None"];
export const GOVERNANCE_COURSES = ["Auditing", "Accounting Information Systems", "Internal Controls"];
export const COURSEWORK_OPTIONS = [...GOVERNANCE_COURSES, "None"];

// F-01 criterion 2: "within the current academic cycle (<= 1 year from target intake)".
// The target intake year is a team assumption recorded in DDR-004.
export const TARGET_INTAKE_YEAR = 2027;

const FIELDS = ["candidateName", "degree", "graduationYear", "workAuthorization", "coursework", "artifactUrl"];

// F-02 Event-driven: missing, null, or empty fields are rejected with this exact message.
export const MISSING_FIELDS_ERROR = "Missing required verification fields";

function isBlank(value) {
  return value === undefined || value === null || String(value).trim() === "";
}

// Returns { ok: true, record } or { ok: false, error, fields }.
export function validatePayload(body) {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: MISSING_FIELDS_ERROR, fields: FIELDS };
  }
  const missing = FIELDS.filter((f) => isBlank(body[f]));
  if (missing.length > 0) {
    return { ok: false, error: MISSING_FIELDS_ERROR, fields: missing };
  }

  const record = {
    candidateName: String(body.candidateName).trim(),
    degree: String(body.degree).trim(),
    graduationYear: Number(body.graduationYear),
    workAuthorization: String(body.workAuthorization).trim(),
    coursework: String(body.coursework).trim(),
    artifactUrl: String(body.artifactUrl).trim(),
  };

  if (record.candidateName.length > 100) {
    return { ok: false, error: "Candidate name must be 100 characters or fewer", fields: ["candidateName"] };
  }
  if (!Number.isInteger(record.graduationYear) || record.graduationYear < 1950 || record.graduationYear > 2100) {
    return { ok: false, error: "Graduation year must be a four-digit year", fields: ["graduationYear"] };
  }
  if (!WORK_AUTHORIZATIONS.includes(record.workAuthorization)) {
    return { ok: false, error: "Work authorization must be one of the listed options", fields: ["workAuthorization"] };
  }
  if (!COURSEWORK_OPTIONS.includes(record.coursework)) {
    return { ok: false, error: "Coursework must be one of the listed options", fields: ["coursework"] };
  }
  if (!isHttpUrl(record.artifactUrl)) {
    return { ok: false, error: "Artifact URL must start with http:// or https://", fields: ["artifactUrl"] };
  }
  return { ok: true, record };
}

function isHttpUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

// F-01: four deterministic criteria, strictly binary result.
// Returns { status: "Eligible" | "Ineligible", unmet: string[] }.
export function evaluateEligibility(record) {
  const unmet = [];
  if (!DISCIPLINES.includes(record.degree)) {
    unmet.push("Degree must be Accounting, Finance, Accounting Information Systems, or Internal Audit");
  }
  const gap = TARGET_INTAKE_YEAR - record.graduationYear;
  if (gap < 0 || gap > 1) {
    unmet.push(`Graduation year must be ${TARGET_INTAKE_YEAR - 1} or ${TARGET_INTAKE_YEAR} (within 1 year of the ${TARGET_INTAKE_YEAR} intake)`);
  }
  if (record.workAuthorization === "None" || !WORK_AUTHORIZATIONS.includes(record.workAuthorization)) {
    unmet.push("Valid domestic work authorization is required");
  }
  if (!GOVERNANCE_COURSES.includes(record.coursework)) {
    unmet.push("At least one governance course is required (Auditing, Accounting Information Systems, or Internal Controls)");
  }
  return { status: unmet.length === 0 ? "Eligible" : "Ineligible", unmet };
}
