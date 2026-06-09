import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EchoFormPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  aside?: ReactNode;
  tone?: "quiet" | "elevated";
}

export function EchoFormPanel({
  children,
  aside,
  tone = "quiet",
  className,
  ...props
}: EchoFormPanelProps) {
  return (
    <div className={cn("ei-form-panel", className)} data-tone={tone} {...props}>
      {aside ? <aside className="ei-form-panel-aside">{aside}</aside> : null}
      <div className="ei-form-panel-content">{children}</div>
    </div>
  );
}
