import type { ReactNode } from "react";

import { motion } from "framer-motion";

type PageHeroVariant = "default" | "intimate";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  italicWord?: string;
  description?: string;
  kicker?: string;
  image?: string;
  mobileImage?: string;
  intro?: ReactNode;
  headingId?: string;
  variants?: any;
  imageAlt?: string;
  className?: string;
  variant?: PageHeroVariant;
  align?: "left" | "center" |"right";
};

export function PageHero({
  label,
  title,
  italicWord,
  description,
  kicker,
  image,
  mobileImage,
  intro,
  headingId = "hero-heading",
  variants,
  className = "",
  variant = "default",
  imageAlt,
  align = "left",
}: PageHeroProps) {
  const isIntimate = variant === "intimate";

  return (
    <header
      className={`
        page-hero
        ${isIntimate ? "page-hero--intimate" : "page-hero--default"}
        ${className}
      `.trim()}
    >
      <motion.div
        variants={variants}
        className={`
          flex items-center gap-4
          ${align === "left" ? "justify-start" : align === "center" ? "justify-center" : "justify-end"} 
          ${isIntimate ? "mb-4 md:mb-6" : "mb-3 md:mb-5"}
        `}
      >
        <span
          className={`
            ei-type-color-muted font-structural
            uppercase
            ${isIntimate ? "text-[10px] tracking-[0.24em]" : "text-[11px] tracking-[0.2em]"}
          `}
        >
          {label}
        </span>

        <div
          className={`
            h-px shrink-0 rounded-full
            shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]
            ${isIntimate ? "w-8 opacity-70" : "w-10"}
          `}
          style={{
            background:
              "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      <h1
        id={headingId}
        className={`
          ei-type-color-primary font-editorial
          whitespace-pre-line
          tracking-tight

          ${
            isIntimate
              ? `
                max-w-[24ch]
                text-[2.2rem]
                leading-[1.08]
                md:text-[3rem]
                md:leading-[1.06]
                lg:text-[3.65rem]
              `
              : `
                max-w-[29ch]
                text-[2.45rem]
                leading-[1.06]
                md:text-[3.45rem]
                md:leading-[1.04]
                lg:text-[4.15rem]
              `
          }
        `}
        style={{
          textShadow: isIntimate
            ? "0 0 38px rgb(var(--ei-violet-rgb) / 0.035)"
            : "0 0 48px rgb(var(--ei-violet-rgb) / 0.04)",
        }}
      >
        {title}
      </h1>

      {kicker && (
        <p
          className={`
            font-structural
            uppercase
            text-ei-orchid/70

            ${
              isIntimate
                ? `
                  mt-5
                  text-[10px]
                  tracking-[0.18em]
                  md:text-[11px]
                `
                : `
                  mt-5
                  text-[11px]
                  tracking-[0.16em]
                  md:text-[12px]
                `
            }
          `}
        >
          {kicker}
        </p>
      )}

      {intro && (
        <motion.p
          variants={variants}
          className={`
            ei-type-color-secondary font-structural
            leading-[1.68]

            ${
              isIntimate
                ? `
                  mt-5
                  max-w-[40ch]
                  text-[15px]
                  md:text-[16px]
                `
                : `
                  mt-6
                  max-w-[46ch]
                  text-[16px]
                  md:text-[17px]
                `
            }
          `}
          style={{
            letterSpacing: isIntimate ? "0.01em" : "0.005em",
          }}
        >
          {intro}
        </motion.p>
      )}
    </header>
  );
}
