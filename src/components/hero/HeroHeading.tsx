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
          CREDIBILITY SIGNAL — Audience-fit line
          Small typography, soft opacity, editorial treatment
          ═══════════════════════════════════════════════════════════════ */}
      <motion.p
        variants={heroReveal}
        className="font-structural text-[11px] tracking-[0.05em] text-white/38 mt-5"
      >
        Built for artists, founders, creative teams, and early-stage studios.
      </motion.p>
    </div>
  );
}
