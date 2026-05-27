import { motion } from 'framer-motion';
import { heroReveal } from '@/lib/motion-cinematic';

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame">
      <motion.div
        variants={heroReveal}
        className="mb-3 flex items-center gap-4 md:mb-5"
      >
        <span className="font-structural text-[11px] uppercase tracking-[0.2em] text-white/60">
          WE DESIGN WORLDS
        </span>

        <div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgba(232,121,249,0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgba(99,102,241,0.15) 0%, rgba(232,121,249,0.95) 100%)',
          }}
        />
      </motion.div>

      <h1
        id="hero-heading"
        className="font-editorial max-w-[30ch] whitespace-pre-line text-[2.25rem] leading-[1.06] tracking-tight text-white/92 max-md:leading-[1.12] md:text-[3.1rem] lg:text-[3.7rem]"
        style={{
          letterSpacing: '-0.025em',
          textShadow: '0 0 90px rgba(123, 92, 255, 0.08)',
        }}
      >
        {'Designing the worlds\nyour work lives in.'}
      </h1>

      <motion.p
        variants={heroReveal}
        className="font-structural mt-4 max-w-[34rem] text-[14px] leading-[1.65] text-white/72 md:mt-6 md:text-[15px]"
        style={{
          letterSpacing: '0.005em',
        }}
      >
        Emotionally intelligent identity systems, immersive websites, and atmospheric digital experiences for founders, artists, and emerging brands.
      </motion.p>
    </div>
  );
}