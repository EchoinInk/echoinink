import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeMap = {
  sm: 'max-w-4xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: '',
} as const;

export function Container({ children, className, size = 'xl' }: ContainerProps) {
  return (
    <div className={cn('ei-container', sizeMap[size], className)}>
      {children}
    </div>
  );
}
