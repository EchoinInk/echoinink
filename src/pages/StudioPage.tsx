import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { EditorialImageHero } from "@/components/sections/EditorialImageHero";
import { Button } from "@/components/ui/Button";
import { OrbitalVisual, type OrbitalVariant } from "@/components/ui/OrbitalVisual";

import studioHeroDesktop from "@/assets/imagery/hero/studio-hero-desktop.webp";
import studioHeroMobile from "@/assets/imagery/hero/studio-hero-mobile.webp";
import lumoFeaturedBg from "@/assets/imagery/sections/lumo-featured-bg.webp";

import {
  driftUp,
  fadeSoft,
  blurEmergence,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const principles: Array<{
  title: string;
  body: string;
  icon: OrbitalVariant;
}> = [
  {
    title: "Meaning over noise",
    body: "We strip away the unnecessary to reveal what matters. Clarity is not minimalism — it is emotional precision.",
    icon: "reflection",
  },
  {
    title: "Design with feeling",
    body: "Strategy is held with care. Identity becomes coherent when the inner world is acknowledged, not avoided.",
    icon: "pulse",
  },
  {
    title: "Built to resonate",
    body: "We craft systems and digital worlds designed to endure —not louder, but deeper.",
    icon: "lattice",
  },
];

const pillars: Array<{
  number: string;
  title: string;
  body: string;
  href: string;
  imageClass: string;
  icon: OrbitalVariant;
}> = [
  {
    number: "01",
    title: "Identity Systems",
    body: "Strategic identity frameworks that reveal essence, build recognition, and create emotional resonance. Identity shaped as architecture, not ornament.",
    href: "/identity",
    imageClass:
      "bg-[radial-gradient(circle_at_50%_28%,rgb(var(--ei-violet-rgb)/0.22),transparent_38%),radial-gradient(circle_at_52%_62%,rgb(var(--ei-halo-blue-rgb)/0.08),transparent_54%)]",
    icon: "canvas",
  },
  {
    number: "02",
    title: "Digital Experiences",
    body: "Immersive websites and interfaces where story, design, and atmosphere form a coherent world. Digital presence as a cinematic environment.",
    href: "/websites",
    imageClass:
      "bg-[radial-gradient(circle_at_50%_30%,rgb(var(--ei-halo-blue-rgb)/0.18),transparent_42%),linear-gradient(145deg,rgb(var(--ei-midnight-rgb)/0.7),rgb(var(--ei-void-rgb)/0.95))]",
    icon: "lens",
  },
  {
    number: "03",
    title: "Narrative Direction",
    body: "Story systems, creative direction, and visual language that align message, audience, and feeling. nNarrative as the connective tissue of identity.",    href: "/direction",
    imageClass:
      "bg-[radial-gradient(circle_at_70%_30%,rgb(var(--ei-echo-magenta-rgb)/0.18),transparent_42%),radial-gradient(circle_at_38%_68%,rgb(var(--ei-violet-rgb)/0.16),transparent_48%)]",
    icon: "ribbon",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    body: "We uncover the signal beneath the surface — the emotional and structural truth of the work.",
  },
  {
    number: "02",
    title: "Strategize",
    body: "We define the direction: the feeling, the framework, the identity architecture.",
  },
  {
    number: "03",
    title: "Create",
    body: "We shape the system, story, and visual world with clarity and intention.",
  },
  {
    number: "04",
    title: "Refine",
    body: "We polish until the work feels inevitable — nothing extra, nothing missing.",
  },
  {
    number: "05",
    title: "Launch",
    body: "We deliver a world built to resonate, internally coherent and externally unmistakable",
  },
] as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="ei-section-label-row">
      <span className="ei-section-label">{children}</span>
      <span className="ei-section-label-line" />
    </div>
  );
}

