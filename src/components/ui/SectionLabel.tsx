import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type SectionLabelAlign = "left" | "center" | "right";
export type SectionLabelRule = "none" | "short" | "long";
export type SectionLabelTone = "muted" | "primary" | "accent" | "magenta";

interface SectionLabelProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  label: string;
  align?: SectionLabelAlign;
  rule?: SectionLabelRule;
  tone?: SectionLabelTone;
  index?: string | number;
}

export function SectionLabel({
  label,
  align = "left",
  rule = "short",
  tone = "muted",
  index,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <div
      className={cn("ei-section-label-system", className)}
      data-align={align}
      data-tone={tone}
      {...props}
    >
      {index !== undefined ? (
        <span className="ei-section-label-system-index">
          {typeof index === "number" ? String(index).padStart(2, "0") : index}
        </span>
      ) : null}
      <span className="ei-section-label-system-text">{label}</span>
      {rule !== "none" ? (
        <span className="ei-section-label-system-rule" data-length={rule} aria-hidden="true" />
      ) : null}
    </div>
  );
}
