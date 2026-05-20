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
        y: [-4, 4, -4],
        transition: { duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
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
          background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 0, 0, 0.5) 0%, transparent 70%)',
          filter: 'blur(24px)',
          transform: 'translateY(12px)',
        }}
      />

      {/* Ei monogram - fused into nebula, formed from cosmic material */}
      {prefersReduced ? (
        <img
          src={monogram}
          alt="Ei monogram"
          className="relative mx-auto"
          style={{
            width: 'clamp(160px, 18vw, 280px)',
            opacity: 0.95,
            filter: `
              brightness(0.92)
              contrast(0.94)
              saturate(0.95)
              /* Aqua rim from left */
              drop-shadow(-4px 0 12px rgba(0, 180, 200, 0.15))
              /* Indigo depth from center */
              drop-shadow(0 4px 16px rgba(30, 50, 120, 0.2))
              /* Violet transition bloom */
              drop-shadow(0 0 20px rgba(120, 80, 180, 0.12))
              /* Pink edge diffusion from right */
              drop-shadow(4px 0 14px rgba(180, 60, 120, 0.08))
              /* Cosmic luminance */
              drop-shadow(0 0 36px rgba(180, 140, 220, 0.06))
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
              opacity: 0.95,
              filter: `
                brightness(0.92)
                contrast(0.94)
                saturate(0.95)
                /* Aqua rim from left */
                drop-shadow(-4px 0 12px rgba(0, 180, 200, 0.15))
                /* Indigo depth from center */
                drop-shadow(0 4px 16px rgba(30, 50, 120, 0.2))
                /* Violet transition bloom */
                drop-shadow(0 0 20px rgba(120, 80, 180, 0.12))
                /* Pink edge diffusion from right */
                drop-shadow(4px 0 14px rgba(180, 60, 120, 0.08))
                /* Cosmic luminance */
                drop-shadow(0 0 36px rgba(180, 140, 220, 0.06))
              `,
              zIndex: 2,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
