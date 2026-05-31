import { motion } from 'framer-motion';
import { NumberedSectionLabel } from '@/components/editorial/NumberedSectionLabel';
import { PhilosophyCard } from '@/components/studio/PhilosophyCard';
import { philosophyItems } from '@/data/studioContent';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export function PhilosophyGrid() {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="py-[clamp(5rem,10vw,7.5rem)]"
      aria-labelledby="philosophy-heading"
    >
      <motion.div variants={driftUp}>
        <NumberedSectionLabel number="02" label="Philosophy" />
      </motion.div>

      <motion.h2 id="philosophy-heading" variants={driftUp} className="sr-only">
        Philosophy
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {philosophyItems.map((item, index) => (
          <PhilosophyCard key={item.title} {...item} index={index} variant="philosophy" />
        ))}
      </div>
    </motion.section>
  );
}
