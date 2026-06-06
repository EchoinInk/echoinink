import { motion } from 'framer-motion';
import { fadeSoft, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

interface UseCasesListProps {
  items: string[];
  /** 'rail' (default) keeps the quiet border-left list. 'marked' adds + markers and grouped rows. */
  variant?: 'rail' | 'marked';
}

export function UseCasesList({ items, variant = 'rail' }: UseCasesListProps) {
  if (variant === 'marked') {
    return (
      <motion.ul
        variants={staggerContainer(STAGGER.tight, 0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.normal}
        className="grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:max-w-4xl"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={fadeSoft}
            className="flex items-start gap-3 border-b border-[var(--ei-card-border)] py-3.5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
          >
            <span
              aria-hidden="true"
              className="mt-[0.15rem] shrink-0 font-structural text-[0.95rem] leading-none text-[rgb(var(--ei-halo-blue-rgb)/0.7)]"
            >
              +
            </span>
            <span className="ei-type-body text-[var(--ei-text-secondary)]">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

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
