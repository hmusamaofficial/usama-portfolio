import Link from "next/link";
import { projects } from "@/data/profile";
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </div>
  );
}
export function ProjectCards({ limit = projects.length }: { limit?: number }) {
  return (
    <div className="project-grid">
      {projects.slice(0, limit).map((p, i) => (
        <article className="project-card" key={p.slug}>
          <div className="project-top">
            <span className="project-number">0{i + 1}</span>
            <span className="eyebrow">{p.category}</span>
          </div>
          <h3>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </h3>
          <p>{p.summary}</p>
          <ul className="tags" aria-label="Technologies">
            {p.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Link className="text-link" href={`/projects/${p.slug}`}>
            Read the case study <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">LET’S TALK QUALITY</p>
        <h2>Have a workflow worth getting right?</h2>
        <p>
          Tell me what you’re building and where you need a careful pair of
          eyes.
        </p>
      </div>
      <Link className="button primary" href="/contact">
        Start a conversation ↗
      </Link>
    </section>
  );
}
