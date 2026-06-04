import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface OfferHeroProps {
  atmosphereLine?: string;
  eyebrow: string;
  subtitle?: string;
  title: string;
  tagline?: string;
  body: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  titleLines?: string[];
  /** Optional restrained right-side visual. When present the hero becomes a balanced two-column layout. */
  media?: ReactNode;
}

export function OfferHero({
  atmosphereLine,
  eyebrow,
  subtitle,
  title,
  tagline,
  body,
  primaryCta,
  secondaryCta,
  titleLines,
  media,
}: OfferHeroProps) {
  const headings = titleLines?.length ? titleLines : [title];

  return (
    <motion.section
      variants={staggerContainer(STAGGER.cinematic, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="relative ei-section-expansive overflow-hidden"
      aria-labelledby="offer-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 48% 42% at 18% 28%, rgb(var(--ei-violet-rgb) / 0.04) 0%, transparent 68%), radial-gradient(ellipse 36% 30% at 82% 72%, rgb(var(--ei-halo-blue-rgb) / 0.03) 0%, transparent 70%)',
        }}
      />

      <Container size="xl" className="relative z-10">
        <div
          className={
            media
              ? 'grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16'
              : ''
          }
        >
        <div className={media ? 'max-w-[640px]' : 'mx-auto max-w-[680px] md:pl-6 lg:pl-10'}>
          {atmosphereLine && (
            <motion.p
              variants={fadeSoft}
              className="ei-quote mb-8 max-w-[28ch] text-[clamp(1.15rem,2.2vw,1.5rem)] leading-[1.45] text-[var(--ei-text-secondary)]"
            >
              {atmosphereLine}
            </motion.p>
          )}

          <motion.div variants={driftUp} className="mb-3 flex items-center gap-4 md:mb-5">
            <span className="font-structural text-[11px] uppercase tracking-[0.2em] text-white/60">
              {eyebrow}
            </span>
            <div
              className="h-px w-10 shrink-0 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.55) 100%)',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {subtitle && (
            <motion.p
              variants={fadeSoft}
              className="ei-type-label mb-6 block text-white/55"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            id="offer-hero-heading"
            variants={driftUp}
            className="font-editorial max-w-[22ch] text-[clamp(2rem,4.5vw,3.35rem)] leading-[1.08] tracking-tight text-[var(--ei-text-primary)]"
          >
            {headings.map((line, index) => (
              <span key={line} className={index > 0 ? 'mt-2 block text-[0.92em] text-[var(--ei-text-secondary)]' : ''}>
                {line}
              </span>
            ))}
          </motion.h1>

          {tagline && (
            <motion.p
              variants={fadeSoft}
              className="mt-5 max-w-[34ch] font-editorial text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.5] text-[var(--ei-text-secondary)]"
            >
              {tagline}
            </motion.p>
          )}

          <motion.div variants={staggerContainer(STAGGER.tight, 0.12)} className="mt-8 max-w-[52ch] space-y-4">
            {body.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 40)}
                variants={fadeSoft}
                className="ei-type-body-large text-[var(--ei-text-secondary)]"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeSoft}
              className="mt-10 flex flex-wrap items-center gap-4 md:gap-6"
            >
              {primaryCta && (
                <Button to={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta &&
                (secondaryCta.href.startsWith('#') ? (
                  <a href={secondaryCta.href} className="ei-link">
                    {secondaryCta.label} →
                  </a>
                ) : (
                  <Link to={secondaryCta.href} className="ei-link">
                    {secondaryCta.label} →
                  </Link>
                ))}
            </motion.div>
          )}
        </div>

          {media && (
            <motion.div
              variants={fadeSoft}
              className="relative hidden sm:block"
              aria-hidden="true"
            >
              {media}
            </motion.div>
          )}
        </div>
      </Container>
    </motion.section>
  );
}
