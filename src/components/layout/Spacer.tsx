import type { CSSProperties } from 'react';
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

interface SpacerProps {
  size?: SpacingStep;
  axis?: 'vertical' | 'horizontal';
  className?: string;
}

export function Spacer({ size = 24, axis = 'vertical', className }: SpacerProps) {
  const style: CSSProperties = { 
    [axis === 'vertical' ? 'height' : 'width']: scaleMap[size],
    flexShrink: 0,
  };
  
  return <div className={cn(className)} style={style} aria-hidden="true" />;
}
