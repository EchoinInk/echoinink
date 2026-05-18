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
      {/* Layer 1: Wide atmospheric haze — combined magenta-blue and cyan diffusion */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(580px, 88vw, 1300px)',
          height: 'clamp(260px, 44vw, 680px)',
          background: 'radial-gradient(ellipse 66% 46% at 48% 56%, rgba(232,121,249,0.09) 0%, rgba(168,85,247,0.06) 28%, rgba(30,200,255,0.08) 45%, rgba(99,102,241,0.04) 62%, transparent 80%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />
      {/* Layer 2: Core volumetric bloom — primary radiance, slow echo pulse */}
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
              width: 'clamp(190px, 26vw, 400px)',
              height: 'clamp(210px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgba(232,121,249,0.25) 0%, rgba(168,85,247,0.15) 38%, rgba(99,102,241,0.07) 62%, transparent 100%)',
              filter: 'blur(32px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={controls}
            initial={{ opacity: 0.75, scale: 0.97 }}
            style={{
              width: 'clamp(190px, 26vw, 400px)',
              height: 'clamp(210px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgba(232,121,249,0.25) 0%, rgba(168,85,247,0.15) 38%, rgba(99,102,241,0.07) 62%, transparent 100%)',
              filter: 'blur(32px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>
      {/* Layer 4: Inner hot core — luminous source point */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(80px, 9vw, 155px)',
          height: 'clamp(85px, 10vw, 170px)',
          background: 'radial-gradient(ellipse at 44% 50%, rgba(255,255,255,0.07) 0%, rgba(232,121,249,0.16) 45%, transparent 100%)',
          filter: 'blur(14px)',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* Atmospheric mist — environmental fog veiling monogram edges */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-48%, -52%)',
          width: 'clamp(180px, 26vw, 380px)',
          height: 'clamp(80px, 12vw, 180px)',
          background: 'radial-gradient(ellipse 82% 52% at 40% 56%, rgba(120,80,200,0.09) 0%, rgba(168,85,247,0.06) 40%, rgba(30,180,255,0.04) 65%, transparent 100%)',
          filter: 'blur(18px)',
          mixBlendMode: 'screen',
          zIndex: 3,
        }}
      />

      {/* Edge tinting — nebula haze coloring logo edges with directional variation */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(165px, 28vw, 420px)',
          height: 'clamp(175px, 30vw, 460px)',
          background: 'radial-gradient(ellipse 90% 94% at 47% 52%, transparent 20%, rgba(110,50,200,0.20) 50%, rgba(40,110,240,0.12) 72%, transparent 100%), radial-gradient(ellipse 50% 50% at 18% 32%, rgba(30,150,255,0.10) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 78% 68%, rgba(180,70,230,0.08) 0%, transparent 55%)',
          filter: 'blur(13px)',
          mixBlendMode: 'multiply',
          zIndex: 4,
        }}
      />
      {/* Particulate shimmer — faint energy scatter around brightest logo zones */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(140px, 20vw, 320px)',
          height: 'clamp(150px, 22vw, 350px)',
          background: 'radial-gradient(circle at 18% 32%, rgba(255,255,255,0.07) 0%, transparent 32%), radial-gradient(circle at 78% 22%, rgba(232,121,249,0.06) 0%, transparent 26%), radial-gradient(circle at 50% 75%, rgba(30,200,255,0.05) 0%, transparent 28%)',
          filter: 'blur(5px)',
          mixBlendMode: 'screen',
          zIndex: 4,
        }}
      />

      {/* Ambient surface tint — pale cinematic grade pulling peak whites toward nebula hue */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(155px, 29vh, 382px)',
          height: 'clamp(155px, 29vh, 382px)',
          background: 'radial-gradient(ellipse 83% 88% at 52% 49%, rgba(200,170,230,0.06) 0%, rgba(160,130,215,0.16) 60%, rgba(140,110,200,0.22) 88%, transparent 100%)',
          filter: 'blur(6px)',
          mixBlendMode: 'multiply',
          zIndex: 5,
        }}
      />
    </>
  );
}
