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
        opacity: [0.9, 0.94, 0.9],
        transition: { duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <div className="relative">
      {/* Soft contact shadow - grounding Ei into nebula environment */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'clamp(180px, 20vw, 320px)',
          height: 'clamp(180px, 20vw, 320px)',
          background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(26px)',
          transform: 'translateY(12px)',
        }}
      />

      {/* Ei monogram - soft, luminous, atmospheric, partially dissolved into nebula */}
      {prefersReduced ? (
        <img
          src={monogram}
          alt="Ei monogram"
          className="relative mx-auto"
          style={{
            width: 'clamp(160px, 18vw, 280px)',
            opacity: 0.92,
            filter: `
              brightness(0.96)
              contrast(0.93)
              saturate(0.88)
              /* Atmospheric integration - soft environmental glow */
              drop-shadow(0 0 24px rgba(180, 140, 220, 0.12))
              /* Depth shadow - grounded in nebula */
              drop-shadow(0 6px 20px rgba(0, 0, 0, 0.4))
              /* Haze dissolution - soft bloom diffusion */
              drop-shadow(0 0 40px rgba(160, 120, 200, 0.08))
            `,
            zIndex: 2,
          }}
        />
      ) : (
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ y: 0, opacity: 0.92 }}
        >
          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(160px, 18vw, 280px)',
              filter: `
                brightness(0.96)
                contrast(0.93)
                saturate(0.88)
                /* Atmospheric integration - soft environmental glow */
                drop-shadow(0 0 24px rgba(180, 140, 220, 0.12))
                /* Depth shadow - grounded in nebula */
                drop-shadow(0 6px 20px rgba(0, 0, 0, 0.4))
                /* Haze dissolution - soft bloom diffusion */
                drop-shadow(0 0 40px rgba(160, 120, 200, 0.08))
              `,
              zIndex: 2,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
