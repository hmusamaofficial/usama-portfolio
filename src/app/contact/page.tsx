import { PageIntro } from "@/components/Content";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Discuss ERP quality assurance, test automation, and engineering opportunities with Muhammad Usama.",
  "/contact",
);
export default function Contact() {
  return (
    <div className="shell">
      <PageIntro
        label="CONTACT / START A CONVERSATION"
        title="Let’s talk about your software."
      >
        <p>
          Have a project, a testing challenge, or an engineering opportunity?
          Share a little context and we can take it from there.
        </p>
      </PageIntro>
      <div className="contact-grid">
        <ContactForm />
        <aside className="contact-aside">
          <h2>Prefer a direct message?</h2>
          <section>
            <p className="eyebrow">EMAIL</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </section>
          <section>
            <p className="eyebrow">PROFESSIONAL PROFILES</p>
            <div className="footer-links">
              <a href={profile.linkedin}>LinkedIn ↗</a>
              <a href={profile.github}>GitHub ↗</a>
            </div>
          </section>
          <section>
            <p className="eyebrow">BASED IN</p>
            <p>{profile.location}</p>
            <small>
              Availability, scope, and response times depend on the inquiry.
            </small>
          </section>
        </aside>
      </div>
    </div>
  );
}
