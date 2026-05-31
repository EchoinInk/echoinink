import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({
  children,
  onClick,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
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

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-white/45
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#05070D]

    touch-manipulation

    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-50

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

      border border-[rgb(var(--ei-aurora-blue-rgb)/0.16)]
      hover:border-[rgb(var(--ei-aurora-blue-rgb)/0.28)]

      bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.82),rgb(var(--ei-void-black-rgb)/0.92))]

      shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.06)]

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

      border border-white/[0.08]
      hover:border-white/[0.16]

      bg-black/[0.22]
      hover:bg-black/[0.28]

      shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04)]

      hover:-translate-y-[1px]
      active:translate-y-0
    `,

    /* TERTIARY — Minimal editorial link */
    tertiary: `
      group

      text-[10px]
      tracking-[0.14em]

      text-white/60
      hover:text-white/86

      bg-transparent
    `,
  };

  const buttonClassName = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      {variant === 'tertiary' && (
        <span className="absolute bottom-0 left-0 h-px w-0 bg-white/35 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
      {...props}
    >
      {content}
    </button>
  );
}