import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import type { Role, Density } from "@/lib/cinematic";
import { ROLE, DENSITY, INK, variants, EASE_CSS, TIME } from "@/lib/cinematic";
import { useScrollEmotion } from "@/hooks/useScrollEmotion";
import { useAtmosphericLight, createGlowStyle } from "@/hooks/useAtmosphericLight";

interface CinematicSectionProps {
  role: Role;
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * CinematicSection — Pure consumption of cinematic tokens
 * 
 * Sections are declarative, not behavioral. Visual properties are derived
 * entirely from role → density → tokens. NO ad-hoc logic.
 * 
 * Role determines:
 * - density (spacing, motion amount, light sources)
 * - emotional purpose (annotated as data attribute for debugging)
 * 
 * Scroll phase determines:
 * - light reactivity (off/drift → ambient, focus → boosted)
 */
export function CinematicSection({ role, children, className = "", id }: CinematicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  
  // Token-derived configuration
  const { density, purpose } = ROLE[role];
  const config = DENSITY[density];
  
  // Scroll-driven state
  const { phase } = useScrollEmotion();
  const isFocus = phase === "focus";
  
  // Light state derived from density + scroll phase
  const { intensity, sources } = useAtmosphericLight({ 
    density, 
    isActive: isFocus && isInView 
  });

  // Motion variants from tokens
  const motionVariants = prefersReduced 
    ? variants.reduced 
    : density === "silence" 
      ? variants.silence
      : variants.reveal(config.motion.y);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={motionVariants}
      className={`relative overflow-hidden ${config.space.py} ${className}`}
      style={{ background: INK.surface }}
      data-role={role}
      data-density={density}
      data-purpose={purpose}
      data-phase={phase}
    >
      {/* Atmospheric light — reactive, not ornamental */}
      {sources > 0 && !prefersReduced && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: createGlowStyle(intensity, "indigo", { x: "50%", y: "40%" }),
            filter: "blur(80px)",
            opacity: isInView ? 1 : 0,
            transition: `opacity ${TIME.scene}s ${EASE_CSS}`,
          }}
        />
      )}
      
      <div className={`relative z-10 ei-container ${config.space.gap} flex flex-col`}>
        {children}
      </div>
    </motion.section>
  );
}

export default CinematicSection;
