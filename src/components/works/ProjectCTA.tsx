import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '@/components/Button';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

type ProjectCTAProps = {
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImage: string;
  secondaryLinks?: {
    label: string;
    href: string;
  }[];
};

export function ProjectCTA({
  eyebrow,
  heading,
  body,
  buttonLabel,
  buttonHref,
  backgroundImage,
  secondaryLinks,
}: ProjectCTAProps) {
  return (
    <motion.section
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="
        relative mx-auto min-h-[360px] max-w-[1180px] overflow-hidden
        rounded-[var(--radius-card)] border
        shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05),0_24px_90px_rgb(var(--ei-void-rgb)/0.36)]
        md:min-h-[390px]
      "
      style={{
        background: 'var(--ei-surface-card)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="project-cta-heading"
    >
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full object-cover object-center
          opacity-[0.82] saturate-[0.9] brightness-[0.82]
        "
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            `
            linear-gradient(
              90deg,
              rgb(var(--ei-void-rgb) / 0.86) 0%,
              rgb(var(--ei-void-rgb) / 0.66) 38%,
              rgb(var(--ei-void-rgb) / 0.28) 68%,
              rgb(var(--ei-void-rgb) / 0.08) 100%
            ),
            linear-gradient(
              180deg,
              rgb(var(--ei-void-rgb) / 0.16) 0%,
              rgb(var(--ei-void-rgb) / 0.26) 54%,
              rgb(var(--ei-void-rgb) / 0.56) 100%
            )
            `,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            `
            radial-gradient(
              ellipse 54% 65% at 18% 48%,
              rgb(var(--ei-midnight-rgb) / 0.2) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 42% 48% at 72% 45%,
              rgb(var(--ei-luxe-violet-rgb) / 0.14) 0%,
              transparent 68%
            )
            `,
        }}
      />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-center gap-9 p-7 md:min-h-[390px] md:max-w-[640px] md:p-12 lg:p-14">
        <div>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.24em]"
            style={{ color: 'var(--ei-text-tertiary)' }}
          >
            {eyebrow}
          </span>

          <h2
            id="project-cta-heading"
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

        <div>
          <Button
            to={buttonHref}
            variant="secondary"
            className="min-h-[42px] gap-3 self-start px-5 py-3"
          >
            {buttonLabel}
            <span aria-hidden="true">→</span>
          </Button>

          {secondaryLinks?.length ? (
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="
                    group inline-flex items-center font-structural text-sm
                    transition-colors duration-300
                    hover:text-[var(--ei-text-primary)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[rgb(var(--ei-electric-blue-rgb)/0.38)]
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-transparent
                  "
                  style={{ color: 'var(--ei-text-secondary)' }}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}