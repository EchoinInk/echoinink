import { type CSSProperties } from 'react';
import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E")`;

interface GlowAnim {
  opacity: [number, number, number];
  scale?: [number, number, number];
}

// ── GlowField ─────────────────────────────────────────────────────────
// Blurred radial gradient with optional animated opacity/scale.
export function GlowField({
  style, gradient, blur,
  anim, duration = 28, delay = 0,
}: {
  style: CSSProperties;
  gradient: string;
  blur: number;
  anim?: GlowAnim;
  duration?: number;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (!anim || prefersReduced) return;
    
    if (isInView) {
      controls.start({
        opacity: anim.opacity,
        ...(anim.scale ? { scale: anim.scale } : {}),
        transition: { duration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay }
      });
    } else {
      controls.stop();
    }
  }, [isInView, anim, duration, delay, prefersReduced, controls]);

  const base: CSSProperties = {
    position: 'absolute',
    ...style,
    background: gradient,
    filter: `blur(${blur}px)`,
  };
  if (!anim || prefersReduced) return <div style={base} />;
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: anim.opacity[0], ...(anim.scale ? { scale: anim.scale[0] } : {}) }}
      style={base}
    />
  );
}

// ── PulseNode ─────────────────────────────────────────────────────────
// Semantic alias for small node-like glows.
export const PulseNode = GlowField;

// ── VerticalBeam ──────────────────────────────────────────────────────
// Static diffused vertical light column.
export function VerticalBeam({
  left, width, gradient, blur = 30,
}: {
  left: string;
  width: number;
  gradient: string;
  blur?: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left,
        width: `${width}px`,
        background: gradient,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

// ── GrainOverlay ──────────────────────────────────────────────────────
// Animated film-grain texture at mix-blend overlay.
export function GrainOverlay({
  range = [0.016, 0.040],
  duration = 28,
  delay = 0,
  size = 200,
}: {
  range?: [number, number];
  duration?: number;
  delay?: number;
  size?: number;
}) {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [lo, hi] = range;

  useEffect(() => {
    if (prefersReduced) return;
    
    if (isInView) {
      controls.start({
        opacity: [lo, hi, lo],
        transition: { duration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay }
      });
    } else {
      controls.stop();
    }
  }, [isInView, lo, hi, duration, delay, prefersReduced, controls]);

  const grainStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: GRAIN,
    backgroundRepeat: 'repeat',
    backgroundSize: `${size}px ${size}px`,
    mixBlendMode: 'overlay',
  };
  if (prefersReduced) return <div style={{ ...grainStyle, opacity: (lo + hi) / 2 }} />;
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: lo }}
      style={grainStyle}
    />
  );
}

// ── EchoRing ──────────────────────────────────────────────────────────
// SVG concentric ellipse rings with optional animated opacity/scale.
interface Ring {
  cx: number; cy: number; rx: number; ry: number;
  stroke: string; sw: number;
}

export function EchoRing({
  style, viewBox, rings,
  anim, duration = 34, delay = 0,
  blur, preserveAspect = false,
}: {
  style: CSSProperties;
  viewBox: string;
  rings: Ring[];
  anim?: GlowAnim;
  duration?: number;
  delay?: number;
  blur?: number;
  preserveAspect?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (!anim || prefersReduced) return;
    
    if (isInView) {
      controls.start({
        opacity: anim.opacity,
        ...(anim.scale ? { scale: anim.scale } : {}),
        transition: { duration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay }
      });
    } else {
      controls.stop();
    }
  }, [isInView, anim, duration, delay, prefersReduced, controls]);

  const svg = (
    <svg
      width="100%" height="100%"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(preserveAspect ? { preserveAspectRatio: 'none' } : {})}
    >
      {rings.map((r, i) => (
        <ellipse
          key={i}
          cx={r.cx} cy={r.cy}
          rx={r.rx} ry={r.ry}
          stroke={r.stroke}
          strokeWidth={r.sw}
        />
      ))}
    </svg>
  );
  const base: CSSProperties = {
    position: 'absolute',
    ...style,
    ...(blur !== undefined ? { filter: `blur(${blur}px)` } : {}),
  };
  if (!anim || prefersReduced) return <div style={base}>{svg}</div>;
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: anim.opacity[0], ...(anim.scale ? { scale: anim.scale[0] } : {}) }}
      style={base}
    >
      {svg}
    </motion.div>
  );
}

// ── ContourField ──────────────────────────────────────────────────────
// SVG path-based contour sweeps and arcs.
interface CPath {
  d: string;
  stroke: string;
  sw: number;
  cap?: 'round' | 'butt' | 'square';
}

export function ContourField({
  viewBox, paths, blur = 1.5,
}: {
  viewBox: string;
  paths: CPath[];
  blur?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        filter: `blur(${blur}px)`,
      }}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.sw}
          fill="none"
          {...(p.cap ? { strokeLinecap: p.cap } : {})}
        />
      ))}
    </svg>
  );
}

// ── AtmosphericBloom ──────────────────────────────────────────────────
// Large centered environmental diffusion — translate-centered GlowField.
export function AtmosphericBloom({
  size, gradient, blur,
  anim, duration = 30, delay = 0,
}: {
  size: string;
  gradient: string;
  blur: number;
  anim?: GlowAnim;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: size, height: size,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <GlowField
        style={{ inset: 0 }}
        gradient={gradient}
        blur={blur}
        anim={anim}
        duration={duration}
        delay={delay}
      />
    </div>
  );
}
