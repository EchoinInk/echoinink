import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const spacingMap = {
  none: '',
  sm: 'pt-12 pb-12 md:pt-20 md:pb-20',
  md: 'pt-16 pb-16 md:pt-32 md:pb-32',
  lg: 'pt-20 pb-20 md:pt-40 md:pb-40',
  xl: 'pt-24 pb-24 md:pt-48 md:pb-48',
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
