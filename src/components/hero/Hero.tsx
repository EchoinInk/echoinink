import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { heroContainer, heroReveal, EASE_LUXURY, DURATION } from '@/lib/motion-cinematic';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden ei-section-hero">
      {/* Background with cinematic depth */}
      <HeroBackground />

      {/* Sacred framing glow for EI monogram */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.5 }}
        style={{
          background: 'radial-gradient(ellipse 45% 40% at 35% 45%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Centered content with cinematic reveal */}
      <div className="ei-container w-full">
        <motion.div
          className="relative z-10 max-w-[640px] items-start text-left"
          style={{ transform: 'translateY(6vh)' }}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroReveal}>
            <HeroHeading />
          </motion.div>
          <motion.div variants={heroReveal}>
            <HeroCTA />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom fade for section transition */}
      <div 
        className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[25vh]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(15,18,32,0.3) 50%, rgba(15,18,32,0.85) 100%)',
        }}
      />
    </section>
  );
}
