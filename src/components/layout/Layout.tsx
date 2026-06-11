import type { ReactNode } from 'react';
import { Header } from '@/components/navigation/Header';
import { AtmosphericCursor } from '@/components/atmosphere/AtmosphericCursor';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[var(--ei-color-background-body)]">
      <AtmosphericCursor />
      <Header />
      {children}
    </div>
  );
}
