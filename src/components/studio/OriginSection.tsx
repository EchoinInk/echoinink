import { motion } from 'framer-motion';
import { NumberedSectionLabel } from '@/components/editorial/NumberedSectionLabel';
import { QuoteCard } from '@/components/studio/QuoteCard';
import { originCopy, studioQuoteLines } from '@/data/studioContent';
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

export function OriginSection() {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="pt-[clamp(2.5rem,6vw,4rem)] pb-[clamp(4.5rem,9vw,6.5rem)]"
      aria-labelledby="origin-heading"
    >
      <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
        <div>
          <motion.div variants={driftUp}>
            <NumberedSectionLabel number={originCopy.number} label={originCopy.label} />
          </motion.div>

          <motion.h2
            id="origin-heading"
            variants={driftUp}
            className="mt-6 max-w-[24ch] whitespace-pre-line font-editorial text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-tight"
            style={{ color: 'var(--ei-text-primary)' }}
          >
            {originCopy.heading}
          </motion.h2>

          <motion.div variants={fadeSoft} className="mt-8 space-y-6">
            {originCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[38ch] font-structural text-[15px] leading-[1.82] md:text-[16px]"
                style={{ color: 'rgb(var(--ei-ice-white-rgb) / 0.70)' }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <QuoteCard lines={studioQuoteLines} />
      </div>
    </motion.section>
  );
}
