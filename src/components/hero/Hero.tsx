import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { heroContainer, heroReveal, EASE_LUXURY, DURATION } from '@/lib/motion-cinematic';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden ei-section-hero">
      {/* Background with cinematic depth layers */}
      <HeroBackground />

      {/* Distant depth layer — far atmospheric haze */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(99,102,241,0.015) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Mid-depth layer — subtle luminance */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 1.2, ease: EASE_LUXURY, delay: 0.3 }}
        style={{
          background: 'radial-gradient(ellipse 50% 45% at 35% 45%, rgba(99,102,241,0.025) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Sacred framing glow for EI monogram — reduced, more subtle */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 1.3, ease: EASE_LUXURY, delay: 0.6 }}
        style={{
          background: 'radial-gradient(ellipse 40% 35% at 32% 42%, rgba(99,102,241,0.02) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Monogram isolation — darkness framing */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 35% 30% at 65% 60%, rgba(3,5,12,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Centered content with cinematic reveal */}
      <div className="ei-container w-full relative z-10">
        <motion.div
          className="max-w-[600px] items-start text-left"
          style={{ transform: 'translateY(5vh)' }}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroReveal}>
            <HeroHeading />
          </motion.div>
          <motion.div 
            variants={heroReveal}
            transition={{ delay: 0.15 }}
          >
            <HeroCTA />
          </motion.div>
        </motion.div>
      </div>

      {/* Deep bottom fade for cinematic transition */}
      <div 
        className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[30vh]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(12,14,24,0.4) 40%, rgba(15,18,32,0.9) 85%, rgba(15,18,32,1) 100%)',
        }}
      />
    </section>
  );
}
