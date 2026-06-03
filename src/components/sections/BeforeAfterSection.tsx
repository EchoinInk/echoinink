import { motion } from 'framer-motion';
import { fadeSoft, driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

interface BeforeAfterSectionProps {
  divider?: string;
  before: string[];
  after: string[];
}

export function BeforeAfterSection({ divider, before, after }: BeforeAfterSectionProps) {
  return (
    <motion.div
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
    >
      {divider && (
        <motion.p
          variants={fadeSoft}
          className="ei-atmosphere-text mb-10 max-w-[32ch] text-[var(--ei-text-secondary)]"
        >
          {divider}
        </motion.p>
      )}

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <motion.div variants={driftUp} className="ei-card ei-card-soft p-6 md:p-8">
          <span className="ei-type-label block text-[var(--ei-text-tertiary)]">Before</span>
          <ul className="mt-6 space-y-3">
            {before.map((item) => (
              <li key={item} className="ei-type-body text-[var(--ei-text-secondary)]">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={driftUp} className="ei-card ei-card-soft p-6 md:p-8">
          <span className="ei-type-label block text-[var(--ei-text-tertiary)]">After</span>
          <ul className="mt-6 space-y-3">
            {after.map((item) => (
              <li key={item} className="ei-type-body text-[var(--ei-text-secondary)]">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
