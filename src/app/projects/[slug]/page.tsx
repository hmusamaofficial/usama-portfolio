import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro, ContactCTA } from "@/components/Content";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? pageMetadata(p.title, p.summary, `/projects/${slug}`) : {};
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <div className="shell">
      <PageIntro label={p.category} title={p.title}>
        <p>{p.summary}</p>
        <ul className="tags">
          {p.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </PageIntro>
      <article className="case-study section">
        {[
          ["Context", p.context],
          ["The work", p.work],
          ["Evidence & scope", p.evidence],
          ["Testing perspective", p.takeaway],
        ].map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        {p.href && (
          <a className="button primary" href={p.href}>
            Inspect the public source ↗
          </a>
        )}
        <Link className="text-link" href="/projects">
          ← All projects
        </Link>
      </article>
      <ContactCTA />
    </div>
  );
}
