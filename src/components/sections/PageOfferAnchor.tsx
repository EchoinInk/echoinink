import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageOfferAnchorProps {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageOfferAnchor({
  children,
  align = "left",
  className,
}: PageOfferAnchorProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("ei-page-offer-anchor", isCentered ? "mx-auto" : "", className)}>
      <span
        aria-hidden="true"
        className={cn("ei-page-offer-anchor-rule", isCentered ? "mx-auto" : "")}
      />
      <p className={cn("ei-page-offer-anchor-text", isCentered ? "text-center" : "")}>
        {children}
      </p>
    </div>
  );
}
