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
  
  const baseClasses = 'relative inline-flex items-center justify-center font-structural uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none';

  const variants = {
    // PRIMARY — Strongest visual weight
    // Confident border presence, clearer hover response, subtle glow increase
    primary: `
      group
      px-8 py-4
      text-[10px] tracking-[0.16em] font-medium
      text-white/[0.95] hover:text-white
      border border-white/[0.22] hover:border-white/[0.35]
      rounded-full
      bg-gradient-to-b from-white/[0.10] to-white/[0.03] hover:from-white/[0.14] hover:to-white/[0.05]
      shadow-[0_0_45px_-12px_rgba(99,102,241,0.18)] hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.30)]
      hover:-translate-y-[2px]
      active:translate-y-0
      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
    // SECONDARY — Ghost button, confident presence
    // Slightly brighter border, stronger text, richer hover feedback
    secondary: `
      group
      px-6 py-3
      text-[9px] tracking-[0.2em]
      text-white/65 hover:text-white/88
      border border-white/[0.10] hover:border-white/[0.20]
      rounded-full
      bg-transparent hover:bg-white/[0.04]
      hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.10)]
      hover:-translate-y-[1px]
    `,
    // TERTIARY — Text link only, minimal presence
    // Subtle underline reveal on hover
    tertiary: `
      group
      text-[10px] tracking-[0.14em]
      text-white/50 hover:text-white/75
      bg-transparent
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
