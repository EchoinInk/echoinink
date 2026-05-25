import { motion } from 'framer-motion';
import { heroReveal, EASE_LUXURY, DURATION } from '@/lib/motion-cinematic';

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame">
      {/* Display heading — The EI monogram identity 
          Sacred visual element - isolated, timeless, emotionally weighted */}
      <h1
        id="hero-heading"
        className="ei-hero-display"
        style={{ 
          marginBottom: '1.5rem',
          WebkitTextStroke: '0.1px rgba(36, 41, 74, 0.35)',
          textShadow: '0 0 60px rgba(99, 102, 241, 0.08), 0 0 120px rgba(99, 102, 241, 0.04)',
          letterSpacing: '-0.02em',
        }}
      >
        Echo in Ink
      </h1>

      {/* Lead text — Emotional positioning (separate from monogram) */}
      <p 
        className="ei-hero-lead"
        style={{ 
          marginTop: '1rem',
          opacity: 0.52,
        }}
      >
        Translating inner worlds into coherent identities.
      </p>

      {/* Supporting positioning line — clarifies offering with poetic restraint */}
      <motion.p
        variants={heroReveal}
        className="font-structural text-[12px] md:text-[13px] leading-[1.7] max-w-[32ch] mt-8"
        style={{ 
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.01em',
        }}
      >
        Brand systems and atmospheric digital experiences designed with emotional precision.
      </motion.p>
    </div>
  );
}
