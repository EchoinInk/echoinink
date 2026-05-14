import type { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[var(--ei-ink-black)]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
