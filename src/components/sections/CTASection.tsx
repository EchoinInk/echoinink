import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { ContentFrame } from "@/components/layout/ContentFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { driftUp, fadeSoft, staggerContainer, STAGGER, VIEWPORT } from "@/lib/motion-cinematic";

export type CTASectionVariant = "slim" | "imagePanel" | "editorialInvitation";

interface CTASectionProps {
  variant?: CTASectionVariant;
  eyebrow?: string;
  heading: ReactNode;
  body?: ReactNode;
  actions: ReactNode;
  secondary?: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  headingId?: string;
}

export function CTASection({
  variant = "slim",
  eyebrow,
  heading,
  body,
  actions,
  secondary,
  image,
  imageAlt = "",
  className,
  headingId = "echo-cta-heading"
}: CTASectionProps) {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className={cn("ei-cta-section", className)}
      data-variant={variant}
      aria-labelledby={headingId}
    >
      <ContentFrame width="standard" gutters>
        <div className="ei-cta-section-panel">
          {image ? <img className="ei-cta-section-image" src={image} alt={imageAlt} /> : null}
          {image ? <div className="ei-cta-section-scrim" aria-hidden="true" /> : null}
          <motion.div variants={driftUp} className="ei-cta-section-copy">
            {eyebrow ? (
              <SectionLabel label={eyebrow} align={variant === "slim" ? "left" : "center"} />
            ) : null}
            <h2 id={headingId} className="ei-cta-section-heading">
              {heading}
            </h2>
            {body ? <div className="ei-cta-section-body">{body}</div> : null}
            <motion.div variants={fadeSoft} className="ei-cta-section-actions">
              {actions}
            </motion.div>
            {secondary ? <div className="ei-cta-section-secondary">{secondary}</div> : null}
          </motion.div>
        </div>
      </ContentFrame>
    </motion.section>
  );
}
