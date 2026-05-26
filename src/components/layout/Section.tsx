import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const spacingMap = {
  none: '',
  sm: 'pt-8 pb-8 md:pt-16 md:pb-16',
  md: 'pt-11 pb-11 md:pt-24 md:pb-24',
  lg: 'pt-12 pb-12 md:pt-28 md:pb-28',
  xl: 'pt-16 pb-16 md:pt-32 md:pb-32',
} as const;

type SectionSpacing = keyof typeof spacingMap;

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: SectionSpacing;
}

export function Section({ children, id, className, spacing = 'lg' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('ei-section', spacingMap[spacing], className)}
    >
      {children}
    </section>
  );
}
