import { motion } from "framer-motion";
import { HeroBackground } from "./HomeHeroBackground";
import { HeroCTA } from "./HomeHeroCTA";
import { HeroHeading } from "./HomeHeroHeading";
import { Container } from "../layout/Container";

import { heroReveal } from "@/lib/motion-cinematic";

export function Hero() {
  return (
    <section className="ei-section-hero relative flex min-h-[620px] w-full items-start overflow-hidden bg-[var(--ei-ink)] md:min-h-[720px] md:items-center lg:min-h-[760px]">
      <HeroBackground />

      <Container size="xl" className="relative z-10">
        <motion.div className="max-w-[690px] pt-36 text-left md:pt-0 md:pl-10 md:-translate-y-[2vh] lg:pl-14">
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