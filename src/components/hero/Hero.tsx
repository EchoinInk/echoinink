import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

import {
  heroContainer,
  heroReveal,
  EASE_LUXURY,
  DURATION,
} from '@/lib/motion-cinematic';

export function Hero() {
  return (
    <section className="relative w-full max-md:min-h-0 md:min-h-screen flex items-start md:items-center justify-start overflow-hidden bg-[#05030B] ei-section-hero pt-80 pb-32 md:pt-0 md:pb-0">
      {/* Background */}
      <HeroBackground />

      {/* LEFT TEXT READABILITY FADE */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,3,11,0.94) 0%, rgba(5,3,11,0.72) 32%, rgba(5,3,11,0.18) 58%, transparent 78%)',
        }}
      />

      {/* TOP CINEMATIC FRAME */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,3,11,0.22) 0%, transparent 24%)',
        }}
      />

      {/* BOTTOM ATMOSPHERIC FADE */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-[6] pointer-events-none h-[14vh] md:h-[28vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower, delay: 0.8 }}
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(7,10,20,0.18) 48%, #05030B 100%)',
        }}
      />

      {/* CONTENT */}
<Sectio></Sectiob>><Container className="relative z-10">
  <motion.div
    className="
      max-w-[680px]
      items-start
      text-left
      translate-y-0
    "
    variants={heroContainer}
    initial="hidden"
    animate="visible"
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