export function Studio() {
  return (
    <PageShell atmosphere="studio" withTopSpacing={false}>
      <Helmet>
        <title>Studio | Echo In Ink</title>
        <meta
          name="description"
          content="The philosophy, principles, and creative direction behind Echo In Ink."
        />
      </Helmet>

      <EditorialImageHero
        eyebrow="Studio"
        title="Where philosophy becomes form."
        italicWord="philosophy"
        description="Echo in Ink shapes identity systems, immersive websites, and narrative direction for founders, artists, and emerging brands."
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Atmospheric cosmic portal in violet, blue, and magenta light"
        align="left"
        variant="studio"
      />

      {/* MANIFESTO */}
      <motion.section
        variants={staggerContainer(STAGGER.loose, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="relative border-y border-[rgb(var(--ei-moonlit-rgb)/0.08)] py-12 md:py-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] md:gap-14">
           <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
  <SectionLabel>Our Manifesto</SectionLabel>

  <motion.h2
    variants={blurEmergence}
    className="ei-type-philosophy-heading mt-6 mb-5 max-w-[20ch] whitespace-pre-line"
  >
    {"We design from the inner signal outward —\nturning feeling, clarity, and atmosphere into form."}
  </motion.h2>

  <motion.p
    variants={driftUp}
    className="ei-type-philosophy-body max-w-[38ch]"
  >Everything we create begins in the unseen layers: memory, intention, emotional architecture. From there, we build worlds that hold meaning.
  </motion.p>
</motion.div>

            <motion.div
              variants={fadeSoft}
              className="grid content-center gap-7 border-t border-[rgb(var(--ei-moonlit-rgb)/0.08)] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0"
            >
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-5"
                >
                  <div className="pt-1">
                    <OrbitalVisual
                      variant={principle.icon}
                      size={28}
                      className="opacity-90"
                    />
                  </div>

                  <div>
                    <h3 className="ei-type-studio-principle-title">
                      {principle.title}
                    </h3>
                    <p className="ei-type-studio-principle-body mt-2 max-w-[32ch]">
                      {principle.body}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.section>

      {/* WHAT WE DO */}
      <motion.section
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="relative py-12 md:py-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8">
              <SectionLabel>What We Do</SectionLabel>
            </div>

            <div className="grid grid-cols-1 overflow-hidden rounded-[var(--ei-card-radius-lg)] border border-[rgb(var(--ei-moonlit-rgb)/0.1)] md:grid-cols-3">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.title}
                  to={pillar.href}
                  className="group relative min-h-[390px] overflow-hidden border-b border-[rgb(var(--ei-moonlit-rgb)/0.1)] p-7 text-inherit no-underline transition-colors duration-500 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 opacity-75 transition-opacity duration-700 group-hover:opacity-95 ${pillar.imageClass}`}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--ei-void-rgb)/0.28),rgb(var(--ei-void-rgb)/0.9))]"
                  />

                  <div className="relative z-10 flex min-h-[336px] flex-col justify-end">
                    <div className="mb-auto">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ei-color-text-muted)]">
                        {pillar.number}
                      </span>

                      <div className="mt-6 flex h-16 items-center">
                        <OrbitalVisual
                          variant={pillar.icon}
                          size={58}
                          className="opacity-90"
                        />
                      </div>
                    </div>

                    <h3 className="ei-type-studio-pillar-title max-w-[10ch]">
                      {pillar.title}
                    </h3>

                    <p className="ei-type-studio-pillar-body mt-4 max-w-[31ch]">
                      {pillar.body}
                    </p>

                    <span className="ei-card-action mt-7">
                      Explore <span className="ei-card-action-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="relative border-y border-[rgb(var(--ei-moonlit-rgb)/0.08)] py-12 md:py-14"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto max-w-[1180px]">
            <SectionLabel>Our Process</SectionLabel>

            <div className="relative mt-8 grid gap-8 md:grid-cols-5 md:gap-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[2.35rem] hidden h-px bg-[linear-gradient(90deg,transparent,rgb(var(--ei-halo-blue-rgb)/0.5),rgb(var(--ei-violet-rgb)/0.55),transparent)] md:block"
              />

              {process.map((step) => (
                <article key={step.number} className="relative">
                  <div className="ei-type-studio-process-number">
                    {step.number}
                  </div>

                  <span className="absolute left-0 top-[2.05rem] hidden h-2 w-2 rounded-full bg-[rgb(var(--ei-ice-white-rgb)/0.75)] shadow-[0_0_18px_rgb(var(--ei-violet-rgb)/0.75)] md:block" />

                  <h3 className="ei-type-studio-process-title mt-4">
                    {step.title}
                  </h3>

                  <p className="ei-type-studio-process-body mt-3 max-w-[20ch]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </motion.section>

   {/* FEATURED WORK */}
<motion.section
  variants={fadeSoft}
  initial="hidden"
  whileInView="visible"
  viewport={VIEWPORT.loose}
  className="relative py-12 md:py-16"
>
  <Container size="xl" className="relative z-10">
    <article className="ei-card ei-card-world mx-auto max-w-[1180px]">
      <Link to="/works/lumo" className="ei-card-world-link group">
        <div className="ei-card-world-media" aria-hidden="true">
          <img
            src={lumoFeaturedBg}
            alt=""
            className="object-[57%_50%]"
          />
        </div>

<div className="ei-card-studio-overlay" aria-hidden="true" />
        <div className="ei-card-world-copy">
          <div>
            <span className="ei-type-studio-label">
              Featured Work
            </span>

            <h2 className="mt-8 font-editorial text-[3.75rem] leading-[0.92] tracking-[-0.045em] text-[rgb(var(--ei-ice-white-rgb)/0.94)] md:text-[4.6rem] lg:text-[5.15rem]">
  LUMO
</h2>

<p className="mt-5 max-w-[18ch] font-editorial text-[1.35rem] leading-[1.18] tracking-[-0.025em] text-[rgb(var(--ei-moonlit-rgb)/0.82)] md:text-[1.5rem]">
  A world built for overwhelmed humans.
</p>

<p className="mt-7 max-w-[38ch] font-structural text-[0.8125rem] leading-[1.75] tracking-[-0.003em] text-[rgb(var(--ei-moonlit-rgb)/0.7)]">
  An emotionally intelligent app shaped by an identity system built to calm
  cognitive noise through atmosphere, rhythm, and restraint.
</p>
          </div>

          <span className="ei-card-action">
            View Case Study <span className="ei-card-action-arrow">→</span>
          </span>
        </div>
      </Link>
    </article>
  </Container>
</motion.section>

      {/* SLIM CTA */}
      <motion.section
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.normal}
        className="relative pb-12 md:pb-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 rounded-[var(--ei-card-radius-lg)] border border-[rgb(var(--ei-moonlit-rgb)/0.1)] bg-[rgb(var(--ei-ice-white-rgb)/0.018)] px-7 py-7 md:flex-row md:items-center md:justify-between md:px-9">
            <div className="flex items-center gap-5">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[rgb(var(--ei-ice-white-rgb)/0.82)] shadow-[0_0_22px_rgb(var(--ei-violet-rgb)/0.8)]"
              />

              <p className="ei-type-studio-slim-cta">
                Let&apos;s build something meaningful.
              </p>
            </div>

            <Button
              to="/contact"
              variant="secondary"
              className="min-h-[42px] gap-3 self-start px-6 py-3 md:self-center"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Container>
      </motion.section>
    </PageShell>
  );
}