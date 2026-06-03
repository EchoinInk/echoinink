import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/sections/Footer';

export type PageAtmosphere =
  | 'default'
  | 'identity'
  | 'sessions'
  | 'worlds'
  | 'works'
  | 'studio';

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
  atmosphere?: PageAtmosphere;
  className?: string;
  id?: string;
  withFooter?: boolean;
  withTopSpacing?: boolean;
}

const atmosphereClasses: Record<PageAtmosphere, string> = {
  default: 'ei-atmosphere-default',
  identity: 'ei-atmosphere-identity',
  sessions: 'ei-atmosphere-sessions',
  worlds: 'ei-atmosphere-worlds',
  works: 'ei-atmosphere-works',
  studio: 'ei-atmosphere-default',
};

/**
 * PageShell — Universal page shell providing:
 * - Shared atmospheric background
 * - Consistent top spacing (header offset)
 * - Cinematic page transitions
 * - Universal content rhythm
 * - Footer integration
 * - Ambient lighting continuity
 *
 * All major pages should adopt this shell.
 */
export function PageShell({
  children,
  title,
  description,
  atmosphere = 'default',
  className = '',
  id = 'main-content',
  withFooter = true,
  withTopSpacing = true,
}: PageShellProps) {
  return (
    <main
      id={id}
      className={`
        relative
        ${atmosphereClasses[atmosphere]}
        ${withTopSpacing ? 'pt-24 md:pt-32' : ''}
        ${className}
      `.trim()}
    >
      {title && (
        <Helmet>
          <title>{title}</title>
          {description && <meta name="description" content={description} />}
        </Helmet>
      )}

      {/* Page-level ambient glow */}
      <div className="ei-glow-page" />

      {/* Edge vignette for depth */}
      <div className="ei-vignette-edges absolute inset-0" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Footer */}
      {withFooter && <Footer />}
    </main>
  );
}

export default PageShell;
