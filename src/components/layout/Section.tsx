import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const spacingMap = {
  none: "",
  compact: "ei-section-compact",
  intimate: "ei-section-intimate",
  standard: "ei-section-standard",
  expansive: "ei-section-expansive",
  pause: "ei-section-pause",
  closing: "ei-section-closing",
} as const;

type SectionSpacing = keyof typeof spacingMap;

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: SectionSpacing;
}

export function Section({
  children,
  id,
  className,
  spacing = "standard",
}: SectionProps) {
  return (
    <section id={id} className={cn("ei-section", spacingMap[spacing], className)}>
      {children}
    </section>
  );
}