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
  
  const baseClasses = `
  relative isolate
  inline-flex items-center justify-center

  font-structural uppercase

  transition-all duration-700
  ease-[cubic-bezier(0.22,1,0.36,1)]

  focus:outline-none
  touch-manipulation

  min-h-[48px] md:min-h-0
`;

const variants = {
  /* PRIMARY — Atmospheric cinematic CTA */
  primary: `
    ei-btn-primary-cinematic
    group

    px-8 py-4

    rounded-full

    text-[10px]
    tracking-[0.18em]
    font-medium

    text-white/[0.92]
    hover:text-white

    border border-[#2A6BFF]/[0.16]
    hover:border-[#2A6BFF]/[0.28]

    bg-[linear-gradient(to_bottom,rgba(10,14,24,0.82),rgba(6,8,16,0.92))]

    shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]

    hover:-translate-y-[1px]
    active:translate-y-0
  `,

  /* SECONDARY — Quiet ghost */
  secondary: `
    group

    px-6 py-3

    rounded-full

    text-[9px]
    tracking-[0.2em]

    text-white/68
    hover:text-white/88

    border border-white/[0.06]
    hover:border-white/[0.12]

    bg-black/[0.22]
    hover:bg-black/[0.28]

    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

    hover:-translate-y-[1px]
    active:translate-y-0
  `,

  /* TERTIARY — Minimal editorial link */
  tertiary: `
    group

    text-[10px]
    tracking-[0.14em]

    text-white/56
    hover:text-white/82

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
