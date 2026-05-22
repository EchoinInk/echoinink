// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC ENGINE SYSTEM — Echo in Ink
// ═══════════════════════════════════════════════════════════════════════════════
// A unified emotional rendering system governing motion, atmosphere, narrative
// structure, and scroll behavior. Everything inherits the same emotional rules.
//
// Principles:
// • Cinematic, not decorative
// • Restraint, not spectacle
// • Light is reactive, not ornamental
// • Scroll is film editing, not navigation
// • Typography leads, atmosphere supports
// ═══════════════════════════════════════════════════════════════════════════════

import { type Transition, type Variants } from 'framer-motion';

// ───────────────────────────────────────────────────────────────────────────────
// 1. GLOBAL MOTION GRAMMAR
// ───────────────────────────────────────────────────────────────────────────────

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;
export const CINEMATIC_EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)' as const;

export const TIMING = {
  micro: 0.18,      // 180ms — hover states, micro-interactions
  transition: 0.52, // 520ms — element transitions
  cinematic: 1.05,  // 1050ms — section reveals, emotional beats
  dissolve: 1.4,    // 1400ms — major transitions, page changes
} as const;

export const createTransition = (
  type: keyof typeof TIMING = 'transition',
  delay = 0
): Transition => ({
  duration: TIMING[type],
  ease: CINEMATIC_EASE,
  delay,
});

// ───────────────────────────────────────────────────────────────────────────────
// 2. ATMOSPHERIC LIGHT MODEL
// ───────────────────────────────────────────────────────────────────────────────
// Light behaves like fog — reactive, not ornamental.
// Appears only on: scroll focus, interaction intent, content emphasis.

export const ATMOSPHERE = {
  // Base ink palette — near-black layered depth
  background: {
    deep: '#050505',
    mid: '#080808',
    surface: '#0A0A0A',
    elevated: '#0D0D0D',
  },

  // Light spectrum — indigo-violet baseline with aqua accents
  light: {
    indigo: 'rgba(99, 102, 241, ',
    violet: 'rgba(168, 85, 247, ',
    aqua: 'rgba(56, 189, 248, ',
  },

  // Reactive opacity levels (NOT persistent)
  reactive: {
    ambient: 0.04,    // Background atmosphere (very subtle)
    focus: 0.08,      // When element is in scroll focus
    interaction: 0.12, // On hover/intent
    emphasis: 0.16,   // Content emphasis moments
  },

  // Gradient templates
  gradients: {
    base: 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #080808 100%)',
    void: 'linear-gradient(180deg, #050505 0%, #080808 100%)',
    depth: 'linear-gradient(180deg, #080808 0%, #050505 50%, #0A0A0A 100%)',
  },
} as const;

// Create radial glow with reactive opacity
export const createRadialGlow = (
  color: keyof typeof ATMOSPHERE.light,
  intensity: keyof typeof ATMOSPHERE.reactive,
  position: { x: string; y: string } = { x: '50%', y: '50%' }
): string => {
  const baseColor = ATMOSPHERE.light[color];
  const opacity = ATMOSPHERE.reactive[intensity];
  return `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${baseColor}${opacity * 100}%) 0%, transparent 70%)`;
};

// ───────────────────────────────────────────────────────────────────────────────
// 3. NARRATIVE DENSITY CURVE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has an emotional function within the narrative arc.
// Density controls: spacing, typography weight, visual complexity, motion amount.

export type DensityLevel = 'silence' | 'low' | 'medium' | 'high' | 'climax';

