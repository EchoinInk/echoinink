import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { fadeSoft, driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  closing?: string;
  /** 'stack' (default) keeps the vertical list. 'horizontal' lays the steps out as a stepped row on desktop. */
  layout?: 'stack' | 'horizontal';
}

export function ProcessSteps({ steps, closing, layout = 'stack' }: ProcessStepsProps) {
  if (layout === 'horizontal') {
    return (
      <motion.div
        variants={staggerContainer(STAGGER.loose, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.normal}
      >
        <ol className="grid gap-x-6 gap-y-8 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-start md:gap-x-3">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <motion.li variants={driftUp} className="md:px-1">
                <span className="font-editorial text-[1.6rem] leading-none text-[rgb(var(--ei-halo-blue-rgb)/0.62)]">
                  {step.number}
                </span>
                <h3 className="mt-3 ei-type-label text-[var(--ei-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-3 ei-type-body text-[var(--ei-text-secondary)]">
                  {step.description}
                </p>
              </motion.li>
              {index < steps.length - 1 && (
                <motion.span
                  variants={fadeSoft}
                  aria-hidden="true"
                  className="hidden select-none self-start pt-[0.35rem] text-[1.1rem] text-[var(--ei-text-tertiary)] md:block"
                >
                  →
                </motion.span>
              )}
            </Fragment>
          ))}
        </ol>
        {closing && (
          <motion.p
            variants={fadeSoft}
            className="mt-12 max-w-3xl ei-type-body-large text-[var(--ei-text-secondary)]"
          >
            {closing}
          </motion.p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className="max-w-3xl"
    >
      <ol className="space-y-8 md:space-y-10">
        {steps.map((step) => (
          <motion.li
            key={step.number}
            variants={driftUp}
            className="grid gap-4 border-b border-[var(--ei-card-border)] pb-8 last:border-b-0 last:pb-0 md:grid-cols-[4.5rem_1fr] md:gap-8"
          >
            <span className="ei-type-label text-[var(--ei-text-tertiary)]">{step.number}</span>
            <div>
              <h3 className="ei-type-section text-[1.2rem] text-[var(--ei-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 ei-type-body-large text-[var(--ei-text-secondary)]">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
      {closing && (
        <motion.p variants={fadeSoft} className="mt-10 ei-type-body-large text-[var(--ei-text-secondary)]">
          {closing}
        </motion.p>
      )}
    </motion.div>
  );
}
