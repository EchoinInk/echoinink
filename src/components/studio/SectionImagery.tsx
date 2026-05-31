import { motion, useReducedMotion } from 'framer-motion';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface SectionImageryProps {
  image: string;
  alt: string;
  focalPosition?: string;
}

export function SectionImagery({
  image,
  alt,
  focalPosition = 'center',
}: SectionImageryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.figure
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="relative my-[clamp(4rem,10vw,7.5rem)] h-[min(52vh,520px)] w-full overflow-hidden"
      aria-label={alt}
    >
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: focalPosition }}
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.02, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 24, ease: 'easeInOut', repeat: Infinity }
        }
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--ei-void-black) 0%, transparent 18%, transparent 72%, var(--ei-void-black) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, rgb(var(--ei-void-black-rgb) / 0.72) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--ei-void-black-rgb) / 0.5) 0%, transparent 40%, transparent 60%, rgb(var(--ei-void-black-rgb) / 0.5) 100%)',
        }}
      />
    </motion.figure>
  );
}
