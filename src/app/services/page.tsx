import { PageIntro, ContactCTA } from "@/components/Content";
import { services } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Services",
  "ERP testing, browser automation, regression support, and clear QA documentation by Muhammad Usama.",
  "/services",
);
export default function Services() {
  return (
    <div className="shell">
      <PageIntro
        label="SERVICES / FOCUSED SUPPORT"
        title="A clearer picture of quality."
      >
        <p>
          Start with the application, its users, and the risk. Agree on the
          scope and deliverables before the testing begins.
        </p>
      </PageIntro>
      <div className="two-grid section">
        {services.map((s, i) => (
          <article className="surface" key={s.title}>
            <p className="eyebrow">0{i + 1}</p>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <section className="callout">
        <h2>What to include in an inquiry</h2>
        <p>
          Your product, the workflows that matter most, your timeline, and the
          type of support you need. Availability and scope are agreed
          individually.
        </p>
      </section>
      <ContactCTA />
    </div>
  );
}
