import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { ContentFrame } from "@/components/layout/ContentFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { driftUp, fadeSoft, staggerContainer, STAGGER, VIEWPORT } from "@/lib/motion-cinematic";

export type EchoHeroVariant = "home" | "standard" | "offer" | "archive" | "caseStudy";

interface EchoHeroProps {
  variant?: EchoHeroVariant;
  eyebrow?: string;
  index?: string | number;
  title: ReactNode;
  description?: ReactNode;
  kicker?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  imageAlt?: string;
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
  headingId?: string;
}

export function EchoHero({
  variant = "standard",
  eyebrow,
  index,
  title,
  description,
  kicker,
  actions,
  media,
  backgroundImage,
  mobileBackgroundImage,
  imageAlt = "",
  align = "left",
  className,
  contentClassName,
  headingId = "echo-hero-heading"
}: EchoHeroProps) {
  const hasImage = Boolean(backgroundImage || mobileBackgroundImage);

  return (
    <motion.section
      variants={staggerContainer(STAGGER.cinematic, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className={cn("ei-echo-hero", className)}
      data-variant={variant}
      data-align={align}
      aria-labelledby={headingId}
    >
      {hasImage ? (
        <picture className="ei-echo-hero-media">
          {backgroundImage ? <source media="(min-width: 768px)" srcSet={backgroundImage} /> : null}
          <img
            src={mobileBackgroundImage ?? backgroundImage}
            alt={imageAlt}
            fetchPriority={variant === "home" ? "high" : undefined}
          />
        </picture>
      ) : null}
      {media ? <div className="ei-echo-hero-media-slot">{media}</div> : null}
      {(hasImage || media) && <div className="ei-echo-hero-scrim" aria-hidden="true" />}

      <ContentFrame width="standard" gutters className="ei-echo-hero-frame">
        <motion.div variants={driftUp} className={cn("ei-echo-hero-content", contentClassName)}>
          {eyebrow ? (
            <SectionLabel
              label={eyebrow}
              index={index}
              align={align}
              tone={variant === "archive" ? "accent" : "muted"}
            />
          ) : null}
          <h1 id={headingId} className="ei-echo-hero-title">
            {title}
          </h1>
          {kicker ? <div className="ei-echo-hero-kicker">{kicker}</div> : null}
          {description ? <div className="ei-echo-hero-description">{description}</div> : null}
          {actions ? (
            <motion.div variants={fadeSoft} className="ei-echo-hero-actions">
              {actions}
            </motion.div>
          ) : null}
        </motion.div>
      </ContentFrame>
    </motion.section>
  );
}
