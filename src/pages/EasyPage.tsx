import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/layout/PageShell';

type EasyPageProps = {
  title: string; /* Page title - Helmet for SEO */
  description: string; /* Page description */
  atmosphere?: Parameters<typeof PageShell>[0]['atmosphere']; /* Atmosphere variant */
  children: ReactNode;
};

type EasyHeroProps = {
  label?: string; /* Optional label above title */
  title: ReactNode; /* Hero title */
  subtitle?: ReactNode; /* Optional subtitle */
  eyebrow?: string; /* Optional eyebrow text */
  actions?: ReactNode; /* Optional action buttons */
  visual?: ReactNode; /* Optional visual element */
};

type EasySectionProps = {
  label?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  variant?: 'default' | 'quiet' | 'panel';
};

type EasyContainerProps = {
  children: ReactNode; /* Container content */
  size?: 'default' | 'narrow' | 'wide'; /* Container size */
  className?: string; /* Additional classes */
};

export function EasyPage({
  title, /* Page title - Helmet for SEO */
  description, /* Page description */
  atmosphere = 'studio', /* Atmosphere variant */
  children,
}: EasyPageProps) {
  return (
    <PageShell atmosphere={atmosphere} withTopSpacing={false}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <main className="easy-page">{children}</main>
    </PageShell>
  );
}

export function EasyContainer({
  children,
  size = 'default',
  className = '',
}: EasyContainerProps) {
  return (
    <div className={`easy-container easy-container--${size} ${className}`}>
      {children}
    </div>
  );
}

export function EasyHero({
  label,
  eyebrow,
  title,
  subtitle,
  actions,
  visual,
}: EasyHeroProps) {
  return (
    <section className="easy-hero">
      <EasyContainer size="wide">
        <div className="easy-hero__grid">
          <div className="easy-hero__content">
            {label && <p className="easy-label">{label}</p>}
            {eyebrow && <p className="easy-eyebrow">{eyebrow}</p>}

            <h1 className="easy-hero__title">{title}</h1>

            {subtitle && <p className="easy-hero__subtitle">{subtitle}</p>}

            {actions && <div className="easy-actions">{actions}</div>}
          </div>

          {visual && <div className="easy-hero__visual">{visual}</div>}
        </div>
      </EasyContainer>
    </section>
  );
}

export function EasySection({
  label,
  title,
  intro,
  children,
  variant = 'default',
}: EasySectionProps) {
  return (
    <section className={`easy-section easy-section--${variant}`}>
      <EasyContainer>
        {(label || title || intro) && (
          <div className="easy-section__header">
            {label && <p className="easy-label">{label}</p>}
            {title && <h2 className="easy-section__title">{title}</h2>}
            {intro && <p className="easy-section__intro">{intro}</p>}
          </div>
        )}

        {children && <div className="easy-section__body">{children}</div>}
      </EasyContainer>
    </section>
  );
}