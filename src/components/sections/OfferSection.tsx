import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/PageSectionHeading';
import {
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface OfferSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  spacing?: 'standard' | 'intimate' | 'pause';
  centered?: boolean;
  className?: string;
}

const spacingClass = {
  standard: 'ei-section-standard',
  intimate: 'ei-section-intimate',
  pause: 'ei-section-pause',
};

export function OfferSection({
  id,
  eyebrow,
  title,
  description,
  children,
  spacing = 'standard',
  centered = false,
  className = '',
}: OfferSectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className={`relative overflow-hidden ${spacingClass[spacing]} ${className}`.trim()}
    >
      <Container size="xl" className="relative z-10">
        <div className={`mx-auto max-w-[1180px] ${centered ? 'text-center' : ''}`}>
          {(eyebrow || title || description) && (
            <motion.div variants={fadeSoft} className={centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
              <SectionHeading
                eyebrow={eyebrow}
                title={title ?? ''}
                description={description}
                centered={centered}
              />
            </motion.div>
          )}
          <div className={eyebrow || title || description ? 'mt-10 md:mt-14' : ''}>
            {children}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
