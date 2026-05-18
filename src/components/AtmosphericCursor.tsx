import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export function AtmosphericCursor() {
  const prefersReduced = useReducedMotion();
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  const x = useSpring(mouseX, { damping: 48, stiffness: 95, mass: 1.6 });
  const y = useSpring(mouseY, { damping: 48, stiffness: 95, mass: 1.6 });

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none z-[9998] hidden md:block"
      style={{
        left: x,
        top: y,
        translateX: '-50%',
        translateY: '-50%',
        width: 'clamp(380px, 36vw, 620px)',
        height: 'clamp(380px, 36vw, 620px)',
        background:
          'radial-gradient(circle, rgba(168,85,247,0.062) 0%, rgba(30,200,255,0.032) 42%, transparent 70%)',
        filter: 'blur(55px)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
