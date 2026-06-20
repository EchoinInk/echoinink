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

const capabilities: Array<{
  variant: OrbitalVariant;
  title: string;
  description: string;
  href: string;
}> = [
  {
    variant: "axiomRing",
    title: "Identity Systems",
    description:
      "Identity systems that clarify ambition, shape recognition, and hold together over time.",
    href: "/identity",
  },
  {
    variant: "focusDial",
    title: "Atmospheric Websites",
    description:
      "Digital spaces with cinematic structure, editorial rhythm, and clearer paths into the offer.",
    href: "/worlds",
  },
  {
    variant: "innerTide",
    title: "Narrative Direction",
    description:
      "Messaging and story systems that translate complex work into something people can follow and trust.",
    href: "/sessions",
  },
  {
    variant: "quietAxis",
    title: "Creative Systems",
    description:
      "Reusable frameworks and direction kits that keep the world coherent as it grows.",
    href: "/systems",
  },
];

export function WhatWeCreate() {
  return (
    <Section
      spacing="none"
className="relative overflow-hidden pt-10 pb-4 md:pt-8 md:pb-4"    >
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
            className="mb-7 flex items-center gap-3 md:mb-10"
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

          <div className="ei-home-create-grid grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <motion.article key={cap.title} variants={driftUp}>
                <Link
                  to={cap.href}
                  className="ei-card ei-card-soft ei-card-interactive ei-card-capability ei-home-create-card group flex h-full flex-col motion-reduce:transform-none"
                  aria-label={`Explore ${cap.title}`}
                >
                  <div className="ei-card-capability-icon mb-5 md:mb-7">
                    <OrbitalVisual variant={cap.variant} size={68} />
                  </div>

                  <h3 className="ei-card-title ei-type-card-title ei-card-title-align mb-3">
                    {cap.title}
                  </h3>
                  <p className="ei-card-description ei-home-create-card-body ei-type-body-small mb-5 md:mb-6">
                    {cap.description}
                  </p>

                  <span className="ei-card-action ei-home-create-card-action">
                    Explore <span aria-hidden="true" className="ei-cta-arrow ei-cta-arrow-right">→</span>
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
