import Link from "next/link";
import { profile, skills } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import { ProjectCards, ContactCTA } from "@/components/Content";
export const metadata = pageMetadata(
  "SQA Engineer & Automation",
  profile.summary,
  "/",
);
export default function Home() {
  return (
    <div className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> SQA ENGINEER · LAHORE, PAKISTAN
          </p>
          <h1>
            Quality lives
            <br />
            in the <em>details.</em>
          </h1>
          <p className="hero-description">
            I’m {profile.name}. I test complex ERP workflows and build practical
            automation to make software behavior easier to trust.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="button secondary"
              href="/Muhammad-Usama-Resume.pdf"
              download
            >
              Download résumé ↓
            </a>
          </div>
          <p className="hero-note">
            {profile.company} · Playwright · Python · pytest
          </p>
        </div>
        <aside className="engineering-note" aria-label="My testing approach">
          <div className="note-heading">
            <span className="eyebrow">FIELD NOTES / QUALITY ENGINEERING</span>
            <span aria-hidden="true">↗</span>
          </div>
          <p className="note-title">
            Follow the workflow.
            <br />
            Question the assumptions.
          </p>
          <ol className="workflow">
            <li>
              <span>01</span>
              <div>
                <strong>Understand the risk</strong>
                <p>What matters to the people using it?</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Investigate the edges</strong>
                <p>States, permissions, data, and transitions.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Make it repeatable</strong>
                <p>Clear evidence. Focused automation.</p>
              </div>
            </li>
          </ol>
          <div className="note-footer">
            BUSINESS CONTEXT → TESTABLE BEHAVIOR
          </div>
        </aside>
      </section>
      <section className="expertise-strip" aria-label="Areas of focus">
        <span>ERP SYSTEMS</span>
        <span>TEST AUTOMATION</span>
        <span>EXPLORATORY TESTING</span>
        <span>SCIENTIFIC THINKING</span>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Practice, with context.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects ↗
          </Link>
        </div>
        <ProjectCards limit={2} />
      </section>
      <section className="section split-section">
        <div>
          <p className="eyebrow">02 / HOW I WORK</p>
          <h2>
            A scientific mindset.
            <br />
            An engineering focus.
          </h2>
          <p className="large-copy">
            Chemistry taught me to investigate carefully. Software testing gives
            that habit a new application.
          </p>
          <Link className="text-link" href="/about">
            The story behind my work ↗
          </Link>
        </div>
        <div className="capability-list">
          {skills.slice(0, 3).map((s) => (
            <article key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
