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
}

export function ProcessSteps({ steps, closing }: ProcessStepsProps) {
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
