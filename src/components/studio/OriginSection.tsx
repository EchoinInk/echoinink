import { motion } from 'framer-motion';
import { QuoteCard } from '@/components/studio/QuoteCard';
import { SectionLabel } from '@/components/studio/SectionLabel';
import { originCopy, studioQuote } from '@/data/studioContent';
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
      className="py-[clamp(4rem,10vw,7.5rem)]"
      aria-labelledby="origin-heading"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
        <div>
          <motion.div variants={driftUp}>
            <SectionLabel>{originCopy.label}</SectionLabel>
          </motion.div>

          <motion.h2
            id="origin-heading"
            variants={driftUp}
            className="mt-6 max-w-[22ch] font-editorial text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.18] tracking-tight"
            style={{ color: 'var(--ei-text-primary)' }}
          >
            {originCopy.heading}
          </motion.h2>

          <motion.div variants={fadeSoft} className="mt-8 space-y-6">
            {originCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[38ch] font-structural text-[15px] leading-[1.78] md:text-[16px]"
                style={{ color: 'var(--ei-text-secondary)' }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <QuoteCard quote={studioQuote} />
      </div>
    </motion.section>
  );
}
