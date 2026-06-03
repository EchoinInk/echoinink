import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { fadeSoft, driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

interface OfferClosingCTAProps {
  atmosphere?: string;
  heading: string;
  subline?: string;
  cta: { label: string; href: string };
}

export function OfferClosingCTA({
  atmosphere,
  heading,
  subline,
  cta,
}: OfferClosingCTAProps) {
  return (
    <motion.section
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="relative ei-section-closing overflow-hidden"
    >
      <Container size="xl" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {atmosphere && (
            <motion.p variants={fadeSoft} className="ei-type-label mb-6 text-white/55">
              {atmosphere}
            </motion.p>
          )}
          <motion.h2
            variants={driftUp}
            className="font-editorial text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.12] text-[var(--ei-text-primary)]"
          >
            {heading}
          </motion.h2>
          {subline && (
            <motion.p
              variants={fadeSoft}
              className="mx-auto mt-6 max-w-[42ch] ei-type-body-large text-[var(--ei-text-secondary)]"
            >
              {subline}
            </motion.p>
          )}
          <motion.div variants={fadeSoft} className="mt-10 flex justify-center">
            <Button to={cta.href} variant="primary">
              {cta.label}
            </Button>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
