import { motion } from 'framer-motion';
import { HeroBackground } from '../home/HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from '../home/HeroHeading';
import { Container } from '../layout/Container';

import {
  heroReveal,
} from '@/lib/motion-cinematic';

export function Hero() {
  return (
    <section className="relative w-full min-h-[720px] md:min-h-[760px] flex items-center overflow-hidden bg-[var(--ei-void)] ei-section-hero">
      <HeroBackground />

      <Container size="xl" className="relative z-10">
        <motion.div className="max-w-[680px] text-left md:pl-10 lg:pl-14 md:-translate-y-[2vh]">
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