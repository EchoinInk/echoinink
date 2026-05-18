// ── Core Easing & Duration Tokens ─────────────────────────────────────
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_STRING = 'cubic-bezier(0.22, 1, 0.36, 1)' as const;

export const DURATION = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
  cinematic: 1.6,
} as const;

// ── Viewport Configuration ───────────────────────────────────────────────
export const VIEWPORT = {
  tight: { once: true, margin: '-30px' },
  normal: { once: true, margin: '-50px' },
  loose: { once: true, margin: '-80px' },
} as const;

// ── Motion Presets ─────────────────────────────────────────────────────
export const presets = {
  // Reveal animations
  fadeUp: (delay = 0, duration = DURATION.normal) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT.normal,
    transition: { duration, ease: EASE, delay },
  }),

  fadeUpSlow: (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT.loose,
    transition: { duration: DURATION.cinematic, ease: EASE, delay },
  }),

  fade: (delay = 0, duration = DURATION.normal) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: VIEWPORT.normal,
    transition: { duration, ease: EASE, delay },
  }),

  fadeSlow: (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: VIEWPORT.loose,
    transition: { duration: DURATION.slower, ease: EASE, delay },
  }),

  // Staggered list animations
  staggerContainer: (stagger = 0.1, delayChildren = 0) => ({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: VIEWPORT.normal,
    variants: {
      hidden: {},
      visible: {
        transition: { staggerChildren: stagger, delayChildren },
      },
    },
  }),

  staggerItem: (duration = DURATION.normal) => ({
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
  }),

  // Page transitions
  pageIn: (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.9, ease: EASE, delay },
  }),

  pageOut: () => ({
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: EASE },
  }),

  pageTransition: () => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.6, ease: EASE },
  }),

  // Ambient animation config
  ambient: {
    duration: 28,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
} as const;

// ── Stagger Values ─────────────────────────────────────────────────────
export const STAGGER = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.15,
  cinematic: 0.22,
} as const;

// ── Legacy compatibility ───────────────────────────────────────────────
export const motion = {
  ease: {
    soft: EASE_STRING,
  },
  duration: DURATION,
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE },
  },
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.12 } },
    },
  },
} as const;
