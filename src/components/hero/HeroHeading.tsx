import { motion } from 'framer-motion';
import { heroReveal } from '@/lib/motion-cinematic';

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame">
      {/* ═══════════════════════════════════════════════════════════════
          EYEBROW — Studio identification
          ═══════════════════════════════════════════════════════════════ */}
      <motion.span
        variants={heroReveal}
        className="font-structural text-[11px] tracking-[0.2em] uppercase text-white/52 block mb-3 md:mb-5"
      >
        Echo in Ink
      </motion.span>

      {/* ═══════════════════════════════════════════════════════════════
          PRIMARY HEADLINE — Clear value proposition
          The worlds your work lives in
          ═══════════════════════════════════════════════════════════════ */}
      <h1
        id="hero-heading"
        className="font-editorial text-[2.25rem] md:text-[3.1rem] lg:text-[3.7rem] text-white/92 leading-[1.06] max-md:leading-[1.12] tracking-tight max-w-[22ch]"
        style={{
          letterSpacing: '-0.025em',
          textShadow: '0 0 90px rgba(99, 102, 241, 0.08)',
        }}
      >
        Designing the worlds your work lives in.
      </h1>

      {/* ═══════════════════════════════════════════════════════════════
          SUPPORTING TEXT — Expanded context (~52-60ch, improved readability)
          Identity systems and digital experiences for founders
          ═══════════════════════════════════════════════════════════════ */}
      <motion.p
        variants={heroReveal}
        className="font-structural text-[14px] md:text-[15px] leading-[1.65] max-w-[62ch] max-md:max-w-[34ch] mt-3 md:mt-6"
        style={{
          color: 'rgba(255,255,255,0.50)',
          letterSpacing: '0.01em',
        }}
      >
        Identity systems, immersive websites, creative direction, and atmospheric digital experiences.
      </motion.p>

     {/* ═══════════════════════════════════════════════════════════════
          AUDIENCE POSITIONING — Emotional authority statement
          Refined, emotionally intelligent, premium editorial tone
          ═══════════════════════════════════════════════════════════════ */}
     <motion.p
        variants={heroReveal}
        className="font-structural text-[12px] tracking-[0.06em] text-white/45 max-md:text-white/40 mt-2.5 md:mt-5"
      >
        Built for founders, artists, and emerging brands seeking emotionally resonant digital worlds.
      </motion.p>
    </div>
  );
}
