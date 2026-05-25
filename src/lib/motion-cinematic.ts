// ═══════════════════════════════════════════════════════════════
// Echo in Ink — Cinematic Motion System
// Ambient, environmental, subconscious motion
// ═══════════════════════════════════════════════════════════════

import { type Transition, type Variants } from 'framer-motion';

// ── Core Easing — Cinematic, deliberate ───────────────────────
export const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.4, 0, 0.2, 1] as const;
export const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

// ── Duration Scale — Slow, intentional ────────────────────────
export const DURATION = {
  instant: 0.2,      // Micro interactions
  fast: 0.5,         // Quick transitions
  normal: 0.9,       // Standard reveals
  slow: 1.4,         // Deliberate motion
  slower: 2.0,       // Cinematic entrance
  ambient: 8,        // Environmental loops
  breath: 12,        // Atmospheric cycles
} as const;

// ── Viewport Configuration — Generous margins ────────────────
export const VIEWPORT = {
  tight: { once: true, margin: '-50px' },
  normal: { once: true, margin: '-100px' },
  loose: { once: true, margin: '-150px' },
  generous: { once: true, margin: '-200px' },
} as const;

// ── Ambient Motion Config ─────────────────────────────────────
export const AMBIENT = {
  // Luminance drift — slow opacity oscillation
  luminance: {
    duration: DURATION.breath,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
  // Depth drift — subtle scale breathing
  depth: {
    duration: DURATION.ambient,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
  // Parallax drift — vertical float
  float: {
    duration: DURATION.ambient * 1.5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
} as const;

// ── Stagger Configuration — Cinematic pacing with organic variation ─────────────────
export const STAGGER: Record<string, number> = {
  tight: 0.06,       // Quick sequence
  normal: 0.12,      // Standard flow
  loose: 0.22,       // Dramatic reveals
  cinematic: 0.32,   // Hero sequences
} as const;

// Organic delay offsets for breaking predictable patterns
export const organicOffset = (base: number, variance = 0.08): number => {
  return base + (Math.random() - 0.5) * variance;
};

// ── Cinematic Reveal Variants ────────────────────────────────

// Soft fade — minimal movement, mostly opacity (with organic duration variation)
export const fadeSoft: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.slow * (0.9 + Math.random() * 0.2),
      ease: EASE_CINEMATIC,
    },
  },
};

// Gentle rise — subtle upward drift
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slower,
      ease: EASE_CINEMATIC,
    },
  },
};

// Drift up — even more subtle (variable distance for organic feel)
export const driftUp: Variants = {
  hidden: { opacity: 0, y: 10 + Math.random() * 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow * (0.95 + Math.random() * 0.1),
      ease: EASE_SOFT,
    },
  },
};

// Luminance reveal — glow-like fade
export const luminanceReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.slower,
      ease: EASE_CINEMATIC,
    },
  },
};

// ── Container Variants — Staggered reveals ────────────────────

export const staggerContainer = (stagger = STAGGER.normal, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger * (0.85 + Math.random() * 0.3),
      delayChildren: delay * (0.9 + Math.random() * 0.2),
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE_CINEMATIC,
    },
  },
};

// ── Hero Reveal — Sacred, deliberate ─────────────────────────

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.slower,
      ease: EASE_LUXURY,
    },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.cinematic,
      delayChildren: 0.3,
    },
  },
};

// ── Section Reveal — Environmental emergence ──────────────────

export const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE_SOFT,
    },
  },
};

// ── Card Hover — Subtle lift ────────────────────────────────

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: DURATION.fast,
      ease: EASE_CINEMATIC,
    },
  },
};

// ── Text Line Reveal — Editorial stagger ─────────────────────

export const textLineReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE_CINEMATIC,
    },
  },
};

// ── Ambient Glow Animation ───────────────────────────────────

export const ambientGlow = {
  animate: {
    opacity: [0.3, 0.38, 0.3],
    scale: [1, 1.015, 1],
  },
  transition: {
    duration: DURATION.ambient * (0.95 + Math.random() * 0.1),
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
};

// ── Parallax Float ───────────────────────────────────────────

export const parallaxFloat = {
  animate: {
    y: [-8, 8, -8],
  },
  transition: {
    duration: DURATION.ambient * 1.2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
};

// ── Utility Transitions ─────────────────────────────────────

export const transitionPresets = {
  soft: {
    duration: DURATION.normal,
    ease: EASE_CINEMATIC,
  } as Transition,
  slow: {
    duration: DURATION.slow,
    ease: EASE_CINEMATIC,
  } as Transition,
  luxury: {
    duration: DURATION.slower,
    ease: EASE_LUXURY,
  } as Transition,
} as const;
