import type { ReactNode } from "react";

import { ContentFrame } from "@/components/layout/ContentFrame";
import { cn } from "@/lib/utils";

interface CaseStudyLayoutProps {
  hero: ReactNode;
  outcome?: ReactNode;
  context?: ReactNode;
  signal?: ReactNode;
  system?: ReactNode;
  proof?: ReactNode;
  process?: ReactNode;
  results?: ReactNode;
  reflection?: ReactNode;
  nextStep?: ReactNode;
  className?: string;
}

function CaseStudyRegion({
  name,
  children,
  width = "standard"
}: {
  name: string;
  children?: ReactNode;
  width?: "standard" | "reading";
}) {
  if (!children) {
    return null;
  }

  return (
    <section className="ei-case-study-region" data-region={name}>
      <ContentFrame width={width} gutters>
        {children}
      </ContentFrame>
    </section>
  );
}

export function CaseStudyLayout({
  hero,
  outcome,
  context,
  signal,
  system,
  proof,
  process,
  results,
  reflection,
  nextStep,
  className
}: CaseStudyLayoutProps) {
  return (
    <article className={cn("ei-case-study-layout", className)}>
      <header>{hero}</header>
      <CaseStudyRegion name="outcome" width="reading">
        {outcome}
      </CaseStudyRegion>
      <CaseStudyRegion name="context">{context}</CaseStudyRegion>
      <CaseStudyRegion name="signal">{signal}</CaseStudyRegion>
      <CaseStudyRegion name="system">{system}</CaseStudyRegion>
      <CaseStudyRegion name="proof">{proof}</CaseStudyRegion>
      <CaseStudyRegion name="process">{process}</CaseStudyRegion>
      <CaseStudyRegion name="results">{results}</CaseStudyRegion>
      <CaseStudyRegion name="reflection" width="reading">
        {reflection}
      </CaseStudyRegion>
      {nextStep ? <footer className="ei-case-study-next">{nextStep}</footer> : null}
    </article>
  );
}
