import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { EyebrowLabel } from '@/components/editorial/EyebrowLabel';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface StudioCTAProps {
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLinks: Array<{ label: string; href: string }>;
  backgroundImage: string;
}

export function StudioCTA({
  eyebrow,
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLinks,
  backgroundImage,
}: StudioCTAProps) {
  return (
    <motion.section
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="relative mx-auto min-h-[400px] max-w-[1180px] overflow-hidden rounded-[var(--radius-card)] border md:min-h-[420px]"
      style={{
        background: 'var(--ei-void)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="studio-cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 78%',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'var(--ei-image-overlay-left)' }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 58% at 18% 50%, rgb(var(--ei-midnight-rgb) / 0.16) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 grid min-h-[400px] md:min-h-[420px] md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8 p-7 md:p-12 lg:p-14">
          <div>
            <EyebrowLabel>{eyebrow}</EyebrowLabel>

            <h2
              id="studio-cta-heading"
              className="mt-6 font-editorial text-[clamp(2rem,3vw,3.1rem)] leading-tight"
              style={{ color: 'var(--ei-text-primary)' }}
            >
              {heading}
            </h2>

            <p
              className="mt-4 max-w-[36ch] whitespace-pre-line font-structural text-[0.98rem] leading-[1.75]"
              style={{ color: 'var(--ei-text-secondary)' }}
            >
              {body}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <Button to={primaryHref} variant="primary" className="self-start">
              {primaryLabel}
            </Button>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group inline-flex items-center gap-2 font-structural text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void)]"
                  style={{ color: 'var(--ei-text-tertiary)' }}
                >
                  <span className="transition-colors duration-500 group-hover:text-[var(--ei-text-primary)]">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </motion.section>
  );
}
