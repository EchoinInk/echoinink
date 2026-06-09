import type { ReactNode } from "react";

import { ContentFrame } from "@/components/layout/ContentFrame";
import { cn } from "@/lib/utils";

interface EditorialArticleLayoutProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  metadata?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function EditorialArticleLayout({
  eyebrow,
  title,
  subtitle,
  metadata,
  lead,
  children,
  aside,
  footer,
  className
}: EditorialArticleLayoutProps) {
  return (
    <article className={cn("ei-editorial-layout", className)}>
      <header className="ei-editorial-header">
        <ContentFrame width="standard" gutters>
          {eyebrow ? <div className="ei-editorial-eyebrow">{eyebrow}</div> : null}
          <h1 className="ei-editorial-title">{title}</h1>
          {subtitle ? <div className="ei-editorial-subtitle">{subtitle}</div> : null}
          {metadata ? <div className="ei-editorial-metadata">{metadata}</div> : null}
        </ContentFrame>
      </header>
      {lead ? (
        <ContentFrame width="reading" gutters className="ei-editorial-lead">
          {lead}
        </ContentFrame>
      ) : null}
      <div className="ei-editorial-grid">
        <ContentFrame width="reading" gutters className="ei-editorial-body">
          {children}
        </ContentFrame>
        {aside ? <aside className="ei-editorial-aside">{aside}</aside> : null}
      </div>
      {footer ? <footer className="ei-editorial-footer">{footer}</footer> : null}
    </article>
  );
}
