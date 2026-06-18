import { motion } from 'framer-motion';
import { EchoCard } from '@/components/ui/EchoCard';
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
        <motion.div variants={driftUp}>
          <EchoCard variant="feature" padding="none" className="p-6 md:p-8">
            <span className="ei-type-label block text-[var(--ei-text-tertiary)]">Before</span>
            <ul className="mt-6 space-y-3">
              {before.map((item) => (
                <li key={item} className="ei-type-body-small">
                  {item}
                </li>
              ))}
            </ul>
          </EchoCard>
        </motion.div>

        <motion.div variants={driftUp}>
          <EchoCard variant="feature" padding="none" className="p-6 md:p-8">
            <span className="ei-type-label block text-[var(--ei-text-tertiary)]">After</span>
            <ul className="mt-6 space-y-3">
              {after.map((item) => (
                <li key={item} className="ei-type-body-small">
                  {item}
                </li>
              ))}
            </ul>
          </EchoCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
