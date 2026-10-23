// app.js
// Client for the Candidate Compliance Gate. Same origin as the Worker API.
(function () {
  "use strict";

  const API = "/entries";
  const FIELDS = ["candidateName", "degree", "graduationYear", "workAuthorization", "coursework", "artifactUrl"];
  const LABELS = {
    candidateName: "Candidate name",
    degree: "Degree discipline",
    graduationYear: "Graduation year",
    workAuthorization: "Work authorization",
    coursework: "Completed governance course",
    artifactUrl: "Coursework artifact URL",
  };

  const form = document.getElementById("candidate-form");
  const statusEl = document.getElementById("status");
  const resultEl = document.getElementById("result");
  const listEl = document.getElementById("candidate-list");

  function clearFieldErrors() {
    FIELDS.forEach((f) => {
      document.getElementById(f + "-error").textContent = "";
      document.getElementById(f).removeAttribute("aria-invalid");
    });
  }

  function showFieldError(field, message) {
    const input = document.getElementById(field);
    if (!input) return;
    document.getElementById(field + "-error").textContent = message;
    input.setAttribute("aria-invalid", "true");
  }

  function setStatus(message, isError) {
    statusEl.textContent = message;
    statusEl.className = isError ? "error" : "";
  }

  // F-01 State-driven: Eligible in success green, Ineligible in error red.
  function badge(status) {
    const span = document.createElement("span");
    span.className = "badge " + (status === "Eligible" ? "badge-eligible" : "badge-ineligible");
    span.textContent = status;
    return span;
  }

  function renderResult(record) {
    const heading = document.createElement("p");
    heading.append(record.candidateName + ": ", badge(record.status));
    const children = [heading];
    // F-01 Unwanted-behavior: name each unmet requirement.
    if (record.unmet.length > 0) {
      const ul = document.createElement("ul");
      record.unmet.forEach((reason) => {
        const li = document.createElement("li");
        li.textContent = reason;
        ul.append(li);
      });
      children.push(ul);
    }
    resultEl.replaceChildren(...children);
    resultEl.hidden = false;
  }

  function renderList(records) {
    if (records.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No candidates saved yet.";
      listEl.replaceChildren(li);
      return;
    }
    listEl.replaceChildren(...records.map((r) => {
      const li = document.createElement("li");
      li.append(badge(r.status), " " + r.candidateName + " — " + r.degree + ", " + r.graduationYear);
      return li;
    }));
  }

  // F-03 Event-driven: load all evaluations on page load.
  async function loadCandidates() {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("bad status");
      renderList(await res.json());
    } catch {
      // F-03 Unwanted-behavior.
      setStatus("Unable to connect to backend server", true);
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearFieldErrors();
    resultEl.hidden = true;

    const payload = {};
    FIELDS.forEach((f) => { payload[f] = document.getElementById(f).value.trim(); });

    // F-02 Unwanted-behavior: halt submission and name each missing field.
    const missing = FIELDS.filter((f) => payload[f] === "");
    if (missing.length > 0) {
      missing.forEach((f) => showFieldError(f, LABELS[f] + " is required."));
      setStatus("Missing required verification fields: " + missing.map((f) => LABELS[f]).join(", "), true);
      document.getElementById(missing[0]).focus();
      return;
    }

    setStatus("Saving…", false);
    let res;
    try {
      res = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      setStatus("Unable to connect to backend server", true);
      return;
    }

    let data = null;
    try { data = await res.json(); } catch { data = null; }

    if (!res.ok) {
      // F-02 State-driven: show the error with textContent and keep the entered values.
      const message = data && data.error ? data.error : "Request failed with status " + res.status;
      setStatus(message, true);
      if (data && Array.isArray(data.fields)) data.fields.forEach((f) => showFieldError(f, message));
      return;
    }

    setStatus("Saved.", false);
    renderResult(data);
    form.reset();
    loadCandidates();
  });

  loadCandidates();
})();
