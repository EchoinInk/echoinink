// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC ENGINE TOKENS — Echo in Ink
// ═══════════════════════════════════════════════════════════════════════════════
// PURE TOKEN DEFINITIONS ONLY — NO runtime logic, NO DOM assumptions
// This file contains ONLY constants, enums, and type definitions.
// Any runtime interpretation belongs in hooks.
// ═══════════════════════════════════════════════════════════════════════════════

import type { Transition, Variants } from "framer-motion";

// ───────────────────────────────────────────────────────────────────────────────
// 1. MOTION TOKENS — Single source of truth for all animation timing
// ───────────────────────────────────────────────────────────────────────────────

export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)" as const;

export const TIME = {
  micro: 0.18,      // 180ms — hover, micro-interactions
  move: 0.52,       // 520ms — element transitions
  scene: 1.05,      // 1050ms — section reveals
  dissolve: 1.4,    // 1400ms — major transitions
} as const;

// Standard transition factory — single source of truth
export const transition = (type: keyof typeof TIME = "move", delay = 0): Transition => ({
  duration: TIME[type],
  ease: EASE,
  delay,
});

// ───────────────────────────────────────────────────────────────────────────────
// 2. ATMOSPHERE TOKENS — Light is reactive, not ornamental
// ───────────────────────────────────────────────────────────────────────────────

export const INK = {
  deep: "#050505",
  mid: "#080808", 
  surface: "#0A0A0A",
  elevated: "#0D0D0D",
} as const;

export const LIGHT = {
  indigo: "rgba(99, 102, 241, ",
  violet: "rgba(168, 85, 247, ",
  aqua: "rgba(56, 189, 248, ",
} as const;

// Reactive light intensities — NOT persistent glow levels
export const GLOW = {
  ambient: 0.04,     // Background atmosphere only
  focus: 0.08,       // Scroll focus state
  intent: 0.12,      // Interaction hover/focus
  emphasis: 0.16,    // Content emphasis moments
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 3. DENSITY TOKENS — Narrative density curve (spacing, motion, light)
// ───────────────────────────────────────────────────────────────────────────────

export type Density = "silence" | "low" | "medium" | "high" | "climax";

export const DENSITY: Record<Density, {
  space: { py: string; gap: string };
  type: { scale: number; opacity: number };
  motion: { y: number; stagger: number };
  light: { intensity: keyof typeof GLOW; sources: number };
}> = {
  silence: {
    space: { py: "py-32", gap: "gap-24" },
    type: { scale: 0.9, opacity: 0.6 },
    motion: { y: 8, stagger: 0.12 },
    light: { intensity: "ambient", sources: 0 },
  },
  low: {
    space: { py: "py-24", gap: "gap-16" },
    type: { scale: 0.95, opacity: 0.75 },
    motion: { y: 12, stagger: 0.1 },
    light: { intensity: "ambient", sources: 0 },
  },
  medium: {
    space: { py: "py-16", gap: "gap-10" },
    type: { scale: 1, opacity: 0.85 },
    motion: { y: 16, stagger: 0.08 },
    light: { intensity: "focus", sources: 1 },
  },
  high: {
    space: { py: "py-12", gap: "gap-6" },
    type: { scale: 1.02, opacity: 0.9 },
    motion: { y: 20, stagger: 0.06 },
    light: { intensity: "intent", sources: 1 },
  },
  climax: {
    space: { py: "py-8", gap: "gap-4" },
    type: { scale: 1.05, opacity: 0.95 },
    motion: { y: 24, stagger: 0.05 },
    light: { intensity: "emphasis", sources: 2 },
  },
};

// ───────────────────────────────────────────────────────────────────────────────
// 4. SECTION ROLES — Emotional function mapping (NO behavior, ONLY purpose)
// ───────────────────────────────────────────────────────────────────────────────

export type Role = "hero" | "studio" | "philosophy" | "case" | "archive" | "void";

export const ROLE: Record<Role, { density: Density; purpose: string }> = {
  hero: { density: "silence", purpose: "Identity compression — monogram presence" },
  studio: { density: "low", purpose: "Intent declaration — who we are" },
  philosophy: { density: "low", purpose: "Emotional framing — the why" },
  case: { density: "high", purpose: "Narrative proof — showing not telling" },
  archive: { density: "silence", purpose: "Decompression — release into exploration" },
  void: { density: "silence", purpose: "Transition space — breathing between worlds" },
};

// ───────────────────────────────────────────────────────────────────────────────
// 5. SCROLL STATES — Cinematic editing: Drift → Focus → Cut
// ───────────────────────────────────────────────────────────────────────────────

export type Phase = "drift" | "focus" | "cut";

// Intersection thresholds for state inference (NOT viewport percentages)
export const THRESHOLD = {
  enter: 0.1,    // Element enters viewport — drift begins
  focus: 0.5,    // Element centered — stable reading state
  exit: 0.9,     // Element leaves — cut begins
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 6. SILENCE STATE — First-class intentional reduction
// ───────────────────────────────────────────────────────────────────────────────
// Silence is NOT absence. It is a designed state of reduced motion,
// reduced luminance, and increased whitespace between narrative peaks.

export const SILENCE = {
  // Visual reduction
  luminance: GLOW.ambient,
  motion: 0.2,
  opacity: 0.5,
  
  // Spatial expansion
  whitespace: "py-32 gap-24",
  
  // Temporal slowing
  timing: TIME.dissolve,
  
  // Triggers for entering silence
  triggers: ["section-exit", "narrative-pause", "user-inactive"],
} as const;

// ───────────────────────────────────────────────────────────────────────────────
// 7. MOTION VARIANTS — Pre-defined animation templates (pure data)
// ───────────────────────────────────────────────────────────────────────────────

export const variants = {
  // Standard reveal — single element entrance
  reveal: (y = 16): Variants => ({
    hidden: { opacity: 0, y },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: TIME.scene, ease: EASE } 
    },
  }),
  
  // Stagger container — orchestrates children
  stagger: (stagger = 0.1): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.1 } },
  }),
  
  // Stagger child — individual item in stagger
  item: (y = 12): Variants => ({
    hidden: { opacity: 0, y },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: TIME.move, ease: EASE } 
    },
  }),
  
  // Reduced motion — accessibility fallback
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  } as Variants,
  
  // Silence state — minimal motion
  silence: {
    hidden: { opacity: 0, y: 4 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: TIME.dissolve, ease: EASE } 
    },
  } as Variants,
};

// ───────────────────────────────────────────────────────────────────────────────
// 8. CONVENIENCE EXPORT — All tokens in one object for selective imports
// ───────────────────────────────────────────────────────────────────────────────

export const Cinematic = {
  ease: EASE,
  easeCss: EASE_CSS,
  time: TIME,
  transition,
  ink: INK,
  light: LIGHT,
  glow: GLOW,
  density: DENSITY,
  role: ROLE,
  threshold: THRESHOLD,
  silence: SILENCE,
  variants,
} as const;

export default Cinematic;
