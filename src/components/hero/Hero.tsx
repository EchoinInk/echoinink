import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { Container } from '../layout/Container';

import {
  heroContainer,
  heroReveal,
  DURATION,
} from '@/lib/motion-cinematic';

export function Hero() {
  return (
<section className="relative w-full min-h-[720px] md:min-h-[760px] flex items-center overflow-hidden bg-[var(--ei-cosmic-black)] ei-section-hero">       <HeroBackground />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--ei-cosmic-black-rgb) / 0.94) 0%, rgb(var(--ei-cosmic-black-rgb) / 0.72) 30%, rgb(var(--ei-cosmic-black-rgb) / 0.16) 52%, transparent 68%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(var(--ei-cosmic-black-rgb) / 0.22) 0%, transparent 24%)',
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-[6] pointer-events-none h-[16vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower, delay: 0.8 }}
        style={{
          background:
            'linear-gradient(to bottom, transparent %, rgb(var(--ei-deep-nebula-rgb) / 0.18) 0%, var(--ei-cosmic-black) 100%)',
        }}
      />

<Container size="xl" className="relative z-10">

  <motion.div
  className="
    max-w-[680px]
    text-left
    md:pl-10
    lg:pl-14
    md:-translate-y-[2vh]
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