export const DENSITY = {
  silence: {
    // Hero entry, Archive exit — space as content
    spacing: { py: '32vh', gap: '12vh' },
    typography: { scale: 0.85, weight: 300, opacity: 0.6 },
    motion: { amount: 0.2, complexity: 'minimal' },
    light: { intensity: 'ambient', sources: 0 },
  },
  low: {
    // Studio intro, Philosophy — intent and positioning
    spacing: { py: '16vh', gap: '6vh' },
    typography: { scale: 0.95, weight: 400, opacity: 0.75 },
    motion: { amount: 0.4, complexity: 'subtle' },
    light: { intensity: 'focus', sources: 1 },
  },
  medium: {
    // Standard content sections
    spacing: { py: '12vh', gap: '4vh' },
    typography: { scale: 1, weight: 400, opacity: 0.85 },
    motion: { amount: 0.6, complexity: 'standard' },
    light: { intensity: 'focus', sources: 1 },
  },
  high: {
    // Case studies, detailed content — narrative proof
    spacing: { py: '10vh', gap: '3vh' },
    typography: { scale: 1.05, weight: 500, opacity: 0.9 },
    motion: { amount: 0.8, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
  climax: {
    // Peak moments only — use sparingly
    spacing: { py: '8vh', gap: '2vh' },
    typography: { scale: 1.1, weight: 500, opacity: 0.95 },
    motion: { amount: 1, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 4. SECTION ROLE ARCHITECTURE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has a defined emotional function. No duplicated roles.

export type SectionRole =
  | 'hero'       // Identity compression: monogram + silence
  | 'studio'     // Intent and positioning
  | 'philosophy' // Emotional framing
  | 'case-study' // Highest narrative density / proof
  | 'archive'    // Decompression and exit space
  | 'void';      // Silence, transition, breathing room

export const SECTION_ROLES: Record<SectionRole, { density: DensityLevel; purpose: string }> = {
  hero: { density: 'silence', purpose: 'Identity compression — monogram presence, total silence' },
  studio: { density: 'low', purpose: 'Intent declaration — who we are, what we believe' },
  philosophy: { density: 'low', purpose: 'Emotional framing — the why behind the work' },
  'case-study': { density: 'high', purpose: 'Narrative proof — showing, not telling' },
  archive: { density: 'silence', purpose: 'Decompression — release into exploration' },
  void: { density: 'silence', purpose: 'Transition space — breathing between worlds' },
};

// ───────────────────────────────────────────────────────────────────────────────
// 5. SCROLL EMOTIONAL PACING
// ───────────────────────────────────────────────────────────────────────────────
// Scroll is cinematic editing: Drift → Focus → Cut

export type ScrollState = 'drift' | 'focus' | 'cut';

export const SCROLL_CONFIG = {
  // Thresholds for state transitions (viewport percentage)
  thresholds: {
    drift: 0.15,   // Element entering — ambient, soft
    focus: 0.5,    // Element centered — stable reading state
    exit: 0.85,    // Element leaving — prepare for cut
  },

  // Motion multipliers for each state
  motion: {
    drift: { y: 12, opacity: 0.3 },     // Gentle entrance
    focus: { y: 0, opacity: 1 },          // Stable
    cut: { y: -8, opacity: 0.7 },        // Subtle exit
  },

  // Timing for scroll-linked animations
  duration: {
    settle: 0.6,    // Time to reach focus state
    hold: 0.3,      // Time in focus before transition
    release: 0.5,   // Time to exit
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 6. MOTION VARIANTS FACTORY
// ───────────────────────────────────────────────────────────────────────────────
// Create consistent reveal variants based on cinematic principles.

export const createRevealVariants = (
  density: DensityLevel,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): Variants => {
  const config = DENSITY[density];
  const distance = direction === 'up' || direction === 'down' ? 16 : 12;
  const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: TIMING.cinematic,
        ease: CINEMATIC_EASE,
        opacity: { duration: TIMING.cinematic * 0.8 },
      },
    },
  };
};

export const createStaggerContainer = (
  density: DensityLevel,
  staggerDelay?: number
): Variants => {
  const config = DENSITY[density];
  const baseDelay = staggerDelay ?? (config.motion.complexity === 'minimal' ? 0.08 : 0.12);

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: baseDelay,
        delayChildren: 0.1,
      },
    },
  };
};

// ───────────────────────────────────────────────────────────────────────────────
// 7. REDUCED MOTION SUPPORT
// ───────────────────────────────────────────────────────────────────────────────
// Accessibility-first: respect user preferences.

export const REDUCED_MOTION_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
};

// Check if reduced motion is preferred (for use in components)
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ───────────────────────────────────────────────────────────────────────────────
// 8. EXPORT CONVENIENCE API
// ───────────────────────────────────────────────────────────────────────────────

export const Cinematic = {
  ease: CINEMATIC_EASE,
  easeCss: CINEMATIC_EASE_CSS,
  timing: TIMING,
  transition: createTransition,
  atmosphere: ATMOSPHERE,
  density: DENSITY,
  roles: SECTION_ROLES,
  scroll: SCROLL_CONFIG,
  variants: {
    reveal: createRevealVariants,
    stagger: createStaggerContainer,
    reduced: REDUCED_MOTION_VARIANTS,
  },
} as const;

