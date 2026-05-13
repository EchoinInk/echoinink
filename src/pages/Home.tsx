import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import heroArch from "@/assets/hero-arch.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

const Home = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" className="md:py-12">
            <motion.p variants={fadeUp} custom={0} className="eyebrow mb-8">Where</motion.p>
            <motion.h1
              variants={fadeUp} custom={1}
              className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground"
            >
              Ink Meets <em className="not-italic gradient-text">Light</em>
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} className="mt-10 max-w-md space-y-2 lede">
              <p>Ideas flow. Stories resonate.</p>
              <p>Emotions take shape.</p>
              <p>Design leaves an echo.</p>
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="mt-12 flex items-center gap-6">
              <Link to="/work" className="btn-quiet">
                Explore our world
                <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="quiet-link">Start a conversation</Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm">
              <img src={heroArch} alt="A quiet archway opening onto a luminous horizon" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 px-4 py-2 text-xs tracking-[0.2em] uppercase bg-background/80 backdrop-blur-sm text-foreground/60">
              Studio · Est. 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section width="reading">
        <p className="eyebrow mb-8">Studio philosophy</p>
        <h2 className="font-serif-display text-3xl md:text-4xl leading-snug text-foreground">
          We believe great work begins in stillness — in the space between the brief
          and the first mark on the page.
        </h2>
        <div className="mt-10 hairline" />
        <div className="mt-10 grid md:grid-cols-2 gap-10 body-prose">
          <p>
            Echo in Ink is a small, founder-led studio. We make digital tools, brand
            systems, and quiet interfaces for people who care about the texture of
            their work as much as its outcome.
          </p>
          <p>
            Our process is unhurried by design. We listen first. We design with
            intention. We build only what needs to exist — and we polish what stays.
          </p>
        </div>
      </Section>

      {/* FEATURED WORK */}
      <Section width="wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="font-serif-display text-3xl md:text-4xl">A handful of recent stories.</h2>
          </div>
          <Link to="/work" className="quiet-link hidden md:inline-flex">All work →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 group" style={{ background: p.gradient }}>
                <div className="w-full h-full backdrop-blur-3xl flex items-center justify-center transition-transform duration-[1.4s] group-hover:scale-[1.03]">
                  <span className="font-serif-display italic text-7xl text-foreground/15">{p.mark}</span>
                </div>
              </div>
              <p className="eyebrow mb-2">{p.kind}</p>
              <h3 className="font-serif-display text-2xl md:text-3xl mb-2">{p.title}</h3>
              <p className="body-prose">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section width="reading">
        <p className="eyebrow mb-8">What we do</p>
        <h2 className="font-serif-display text-3xl md:text-4xl mb-12">A small set of practices, deeply considered.</h2>
        <ul className="divide-y divide-foreground/10">
          {services.map((s) => (
            <li key={s.title} className="py-7 flex items-baseline gap-6">
              <span className="font-serif-display italic text-foreground/40 text-sm w-10">0{s.n}</span>
              <div className="flex-1">
                <h3 className="font-serif-display text-xl md:text-2xl">{s.title}</h3>
                <p className="text-sm text-foreground/60 mt-1">{s.line}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link to="/services" className="quiet-link">Read more about our practice →</Link>
        </div>
      </Section>

      {/* QUIET CTA */}
      <Section width="reading" className="text-center">
        <div className="hairline mb-16" />
        <p className="eyebrow mb-8">A quiet invitation</p>
        <h2 className="font-serif-display text-4xl md:text-5xl leading-tight">
          If your work is ready for a little more <em className="gradient-text not-italic">breathing room</em>, we'd love to hear from you.
        </h2>
        <div className="mt-12">
          <Link to="/contact" className="btn-quiet">Begin a conversation →</Link>
        </div>
      </Section>
    </Layout>
  );
};

const featured = [
  { title: "Lumen Journal", kind: "Brand & Product", mark: "L", note: "A reflective writing companion designed for end-of-day calm.",
    gradient: "linear-gradient(135deg, hsl(340 70% 88%), hsl(268 45% 80%) 60%, hsl(220 60% 82%))" },
  { title: "North Atelier", kind: "Identity", mark: "N", note: "An editorial identity for an independent ceramics studio in Maine.",
    gradient: "linear-gradient(160deg, hsl(36 30% 90%), hsl(33 18% 78%))" },
  { title: "Field Notes OS", kind: "Design system", mark: "F", note: "A design system built around quiet legibility and slow rhythm.",
    gradient: "linear-gradient(180deg, hsl(220 50% 86%), hsl(290 40% 80%))" },
  { title: "Mira & Co.", kind: "Digital experience", mark: "M", note: "A spacious commerce experience for a botanical perfumery.",
    gradient: "linear-gradient(135deg, hsl(290 35% 82%), hsl(340 60% 86%))" },
];

const services = [
  { n: 1, title: "Brand Systems", line: "Identity, voice, and visual language for studios and small companies." },
  { n: 2, title: "Digital Experiences", line: "Editorial sites, quiet products, and considered interfaces." },
  { n: 3, title: "Creative Direction", line: "A steady hand across art direction, type, and atmosphere." },
  { n: 4, title: "Design Systems", line: "Calm, legible foundations that scale without losing warmth." },
  { n: 5, title: "Thoughtful Product Design", line: "Tools that respect attention and reward slowness." },
];

export default Home;
