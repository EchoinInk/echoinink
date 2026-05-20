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
        opacity: [0.92, 1, 0.92],
        scale: [0.98, 1.02, 0.98],
        transition: { duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <>
      {/* Layer 1: Environmental light enhancement - integrates with nebula basin */}
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
              width: 'clamp(200px, 22vw, 340px)',
              height: 'clamp(200px, 22vw, 340px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(200, 160, 230, 0.06) 0%, rgba(180, 140, 220, 0.04) 35%, rgba(120, 80, 180, 0.025) 60%, transparent 100%)',
              filter: 'blur(40px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.92, scale: 0.98 }}
            style={{
              width: 'clamp(200px, 22vw, 340px)',
              height: 'clamp(200px, 22vw, 340px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(200, 160, 230, 0.06) 0%, rgba(180, 140, 220, 0.04) 35%, rgba(120, 80, 180, 0.025) 60%, transparent 100%)',
              filter: 'blur(40px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>

      {/* Layer 2: Subtle inner glow - environmental luminous source */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(90px, 10vw, 140px)',
          height: 'clamp(90px, 10vw, 140px)',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.04) 0%, rgba(200, 160, 230, 0.08) 30%, rgba(180, 140, 220, 0.04) 55%, transparent 100%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 3: Very subtle atmospheric diffusion - environmental haze */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(280px, 32vw, 480px)',
          height: 'clamp(280px, 32vw, 480px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(180, 140, 220, 0.015) 0%, transparent 50%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          zIndex: 0,
        }}
      />
    </>
  );
}
