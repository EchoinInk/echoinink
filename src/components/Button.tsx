import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

type RouterLinkButtonProps = BaseButtonProps &
  Omit<LinkProps, 'to' | 'children' | 'className'> & {
    to: string;
    disabled?: boolean;
  };

type ButtonProps = NativeButtonProps | RouterLinkButtonProps;

export function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
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

  const variants: Record<ButtonVariant, string> = {
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

    secondary: `
      group
      px-6 py-3
      rounded-full
      text-[9px]
      tracking-[0.2em]
      text-white/60
      hover:text-white/82
      border border-white/[0.06]
      hover:border-white/[0.14]
      bg-black/[0.22]
      hover:bg-black/[0.28]
      shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04)]
      hover:-translate-y-[1px]
      active:translate-y-0
    `,

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
      <Link
        to={to}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={`${buttonClassName} ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
        {...(props as Omit<LinkProps, 'to' | 'children' | 'className'>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'}
      disabled={disabled}
      className={buttonClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}