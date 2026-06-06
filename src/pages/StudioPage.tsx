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
    body: "We strip away the unnecessary to reveal what matters.\nClarity is not minimalism — it is emotional precision.",
    icon: "reflection",
  },
  {
    title: "Design with feeling",
    body: "Strategy is held with care.\nIdentity becomes coherent when the inner world is acknowledged, not avoided.",
    icon: "pulse",
  },
  {
    title: "Built to resonate",
    body: "We craft systems and digital worlds designed to endure —\nnot louder, but deeper.",
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
    body: "Strategic identity frameworks that reveal essence, build recognition, and create emotional resonance.",
    href: "/identity",
    imageClass:
      "bg-[radial-gradient(circle_at_50%_28%,rgb(var(--ei-violet-rgb)/0.22),transparent_38%),radial-gradient(circle_at_52%_62%,rgb(var(--ei-halo-blue-rgb)/0.08),transparent_54%)]",
    icon: "canvas",
  },
  {
    number: "02",
    title: "Immersive Websites",
    body: "Digital experiences that blend story, design, and atmosphere into seamless worlds.",
    href: "/websites",
    imageClass:
      "bg-[radial-gradient(circle_at_50%_30%,rgb(var(--ei-halo-blue-rgb)/0.18),transparent_42%),linear-gradient(145deg,rgb(var(--ei-midnight-rgb)/0.7),rgb(var(--ei-void-rgb)/0.95))]",
    icon: "lens",
  },
  {
    number: "03",
    title: "Narrative Architecture",
    body: "Story systems that align your message, audience, and transformation.",
    href: "/direction",
    imageClass:
      "bg-[radial-gradient(circle_at_70%_30%,rgb(var(--ei-echo-magenta-rgb)/0.18),transparent_42%),radial-gradient(circle_at_38%_68%,rgb(var(--ei-violet-rgb)/0.16),transparent_48%)]",
    icon: "ribbon",
  },
  {
    number: "04",
    title: "Creative Direction",
    body: "Art direction and visual strategy that bring coherence, depth, and vision to every touchpoint.",
    href: "/worlds",
    imageClass:
      "bg-[radial-gradient(circle_at_35%_30%,rgb(var(--ei-violet-rgb)/0.2),transparent_38%),radial-gradient(circle_at_75%_62%,rgb(var(--ei-soft-neon-rgb)/0.11),transparent_50%)]",
    icon: "orbit",
  },
];

