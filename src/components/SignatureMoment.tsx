// ═══════════════════════════════════════════════════════════════
// SignatureMoment — Cinematic Emotional Climax
// A quietly transcendent reveal moment
// Subtle, emotionally powerful, premium, restrained, immersive
// ═══════════════════════════════════════════════════════════════

import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EASE_LUXURY, DURATION, signatureReveal, blurEmergenceSlow } from '@/lib/motion-cinematic';

interface SignatureMomentProps {
  children: React.ReactNode;
  className?: string;
}

// ═══════════════════════════════════════════════════════════════
// CinematicReveal — Scroll-triggered dimensional reveal
// Content emerges from deep blur and shadow into clarity
// ═══════════════════════════════════════════════════════════════

export function CinematicReveal({ children, className = '' }: SignatureMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : signatureReveal}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DepthTransition — Scroll-driven depth transition
// Creates the feeling of moving through layers of atmosphere
// ═══════════════════════════════════════════════════════════════

interface DepthTransitionProps {
  children: React.ReactNode;
  /** Depth of the transition effect: 'shallow' | 'deep' | 'abyssal' */
  depth?: 'shallow' | 'deep' | 'abyssal';
  className?: string;
}

export function DepthTransition({ children, depth = 'deep', className = '' }: DepthTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const depthMultiplier = {
    shallow: 1,
    deep: 1.5,
    abyssal: 2,
  }[depth];

  const y = useTransform(scrollYProgress, [0, 1], [40 * depthMultiplier, -40 * depthMultiplier]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [8, 0, 0, 8]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {prefersReduced ? (
        <div>{children}</div>
      ) : (
        <motion.div style={{ y, opacity, scale, filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none' }}>
          {children}
        </motion.div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// AtmosphericDissolve — Element dissolves into atmosphere
// For moments where content should feel like it's becoming space
// ═══════════════════════════════════════════════════════════════

interface AtmosphericDissolveProps {
  children: React.ReactNode;
  trigger?: 'inView' | 'hover';
  className?: string;
}

export function AtmosphericDissolve({ children, trigger = 'inView', className = '' }: AtmosphericDissolveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(12px) saturate(0.8)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px) saturate(1)',
      transition: {
        duration: DURATION.slower * 1.5,
        ease: EASE_LUXURY,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={prefersReduced ? { opacity: 1 } : isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ImmersiveEi — The signature Ei monogram immersive moment
// Creates an ethereal reveal of the monogram
// ═══════════════════════════════════════════════════════════════

interface ImmersiveEiProps {
  className?: string;
}

export function ImmersiveEi({ className = '' }: ImmersiveEiProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className={`relative h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Deep atmospheric layers */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: DURATION.slower * 2, ease: EASE_LUXURY }}
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgb(var(--ei-luxe-violet-rgb) / 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgb(var(--ei-orchid-pink-rgb) / 0.03) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Ei monogram container with ethereal reveal */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
        animate={
          prefersReduced
            ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
            : isInView
              ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
              : { opacity: 0, scale: 0.9, filter: 'blur(20px)' }
        }
        transition={{ duration: DURATION.slower * 1.8, ease: EASE_LUXURY, delay: 0.3 }}
      >
        {/* SVG Ei monogram */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          className="opacity-60"
        >
          <defs>
            <linearGradient id="eiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(var(--ei-ice-white-rgb) / 0.5)" />
              <stop offset="50%" stopColor="rgb(var(--ei-orchid-pink-rgb) / 0.4)" />
              <stop offset="100%" stopColor="rgb(var(--ei-luxe-violet-rgb) / 0.3)" />
            </linearGradient>
          </defs>
          {/* Ei letterform — stylized monogram */}
          <text
            x="60"
            y="78"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="72"
            fontStyle="italic"
            fill="url(#eiGradient)"
            style={{ letterSpacing: '-0.05em' }}
          >
            Ei
          </text>
        </svg>

        {/* Surrounding glow */}
        <motion.div
          className="absolute inset-0 -m-10"
          animate={
            prefersReduced
              ? { opacity: 0.3 }
              : {
                  opacity: [0.2, 0.35, 0.2],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: DURATION.ambient * 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgb(var(--ei-orchid-pink-rgb) / 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </motion.div>

      {/* Bottom dissolve fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(var(--ei-deep-indigo-rgb) / 0.8) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// InkDiffusion — Ink-in-water reveal effect
// Content emerges as if diffusing through dark liquid
// ═══════════════════════════════════════════════════════════════

interface InkDiffusionProps {
  children: React.ReactNode;
  className?: string;
}

export function InkDiffusion({ children, className = '' }: InkDiffusionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Ink diffusion overlay */}
      {!prefersReduced && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0.4 }}
          animate={isInView ? { opacity: 0 } : { opacity: 0.4 }}
          transition={{ duration: DURATION.slower * 2, ease: EASE_LUXURY, delay: 0.2 }}
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgb(var(--ei-deep-indigo-rgb) / 0.95) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.7) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {/* Content with blur emergence */}
      <motion.div
        initial="hidden"
        animate={prefersReduced ? { opacity: 1 } : isInView ? 'visible' : 'hidden'}
        variants={blurEmergenceSlow}
      >
        {children}
      </motion.div>
    </div>
  );
}

// All components are exported as named exports
// Usage: import { CinematicReveal, DepthTransition, AtmosphericDissolve, ImmersiveEi, InkDiffusion } from './SignatureMoment'
