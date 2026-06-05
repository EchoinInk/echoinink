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

const capabilities = [
  {
    variant: "hinge" as const,
    title: "Brand Identity",
    description:
      "Identity systems that uncover essence and create emotional resonance.",
    href: "/identity",
  },
  {
    variant: "lens" as const,
    title: "Digital Experiences",
    description:
      "Immersive websites and interfaces that feel like entering a world.",
    href: "/worlds",
  },
  {
    variant: "ribbon" as const,
    title: "Narrative Architecture",
    description:
      "Story systems that bring coherence, clarity, and transformational depth.",
    href: "/sessions",
  },
  {
    variant: "veil" as const,
    title: "Creative Direction",
    description:
      "Atmospheric direction that aligns every detail with the bigger vision.",
    href: "/works",
  },
];

export function WhatWeCreate() {
  return (
    <Section
      spacing="none"
      className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgb(var(--ei-violet-rgb) / 0.025) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="mx-auto max-w-6xl"
        >
          <motion.div
            variants={driftUp}
            className="mb-8 flex items-center gap-3 md:mb-10"
          >
            <span className="ei-type-label">What We Create</span>

            <div
              className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]"
              style={{
                background:
                  "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
              }}
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <motion.article key={cap.title} variants={driftUp}>
                <Link
                  to={cap.href}
                  className="ei-card ei-card-soft ei-card-interactive group flex h-full flex-col p-6 motion-reduce:transform-none"
                  aria-label={`Explore ${cap.title}`}
                >
                  <div className="mb-8">
                    <OrbitalVisual variant={cap.variant} size={72} />
                  </div>

                  <h3 className="ei-card-title mb-3">{cap.title}</h3>

                  <p className="ei-card-description mb-6 flex-1">
                    {cap.description}
                  </p>

                  <span className="ei-link-subtle inline-flex items-center gap-1.5">
                    Explore{" "}
                    <span className="transition-transform duration-500 group-hover:translate-x-0.5 motion-reduce:transition-none">
                      →
                    </span>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}