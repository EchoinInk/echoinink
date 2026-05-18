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

interface ClusterProps {
  children: ReactNode;
  gap?: SpacingStep;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: boolean;
  className?: string;
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
} as const;

export function Cluster({ children, gap = 24, align = 'center', justify = 'start', wrap = true, className }: ClusterProps) {
  const style: CSSProperties = { gap: scaleMap[gap] };
  return (
    <div 
      className={cn('flex', alignMap[align], justifyMap[justify], wrap && 'flex-wrap', className)} 
      style={style}
    >
      {children}
    </div>
  );
}
