import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import monogram from "@/assets/monogram.png";

const About = () => {
  return (
    <Layout>
      <Section width="reading" className="pt-12">
        <p className="eyebrow mb-8">About the studio</p>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[1.05]">
          A small studio with a steady hand.
        </h1>
        <p className="lede mt-10">
          Echo in Ink is a founder-led practice for thoughtful digital work. We take on
          a handful of projects each year, and give each one the attention it deserves.
        </p>
      </Section>

      <Section width="reading">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          <img src={monogram} alt="Echo in Ink monogram" className="w-32 md:w-40" />
          <div className="body-prose space-y-6">
            <p>
              The studio began as a quiet experiment — a question about whether digital
              work could feel less rushed and more rooted. A place where ideas were given
              room to settle before becoming real.
            </p>
            <p>
              Today we partner with founders, makers, and independent teams who want to
              build something lasting. We work in close collaboration, often in a single
              shared room, and we measure success in how a thing feels to use.
            </p>
            <p>
              We are interested in restraint, in the texture of detail, and in the
              difference between busy and considered. We believe the most useful tools
              are the ones that respect attention.
            </p>
          </div>
        </div>
      </Section>

      <Section width="reading">
        <p className="eyebrow mb-8">Principles</p>
        <ul className="space-y-12">
          {principles.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-6">
              <span className="font-serif-display italic text-foreground/40 pt-1">0{i + 1}</span>
              <div>
                <h3 className="font-serif-display text-2xl md:text-3xl mb-3">{p.title}</h3>
                <p className="body-prose max-w-prose">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section width="reading" className="text-center">
        <div className="hairline mb-16" />
        <h2 className="font-serif-display text-3xl md:text-4xl">
          We'd love to know what you're working on.
        </h2>
        <Link to="/contact" className="btn-quiet mt-10">Say hello →</Link>
      </Section>
    </Layout>
  );
};

const principles = [
  { title: "Begin with listening.", body: "Every project starts with conversations, not deliverables. We try to understand the person before the brief." },
  { title: "Design with intention.", body: "Each decision should justify itself. If a detail isn't earning its place, we remove it." },
  { title: "Make room to breathe.", body: "Whitespace, silence, and pacing are part of the work. We treat them as carefully as type or color." },
  { title: "Stay close to the craft.", body: "The same hands that draw the early sketches finish the final files. Nothing is handed off into a void." },
];

export default About;
