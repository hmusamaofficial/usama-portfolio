import { PageIntro, ContactCTA } from "@/components/Content";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Experience",
  "Muhammad Usama’s SQA engineering work at Texinnova: ERP testing and practical automation.",
  "/experience",
);
export default function Experience() {
  return (
    <div className="shell">
      <PageIntro
        label="EXPERIENCE / PROFESSIONAL PRACTICE"
        title="Quality across connected systems."
      >
        <p>
          Business context, careful investigation, and automation that supports
          repeatable checks.
        </p>
      </PageIntro>
      <section className="experience section">
        <div>
          <p className="eyebrow">{profile.employmentStatus} ROLE</p>
          <p>{profile.location}</p>
        </div>
        <article>
          <h2>{profile.role}</h2>
          <a className="text-link" href="https://texinnova.com/">
            {profile.company} ↗
          </a>
          <p className="large-copy">
            ERP software quality assurance and automation.
          </p>
          <ul className="plain-list">
            {profile.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div className="callout">
            Professional work is described at a high level. Employer code,
            internal systems, and customer information are kept private.
          </div>
        </article>
      </section>
      <ContactCTA />
    </div>
  );
}
