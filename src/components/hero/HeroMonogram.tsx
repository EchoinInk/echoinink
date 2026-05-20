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
        y: [-2, 2, -2],
        opacity: [0.88, 0.93, 0.88],
        transition: { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <div className="relative">
      {/* Soft contact shadow - grounding Ei into cosmic ink surface */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'clamp(180px, 20vw, 320px)',
          height: 'clamp(180px, 20vw, 320px)',
          background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 0, 0, 0.5) 0%, transparent 70%)',
          filter: 'blur(28px)',
          transform: 'translateY(14px)',
        }}
      />

      {/* Ei monogram - emerging from light basin, partially dissolving into atmospheric haze */}
      {prefersReduced ? (
        <img
          src={monogram}
          alt="Ei monogram"
          className="relative mx-auto"
          style={{
            width: 'clamp(160px, 18vw, 280px)',
            opacity: 0.9,
            filter: `
              brightness(0.95)
              contrast(0.9)
              saturate(0.85)
              /* Atmospheric transparency - inherits nebula lighting */
              drop-shadow(0 0 28px rgba(200, 160, 230, 0.18))
              /* Depth shadow - grounded in light basin */
              drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5))
              /* Haze integration - soft bloom diffusion */
              drop-shadow(0 0 48px rgba(180, 140, 220, 0.1))
            `,
            zIndex: 2,
          }}
        />
      ) : (
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ y: 0, opacity: 0.9 }}
        >
          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(160px, 18vw, 280px)',
              filter: `
                brightness(0.95)
                contrast(0.9)
                saturate(0.85)
                /* Atmospheric transparency - inherits nebula lighting */
                drop-shadow(0 0 28px rgba(200, 160, 230, 0.18))
                /* Depth shadow - grounded in light basin */
                drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5))
                /* Haze integration - soft bloom diffusion */
                drop-shadow(0 0 48px rgba(180, 140, 220, 0.1))
              `,
              zIndex: 2,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