export default Cinematic;
// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC ENGINE SYSTEM — Echo in Ink
// ═══════════════════════════════════════════════════════════════════════════════
// A unified emotional rendering system governing motion, atmosphere, narrative
// structure, and scroll behavior. Everything inherits the same emotional rules.
//
// Principles:
// • Cinematic, not decorative
// • Restraint, not spectacle
// • Light is reactive, not ornamental
// • Scroll is film editing, not navigation
// • Typography leads, atmosphere supports
// ═══════════════════════════════════════════════════════════════════════════════

import { type Transition, type Variants } from 'framer-motion';

// ───────────────────────────────────────────────────────────────────────────────
// 1. GLOBAL MOTION GRAMMAR
// ───────────────────────────────────────────────────────────────────────────────

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;
export const CINEMATIC_EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)' as const;

export const TIMING = {
  micro: 0.18,      // 180ms — hover states, micro-interactions
  transition: 0.52, // 520ms — element transitions
  cinematic: 1.05,  // 1050ms — section reveals, emotional beats
  dissolve: 1.4,    // 1400ms — major transitions, page changes
} as const;

export const createTransition = (
  type: keyof typeof TIMING = 'transition',
  delay = 0
): Transition => ({
  duration: TIMING[type],
  ease: CINEMATIC_EASE,
  delay,
});

// ───────────────────────────────────────────────────────────────────────────────
// 2. ATMOSPHERIC LIGHT MODEL
// ───────────────────────────────────────────────────────────────────────────────
// Light behaves like fog — reactive, not ornamental.
// Appears only on: scroll focus, interaction intent, content emphasis.

export const ATMOSPHERE = {
  // Base ink palette — near-black layered depth
  background: {
    deep: '#050505',
    mid: '#080808',
    surface: '#0A0A0A',
    elevated: '#0D0D0D',
  },

  // Light spectrum — indigo-violet baseline with aqua accents
  light: {
    indigo: 'rgba(99, 102, 241, ',
    violet: 'rgba(168, 85, 247, ',
    aqua: 'rgba(56, 189, 248, ',
  },

  // Reactive opacity levels (NOT persistent)
  reactive: {
    ambient: 0.04,    // Background atmosphere (very subtle)
    focus: 0.08,      // When element is in scroll focus
    interaction: 0.12, // On hover/intent
    emphasis: 0.16,   // Content emphasis moments
  },

  // Gradient templates
  gradients: {
    base: 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #080808 100%)',
    void: 'linear-gradient(180deg, #050505 0%, #080808 100%)',
    depth: 'linear-gradient(180deg, #080808 0%, #050505 50%, #0A0A0A 100%)',
  },
} as const;

// Create radial glow with reactive opacity
export const createRadialGlow = (
  color: keyof typeof ATMOSPHERE.light,
  intensity: keyof typeof ATMOSPHERE.reactive,
  position: { x: string; y: string } = { x: '50%', y: '50%' }
): string => {
  const baseColor = ATMOSPHERE.light[color];
  const opacity = ATMOSPHERE.reactive[intensity];
  return `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${baseColor}${opacity * 100}%) 0%, transparent 70%)`;
};

// ───────────────────────────────────────────────────────────────────────────────
// 3. NARRATIVE DENSITY CURVE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has an emotional function within the narrative arc.
// Density controls: spacing, typography weight, visual complexity, motion amount.

export type DensityLevel = 'silence' | 'low' | 'medium' | 'high' | 'climax';

