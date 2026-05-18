import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={cn('ei-container', className)}>
      {children}
    </div>
  );
}
