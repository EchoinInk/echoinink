import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const proofItems = [
  {
    label: "Identity systems",
    body: "Distinct foundations shaped to clarify ambition, recognition, and trust.",
  },
  {
    label: "Product experiences",
    body: "Digital environments designed for real use, emotional coherence, and clear movement.",
  },
  {
    label: "Expressive worlds",
    body: "Story, atmosphere, and direction built to make meaningful work memorable.",
  },
] as const;

export function HomeProofStrip() {
  return (
    <Section spacing="none" className="relative overflow-hidden pt-4 pb-2 md:pt-6 md:pb-4">
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.normal, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="ei-home-proof-strip mx-auto max-w-6xl"
        >
          {proofItems.map((item) => (
            <motion.article
              key={item.label}
              variants={driftUp}
              className="ei-home-proof-strip-item"
            >
              <span className="ei-home-proof-strip-label">{item.label}</span>
              <p className="ei-home-proof-strip-copy">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
