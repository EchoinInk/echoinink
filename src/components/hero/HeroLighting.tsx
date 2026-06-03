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
        opacity: [0.75, 1, 0.75],
        scale: [0.97, 1.03, 0.97],
        transition: { duration: 9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);
  return (
    <>
      {/* Core volumetric bloom — primary radiance, slow echo pulse */}
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
  width: 'clamp(140px, 18vw, 280px)',
height: 'clamp(150px, 20vw, 320px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgb(221, 18, 203 / 0.25) 0%, rgb(113, 7, 234 / 0.15) 38%, rgb(11, 13, 42 / 0.07) 62%, transparent 100%)',
              filter: 'blur(32px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.75, scale: 0.97 }}
            style={{
              width: 'clamp(140px, 18vw, 280px)',
              height: 'clamp(150px, 20vw, 320px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgb(221, 18, 203 / 0.18) 0%, rgb(113, 7, 234 / 0.10) 38%, rgb(11, 13, 42 / 0.05) 62%, transparent 100%)',
              filter: 'blur(24px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>
      {/* Inner hot core — luminous source point */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(58px, 6vw, 110px)',
          height: 'clamp(62px, 7vw, 120px)',
          background: 'radial-gradient(ellipse at 44% 50%, rgb(var(--ei-ice-white-rgb) / 0.07) 0%, rgb(221, 18, 203 / 0.16) 45%, transparent 100%)',
          filter: 'blur(14px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />
    </>
  );
}