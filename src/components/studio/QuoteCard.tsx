import { motion, useReducedMotion } from 'framer-motion';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface QuoteCardProps {
  lines: string[];
}

export function QuoteCard({ lines }: QuoteCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.blockquote
      variants={fadeSoft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className="group relative flex min-h-[300px] flex-col items-center justify-center rounded-[var(--radius-card)] border px-8 py-12 text-center transition-[border-color,box-shadow] duration-700 md:min-h-[340px] md:px-10 md:py-14"
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'rgb(var(--ei-ice-white-rgb) / 0.08)',
        boxShadow: 'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.03)',
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              borderColor: 'rgb(var(--ei-ice-white-rgb) / 0.1)',
              boxShadow:
                'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.04), 0 0 32px rgb(var(--ei-luxe-violet-rgb) / 0.04)',
            }
      }
    >
      <p
        className="max-w-[26ch] whitespace-pre-line font-editorial text-[clamp(1.2rem,2vw,1.55rem)] leading-[1.58] tracking-tight"
        style={{ color: 'var(--ei-text-soft)' }}
      >
        &ldquo;{lines.join('\n\n')}&rdquo;
      </p>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span className="relative block h-1.5 w-1.5">
          <span
            className="absolute inset-0 rounded-full transition-shadow duration-700 group-hover:shadow-[0_0_10px_rgb(var(--ei-luxe-violet-rgb)/0.4)]"
            style={{ background: 'var(--ei-luxe-violet)' }}
          />
        </span>
      </div>
    </motion.blockquote>
  );
}
