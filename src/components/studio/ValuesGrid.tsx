import { motion } from 'framer-motion';

import { NumberedSectionLabel } from '@/components/editorial/NumberedSectionLabel';
import { PhilosophyCard } from '@/components/cards/PhilosophyCard';
import { valueItems } from '@/data/studioContent';
import {
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface ValuesGridProps {
  showHeader?: boolean;
  className?: string;
}

export function ValuesGrid({ showHeader = true, className = '' }: ValuesGridProps) {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className={`
        mx-auto max-w-[1180px]
        ${showHeader ? 'py-[clamp(5rem,10vw,7.5rem)]' : ''}
        ${className}
      `}
      aria-labelledby={showHeader ? 'values-heading' : undefined}
    >
      {showHeader && (
        <>
          <motion.div variants={driftUp}>
            <NumberedSectionLabel number="03" label="Values" />
          </motion.div>

          <motion.h2 id="values-heading" variants={driftUp} className="sr-only">
            Values
          </motion.h2>
        </>
      )}

      <div
        className={`
          grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-5
          ${showHeader ? 'mt-10' : ''}
        `}
      >
        {valueItems.map((item, index) => (
          <PhilosophyCard
            key={item.title}
            {...item}
            index={index}
            variant="value"
          />
        ))}
      </div>
    </motion.section>
  );
}