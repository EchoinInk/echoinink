import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn('ei-section py-16 md:py-24', className)}>
      {children}
    </section>
  );
}
