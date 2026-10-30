import { PageIntro, ProjectCards, ContactCTA } from "@/components/Content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Projects",
  "QA practice and public development projects, with implementation context, evidence, and clear attribution.",
  "/projects",
);
export default function Projects() {
  return (
    <div className="shell">
      <PageIntro
        label="PROJECTS / EVIDENCE & EXPLORATION"
        title="The work behind the tools."
      >
        <p>
          Professional practice and personal projects, with a clear distinction
          between private work and publicly inspectable code.
        </p>
      </PageIntro>
      <section className="section">
        <ProjectCards />
      </section>
      <section className="surface">
        <h2>More experiments</h2>
        <p>
          A small coin-flip game is also available in my public repositories.
        </p>
        <a
          className="text-link"
          href="https://github.com/hmusamaofficial/head-and-tail-game"
        >
          Head & Tail Game on GitHub ↗
        </a>
      </section>
      <ContactCTA />
    </div>
  );
}
