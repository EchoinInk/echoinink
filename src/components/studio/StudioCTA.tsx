import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
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
      className="relative mx-auto min-h-[400px] max-w-[1180px] overflow-hidden rounded-[var(--radius-card)] border bg-cover bg-center bg-no-repeat shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05),0_24px_90px_rgb(var(--ei-void-black-rgb)/0.36)] md:min-h-[420px]"
      style={{
        background: 'var(--ei-surface-card)',
        borderColor: 'var(--border-card)',
        backgroundImage: `url(${backgroundImage})`,
      }}
      aria-labelledby="studio-cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 backdrop-blur-[1px]"
        style={{ background: 'var(--ei-image-overlay-left)' }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 54% 65% at 20% 50%, rgb(var(--ei-deep-indigo-rgb) / 0.22) 0%, transparent 70%), radial-gradient(ellipse 42% 48% at 72% 45%, rgb(var(--ei-luxe-violet-rgb) / 0.14) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 flex min-h-[400px] flex-col justify-center gap-8 p-7 md:min-h-[420px] md:max-w-[640px] md:p-12 lg:p-14">
        <div>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.24em]"
            style={{ color: 'var(--ei-text-muted)' }}
          >
            {eyebrow}
          </span>

          <h2
            id="studio-cta-heading"
            className="mt-4 font-editorial text-[clamp(2rem,3vw,3.1rem)] leading-tight"
            style={{ color: 'var(--ei-text-primary)' }}
          >
            {heading}
          </h2>

          <p
            className="mt-4 max-w-[430px] font-structural text-[0.98rem] leading-[1.75]"
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
                className="group inline-flex items-center gap-2 font-structural text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void-black)]"
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
    </motion.section>
  );
}
