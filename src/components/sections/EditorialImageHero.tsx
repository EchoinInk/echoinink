import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

interface EditorialImageHeroProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
  align?: "left" | "center";
  variant?: "default" | "studio" | "intimate";
}

export function EditorialImageHero({
  eyebrow,
  title,
  italicWord,
  description,
  ctaLabel,
  ctaHref,
  image,
  mobileImage,
  imageAlt,
  align = "left",
  variant = "default",
}: EditorialImageHeroProps) {
  const titleParts = italicWord
    ? title.split(new RegExp(`(${italicWord})`, "i"))
    : [title];

  const isLeft = align === "left";
  const isIntimate = variant === "intimate";
  const isStudio = variant === "studio";

  const headingClass = isStudio
    ? "ei-type-studio-hero max-w-[13ch] whitespace-pre-line"
    : "ei-type-hero-home max-w-[24ch] whitespace-pre-line";

  const bodyClass = isStudio
    ? "ei-type-studio-body max-w-[47ch] text-[var(--ei-color-text-secondary)]"
    : isIntimate
      ? "ei-type-hero-description max-w-[42ch]"
      : "ei-type-hero-description max-w-[46ch]";

  return (
    <motion.section
      variants={staggerContainer(STAGGER.cinematic, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className={`
        relative flex min-h-[54vh] items-start overflow-hidden
        bg-[var(--ei-void)]
        pt-16 sm:pt-20 md:min-h-[78vh] md:pt-20 lg:min-h-[82vh]
        ${isIntimate ? "md:min-h-[60vh]" : ""}
        ${isStudio ? "md:min-h-[72vh] lg:min-h-[76vh]" : ""}
      `}
      aria-labelledby="editorial-hero-heading"
    >
      <picture className="absolute inset-0 z-0 block" aria-hidden="true">
        <source media="(min-width: 768px)" srcSet={image} />
        <img
          src={mobileImage}
          alt=""
          className={`h-full w-full object-cover object-center ${
            isStudio ? "saturate-[0.98] brightness-[0.96] md:object-[70%_50%]" : "saturate-[0.86] md:object-[72%_50%]"
          }`}
          fetchPriority="high"
        />
      </picture>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            isStudio
              ? "linear-gradient(180deg, rgb(var(--ei-void-rgb) / 0.04) 0%, rgb(var(--ei-void-rgb) / 0.36) 100%)"
              : "linear-gradient(180deg, rgb(var(--ei-void-rgb) / 0.12) 0%, rgb(var(--ei-void-rgb) / 0.46) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: isLeft
            ? "linear-gradient(90deg, transparent 0%, transparent 44%, rgb(var(--ei-void-rgb) / 0.16) 100%)"
            : "linear-gradient(90deg, rgb(var(--ei-void-rgb) / 0.16) 0%, transparent 56%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: isLeft
            ? isStudio
              ? "radial-gradient(ellipse 46% 68% at 18% 48%, rgb(var(--ei-void-rgb) / 0.7) 0%, rgb(var(--ei-void-rgb) / 0.42) 42%, transparent 74%), linear-gradient(90deg, rgb(var(--ei-void-rgb) / 0.44) 0%, transparent 58%)"
              : "radial-gradient(ellipse 52% 64% at 16% 46%, rgb(var(--ei-void-rgb) / 0.78) 0%, rgb(var(--ei-void-rgb) / 0.48) 42%, transparent 74%), linear-gradient(90deg, rgb(var(--ei-void-rgb) / 0.52) 0%, transparent 58%)"
            : "radial-gradient(ellipse 52% 64% at 84% 46%, rgb(var(--ei-void-rgb) / 0.78) 0%, rgb(var(--ei-void-rgb) / 0.48) 42%, transparent 74%), linear-gradient(270deg, rgb(var(--ei-void-rgb) / 0.52) 0%, transparent 58%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-[20vh]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(var(--ei-void-rgb) / 0.34) 70%, var(--ei-void) 100%)",
        }}
      />

      <Container
        size="xl"
        className="
          relative z-10 w-full
          pt-[clamp(2.5rem,7vh,4.5rem)]
          md:pt-[clamp(3.5rem,9vh,5.5rem)]
          lg:pt-[clamp(4rem,10vh,6rem)]
        "
      >
        <div className={`max-w-[680px] ${isLeft ? "" : "mx-auto text-center"}`}>
          <motion.div
            variants={driftUp}
            className={`
              max-w-[680px]
              ${isLeft ? "text-left md:pl-10 lg:pl-14" : "text-center"}
            `}
          >
            <div
              className={`
                mb-3 flex items-center gap-4 md:mb-5
                ${isLeft ? "" : "justify-center"}
              `}
            >
              <span className="ei-type-studio-label">
                {eyebrow}
              </span>

              <div
                className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            <h1
              id="editorial-hero-heading"
              className={headingClass}
              style={{
                textShadow: "0 0 48px rgb(var(--ei-violet-rgb) / 0.04)",
              }}
            >
              {italicWord
                ? titleParts.map((part, i) =>
                    part.toLowerCase() === italicWord.toLowerCase() ? (
                      <em key={i} className="ei-type-studio-hero-emphasis">
                        {part}
                      </em>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )
                : title}
            </h1>

            <p className={`${bodyClass} mt-5 md:mt-6`}>{description}</p>

            {ctaLabel && ctaHref && (
              <motion.div
                variants={fadeSoft}
                className={`mt-8 md:mt-10 ${
                  isLeft ? "" : "flex justify-center"
                }`}
              >
                <Button to={ctaHref} variant="primary" className="self-start">
                  {ctaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>

      <span className="sr-only">{imageAlt}</span>
    </motion.section>
  );
}
