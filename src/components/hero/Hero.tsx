import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { HeroLighting } from './HeroLighting';
import { heroContainer, heroReveal, EASE_LUXURY, DURATION, volumetricDrift } from '@/lib/motion-cinematic';

export function Hero() {
  return (
    <section className="relative w-full max-md:min-h-0 md:min-h-screen flex items-start md:items-center justify-start overflow-hidden ei-section-hero pt-24 pb-20 md:pt-0 md:pb-0">
      {/* Background with cinematic depth layers */}
      <HeroBackground />

      {/* ═══════════════════════════════════════════════════════════════
          DEPTH LAYER 1: Deep atmospheric haze — furthest back
          Volumetric diffusion creating sense of vast space
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 2, ease: EASE_LUXURY, delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={volumetricDrift.animate}
          transition={volumetricDrift.transition}
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 25% 35%, rgba(99,102,241,0.012) 0%, transparent 55%)',
            filter: 'blur(150px)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          DEPTH LAYER 2: Mid atmospheric diffusion
          Soft volumetric haze creating spatial separation
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 1.5, ease: EASE_LUXURY, delay: 0.4 }}
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 30% 42%, rgba(168,85,247,0.012) 0%, rgba(99,102,241,0.006) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          DEPTH LAYER 3: Near-field luminescence — closer to content
          Creates ethereal glow around the monogram region
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 1.3, ease: EASE_LUXURY, delay: 0.6 }}
        style={{
          background: 'radial-gradient(ellipse 45% 40% at 28% 38%, rgba(232,121,249,0.014) 0%, rgba(168,85,247,0.009) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          DEPTH LAYER 4: Monogram halo — the sacred glow
          Creates the ethereal, suspended feeling for the Ei symbol
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower * 1.5, ease: EASE_LUXURY, delay: 0.8 }}
        style={{
          background: 'radial-gradient(ellipse 35% 30% at 26% 36%, rgba(255,255,255,0.012) 0%, rgba(232,121,249,0.018) 30%, rgba(168,85,247,0.012) 60%, transparent 80%)',
          filter: 'blur(50px)',
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          DEPTH LAYER 5: Negative space isolation
          Darkness framing to push content forward
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 40% 35% at 70% 65%, rgba(3,5,12,0.35) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Dynamic lighting component for the monogram */}
      <HeroLighting />

      {/* ═══════════════════════════════════════════════════════════════
          CONTENT LAYER: Hero heading and CTA
          Positioned at optimal reading depth with cinematic reveal
          ═══════════════════════════════════════════════════════════════ */}
      <div className="ei-container w-full relative z-10">
        <motion.div
          className="max-w-[680px] items-start text-left translate-y-[2vh] md:translate-y-[4vh]"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroReveal}>
            <HeroHeading />
          </motion.div>
          <motion.div
            variants={heroReveal}
            transition={{ delay: 0.2 }}
          >
            <HeroCTA />
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FOREGROUND VEIL: Deep bottom fade for cinematic transition
          Creates the feeling of content emerging from darkness
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[12vh] md:h-[35vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slower, delay: 1.2 }}
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(8,10,18,0.25) 25%, rgba(12,14,24,0.55) 55%, rgba(15,18,32,0.88) 85%, rgba(15,18,32,1) 100%)',
        }}
      />

      {/* Ultra-subtle top vignette for framing */}
      <div
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(3,5,12,0.15) 0%, transparent 50%)',
        }}
      />
    </section>
  );
}
