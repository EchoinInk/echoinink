import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const scaleMap = {
  8: 'var(--ei-space-8)',
  12: 'var(--ei-space-12)',
  16: 'var(--ei-space-16)',
  24: 'var(--ei-space-24)',
  32: 'var(--ei-space-32)',
  48: 'var(--ei-space-48)',
  64: 'var(--ei-space-64)',
  96: 'var(--ei-space-96)',
  128: 'var(--ei-space-128)',
} as const;

type SpacingStep = keyof typeof scaleMap;

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: SpacingStep;
  className?: string;
}

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
} as const;

export function Grid({ children, cols = 1, gap = 24, className }: GridProps) {
  const style: CSSProperties = { gap: scaleMap[gap] };
  return (
    <div className={cn('grid', colsMap[cols], className)} style={style}>
      {children}
    </div>
  );
}
