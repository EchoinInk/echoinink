import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { type SectionRole, SECTION_ROLES, createRevealVariants, createStaggerContainer, REDUCED_MOTION_VARIANTS, ATMOSPHERE, CINEMATIC_EASE_CSS, TIMING } from "@/lib/cinematic";

interface CinematicSectionProps {
  role: SectionRole;
  children: ReactNode;
  className?: string;
  id?: string;
  enableReactiveLight?: boolean;
  staggerChildren?: boolean;
}

/**
 * CinematicSection — Section wrapper with role-based emotional density
 * 
 * Each section has a defined emotional function:
 * - hero: Identity compression (monogram + silence)
 * - studio: Intent declaration
 * - philosophy: Emotional framing
 * - case-study: Narrative proof
 * - archive: Decompression
 * - void: Transition space
 * 
 * No duplicated emotional roles. Everything inherits cinematic rules.
 */
export function CinematicSection({
  role,
  children,
  className = "",
  id,
  enableReactiveLight = true,
  staggerChildren = false,
}: CinematicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  
  const { density, purpose } = SECTION_ROLES[role];
  const densityConfig = {
    silence: { py: "py-[24vh] md:py-[32vh]", gap: "gap-[8vh] md:gap-[12vh]" },
    low: { py: "py-[12vh] md:py-[16vh]", gap: "gap-[4vh] md:gap-[6vh]" },
    medium: { py: "py-[8vh] md:py-[12vh]", gap: "gap-[3vh] md:gap-[4vh]" },
    high: { py: "py-[6vh] md:py-[10vh]", gap: "gap-[2vh] md:gap-[3vh]" },
    climax: { py: "py-[5vh] md:py-[8vh]", gap: "gap-[1.5vh] md:gap-[2vh]" },
  }[density];

  const variants = prefersReduced
    ? REDUCED_MOTION_VARIANTS
    : staggerChildren
      ? createStaggerContainer(density)
      : createRevealVariants(density, "up");

  const backgroundStyle = enableReactiveLight && isInView
    ? { background: ATMOSPHERE.gradients.base }
    : undefined;

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`relative overflow-hidden ${densityConfig.py} ${className}`}
      style={{
        ...backgroundStyle,
        transition: `background ${TIMING.cinematic}s ${CINEMATIC_EASE_CSS}`,
      }}
      data-role={role}
      data-purpose={purpose}
    >
      {/* Reactive atmospheric light — appears on scroll focus */}
      {enableReactiveLight && !prefersReduced && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            background: `radial-gradient(ellipse 50% 40% at 50% 30%, ${ATMOSPHERE.light.indigo}0.06) 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      )}
      
      <div className={`relative z-10 ei-container ${densityConfig.gap} flex flex-col`}>
        {children}
      </div>
    </motion.section>
  );
}

export default CinematicSection;