export const DENSITY = {
  silence: {
    // Hero entry, Archive exit — space as content
    spacing: { py: '32vh', gap: '12vh' },
    typography: { scale: 0.85, weight: 300, opacity: 0.6 },
    motion: { amount: 0.2, complexity: 'minimal' },
    light: { intensity: 'ambient', sources: 0 },
  },
  low: {
    // Studio intro, Philosophy — intent and positioning
    spacing: { py: '16vh', gap: '6vh' },
    typography: { scale: 0.95, weight: 400, opacity: 0.75 },
    motion: { amount: 0.4, complexity: 'subtle' },
    light: { intensity: 'focus', sources: 1 },
  },
  medium: {
    // Standard content sections
    spacing: { py: '12vh', gap: '4vh' },
    typography: { scale: 1, weight: 400, opacity: 0.85 },
    motion: { amount: 0.6, complexity: 'standard' },
    light: { intensity: 'focus', sources: 1 },
  },
  high: {
    // Case studies, detailed content — narrative proof
    spacing: { py: '10vh', gap: '3vh' },
    typography: { scale: 1.05, weight: 500, opacity: 0.9 },
    motion: { amount: 0.8, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
  climax: {
    // Peak moments only — use sparingly
    spacing: { py: '8vh', gap: '2vh' },
    typography: { scale: 1.1, weight: 500, opacity: 0.95 },
    motion: { amount: 1, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 4. SECTION ROLE ARCHITECTURE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has a defined emotional function. No duplicated roles.

export type SectionRole =
  | 'hero'       // Identity compression: monogram + silence
  | 'studio'     // Intent and positioning
  | 'philosophy' // Emotional framing
  | 'case-study' // Highest narrative density / proof
  | 'archive'    // Decompression and exit space
  | 'void';      // Silence, transition, breathing room

export const SECTION_ROLES: Record<SectionRole, { density: DensityLevel; purpose: string }> = {
  hero: { density: 'silence', purpose: 'Identity compression — monogram presence, total silence' },
  studio: { density: 'low', purpose: 'Intent declaration — who we are, what we believe' },
  philosophy: { density: 'low', purpose: 'Emotional framing — the why behind the work' },
  'case-study': { density: 'high', purpose: 'Narrative proof — showing, not telling' },
  archive: { density: 'silence', purpose: 'Decompression — release into exploration' },
  void: { density: 'silence', purpose: 'Transition space — breathing between worlds' },
};

// ───────────────────────────────────────────────────────────────────────────────
// 5. SCROLL EMOTIONAL PACING
// ───────────────────────────────────────────────────────────────────────────────
// Scroll is cinematic editing: Drift → Focus → Cut

export type ScrollState = 'drift' | 'focus' | 'cut';

export const SCROLL_CONFIG = {
  // Thresholds for state transitions (viewport percentage)
  thresholds: {
    drift: 0.15,   // Element entering — ambient, soft
    focus: 0.5,    // Element centered — stable reading state
    exit: 0.85,    // Element leaving — prepare for cut
  },

  // Motion multipliers for each state
  motion: {
    drift: { y: 12, opacity: 0.3 },     // Gentle entrance
    focus: { y: 0, opacity: 1 },          // Stable
    cut: { y: -8, opacity: 0.7 },        // Subtle exit
  },

  // Timing for scroll-linked animations
  duration: {
    settle: 0.6,    // Time to reach focus state
    hold: 0.3,      // Time in focus before transition
    release: 0.5,   // Time to exit
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 6. MOTION VARIANTS FACTORY
// ───────────────────────────────────────────────────────────────────────────────
// Create consistent reveal variants based on cinematic principles.

export const createRevealVariants = (
  density: DensityLevel,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): Variants => {
  const config = DENSITY[density];
  const distance = direction === 'up' || direction === 'down' ? 16 : 12;
  const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: TIMING.cinematic,
        ease: CINEMATIC_EASE,
        opacity: { duration: TIMING.cinematic * 0.8 },
      },
    },
  };
};

export const createStaggerContainer = (
  density: DensityLevel,
  staggerDelay?: number
): Variants => {
  const config = DENSITY[density];
  const baseDelay = staggerDelay ?? (config.motion.complexity === 'minimal' ? 0.08 : 0.12);

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: baseDelay,
        delayChildren: 0.1,
      },
    },
  };
};

// ───────────────────────────────────────────────────────────────────────────────
// 7. REDUCED MOTION SUPPORT
// ───────────────────────────────────────────────────────────────────────────────
// Accessibility-first: respect user preferences.

export const REDUCED_MOTION_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
};

// Check if reduced motion is preferred (for use in components)
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ───────────────────────────────────────────────────────────────────────────────
// 8. EXPORT CONVENIENCE API
// ───────────────────────────────────────────────────────────────────────────────

export const Cinematic = {
  ease: CINEMATIC_EASE,
  easeCss: CINEMATIC_EASE_CSS,
  timing: TIMING,
  transition: createTransition,
  atmosphere: ATMOSPHERE,
  density: DENSITY,
  roles: SECTION_ROLES,
  scroll: SCROLL_CONFIG,
  variants: {
    reveal: createRevealVariants,
    stagger: createStaggerContainer,
    reduced: REDUCED_MOTION_VARIANTS,
  },
} as const;

