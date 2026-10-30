import { PageIntro, ContactCTA } from "@/components/Content";
import { skills } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Skills",
  "Practical QA skills: ERP testing, Playwright, Python, pytest, Git, Docker, and Linux.",
  "/skills",
);
export default function Skills() {
  return (
    <div className="shell">
      <PageIntro
        label="SKILLS / TOOLS WITH A PURPOSE"
        title="A practical testing toolkit."
      >
        <p>
          Capabilities described by their use in the work. No percentage bars or
          claims of mastery.
        </p>
      </PageIntro>
      <div className="two-grid section">
        {skills.map((s, i) => (
          <section className="surface" key={s.title}>
            <p className="eyebrow">0{i + 1} / PRACTICE</p>
            <h2>{s.title}</h2>
            <p>{s.detail}</p>
            <ul className="plain-list">
              {s.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ContactCTA />
    </div>
  );
}
