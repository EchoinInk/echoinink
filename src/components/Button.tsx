import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'quiet' | 'invitation';
}

export function Button({ children, onClick, to, variant = 'primary' }: ButtonProps) {
  // Refined invitation-style buttons — quieter, more premium, less UI component feeling
  const baseClasses = 'relative inline-flex items-center justify-center font-structural uppercase transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none';

  const variants = {
    // Primary — refined gradient border button
    primary: `
      ei-gradient-border-btn-refined
      px-7 py-3
      text-[10px] tracking-[0.18em]
      text-white/85 hover:text-white/95
      bg-white/[0.02] hover:bg-white/[0.05]
    `,
    // Quiet — subtle, for secondary actions
    quiet: `
      px-5 py-2.5
      text-[9px] tracking-[0.22em]
      text-white/50 hover:text-white/75
      border border-white/[0.06] hover:border-white/[0.12]
      rounded-full
      bg-transparent hover:bg-white/[0.02]
    `,
    // Invitation — the most premium, for CTAs
    invitation: `
      ei-invitation-btn
      px-8 py-4
      text-[10px] tracking-[0.16em]
      text-white/80 hover:text-white
      bg-white/[0.015] hover:bg-white/[0.04]
    `,
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
