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
<section className="relative w-full min-h-[760px] md:min-h-[820px] flex items-center overflow-hidden bg-[#05030B] ei-section-hero">       <HeroBackground />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,3,11,0.94) 0%, rgba(5,3,11,0.72) 30%, rgba(5,3,11,0.16) 52%, transparent 68%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,3,11,0.22) 0%, transparent 24%)',
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-[6] pointer-events-none h-[16vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower, delay: 0.8 }}
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(7,10,20,0.18) 48%, #05030B 100%)',
        }}
      />

<Container size="xl" className="relative z-10">

  <motion.div

    className="

      max-w-[680px]

      text-left

      md:pl-10

      lg:pl-14

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