import Image from "next/image";
import { PageIntro, ContactCTA } from "@/components/Content";
import { profile, education } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "From chemistry to software quality: Muhammad Usama’s approach to testing, automation, and investigation.",
  "/about",
);
export default function About() {
  return (
    <div className="shell">
      <PageIntro
        label="ABOUT / THE PERSON BEHIND THE TESTS"
        title="Curiosity, with a method."
      >
        <p>
          I’m {profile.name}, an SQA engineer at {profile.company}. My
          background in chemistry shapes how I approach software: observe
          carefully, question assumptions, and look for reproducible evidence.
        </p>
      </PageIntro>
      <section className="split-section section">
        <div>
          <h2>
            From scientific questions
            <br />
            to software behavior.
          </h2>
          <p className="large-copy">
            ERP testing interests me because the details are connected. A change
            in one module can affect another person’s entire workflow.
          </p>
          <p>
            I combine exploratory testing with automation using Playwright,
            Python, and pytest. AI tools can support investigation and
            documentation, but application behavior and human judgment remain
            the basis for a conclusion.
          </p>
        </div>
        <div className="surface">
          <Image
            src="/portrait.jpg"
            alt="Muhammad Usama"
            width={160}
            height={160}
            className="portrait"
          />
          <p className="eyebrow">EDUCATION</p>
          {education.map((e) => (
            <article className="education-item" key={e.degree}>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <small>{e.detail}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">BEYOND THE WORK</p>
        <h2>Still curious after hours.</h2>
        <div className="three-grid">
          <article>
            <h3>Software development</h3>
            <p>
              Small projects are a way to understand implementation decisions
              from the other side of a bug report.
            </p>
          </article>
          <article>
            <h3>Chemistry</h3>
            <p>
              A lasting interest in analytical thinking, experimentation, and
              how evidence supports a conclusion.
            </p>
          </article>
          <article>
            <h3>Creative projects & gaming</h3>
            <p>
              Games offer room to experiment with interaction, state, and
              playful ideas—like my Panda Snake project.
            </p>
          </article>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