export default Cinematic;
// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC ENGINE SYSTEM — Echo in Ink
// ═══════════════════════════════════════════════════════════════════════════════
// A unified emotional rendering system governing motion, atmosphere, narrative
// structure, and scroll behavior. Everything inherits the same emotional rules.
//
// Principles:
// • Cinematic, not decorative
// • Restraint, not spectacle
// • Light is reactive, not ornamental
// • Scroll is film editing, not navigation
// • Typography leads, atmosphere supports
// ═══════════════════════════════════════════════════════════════════════════════

import { type Transition, type Variants } from 'framer-motion';

// ───────────────────────────────────────────────────────────────────────────────
// 1. GLOBAL MOTION GRAMMAR
// ───────────────────────────────────────────────────────────────────────────────

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;
export const CINEMATIC_EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)' as const;

export const TIMING = {
  micro: 0.18,      // 180ms — hover states, micro-interactions
  transition: 0.52, // 520ms — element transitions
  cinematic: 1.05,  // 1050ms — section reveals, emotional beats
  dissolve: 1.4,    // 1400ms — major transitions, page changes
} as const;

export const createTransition = (
  type: keyof typeof TIMING = 'transition',
  delay = 0
): Transition => ({
  duration: TIMING[type],
  ease: CINEMATIC_EASE,
  delay,
});

// ───────────────────────────────────────────────────────────────────────────────
// 2. ATMOSPHERIC LIGHT MODEL
// ───────────────────────────────────────────────────────────────────────────────
// Light behaves like fog — reactive, not ornamental.
// Appears only on: scroll focus, interaction intent, content emphasis.

export const ATMOSPHERE = {
  // Base ink palette — near-black layered depth
  background: {
    deep: '#050505',
    mid: '#080808',
    surface: '#0A0A0A',
    elevated: '#0D0D0D',
  },

  // Light spectrum — indigo-violet baseline with aqua accents
  light: {
    indigo: 'rgba(99, 102, 241, ',
    violet: 'rgba(168, 85, 247, ',
    aqua: 'rgba(56, 189, 248, ',
  },

  // Reactive opacity levels (NOT persistent)
  reactive: {
    ambient: 0.04,    // Background atmosphere (very subtle)
    focus: 0.08,      // When element is in scroll focus
    interaction: 0.12, // On hover/intent
    emphasis: 0.16,   // Content emphasis moments
  },

  // Gradient templates
  gradients: {
    base: 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #080808 100%)',
    void: 'linear-gradient(180deg, #050505 0%, #080808 100%)',
    depth: 'linear-gradient(180deg, #080808 0%, #050505 50%, #0A0A0A 100%)',
  },
} as const;

// Create radial glow with reactive opacity
export const createRadialGlow = (
  color: keyof typeof ATMOSPHERE.light,
  intensity: keyof typeof ATMOSPHERE.reactive,
  position: { x: string; y: string } = { x: '50%', y: '50%' }
): string => {
  const baseColor = ATMOSPHERE.light[color];
  const opacity = ATMOSPHERE.reactive[intensity];
  return `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${baseColor}${opacity * 100}%) 0%, transparent 70%)`;
};

// ───────────────────────────────────────────────────────────────────────────────
// 3. NARRATIVE DENSITY CURVE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has an emotional function within the narrative arc.
// Density controls: spacing, typography weight, visual complexity, motion amount.

export type DensityLevel = 'silence' | 'low' | 'medium' | 'high' | 'climax';

