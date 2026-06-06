import { motion } from "framer-motion";
import { HeroBackground } from "./HomeHeroBackground";
import { HeroCTA } from "./HomeHeroCTA";
import { HeroHeading } from "./HomeHeroHeading";
import { Container } from "../layout/Container";

import { heroReveal } from "@/lib/motion-cinematic";

export function Hero() {
  return (
    <section className="relative flex min-h-[560px] w-full items-start overflow-hidden bg-[var(--ei-void)] md:min-h-[720px] md:items-center ei-section-hero">
      <HeroBackground />

      <Container size="xl" className="relative z-10">
        <motion.div className="max-w-[680px] pt-32 text-left md:pl-10 md:pt-0 md:-translate-y-[2vh] lg:pl-14">
          <motion.div variants={heroReveal}>
            <HeroHeading />
          </motion.div>

          <motion.div variants={heroReveal} transition={{ delay: 0.2 }}>
            <HeroCTA />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}