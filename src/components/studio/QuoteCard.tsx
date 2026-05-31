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
      className="group relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-[var(--radius-card)] border px-9 py-14 text-center transition-[border-color,box-shadow] duration-700 md:min-h-[380px] md:px-11 md:py-16"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 42%, rgb(var(--ei-deep-indigo-rgb) / 0.28) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.14) 55%, rgb(var(--ei-void-black-rgb) / 0.32) 100%)',
        borderColor: 'rgb(var(--ei-luxe-violet-rgb) / 0.14)',
        boxShadow: 'inset 0 0 72px rgb(var(--ei-luxe-violet-rgb) / 0.04)',
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              borderColor: 'rgb(var(--ei-luxe-violet-rgb) / 0.22)',
            }
      }
    >
      <p
        className="max-w-[24ch] whitespace-pre-line font-editorial text-[clamp(1.25rem,2vw,1.6rem)] italic leading-[1.58] tracking-tight"
        style={{ color: 'var(--ei-text-soft)' }}
      >
        &ldquo;{lines.join('\n')}&rdquo;
      </p>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span
          className="block h-1.5 w-1.5 rounded-full"
          style={{
            background: 'var(--ei-ice-white)',
            boxShadow: '0 0 10px rgb(var(--ei-luxe-violet-rgb) / 0.45)',
          }}
        />
      </div>
    </motion.blockquote>
  );
}
