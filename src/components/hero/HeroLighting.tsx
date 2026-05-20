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
        opacity: [0.8, 1, 0.8],
        scale: [0.98, 1.02, 0.98],
        transition: { duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      });
    } else {
      controls.stop();
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <>
      {/* Layer 1: Primary volumetric bloom - soft radiance beneath Ei */}
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
              width: 'clamp(180px, 20vw, 320px)',
              height: 'clamp(180px, 20vw, 320px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(167, 139, 250, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, rgba(30, 200, 255, 0.04) 65%, transparent 100%)',
              filter: 'blur(40px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.8, scale: 0.98 }}
            style={{
              width: 'clamp(180px, 20vw, 320px)',
              height: 'clamp(180px, 20vw, 320px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(167, 139, 250, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, rgba(30, 200, 255, 0.04) 65%, transparent 100%)',
              filter: 'blur(40px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>

      {/* Layer 2: Inner glow core - luminous source point */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(80px, 8vw, 140px)',
          height: 'clamp(80px, 8vw, 140px)',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.06) 0%, rgba(232, 121, 249, 0.12) 35%, rgba(167, 139, 250, 0.06) 60%, transparent 100%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 3: Subtle ambient haze - atmospheric diffusion */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(300px, 35vw, 500px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(232, 121, 249, 0.02) 0%, transparent 50%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          zIndex: 0,
        }}
      />
    </>
  );
}
