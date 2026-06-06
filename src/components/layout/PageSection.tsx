import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import {
  slowReveal,
  atmosphericFade,
  sectionFade,
  EASE_CINEMATIC,
  DURATION,
} from '@/system/motion/cinematic';

export type PageSectionVariant =
  | 'immersive'
  | 'editorial'
  | 'manifesto'
  | 'minimal'
  | 'transition';

type SectionMotion = 'slowReveal' | 'atmosphericFade' | 'sectionFade' | 'none';

interface PageSectionProps {
  variant?: PageSectionVariant;
  motion?: SectionMotion;
  children: ReactNode;
  className?: string;
  id?: string;
  atmosphere?: 'default' | 'identity' | 'sessions' | 'worlds' | 'works' | 'none';
  divider?: 'none' | 'atmospheric' | 'quiet' | 'deep';
  align?: 'left' | 'center' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const variantConfig: Record<
  PageSectionVariant,
  {
    spacing: string;
    minHeight?: string;
  }
> = {
  immersive: {
    spacing: 'py-0',
    minHeight: 'min-h-screen',
  },
  editorial: {
    spacing: 'pt-[clamp(6rem,14vh,11rem)] pb-[clamp(4.5rem,10vh,9rem)]',
  },
  manifesto: {
    spacing: 'pt-[clamp(7rem,18vh,14rem)] pb-[clamp(7rem,18vh,14rem)]',
  },
  minimal: {
    spacing: 'pt-[clamp(3rem,6vh,5rem)] pb-[clamp(3rem,6vh,5rem)]',
  },
  transition: {
    spacing: 'py-0',
  },
};

const motionVariants: Record<SectionMotion, typeof slowReveal | undefined> = {
  slowReveal,
  atmosphericFade,
  sectionFade,
  none: undefined,
};

const maxWidthClasses: Record<string, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-5xl',
  full: 'max-w-none',
};

const alignClasses: Record<string, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center mx-auto',
  right: 'items-end text-right ml-auto',
};

const atmosphereClasses: Record<string, string> = {
  default: 'ei-atmosphere-default',
  identity: 'ei-atmosphere-identity',
  sessions: 'ei-atmosphere-sessions',
  worlds: 'ei-atmosphere-worlds',
  works: 'ei-atmosphere-works',
  none: '',
};

const dividerClasses: Record<string, string> = {
  none: '',
  atmospheric: 'ei-divider-atmospheric',
  quiet: 'ei-divider-quiet',
  deep: 'ei-divider-deep',
};

/**
 * PageSection — Reusable layout primitive for cinematic section rhythm.
 *
 * Standardizes vertical spacing, content width, reveal motion,
 * atmospheric continuity, and alignment across all pages.
 */
export function PageSection({
  variant = 'editorial',
  motion: motionType = 'slowReveal',
  children,
  className = '',
  id,
  atmosphere = 'none',
  divider = 'none',
  align = 'left',
  maxWidth = 'lg',
}: PageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  const config = variantConfig[variant];
  const motionVariant = motionVariants[motionType];
  const hasMotion = motionVariant && !prefersReduced;

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={hasMotion ? 'hidden' : undefined}
      animate={hasMotion && isInView ? 'visible' : undefined}
      variants={hasMotion ? motionVariant : undefined}
      transition={{
        duration: DURATION.slow,
        ease: EASE_CINEMATIC,
      }}
      className={`
        relative overflow-hidden
        ${config.spacing}
        ${config.minHeight ?? ''}
        ${atmosphereClasses[atmosphere]}
        ${className}
      `.trim()}
    >
      {/* Atmospheric light field */}
      {atmosphere !== 'none' && (
        <div className="ei-light-field" />
      )}

      {/* Vignette overlay for immersive sections */}
      {variant === 'immersive' && (
        <div className="ei-vignette-soft absolute inset-0" />
      )}

      {/* Section content */}
      <div
        className={`
          relative z-10 ei-container
          ${maxWidthClasses[maxWidth]}
          ${alignClasses[align]}
          flex flex-col
        `.trim()}
      >
        {children}
      </div>

      {/* Bottom divider */}
      {divider !== 'none' && (
        <div className={`absolute bottom-0 left-0 right-0 ${dividerClasses[divider]}`} />
      )}

      {/* Transition bridge for transition variant */}
      {variant === 'transition' && (
        <div className="ei-gradient-bridge absolute inset-0" />
      )}
    </motion.section>
  );
}

export default PageSection;
