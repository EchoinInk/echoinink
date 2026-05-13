import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Link } from "react-router-dom";

const services = [
  { n: 1, title: "Brand Systems",
    body: "Names, marks, voice, and the small grammar of a brand. We help studios and small companies arrive at an identity that feels truthful and easy to live with.",
    deliverables: ["Identity & monogram", "Type & color systems", "Voice & messaging", "Brand guidelines"] },
  { n: 2, title: "Digital Experiences",
    body: "Editorial websites and considered marketing surfaces. We design every page like a chapter — pacing, atmosphere, and a clear argument for attention.",
    deliverables: ["Marketing sites", "Editorial platforms", "Launch experiences", "Microsites"] },
  { n: 3, title: "Creative Direction",
    body: "A steady creative hand across longer engagements: art direction, photography, type, and the through-line that holds it all together.",
    deliverables: ["Art direction", "Campaign concepts", "Type & image curation", "Studio partnerships"] },
  { n: 4, title: "Design Systems",
    body: "Foundations for teams who want their product to feel unhurried at any scale. We build calm, legible systems that hold up over time.",
    deliverables: ["Token & theme systems", "Component libraries", "Accessibility foundations", "Documentation"] },
  { n: 5, title: "Thoughtful Product Design",
    body: "Native and web products designed around real attention — slow tools, reading apps, journaling spaces, quiet utilities.",
    deliverables: ["Product design", "Interaction studies", "Prototyping", "Hand-off & build support"] },
];

const Process = () => {
  return (
    <Layout>
      <Section width="reading" className="pt-12">
        <p className="eyebrow mb-8">Process</p>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[1.05]">
          How we work together.
        </h1>
        <p className="lede mt-10">
          Our process is collaborative and unhurried. We believe the best work emerges
          from deep listening and careful consideration.
        </p>
      </Section>

      <Section width="reading">
        <div className="space-y-24">
          {services.map((s) => (
            <div key={s.title} className="grid md:grid-cols-[5rem_1fr] gap-6 md:gap-10">
              <div className="font-serif-display italic text-foreground/40 text-lg">0{s.n}</div>
              <div>
                <h2 className="font-serif-display text-3xl md:text-4xl mb-5">{s.title}</h2>
                <p className="body-prose mb-8 max-w-prose">{s.body}</p>
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-foreground/65">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-foreground/40" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section width="reading" className="text-center">
        <div className="hairline mb-16" />
        <h2 className="font-serif-display text-3xl md:text-4xl">
          Working together usually starts with a conversation about your vision.
        </h2>
        <Link to="/contact" className="btn-quiet mt-10">Begin a conversation →</Link>
      </Section>
    </Layout>
  );
};

export default Process;
