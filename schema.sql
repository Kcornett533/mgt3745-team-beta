-- schema.sql
-- One table: a candidate evaluation record (F-01, F-02, F-03).
-- status is derived by the Worker from the four F-01 criteria and is never
-- edited after insert (FEATURES.md Exclusions: no record mutation).
DROP TABLE IF EXISTS evidence;
CREATE TABLE IF NOT EXISTS candidates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  candidate_name TEXT NOT NULL,
  degree TEXT NOT NULL,
  graduation_year INTEGER NOT NULL,
  work_authorization TEXT NOT NULL,
  coursework TEXT NOT NULL,
  artifact_url TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('Eligible', 'Ineligible')),
  unmet_reasons TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
