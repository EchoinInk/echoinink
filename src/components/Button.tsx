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
  
  const baseClasses = 'ei-button-glow relative inline-flex items-center justify-center font-structural uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none touch-manipulation min-h-[48px] md:min-h-0';

  const variants = {
    // PRIMARY — Strongest visual weight with neon gradient edge
    // Layered border: vivid gradient outer + dark glass interior
   primary: `
  ei-btn-primary-cinematic
  group
  relative isolate

  px-8 py-4

  text-[10px]
  tracking-[0.18em]
  font-medium

  text-white/[0.92]
  hover:text-white

  rounded-full

  border border-white/[0.08]
  hover:border-white/[0.14]

  bg-gradient-to-b
  from-black/58
  via-black/48
  to-black/68

  hover:from-black/54
  hover:via-black/44
  hover:to-black/62

  shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]

  transition-all
  duration-700
  ease-[cubic-bezier(0.22,1,0.36,1)]

  hover:-translate-y-[1px]
  active:translate-y-0
`,
    // SECONDARY — Quieter edge treatment, visible gradient, dark interior
    secondary: `
      ei-btn-secondary-cinematic
      group
      px-6 py-3
      text-[9px] tracking-[0.2em]
      text-white/70 hover:text-white/90 focus-visible:text-white/90
      border border-white/[0.06] hover:border-white/[0.12] focus-visible:border-white/[0.16]
      rounded-full
      bg-gradient-to-b from-black/50 via-black/40 to-black/60 hover:from-black/45 hover:via-black/35 hover:to-black/55
      shadow-[0_0_40px_-12px_rgba(99,102,241,0.14),inset_0_1px_0_rgba(255,255,255,0.05)]
      hover:shadow-[0_0_55px_-10px_rgba(167,139,250,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]
      hover:-translate-y-[1px] hover:scale-[1.005]
      active:translate-y-0 active:scale-[0.98]
      active:bg-black/55
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
