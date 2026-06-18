import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import {
  OrbitalVisual,
  type OrbitalVariant,
} from "@/components/ui/OrbitalVisual";
import {
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const systems: Array<{
  variant: OrbitalVariant;
  title: string;
  description: string;
  meta: string;
  href: string;
}> = [
  {
    variant: "vectorLattice",
    title: "Identity Canvas",
    description: "Map essence, audience tension, tone, and emotional position.",
    meta: "Framework",
    href: "/systems",
  },
  {
    variant: "prismMirror",
    title: "Founder Reflection",
    description: "Clarify what you are building, why it matters, and what changes next.",
    meta: "Reflective Tool",
    href: "/systems",
  },
  {
    variant: "synthesisStar",
    title: "Narrative Architect",
    description:
      "Build story systems with meaning, contrast, sequence, and transformation.",
    meta: "Framework",
    href: "/systems",
  },
  {
    variant: "chorusCore",
    title: "Identity GPT",
    description:
      "A guided AI companion for voice, positioning, and creative direction.",
    meta: "GPT System",
    href: "/systems",
  },
  {
    variant: "haloGate",
    title: "Atmosphere UI Kit",
    description: "Cinematic interface components for expressive digital worlds.",
    meta: "UI System",
    href: "/systems",
  },
];

export function EmergingSystems() {
  return (
    <Section
      spacing="none"
className="relative overflow-hidden pt-8 pb-2 md:pt-8 md:pb-0"    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 55%, rgb(var(--ei-halo-blue-rgb) / 0.02) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="mx-auto max-w-6xl"
        >
          <motion.div
            variants={driftUp}
            className="mb-7 flex items-start justify-between gap-5 md:mb-10 md:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="ei-type-label">Our Systems</span>

              <div
                className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
                }}
              />
            </div>

            <Link
              to="/systems"
              className="ei-link-subtle group inline-flex items-center gap-2 text-right text-[0.7rem] tracking-[0.14em] uppercase md:text-[0.75rem]"
            >
              Explore All Systems
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-5">            {systems.map((system) => (
              <motion.article key={system.title} variants={driftUp}>
                <Link
                  to={system.href}
                  className="ei-card-system group block h-full"
                  aria-label={system.title}
                >
                  <div className="ei-card-system-glow" aria-hidden="true" />

                  <div className="ei-card-system-inner">
                    <div className="mb-2 flex h-12 items-center justify-center md:mb-3 md:h-14">
                      <OrbitalVisual
                        variant={system.variant}
                        size={50}
                        className="opacity-95 md:size-[52px]"
                      />
                    </div>

                    <div className="ei-card-system-main">
                      <h3 className="ei-card-system-title ei-type-card-title">{system.title}</h3>

                      <p className="ei-card-system-copy ei-type-body-small">
                        {system.description}
                      </p>
                    </div>

                    <span className="ei-card-system-category ei-type-meta mt-auto">
                      {system.meta}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
