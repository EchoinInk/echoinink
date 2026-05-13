import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Layout from "@/components/Layout";
import monogram from "@/assets/monogram-balanced.png";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 2.0, delay: 0.32 * i + Math.random() * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <Layout>
      {/* ───────────────────────────── HERO ───────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] md:min-h-[90vh] flex items-center px-6 md:px-12 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 md:gap-20 lg:gap-24 items-start w-full">
          {/* Left Side - Editorial Content (60% presence) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="md:col-span-3 text-left md:pr-12 lg:pr-16"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8 max-w-2xl"
            >
              <motion.p variants={fadeUp} custom={0} className="eyebrow">
                WHERE
              </motion.p>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-serif-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] md:leading-[1.08] text-foreground"
              >
                Ink Meets <em className="not-italic gradient-text">Light</em>
              </motion.h1>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="space-y-3 lede"
              >
                <p>Ideas flow. Stories resonate.</p>
                <p>Emotions take shape.</p>
                <p>Design leaves an echo.</p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="pt-6"
              >
                <Link 
                  to="/work" 
                  className="group inline-flex items-center gap-2 text-sm tracking-wide border-b border-foreground/20 transition-all duration-700 hover:border-foreground/60 hover:gap-3"
                >
                  Explore our world
                  <span className="transition-transform duration-700 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Balanced Monogram (40% presence) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.6, ease }}
            className="md:col-span-2 relative flex items-center justify-center md:translate-y-8"
          >
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square">
              {/* Subtle environmental texture */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/5 via-transparent to-foreground/3"
                style={{
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Monogram with refined lighting */}
              <motion.img
                src={monogram}
                alt="Echo in Ink monogram"
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="relative w-full h-full object-contain z-10"
                style={{
                  filter: 'contrast(1.1) brightness(1.05) saturate(0.9)',
                }}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 0.8, rotate: 0 }}
                transition={{ duration: 2.4, delay: 0.8, ease }}
              />
              
              {/* Soft depth shadow */}
              <div 
                className="absolute inset-0 rounded-full bg-foreground/8 blur-2xl scale-95 translate-y-2"
                style={{ filter: 'blur(24px)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2.0, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-foreground/15" />
        </motion.div>
      </section>

      {/* ────────────────────── PHILOSOPHY (drifting) ────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease }}
        className="relative max-w-[820px] mx-auto px-6 md:px-12 py-36 md:py-48"
      >
        <p className="eyebrow mb-12">A studio philosophy</p>
        <p className="font-serif-display text-3xl md:text-[2.5rem] leading-[1.32] text-foreground/90 text-left md:text-center">
          We believe great work begins in
          <em className="not-italic gradient-text"> stillness</em> — in the space between
          the brief and the first mark on the page.
        </p>

        <div className="mt-24 grid md:grid-cols-2 gap-16 md:gap-28 body-prose text-left md:text-left">
          <p className="md:translate-y-6">
            Echo in Ink is a small, founder-led studio. We make digital tools, brand
            systems, and quiet interfaces for people who care about the texture of
            their work as much as its outcome.
          </p>
          <p>
            Our process is unhurried by design. We listen first. We design with
            intention. We build only what needs to exist — and we polish what stays.
          </p>
        </div>
      </motion.section>

      {/* ──────────────────── SELECTED WORK (editorial) ──────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease }}
          className="max-w-md mb-24 md:mb-32"
        >
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="font-serif-display text-3xl md:text-4xl leading-snug">
            A handful of recent stories — each one shaped slowly, with care.
          </h2>
        </motion.div>

        <div className="space-y-36 md:space-y-48">
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.8, delay: i * 0.18 + Math.random() * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-12 gap-8 md:gap-14 items-end ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <div
                  className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
                  style={{
                    background: p.gradient,
                    borderRadius: "1px",
                    boxShadow: "0 16px 48px -24px hsl(var(--grad-violet) / 0.12)",
                  }}
                >
                  {/* watercolor wash inside frame */}
                  <div className="absolute inset-0 bg-atmosphere opacity-50 mix-blend-soft-light" />
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[3400ms] ease-out group-hover:scale-[1.015]">
                    <span className="font-serif-display italic text-[7.5rem] md:text-[9.5rem] text-foreground/10">
                      {p.mark}
                    </span>
                  </div>
                  {/* edge softening */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 80px 20px hsl(var(--background) / 0.35)",
                    }}
                  />
                </div>
              </div>

              <div
                className={`md:col-span-4 ${
                  i % 2 === 0
                    ? "md:col-start-9 md:translate-y-8"
                    : "md:col-start-1 md:translate-y-8"
                }`}
              >
                <p className="eyebrow mb-3">{p.kind}</p>
                <h3 className="font-serif-display text-2xl md:text-[1.9rem] leading-tight mb-4">
                  {p.title}
                </h3>
                <p className="body-prose">{p.note}</p>
                <Link to="/work" className="quiet-link mt-6">
                  Read the story →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-28 text-left md:text-center">
          <Link to="/work" className="quiet-link">
            See all selected work →
          </Link>
        </div>
      </section>

      {/* ───────────────────────── PRACTICE ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease }}
        className="relative max-w-[920px] mx-auto px-6 md:px-12 py-36 md:py-48"
      >
        <p className="eyebrow mb-8">Our practice</p>
        <h2 className="font-serif-display text-3xl md:text-[3.6rem] leading-[1.12] mb-16 max-w-lg">
          A few things we do, thoughtfully.
        </h2>
        <ul>
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.8, delay: i * 0.14 + Math.random() * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group py-8 flex items-baseline gap-8 border-t border-foreground/10 last:border-b"
            >
              <span className="font-serif-display italic text-foreground/35 text-sm w-10">
                0{s.n}
              </span>
              <div className="flex-1">
                <h3 className="font-serif-display text-xl md:text-2xl transition-all duration-700 group-hover:tracking-wide">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/55 mt-2 max-w-md">{s.line}</p>
              </div>
              <span className="text-foreground/30 transition-all duration-700 group-hover:text-foreground/70 group-hover:translate-x-1">
                →
              </span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-14">
          <Link to="/process" className="quiet-link">
            Read more about our practice →
          </Link>
        </div>
      </motion.section>

      {/* ─────────────────────── QUIET INVITATION ────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl mx-auto px-6 md:px-12 py-44 md:py-64 text-center"
      >
        <p className="eyebrow mb-12">A quiet invitation</p>
        <h2 className="font-serif-display text-4xl md:text-[3.4rem] leading-[1.15]">
          If your work needs a little more space to breathe, I'd love to hear about it.
        </h2>
        <div className="mt-18">
          <Link to="/contact" className="btn-quiet">
            Say hello →
          </Link>
        </div>
        <motion.img
          src={monogram}
          alt=""
          aria-hidden
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 3.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-28 w-10 opacity-50"
        />
      </motion.section>
    </Layout>
  );
};

const featured = [
  {
    title: "Lumen Journal",
    kind: "Brand & Product",
    mark: "L",
    note: "A reflective writing companion designed for end-of-day calm.",
    gradient:
      "linear-gradient(135deg, hsl(340 70% 90%), hsl(268 45% 82%) 60%, hsl(220 60% 84%))",
  },
  {
    title: "North Atelier",
    kind: "Identity",
    mark: "N",
    note: "An editorial identity for an independent ceramics studio in Maine.",
    gradient:
      "linear-gradient(160deg, hsl(36 30% 92%), hsl(33 18% 80%))",
  },
  {
    title: "Field Notes OS",
    kind: "Design system",
    mark: "F",
    note: "A design system built around quiet legibility and slow rhythm.",
    gradient:
      "linear-gradient(180deg, hsl(220 50% 88%), hsl(290 40% 82%))",
  },
  {
    title: "Mira & Co.",
    kind: "Digital experience",
    mark: "M",
    note: "A spacious commerce experience for a botanical perfumery.",
    gradient:
      "linear-gradient(135deg, hsl(290 35% 84%), hsl(340 60% 88%))",
  },
];

const services = [
  { n: 1, title: "Brand Systems", line: "Identity, voice, and visual language for studios and small companies." },
  { n: 2, title: "Digital Experiences", line: "Editorial sites, quiet products, and considered interfaces." },
  { n: 3, title: "Creative Direction", line: "A steady hand across art direction, type, and atmosphere." },
  { n: 4, title: "Design Systems", line: "Calm, legible foundations that scale without losing warmth." },
  { n: 5, title: "Thoughtful Product Design", line: "Tools that respect attention and reward slowness." },
];

export default Home;
