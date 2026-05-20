import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function HeroLighting() {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (prefersReduced) return;

    if (isInView) {
      controls.start({
        opacity: [0.9, 1, 0.9],
        scale: [0.97, 1.03, 0.97],
        transition: { duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <>
      {/* Layer 1: Brightest light - directly behind and beneath monogram */}
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
              width: 'clamp(220px, 25vw, 380px)',
              height: 'clamp(220px, 25vw, 380px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(255, 255, 255, 0.12) 0%, rgba(200, 160, 230, 0.18) 25%, rgba(180, 140, 220, 0.12) 45%, rgba(120, 80, 180, 0.06) 65%, transparent 100%)',
              filter: 'blur(35px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.9, scale: 0.97 }}
            style={{
              width: 'clamp(220px, 25vw, 380px)',
              height: 'clamp(220px, 25vw, 380px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(255, 255, 255, 0.12) 0%, rgba(200, 160, 230, 0.18) 25%, rgba(180, 140, 220, 0.12) 45%, rgba(120, 80, 180, 0.06) 65%, transparent 100%)',
              filter: 'blur(35px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>

      {/* Layer 2: Inner luminous core - intense light source */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(100px, 11vw, 160px)',
          height: 'clamp(100px, 11vw, 160px)',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.15) 0%, rgba(220, 180, 250, 0.2) 25%, rgba(180, 140, 220, 0.1) 50%, transparent 100%)',
          filter: 'blur(18px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 3: Atmospheric bloom - soft diffusion */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(320px, 36vw, 520px)',
          height: 'clamp(320px, 36vw, 520px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 160, 230, 0.04) 0%, rgba(120, 80, 180, 0.03) 40%, transparent 60%)',
          filter: 'blur(55px)',
          mixBlendMode: 'screen',
          zIndex: 0,
        }}
      />
    </>
  );
}
