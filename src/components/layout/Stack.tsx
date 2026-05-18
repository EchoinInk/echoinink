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
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  className?: string;
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
} as const;

export function Stack({ children, gap = 24, align = 'stretch', justify = 'start', className }: StackProps) {
  const style: CSSProperties = { gap: scaleMap[gap] };
  return (
    <div 
      className={cn('flex flex-col', alignMap[align], justifyMap[justify], className)} 
      style={style}
    >
      {children}
    </div>
  );
}
