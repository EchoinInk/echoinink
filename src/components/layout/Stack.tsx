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

interface StackProps {
  children: ReactNode;
  gap?: SpacingStep;
  className?: string;
}

export function Stack({ children, gap = 24, className }: StackProps) {
  const style: CSSProperties = { display: 'flex', flexDirection: 'column', gap: scaleMap[gap] };
  return (
    <div className={cn(className)} style={style}>
      {children}
    </div>
  );
}
