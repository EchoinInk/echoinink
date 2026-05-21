import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
}

export function Button({ children, onClick, to }: ButtonProps) {
  const className =
    'ei-gradient-border-btn relative inline-flex items-center justify-center px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/90 transition-all duration-700 hover:text-white hover:bg-white/5 focus:text-white focus:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0F1220]';

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
