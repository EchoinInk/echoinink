import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type IconWellSize = "sm" | "md" | "lg";
export type IconWellTone = "neutral" | "blue" | "violet" | "magenta";

interface IconWellProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: IconWellSize;
  tone?: IconWellTone;
  orbital?: boolean;
  glow?: boolean;
}

export function IconWell({
  children,
  size = "md",
  tone = "violet",
  orbital = false,
  glow = false,
  className,
  ...props
}: IconWellProps) {
  return (
    <div
      className={cn("ei-icon-well", className)}
      data-size={size}
      data-tone={tone}
      data-orbital={orbital ? "true" : "false"}
      data-glow={glow ? "true" : "false"}
      {...props}
    >
      {children}
    </div>
  );
}
