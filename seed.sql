-- seed.sql
-- Synthetic candidates only. No real person's data.
INSERT INTO candidates (candidate_name, degree, graduation_year, work_authorization, coursework, artifact_url, status, unmet_reasons) VALUES
  ('Test Candidate A', 'Accounting', 2027, 'Citizen', 'Auditing', 'https://example.com/workpaper-a', 'Eligible', '[]'),
  ('Test Candidate B', 'Finance', 2026, 'F-1 OPT', 'Internal Controls', 'https://example.com/controls-matrix-b', 'Eligible', '[]'),
  ('Test Candidate C', 'Marketing', 2027, 'Permanent Resident', 'Auditing', 'https://example.com/project-c', 'Ineligible', '["Degree must be Accounting, Finance, Accounting Information Systems, or Internal Audit"]'),
  ('Test Candidate D', 'Accounting Information Systems', 2024, 'None', 'None', 'https://example.com/repo-d', 'Ineligible', '["Graduation year must be 2026 or 2027 (within 1 year of the 2027 intake)","Valid domestic work authorization is required","At least one governance course is required (Auditing, Accounting Information Systems, or Internal Controls)"]');
