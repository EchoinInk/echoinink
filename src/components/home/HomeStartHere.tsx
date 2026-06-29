import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const pathways = [
  {
    need: "Need clarity now",
    description:
      "A focused creative-direction session to name the signal, the next move, and what matters most.",
    cta: "Request a session",
    href: "/booking",
  },
  {
    need: "Need identity direction",
    description:
      "Explore identity direction for work that needs a clearer visual language, tone, and centre.",
    cta: "Explore Identity",
    href: "/identity",
  },
  {
    need: "Need a complete launch or world",
    description:
      "Begin a project conversation around identity, digital presence, and the world your work belongs to.",
    cta: "Discuss a project",
    href: "/contact?inquiry=project",
  },
  {
    need: "Need a self-guided framework",
    description:
      "Explore systems, prompts, and direction tools built to make the atmosphere usable.",
    cta: "Explore Systems",
    href: "/systems",
  },
] as const;

export function HomeStartHere() {
  return (
    <Section spacing="none" className="relative overflow-hidden pt-4 pb-4 md:pt-6 md:pb-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 54% 42% at 50% 36%, rgb(var(--ei-violet-rgb) / 0.04) 0%, transparent 68%)",
          filter: "blur(48px)",
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
            variants={fadeSoft}
            className="overflow-hidden rounded-[var(--ei-card-radius-xl)] border border-[rgb(var(--ei-moonlit-rgb)/0.1)] bg-[linear-gradient(180deg,rgb(var(--ei-midnight-rgb)/0.54),rgb(var(--ei-void-rgb)/0.82))] px-5 py-6 shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04),0_0_72px_rgb(var(--ei-violet-rgb)/0.06)] md:px-8 md:py-7"
          >
            <motion.div
              variants={driftUp}
              className="grid gap-4 border-b border-[rgb(var(--ei-moonlit-rgb)/0.08)] pb-5 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:gap-8 md:pb-6"
            >
              <div>
                <SectionLabel label="Start here" />
                <h2 className="ei-type-section-heading mt-4 max-w-[12ch]">
                  Four calm ways into the work.
                </h2>
              </div>

              <p className="ei-type-body-editorial max-w-[58ch] text-[var(--ei-color-text-secondary)]">
                Choose the path that matches what you need now. Each route is built to move the
                work forward without flattening its character.
              </p>
            </motion.div>

            <div className="grid gap-1 md:grid-cols-2 md:gap-x-10">
              {pathways.map((pathway) => (
                <motion.article
                  key={pathway.need}
                  variants={driftUp}
                  className="border-t border-[rgb(var(--ei-moonlit-rgb)/0.08)] py-4 md:py-5"
                >
                  <p className="ei-type-label mb-2 text-[rgb(var(--ei-halo-blue-rgb)/0.86)]">
                    {pathway.need}
                  </p>
                  <p className="ei-type-body-small max-w-[42ch] text-[var(--ei-color-text-secondary)]">
                    {pathway.description}
                  </p>
                  <Button to={pathway.href} variant="tertiary" className="mt-3 justify-start">
                    {pathway.cta}
                    <span aria-hidden="true" className="ei-cta-arrow ei-cta-arrow-right ml-2">
                      →
                    </span>
                  </Button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
