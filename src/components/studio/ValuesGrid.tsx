import { motion } from 'framer-motion';
import { NumberedSectionLabel } from '@/components/editorial/NumberedSectionLabel';
import { PhilosophyCard } from '@/components/studio/PhilosophyCard';
import { valueItems } from '@/data/studioContent';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export function ValuesGrid() {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="py-[clamp(5rem,12vw,7.5rem)]"
      aria-labelledby="values-heading"
    >
      <motion.div variants={driftUp}>
        <NumberedSectionLabel number="03" label="Values" />
      </motion.div>

      <motion.h2 id="values-heading" variants={driftUp} className="sr-only">
        Values
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6">
        {valueItems.map((item, index) => (
          <PhilosophyCard key={item.title} {...item} index={index} variant="value" />
        ))}
      </div>
    </motion.section>
  );
}
