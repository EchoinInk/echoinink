import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import monogram from '@/assets/ei-monogram-balanced.svg';

export function HeroMonogram() {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (prefersReduced) return;

    if (isInView) {
      controls.start({
        y: [-3, 3, -3],
        transition: { duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <div className="relative">
      {/* Soft contact shadow - grounding Ei into cosmic surface */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'clamp(180px, 20vw, 320px)',
          height: 'clamp(180px, 20vw, 320px)',
          background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(24px)',
          transform: 'translateY(12px)',
        }}
      />

      {/* Ei monogram - emerging from galaxy, formed from nebula */}
      {prefersReduced ? (
        <img
          src={monogram}
          alt="Ei monogram"
          className="relative mx-auto"
          style={{
            width: 'clamp(160px, 18vw, 280px)',
            opacity: 0.92,
            filter: `
              brightness(0.94)
              contrast(0.92)
              saturate(0.9)
              /* Nebula light wrapping - soft atmospheric glow */
              drop-shadow(0 0 24px rgba(180, 140, 220, 0.15))
              /* Subtle depth shadow */
              drop-shadow(0 6px 20px rgba(0, 0, 0, 0.4))
              /* Cosmic bloom diffusion */
              drop-shadow(0 0 40px rgba(120, 80, 180, 0.08))
            `,
            zIndex: 2,
          }}
        />
      ) : (
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ y: 0 }}
        >
          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(160px, 18vw, 280px)',
              opacity: 0.92,
              filter: `
                brightness(0.94)
                contrast(0.92)
                saturate(0.9)
                /* Nebula light wrapping - soft atmospheric glow */
                drop-shadow(0 0 24px rgba(180, 140, 220, 0.15))
                /* Subtle depth shadow */
                drop-shadow(0 6px 20px rgba(0, 0, 0, 0.4))
                /* Cosmic bloom diffusion */
                drop-shadow(0 0 40px rgba(120, 80, 180, 0.08))
              `,
              zIndex: 2,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