const process = [
  {
    number: "01",
    title: "Foundation",
    body: "We listen, explore, and uncover the essence beneath the surface.",
  },
  {
    number: "02",
    title: "Resonance",
    body: "We shape strategy, narrative, and identity with emotional clarity.",
  },
  {
    number: "03",
    title: "Embodiment",
    body: "We design systems, experiences, and touchpoints that bring it to life.",
  },
  {
    number: "04",
    title: "Atmosphere",
    body: "We refine the details, create cohesion, and launch your world with intention.",
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
        title={"High-touch work.\nMeaningful worlds."}
        italicWord="worlds"
        description="We partner with founders, artists, and cultural projects to design identity systems and immersive experiences that move people."
        ctaLabel="Start a Project"
        ctaHref="/contact"
        secondaryCtaLabel="View Our Work"
        secondaryCtaHref="/works"
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Atmospheric cosmic portal in violet, blue, and magenta light"
        align="left"
        variant="studio"
      />

      {/* PHILOSOPHY */}
      <motion.section
        variants={staggerContainer(STAGGER.loose, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="relative border-y border-[rgb(var(--ei-moonlit-rgb)/0.1)] py-14 md:py-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[var(--ei-card-radius-xl)] border border-[rgb(var(--ei-moonlit-rgb)/0.12)] bg-[rgb(var(--ei-midnight-rgb)/0.28)] p-7 shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04),0_0_80px_rgb(var(--ei-violet-rgb)/0.055)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_180px] md:items-center md:gap-12 md:p-10 lg:p-12">
            <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
              <SectionLabel>Our Philosophy</SectionLabel>

              <motion.h2
                variants={blurEmergence}
                className="ei-type-studio-philosophy mt-6 max-w-[16ch] whitespace-pre-line"
              >
                We design with <em className="ei-type-studio-philosophy-emphasis">feeling</em>,{" "}
                <em className="ei-type-studio-philosophy-emphasis">intention</em>, and{" "}
                <em className="ei-type-studio-philosophy-emphasis">clarity</em>.
              </motion.h2>
            </motion.div>

            <motion.div variants={driftUp} className="max-w-[62ch]">
              <p className="ei-type-studio-body text-[var(--ei-color-text-secondary)]">
                Design is not decoration — it is meaning made visible. Every decision is rooted
                in understanding, shaped by emotion, and refined through story.
              </p>
              <p className="ei-type-studio-body mt-5 text-[var(--ei-color-text-secondary)]">
                We do not just build brands or websites. We build identity, atmosphere, and
                transformation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeSoft}
              className="hidden justify-self-end md:block"
              aria-hidden="true"
            >
              <OrbitalVisual variant="orbit" size={150} className="opacity-90" />
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
        className="relative py-14 md:py-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8 text-center">
              <SectionLabel>What We Do</SectionLabel>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.title}
                  to={pillar.href}
                  className="ei-card group relative min-h-[330px] overflow-hidden p-7 text-inherit no-underline transition-colors duration-500 lg:p-8"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 opacity-72 transition-opacity duration-700 group-hover:opacity-95 ${pillar.imageClass}`}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--ei-void-rgb)/0.2),rgb(var(--ei-void-rgb)/0.88))]"
                  />

                  <div className="relative z-10 flex min-h-[276px] flex-col">
                    <div className="mb-auto">
                      <span className="ei-type-studio-label">
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

                    <h3 className="ei-type-studio-pillar-title max-w-[12ch]">
                      {pillar.title}
                    </h3>

                    <p className="ei-type-studio-card-body mt-4 max-w-[32ch]">
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
        className="relative border-y border-[rgb(var(--ei-moonlit-rgb)/0.08)] py-14 md:py-16"
      >
        <Container size="xl" className="relative z-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[var(--ei-card-radius-xl)] border border-[rgb(var(--ei-moonlit-rgb)/0.1)] bg-[rgb(var(--ei-ice-white-rgb)/0.018)] p-7 md:grid-cols-[0.9fr_1.6fr] md:gap-14 md:p-10">
            <div>
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="ei-type-studio-process-heading mt-6 max-w-[15ch]">
                A thoughtful journey from essence to world.
              </h2>
              <div className="mt-8">
                <Button
                  to="/contact"
                  variant="secondary"
                  className="min-h-[42px] gap-3 px-6 py-3"
                >
                  Our Approach
                  <span aria-hidden="true">↓</span>
                </Button>
              </div>
            </div>

            <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[2.35rem] hidden h-px bg-[linear-gradient(90deg,transparent,rgb(var(--ei-halo-blue-rgb)/0.45),rgb(var(--ei-violet-rgb)/0.52),transparent)] md:block"
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

                  <p className="ei-type-studio-process-body mt-3 max-w-[23ch]">
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
        className="relative py-14 md:py-16"
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

                  <h2 className="ei-type-studio-feature-title mt-8">
                    LUMO
                  </h2>

                  <p className="ei-type-studio-feature-subtitle mt-5 max-w-[18ch]">
                    A world built for overwhelmed humans.
                  </p>

                  <p className="ei-type-studio-feature-body mt-7 max-w-[38ch] text-[var(--ei-color-text-secondary)]">
                    Lumo takes softness, care, and emotional regulation into an emotionally
                    intelligent app and cinematic digital identity system — an interface shaped
                    to calm cognitive noise through atmosphere, rhythm, and restraint.
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
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 rounded-[var(--ei-card-radius-lg)] border border-[rgb(var(--ei-moonlit-rgb)/0.12)] bg-[rgb(var(--ei-ice-white-rgb)/0.026)] px-7 py-7 shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04),0_0_70px_rgb(var(--ei-violet-rgb)/0.055)] md:flex-row md:items-center md:justify-between md:px-9">
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
