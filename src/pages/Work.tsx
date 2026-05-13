import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  { title: "Lumen Journal", year: "2025", kind: "Brand · Product",
    note: "A reflective writing companion designed for end-of-day calm.",
    gradient: "linear-gradient(135deg, hsl(340 70% 88%), hsl(268 45% 80%) 60%, hsl(220 60% 82%))", mark: "L" },
  { title: "North Atelier", year: "2025", kind: "Identity",
    note: "Editorial identity for an independent ceramics studio in Maine.",
    gradient: "linear-gradient(160deg, hsl(36 30% 90%), hsl(33 18% 78%))", mark: "N" },
  { title: "Field Notes OS", year: "2024", kind: "Design system",
    note: "A design system built around quiet legibility and slow rhythm.",
    gradient: "linear-gradient(180deg, hsl(220 50% 86%), hsl(290 40% 80%))", mark: "F" },
  { title: "Mira & Co.", year: "2024", kind: "Digital experience",
    note: "A spacious commerce experience for a botanical perfumery.",
    gradient: "linear-gradient(135deg, hsl(290 35% 82%), hsl(340 60% 86%))", mark: "M" },
  { title: "Quiet Hours", year: "2024", kind: "Product",
    note: "A small reading app for the slow part of the evening.",
    gradient: "linear-gradient(200deg, hsl(240 30% 80%), hsl(290 40% 78%))", mark: "Q" },
  { title: "Atlas Press", year: "2023", kind: "Editorial",
    note: "A reading platform for long-form essays and slow journalism.",
    gradient: "linear-gradient(150deg, hsl(36 40% 88%), hsl(340 50% 84%))", mark: "A" },
];

const Work = () => {
  return (
    <Layout>
      <Section width="reading" className="pt-12">
        <p className="eyebrow mb-8">Selected work</p>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[1.05]">
          A few recent projects.
        </h1>
        <p className="lede mt-10">
          A small portfolio of work made with care, often in collaboration with founders
          and independent teams. Each project is its own quiet answer to a question.
        </p>
      </Section>

      <Section width="wide">
        <div className="space-y-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-7">
                <div className="aspect-[4/3] overflow-hidden rounded-sm group" style={{ background: p.gradient }}>
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-[1.4s] group-hover:scale-[1.02]">
                    <span className="font-serif-display italic text-[10rem] text-foreground/15">{p.mark}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 md:px-4">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="eyebrow">{p.kind}</span>
                  <span className="text-xs text-foreground/45 font-serif-display italic">{p.year}</span>
                </div>
                <h2 className="font-serif-display text-3xl md:text-4xl mb-4">{p.title}</h2>
                <p className="body-prose mb-6">{p.note}</p>
                <Link to="/contact" className="quiet-link">Ask about this project →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section width="reading" className="text-center">
        <div className="hairline mb-16" />
        <h2 className="font-serif-display text-3xl md:text-4xl">
          More work lives quietly in the studio archive.
        </h2>
        <Link to="/contact" className="btn-quiet mt-10">Request a private walkthrough →</Link>
      </Section>
    </Layout>
  );
};

export default Work;
