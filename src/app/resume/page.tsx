import { profile, education } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import "./resume.css";
export const metadata = pageMetadata(
  "Résumé",
  "Muhammad Usama’s concise SQA and automation résumé: experience, skills, education, and selected projects.",
  "/resume",
);
export default function Resume() {
  return (
    <div className="resume-wrap">
      <div className="resume-toolbar">
        <p>Readable online. Ready for A4.</p>
        <a
          href="/Muhammad-Usama-Resume.pdf"
          className="button primary"
          download
        >
          Download PDF ↓
        </a>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <h1>{profile.name}</h1>
          <p className="resume-role">SQA Engineer · ERP Testing & Automation</p>
          <div className="resume-contact">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.url}>hmusama.vercel.app</a>
            <a href={profile.linkedin}>linkedin.com/in/hmusama</a>
            <a href={profile.github}>github.com/hmusamaofficial</a>
          </div>
        </header>
        <section>
          <h2>Professional summary</h2>
          <p>{profile.summary}</p>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="resume-job">
            <h3>
              {profile.role} · {profile.company}
            </h3>
            <span>{profile.joinedLabel} – Present</span>
          </div>
          <p className="resume-location">
            {profile.location} · Joined June 7, 2025
          </p>
          <ul>
            {profile.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Technical skills</h2>
          <p>
            <strong>Automation:</strong> Playwright, Python, pytest, browser
            automation
          </p>
          <p>
            <strong>Quality assurance:</strong> ERP workflows, exploratory and
            regression testing, test case design, defect reporting, permissions
            and integration checks
          </p>
          <p>
            <strong>Tools:</strong> Git, GitHub, Docker, VS Code, Ubuntu/Linux,
            Postman, SQL fundamentals
          </p>
        </section>
        <section>
          <h2>Selected projects</h2>
          <h3>
            ERP quality engineering <span>· Professional practice</span>
          </h3>
          <p>
            Manual investigation and automated checks for connected business
            workflows at Texinnova. Employer code and customer data remain
            private.
          </p>
          <h3>
            <a href="https://github.com/hmusamaofficial/Panda-Snake-Game">
              Panda Snake
            </a>{" "}
            <span>· Personal project</span>
          </h3>
          <p>
            JavaScript and HTML5 Canvas game with collision rules, wrapping and
            wall modes, adjustable speed, and keyboard/touch controls. Public
            source available on GitHub.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          {education.map((e) => (
            <div className="resume-education" key={e.degree}>
              <h3>
                {e.degree} <span>· {e.school}</span>
              </h3>
              {e.degree.startsWith("BS") && <p>2019–2023</p>}
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
