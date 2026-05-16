import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
}

export function Button({ children, onClick, to }: ButtonProps) {
  const className =
    'ei-gradient-border-btn relative inline-flex items-center justify-center px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/90 transition-all duration-500 hover:text-white hover:scale-[1.02]';

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
