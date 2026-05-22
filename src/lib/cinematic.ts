import { type Transition, type Variants } from "framer-motion";

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;
export const CINEMATIC_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)" as const;

export const TIMING = {
  micro: 0.18,
  transition: 0.52,
  cinematic: 1.05,
  dissolve: 1.4,
} as const;

export const createTransition = (type: keyof typeof TIMING = "transition", delay = 0): Transition => ({
  duration: TIMING[type],
  ease: CINEMATIC_EASE,
  delay,
});

export const ATMOSPHERE = {
  background: { deep: "#050505", mid: "#080808", surface: "#0A0A0A", elevated: "#0D0D0D" },
  light: { indigo: "rgba(99, 102, 241, ", violet: "rgba(168, 85, 247, ", aqua: "rgba(56, 189, 248, " },
  reactive: { ambient: 0.04, focus: 0.08, interaction: 0.12, emphasis: 0.16 },
  gradients: {
    base: "linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #080808 100%)",
    void: "linear-gradient(180deg, #050505 0%, #080808 100%)",
    depth: "linear-gradient(180deg, #080808 0%, #050505 50%, #0A0A0A 100%)",
  },
} as const;

export const createRadialGlow = (color: keyof typeof ATMOSPHERE.light, intensity: keyof typeof ATMOSPHERE.reactive, position = { x: "50%", y: "50%" }): string => {
  return `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${ATMOSPHERE.light[color]}${ATMOSPHERE.reactive[intensity]}) 0%, transparent 70%)`;
};

export type DensityLevel = "silence" | "low" | "medium" | "high" | "climax";

export const DENSITY = {
  silence: { spacing: { py: "32vh", gap: "12vh" }, typography: { scale: 0.85, weight: 300, opacity: 0.6 }, motion: { amount: 0.2, complexity: "minimal" }, light: { intensity: "ambient", sources: 0 } },
  low: { spacing: { py: "16vh", gap: "6vh" }, typography: { scale: 0.95, weight: 400, opacity: 0.75 }, motion: { amount: 0.4, complexity: "subtle" }, light: { intensity: "focus", sources: 1 } },
  medium: { spacing: { py: "12vh", gap: "4vh" }, typography: { scale: 1, weight: 400, opacity: 0.85 }, motion: { amount: 0.6, complexity: "standard" }, light: { intensity: "focus", sources: 1 } },
  high: { spacing: { py: "10vh", gap: "3vh" }, typography: { scale: 1.05, weight: 500, opacity: 0.9 }, motion: { amount: 0.8, complexity: "full" }, light: { intensity: "emphasis", sources: 2 } },
  climax: { spacing: { py: "8vh", gap: "2vh" }, typography: { scale: 1.1, weight: 500, opacity: 0.95 }, motion: { amount: 1, complexity: "full" }, light: { intensity: "emphasis", sources: 2 } },
} as const;

export type SectionRole = "hero" | "studio" | "philosophy" | "case-study" | "archive" | "void";

export const SECTION_ROLES: Record<SectionRole, { density: DensityLevel; purpose: string }> = {
  hero: { density: "silence", purpose: "Identity compression — monogram presence, total silence" },
  studio: { density: "low", purpose: "Intent declaration — who we are, what we believe" },
  philosophy: { density: "low", purpose: "Emotional framing — the why behind the work" },
  "case-study": { density: "high", purpose: "Narrative proof — showing, not telling" },
  archive: { density: "silence", purpose: "Decompression — release into exploration" },
  void: { density: "silence", purpose: "Transition space — breathing between worlds" },
};

export type ScrollState = "drift" | "focus" | "cut";

export const SCROLL_CONFIG = {
  thresholds: { drift: 0.15, focus: 0.5, exit: 0.85 },
  motion: { drift: { y: 12, opacity: 0.3 }, focus: { y: 0, opacity: 1 }, cut: { y: -8, opacity: 0.7 } },
  duration: { settle: 0.6, hold: 0.3, release: 0.5 },
} as const;

export const createRevealVariants = (density: DensityLevel, direction: "up" | "down" | "left" | "right" = "up"): Variants => {
  const distance = direction === "up" || direction === "down" ? 16 : 12;
  const yOffset = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const xOffset = direction === "left" ? distance : direction === "right" ? -distance : 0;
  return {
    hidden: { opacity: 0, y: yOffset, x: xOffset },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: TIMING.cinematic, ease: CINEMATIC_EASE, opacity: { duration: TIMING.cinematic * 0.8 } } },
  };
};

export const createStaggerContainer = (density: DensityLevel, staggerDelay?: number): Variants => {
  const baseDelay = staggerDelay ?? (DENSITY[density].motion.complexity === "minimal" ? 0.08 : 0.12);
  return { hidden: {}, visible: { transition: { staggerChildren: baseDelay, delayChildren: 0.1 } } };
};

export const REDUCED_MOTION_VARIANTS: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, ease: "linear" } } };

export const shouldReduceMotion = (): boolean => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Cinematic = {
  ease: CINEMATIC_EASE,
  easeCss: CINEMATIC_EASE_CSS,
  timing: TIMING,
  transition: createTransition,
  atmosphere: ATMOSPHERE,
  density: DENSITY,
  roles: SECTION_ROLES,
  scroll: SCROLL_CONFIG,
  variants: { reveal: createRevealVariants, stagger: createStaggerContainer, reduced: REDUCED_MOTION_VARIANTS },
} as const;

export default Cinematic;
