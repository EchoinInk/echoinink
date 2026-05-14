import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="ei-gradient-border-btn relative inline-flex items-center justify-center px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/90 transition-all duration-500 hover:text-white hover:scale-[1.02]"
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
