import { motion } from 'framer-motion';
import { fadeSoft, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

interface UseCasesListProps {
  items: string[];
}

export function UseCasesList({ items }: UseCasesListProps) {
  return (
    <motion.ul
      variants={staggerContainer(STAGGER.tight, 0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className="grid gap-3 sm:grid-cols-2 lg:max-w-4xl"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={fadeSoft}
          className="ei-type-body-large border-l border-[var(--ei-card-border)] pl-4 text-[var(--ei-text-secondary)]"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
