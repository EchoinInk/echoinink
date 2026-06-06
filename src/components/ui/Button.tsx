import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "tertiary";

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
  Omit<LinkProps, "to" | "children" | "className"> & {
    to: string;
    disabled?: boolean;
  };

type ButtonProps = NativeButtonProps | RouterLinkButtonProps;

export function Button({
  children,
  to,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = `
    relative isolate
    inline-flex items-center justify-center
    font-structural uppercase
    touch-manipulation
    transition-all duration-500 ease-out
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[rgb(var(--ei-halo-blue-rgb)/0.45)]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[var(--ei-color-background-canvas)]
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  const variants: Record<ButtonVariant, string> = {
    primary: `
      ei-btn-primary-cinematic
      group
      min-h-[48px]
      min-w-[200px]
      rounded-full
      px-11 py-[18px]
      text-[10px]
      font-medium
      tracking-[0.18em]
      text-[var(--ei-color-text-primary)]
      hover:-translate-y-[2px]
      hover:text-[var(--ei-color-text-primary)]
      active:translate-y-0
    `,

    secondary: `
      group
      min-h-[44px]
      rounded-full
      border border-[rgb(var(--ei-ice-white-rgb)/0.09)]
      bg-[rgb(var(--ei-void-rgb)/0.26)]
      px-6 py-3.5
      text-[10px]
      font-medium
      tracking-[0.18em]
      text-[var(--ei-color-text-tertiary)]
      shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05)]
      hover:-translate-y-[1px]
      hover:border-[rgb(var(--ei-ice-white-rgb)/0.18)]
      hover:bg-[rgb(var(--ei-void-rgb)/0.32)]
      hover:text-[var(--ei-color-text-secondary)]
      active:translate-y-0
    `,

    tertiary: `
      group
      rounded-none
      bg-transparent
      px-0 py-1
      text-[10px]
      font-medium
      tracking-[0.14em]
      text-[var(--ei-color-text-muted)]
      hover:text-[var(--ei-color-text-secondary)]
    `,
  };

  const buttonClassName = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      {variant === "tertiary" && (
        <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--ei-color-text-secondary)]/40 transition-all duration-500 ease-out group-hover:w-full" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={`${buttonClassName} ${
          disabled ? "pointer-events-none cursor-not-allowed opacity-50" : ""
        }`}
        {...(props as Omit<LinkProps, "to" | "children" | "className">)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      disabled={disabled}
      className={buttonClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}