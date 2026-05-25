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
        className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/45 block mb-4"
      >
        Echo in Ink
      </motion.span>

      {/* ═══════════════════════════════════════════════════════════════
          PRIMARY HEADLINE — Clear value proposition
          The worlds your work lives in
          ═══════════════════════════════════════════════════════════════ */}
      <h1
        id="hero-heading"
        className="font-editorial text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-white/90 leading-[1.1] tracking-tight max-w-[18ch]"
        style={{
          letterSpacing: '-0.02em',
          textShadow: '0 0 80px rgba(99, 102, 241, 0.06)',
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
        className="font-structural text-[13px] md:text-[14px] leading-[1.65] max-w-[58ch] mt-6"
        style={{
          color: 'rgba(255,255,255,0.47)',
          letterSpacing: '0.01em',
        }}
      >
        Identity systems and digital experiences for founders who want their brands to feel intentional, resonant, and unmistakably their own.
      </motion.p>

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT FRAMING — Subtle commercial clarity
          Quietly answers: what kinds of work do you do?
          ═══════════════════════════════════════════════════════════════ */}
      <motion.p
        variants={heroReveal}
        className="font-structural text-[11px] tracking-[0.08em] text-white/35 mt-6"
      >
        Identity systems, immersive websites, creative direction, and atmospheric digital experiences.
      </motion.p>

      {/* ═══════════════════════════════════════════════════════════════
          AUDIENCE POSITIONING — Emotional authority statement
          Refined, emotionally intelligent, premium editorial tone
          ═══════════════════════════════════════════════════════════════ */}
      <motion.p
        variants={heroReveal}
        className="font-structural text-[11px] tracking-[0.04em] text-white/32 mt-4"
      >
        Built for founders, artists, cultural projects, and emerging brands seeking emotionally resonant digital worlds.
      </motion.p>
    </div>
  );
}
