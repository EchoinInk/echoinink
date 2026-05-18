import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('ei-section', className)}
      style={{ paddingTop: 'var(--ei-space-64)', paddingBottom: 'var(--ei-space-64)' }}
    >
      {children}
    </section>
  );
}
