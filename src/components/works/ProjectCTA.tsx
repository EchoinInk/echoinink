import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface ProjectCTAProps {
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImage: string;
}

export function ProjectCTA({
  eyebrow,
  heading,
  body,
  buttonLabel,
  buttonHref,
  backgroundImage,
}: ProjectCTAProps) {
  return (
    <motion.section
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="relative mx-auto min-h-[360px] max-w-[1180px] overflow-hidden rounded-[var(--radius-card)] border bg-cover bg-center bg-no-repeat shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05),0_24px_90px_rgb(var(--ei-void-black-rgb)/0.36)] md:min-h-[390px]"
      style={{
        background: 'var(--ei-surface-card)',
        borderColor: 'var(--border-card)',
        backgroundImage: `url(${backgroundImage})`,
      }}
      aria-labelledby="project-cta-heading"
    >
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
            'radial-gradient(ellipse 54% 65% at 20% 50%, rgb(var(--ei-deep-indigo-rgb) / 0.18) 0%, transparent 70%), radial-gradient(ellipse 42% 48% at 72% 45%, rgb(var(--ei-luxe-violet-rgb) / 0.12) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-center gap-9 p-7 md:min-h-[390px] md:max-w-[620px] md:p-12 lg:p-14">
        <div>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.24em]"
            style={{ color: 'var(--ei-text-muted)' }}
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

        <Button
          to={buttonHref}
          variant="secondary"
          className="min-h-[42px] gap-3 self-start px-5 py-3"
        >
          {buttonLabel}
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </motion.section>
  );
}