export const DENSITY = {
  silence: {
    // Hero entry, Archive exit — space as content
    spacing: { py: '32vh', gap: '12vh' },
    typography: { scale: 0.85, weight: 300, opacity: 0.6 },
    motion: { amount: 0.2, complexity: 'minimal' },
    light: { intensity: 'ambient', sources: 0 },
  },
  low: {
    // Studio intro, Philosophy — intent and positioning
    spacing: { py: '16vh', gap: '6vh' },
    typography: { scale: 0.95, weight: 400, opacity: 0.75 },
    motion: { amount: 0.4, complexity: 'subtle' },
    light: { intensity: 'focus', sources: 1 },
  },
  medium: {
    // Standard content sections
    spacing: { py: '12vh', gap: '4vh' },
    typography: { scale: 1, weight: 400, opacity: 0.85 },
    motion: { amount: 0.6, complexity: 'standard' },
    light: { intensity: 'focus', sources: 1 },
  },
  high: {
    // Case studies, detailed content — narrative proof
    spacing: { py: '10vh', gap: '3vh' },
    typography: { scale: 1.05, weight: 500, opacity: 0.9 },
    motion: { amount: 0.8, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
  climax: {
    // Peak moments only — use sparingly
    spacing: { py: '8vh', gap: '2vh' },
    typography: { scale: 1.1, weight: 500, opacity: 0.95 },
    motion: { amount: 1, complexity: 'full' },
    light: { intensity: 'emphasis', sources: 2 },
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 4. SECTION ROLE ARCHITECTURE
// ───────────────────────────────────────────────────────────────────────────────
// Each section has a defined emotional function. No duplicated roles.

export type SectionRole =
  | 'hero'       // Identity compression: monogram + silence
  | 'studio'     // Intent and positioning
  | 'philosophy' // Emotional framing
  | 'case-study' // Highest narrative density / proof
  | 'archive'    // Decompression and exit space
  | 'void';      // Silence, transition, breathing room

export const SECTION_ROLES: Record<SectionRole, { density: DensityLevel; purpose: string }> = {
  hero: { density: 'silence', purpose: 'Identity compression — monogram presence, total silence' },
  studio: { density: 'low', purpose: 'Intent declaration — who we are, what we believe' },
  philosophy: { density: 'low', purpose: 'Emotional framing — the why behind the work' },
  'case-study': { density: 'high', purpose: 'Narrative proof — showing, not telling' },
  archive: { density: 'silence', purpose: 'Decompression — release into exploration' },
  void: { density: 'silence', purpose: 'Transition space — breathing between worlds' },
};

// ───────────────────────────────────────────────────────────────────────────────
// 5. SCROLL EMOTIONAL PACING
// ───────────────────────────────────────────────────────────────────────────────
// Scroll is cinematic editing: Drift → Focus → Cut

export type ScrollState = 'drift' | 'focus' | 'cut';

export const SCROLL_CONFIG = {
  // Thresholds for state transitions (viewport percentage)
  thresholds: {
    drift: 0.15,   // Element entering — ambient, soft
    focus: 0.5,    // Element centered — stable reading state
    exit: 0.85,    // Element leaving — prepare for cut
  },

  // Motion multipliers for each state
  motion: {
    drift: { y: 12, opacity: 0.3 },     // Gentle entrance
    focus: { y: 0, opacity: 1 },          // Stable
    cut: { y: -8, opacity: 0.7 },        // Subtle exit
  },

  // Timing for scroll-linked animations
  duration: {
    settle: 0.6,    // Time to reach focus state
    hold: 0.3,      // Time in focus before transition
    release: 0.5,   // Time to exit
  },
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 6. MOTION VARIANTS FACTORY
// ───────────────────────────────────────────────────────────────────────────────
// Create consistent reveal variants based on cinematic principles.

export const createRevealVariants = (
  density: DensityLevel,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): Variants => {
  const config = DENSITY[density];
  const distance = direction === 'up' || direction === 'down' ? 16 : 12;
  const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: TIMING.cinematic,
        ease: CINEMATIC_EASE,
        opacity: { duration: TIMING.cinematic * 0.8 },
      },
    },
  };
};

export const createStaggerContainer = (
  density: DensityLevel,
  staggerDelay?: number
): Variants => {
  const config = DENSITY[density];
  const baseDelay = staggerDelay ?? (config.motion.complexity === 'minimal' ? 0.08 : 0.12);

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: baseDelay,
        delayChildren: 0.1,
      },
    },
  };
};

// ───────────────────────────────────────────────────────────────────────────────
// 7. REDUCED MOTION SUPPORT
// ───────────────────────────────────────────────────────────────────────────────
// Accessibility-first: respect user preferences.

export const REDUCED_MOTION_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
};

// Check if reduced motion is preferred (for use in components)
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ───────────────────────────────────────────────────────────────────────────────
// 8. EXPORT CONVENIENCE API
// ───────────────────────────────────────────────────────────────────────────────

export const Cinematic = {
  ease: CINEMATIC_EASE,
  easeCss: CINEMATIC_EASE_CSS,
  timing: TIMING,
  transition: createTransition,
  atmosphere: ATMOSPHERE,
  density: DENSITY,
  roles: SECTION_ROLES,
  scroll: SCROLL_CONFIG,
  variants: {
    reveal: createRevealVariants,
    stagger: createStaggerContainer,
    reduced: REDUCED_MOTION_VARIANTS,
  },
} as const;

export default Cinematic;
