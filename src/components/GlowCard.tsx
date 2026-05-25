import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  image: string;
  glow?: string;
  className?: string;
  horizontal?: boolean;
  featured?: boolean;
  glowPosition?: 'center' | 'top' | 'bottom';
  archetype?: 'sessions' | 'identity' | 'worlds';
}

export default function GlowCard({
  title,
  description,
  image,
  glow,
  className,
  horizontal,
  featured = false,
  glowPosition = 'center',
  archetype = 'identity',
}: Props) {
  // Card differentiation: featured gets stronger presence
  const glowIntensity = featured ? 'opacity-70' : 'opacity-50';
  const hoverLift = featured ? -3 : -2;
  const glowOffset = {
    center: '',
    top: '-translate-y-[10%]',
    bottom: 'translate-y-[10%]',
  };

  // ═══════════════════════════════════════════════════════════════
  // ARCHETYPE-SPECIFIC EMOTIONAL PERSONALITY CONFIGURATIONS
  // Differentiated through spacing, glow behavior, motion pacing, lighting
  // ═══════════════════════════════════════════════════════════════
  const archetypeConfig = {
    sessions: {
      // PRECISE, DIAGNOSTIC, GEOMETRIC, QUIETER
      // Sharp vignette, cooler glow, structured shadow, crisp overlay
      vignette: 'bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.60)_100%)]',
      edgeGlow: 'from-cyan-500/[0.07] via-blue-500/[0.04] to-transparent',
      shadowDepth: 'shadow-[inset_0_1px_30px_-8px_rgba(0,0,0,0.45)]',
      overlayIntensity: 'via-[#060816]/55',
      // Quieter, more precise motion
      hoverLift: -1.5,
      glowIntensity: 'opacity-45',
      borderOpacity: 'border-white/[0.05]',
    },
    identity: {
      // EMOTIONAL, FLUID, EXPRESSIVE, SOFTER
      // Softer vignette, warmer glow, gentler shadow, lighter overlay
      vignette: 'bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.40)_100%)]',
      edgeGlow: 'from-fuchsia-500/[0.12] via-violet-500/[0.07] to-transparent',
      shadowDepth: 'shadow-[inset_0_3px_50px_-12px_rgba(0,0,0,0.25)]',
      overlayIntensity: 'via-[#060816]/30',
      // More expressive, fluid motion
      hoverLift: -3,
      glowIntensity: 'opacity-65',
      borderOpacity: 'border-white/[0.08]',
    },
    worlds: {
      // DIMENSIONAL, SPATIAL, IMMERSIVE, DEEPER
      // Deeper vignette, rich glow, dramatic shadow, immersive overlay
      vignette: 'bg-[radial-gradient(ellipse_85%_65%_at_50%_75%,transparent_15%,rgba(0,0,0,0.70)_100%)]',
      edgeGlow: 'from-indigo-500/[0.11] via-purple-500/[0.06] to-transparent',
      shadowDepth: 'shadow-[inset_0_-3px_70px_-8px_rgba(0,0,0,0.55)]',
      overlayIntensity: 'via-[#050816]/60',
      // Deeper atmospheric lift
      hoverLift: -2.5,
      glowIntensity: 'opacity-60',
      borderOpacity: 'border-white/[0.06]',
    },
  };

  const config = archetypeConfig[archetype];

  // Use archetype-specific values, with featured override for identity card
  const effectiveHoverLift = featured ? -3 : config.hoverLift;
  const effectiveGlowIntensity = featured ? 'opacity-75' : config.glowIntensity;
  const effectiveBorderOpacity = featured ? 'border-white/[0.10]' : config.borderOpacity;

  return (
    <motion.div
      whileHover={{ y: effectiveHoverLift, scale: featured ? 1.005 : 1 }}
      transition={{ duration: featured ? 0.6 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden",
        featured ? "rounded-[32px]" : "rounded-[28px]",
        effectiveBorderOpacity,
        horizontal
          ? featured ? "min-h-[240px] md:min-h-[280px]" : "min-h-[220px] md:min-h-[260px]"
          : featured ? "min-h-[520px] md:min-h-[560px]" : "min-h-[480px] md:min-h-[520px]",
        featured ? "shadow-[0_0_60px_-20px_rgba(99,102,241,0.15)]" : "",
        config.shadowDepth,
        "bg-[#070B1A]",
        className
      )}
    >
      {horizontal ? (
        <>
          {/* HORIZONTAL LAYOUT - full bleed with overlay */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* CINEMATIC OVERLAY - stronger on left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#060816]/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

          {/* ATMOSPHERIC GLOW — differentiated placement */}
          {glow && (
            <div className={cn("absolute inset-0", glowIntensity, glow, glowOffset[glowPosition])} />
          )}

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

          {/* CONTENT - anchored bottom-left */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
            <div className="max-w-[36ch]">
              <h3 className="font-serif text-2xl md:text-[1.75rem] font-light tracking-tight text-white/95 leading-tight">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65 mt-6 whitespace-pre-line">
                {description}
              </p>
              <span className="block mt-5 text-[11px] uppercase tracking-[0.22em] text-white/50 group-hover:text-white/80 transition-colors duration-500">
                Explore →
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* VERTICAL LAYOUT - full bleed image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* ARCHETYPE-SPECIFIC CINEMATIC OVERLAY */}
          <div className={cn("absolute inset-0 bg-gradient-to-b from-black/10", config.overlayIntensity, "to-[#050816]/95")} />

          {/* ATMOSPHERIC GLOW — archetype-specific intensity */}
          {glow && (
            <div className={cn(
              "absolute inset-0",
              effectiveGlowIntensity,
              glowOffset[glowPosition]
            )} />
          )}

          {/* ARCHETYPE-SPECIFIC VIGNETTE */}
          <div className={cn("absolute inset-0", config.vignette)} />

          {/* SUBTLE EDGE SOFTENING */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)' }}
          />

          {/* CONTENT - positioned at bottom of card */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-8 md:px-10 pb-10 md:pb-12 pt-24">
            <div className="space-y-4">
              <h3
                className="font-serif text-[1.75rem] md:text-[2rem] font-light leading-[1.1] tracking-tight text-white/95"
                style={{ letterSpacing: '-0.02em' }}
              >
                {title}
              </h3>

              <p className="max-w-[32ch] text-[14px] pt-6 leading-[1.8] text-white/72 whitespace-pre-line">
                {description}
              </p>

              <span className="block pt-8 text-[11px] uppercase tracking-[0.28em] text-white/55 transition-colors duration-500 group-hover:text-white/85">
                Explore →
              </span>
            </div>
          </div>
        </>
      )}

    </motion.div>
  );
}
