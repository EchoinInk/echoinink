import type { ReactNode } from 'react';
import { Header } from './sections/Header';
import { AtmosphericCursor } from './atmosphere/AtmosphericCursor';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[var(--ei-ink-black)]">
      <AtmosphericCursor />
      <Header />
      <div>{children}</div>
    </div>
  );
}
