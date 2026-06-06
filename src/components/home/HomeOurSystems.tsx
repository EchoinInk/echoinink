import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { OrbitalVisual } from "@/components/ui/OrbitalVisual";
import {
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const systems = [
  {
    variant: "canvas" as const,
    title: "Identity Canvas",
    description: "Map your essence, influence, and emotional positioning.",
    meta: "Framework",
    href: "/systems",
  },
  {
    variant: "reflection" as const,
    title: "Founder Reflection",
    description: "A guided system for clarity, identity, and next alignment.",
    meta: "Reflective Tool",
    href: "/systems",
  },
  {
    variant: "architect" as const,
    title: "Narrative Architect",
    description: "Build stories that hold meaning, tension, and transformation.",
    meta: "Framework",
    href: "/systems",
  },
  {
    variant: "gpt" as const,
    title: "Identity GPT",
    description: "An AI companion for identity clarity and narrative direction.",
    meta: "GPT System",
    href: "/systems",
  },
  {
    variant: "uikit" as const,
    title: "Atmosphere UI Kit",
    description: "Cinematic UI components for immersive digital worlds.",
    meta: "UI System",
    href: "/systems",
  },
];

export function EmergingSystems() {
  return (
    <Section
      spacing="none"
      className="relative overflow-hidden pt-6 pb-4 md:pt-8 md:pb-6"
    >
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
            className="mb-8 flex items-center justify-between md:mb-10"
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

            <Link to="/systems" className="group ei-link-subtle inline-flex items-center gap-2">
              Explore All Systems
<span className="transition-transform duration-500 group-hover:translate-x-1">
  →
</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-5">
            {systems.map((system) => (
              <motion.article key={system.title} variants={driftUp}>
                <Link
                  to={system.href}
                  className="ei-card-system group block h-full"
                  aria-label={system.title}
                >
                  <div className="ei-card-system-glow" aria-hidden="true" />

                  <div className="ei-card-system-inner">
                    <div className="mb-3 flex h-14 items-center justify-center">
                      <OrbitalVisual variant={system.variant} size={56} className="opacity-90"/>
                    </div>

                    <div className="ei-card-system-main">
                      <h3 className="ei-card-system-title">{system.title}</h3>

                      <p className="ei-card-system-copy">
                        {system.description}
                      </p>
                    </div>

                    <span className="ei-card-system-category mt-auto">
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