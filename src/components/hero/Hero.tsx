import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { Container } from '../layout/Container';

import {
  heroReveal,
} from '@/lib/motion-cinematic';

export function Hero() {
  return (
<section className="relative w-full min-h-[clamp(720px,100vh,860px)] flex items-center overflow-hidden bg-[var(--ei-cosmic-black)] ei-section-hero">      
  <HeroBackground />

      <Container size="xl" className="relative z-10">
  <motion.div
    className="
      w-full
      max-w-6xl
      px-6
      text-left
      md:px-10
      lg:px-12
      md:-translate-y-[1vh]
    "
  >
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