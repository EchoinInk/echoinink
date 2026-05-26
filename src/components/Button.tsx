import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({ children, onClick, to, variant = 'primary' }: ButtonProps) {
  // CTA Hierarchy System — clear visual weight differentiation
  // Primary: Confident, filled glow, strongest presence
  // Secondary: Ghost button, calmer presence
  // Tertiary: Text link, minimal presence
  
  const baseClasses = 'ei-focus-glow relative inline-flex items-center justify-center font-structural uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none touch-manipulation min-h-[48px] md:min-h-0';

  const variants = {
    // PRIMARY — Strongest visual weight with cinematic gradient edge
    // Layered border: gradient outer + neutral inner + dark glass interior
    primary: `
      ei-btn-primary-cinematic
      group
      px-8 py-4
      text-[10px] tracking-[0.16em] font-medium
      text-white/[0.95] hover:text-white focus-visible:text-white
      border border-white/[0.08] hover:border-white/[0.12] focus-visible:border-white/[0.15]
      rounded-full
      bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.10] hover:to-white/[0.03]
      hover:-translate-y-[2px]
      active:translate-y-0 active:scale-[0.98]
      active:bg-white/[0.12]
      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
    // SECONDARY — Quieter edge treatment, more subdued gradient
    // Lighter glow, more restrained presence
    secondary: `
      ei-btn-secondary-cinematic
      group
      px-6 py-3
      text-[9px] tracking-[0.2em]
      text-white/70 hover:text-white/90 focus-visible:text-white/90
      border border-white/[0.06] hover:border-white/[0.10] focus-visible:border-white/[0.14]
      rounded-full
      bg-gradient-to-b from-white/[0.04] to-transparent hover:from-white/[0.06]
      hover:-translate-y-[1px]
      active:translate-y-0 active:scale-[0.98]
      active:bg-white/[0.08]
      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
    // TERTIARY — Text link only, minimal presence
    // Subtle underline reveal on hover
    tertiary: `
      group
      text-[10px] tracking-[0.14em]
      text-white/60 hover:text-white/80 focus-visible:text-white/85
      bg-transparent
      active:text-white/65
      active:scale-[0.98]
    `,
  };

  const className = `${baseClasses} ${variants[variant]}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'tertiary' && (
        <span className="absolute bottom-0 left-0 w-0 h-px bg-white/30 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
