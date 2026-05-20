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
      {/* Layer 1: Primary volumetric bloom - nebula radiance beneath Ei */}
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
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(120, 80, 180, 0.12) 0%, rgba(30, 50, 120, 0.08) 35%, rgba(0, 180, 200, 0.05) 60%, transparent 100%)',
              filter: 'blur(45px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.8, scale: 0.98 }}
            style={{
              width: 'clamp(200px, 22vw, 340px)',
              height: 'clamp(200px, 22vw, 340px)',
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(120, 80, 180, 0.12) 0%, rgba(30, 50, 120, 0.08) 35%, rgba(0, 180, 200, 0.05) 60%, transparent 100%)',
              filter: 'blur(45px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>

      {/* Layer 2: Aqua rim lighting - from left side */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(220px, 25vw, 380px)',
          height: 'clamp(220px, 25vw, 380px)',
          background: 'radial-gradient(ellipse 60% 50% at 25% 50%, rgba(0, 180, 200, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 3: Inner glow core - luminous nebula source */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(90px, 10vw, 150px)',
          height: 'clamp(90px, 10vw, 150px)',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.05) 0%, rgba(180, 140, 220, 0.1) 30%, rgba(120, 80, 180, 0.06) 55%, transparent 100%)',
          filter: 'blur(22px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 4: Soft pink edge diffusion - from right side */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(180px, 20vw, 320px)',
          height: 'clamp(180px, 20vw, 320px)',
          background: 'radial-gradient(ellipse 50% 50% at 75% 50%, rgba(180, 60, 120, 0.04) 0%, transparent 65%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Layer 5: Subtle ambient haze - atmospheric nebula diffusion */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(320px, 38vw, 520px)',
          height: 'clamp(320px, 38vw, 520px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(120, 80, 180, 0.025) 0%, transparent 50%)',
          filter: 'blur(65px)',
          mixBlendMode: 'screen',
          zIndex: 0,
        }}
      />
    </>
  );
}
