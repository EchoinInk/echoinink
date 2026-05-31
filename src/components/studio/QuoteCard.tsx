import { motion, useReducedMotion } from 'framer-motion';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface QuoteCardProps {
  quote: string;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.blockquote
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className="group relative flex min-h-[280px] flex-col items-center justify-center rounded-[var(--radius-card)] border px-8 py-12 text-center backdrop-blur-md transition-[border-color,box-shadow] duration-700 md:min-h-[320px] md:px-10 md:py-14"
      style={{
        background: 'rgb(var(--ei-deep-indigo-rgb) / 0.22)',
        borderColor: 'var(--border-soft)',
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              borderColor: 'var(--ei-card-border-hover)',
              boxShadow: '0 0 40px rgb(var(--ei-luxe-violet-rgb) / 0.08)',
            }
      }
    >
      <p
        className="max-w-[24ch] font-editorial text-[clamp(1.25rem,2.2vw,1.65rem)] leading-[1.55] tracking-tight"
        style={{ color: 'var(--ei-text-soft)' }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span className="relative block h-2 w-2">
          <span
            className="absolute inset-0 rounded-full transition-shadow duration-700 group-hover:shadow-[0_0_16px_rgb(var(--ei-luxe-violet-rgb)/0.55)]"
            style={{ background: 'var(--ei-luxe-violet)' }}
          />
          <span
            className="absolute inset-[-6px] rounded-full blur-md"
            style={{ background: 'rgb(var(--ei-luxe-violet-rgb) / 0.35)' }}
          />
        </span>
      </div>
    </motion.blockquote>
  );
}
