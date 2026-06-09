import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ContentFrameWidth = "standard" | "reading" | "narrow" | "page" | "full";

interface ContentFrameProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: ContentFrameWidth;
  gutters?: boolean;
}

const widthClasses: Record<ContentFrameWidth, string> = {
  standard: "ei-content-frame-standard",
  reading: "ei-content-frame-reading",
  narrow: "ei-content-frame-narrow",
  page: "ei-content-frame-page",
  full: "ei-content-frame-full"
};

export function ContentFrame({
  children,
  width = "standard",
  gutters = false,
  className,
  ...props
}: ContentFrameProps) {
  return (
    <div
      className={cn(
        "ei-content-frame",
        widthClasses[width],
        gutters && "ei-content-frame-gutters",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
