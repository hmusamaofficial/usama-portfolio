import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { profile, education } from "../src/data/profile.ts";
const file = "public/Muhammad-Usama-Resume.pdf";
const info = execFileSync("pdfinfo", [file], { encoding: "utf8" });
assert.match(
  info,
  /Pages:\s+1\b/,
  "Résumé must remain one readable page; revisit the layout if content grows.",
);
assert.match(info, /Page size:.*A4/, "Résumé must use A4 paper.");
assert.match(info, /Tagged:\s+yes/, "PDF must retain document tags.");
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const text = normalize(
  execFileSync("pdftotext", [file, "-"], { encoding: "utf8" }),
);
for (const expected of [
  profile.name,
  profile.employmentStatus,
  profile.email,
  profile.summary,
  ...profile.responsibilities,
  ...education.flatMap((e) => [e.degree, e.school]),
  "PROFESSIONAL SUMMARY",
  "EXPERIENCE",
  "TECHNICAL SKILLS",
  "SELECTED PROJECTS",
  "EDUCATION",
])
  assert.ok(
    text.includes(normalize(expected)),
    `PDF is stale or missing text: ${expected}`,
  );
const links = execFileSync("pdfinfo", ["-url", file], { encoding: "utf8" });
for (const url of [
  profile.url,
  profile.github,
  profile.linkedin,
  `mailto:${profile.email}`,
])
  assert.ok(links.includes(url), `Missing PDF hyperlink: ${url}`);
console.log(
  "Résumé verified: one tagged A4 page, current shared profile text, expected headings, and working hyperlink annotations.",
);
