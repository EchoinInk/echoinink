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
      className="group relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-[var(--radius-card)] border px-10 py-16 text-center transition-[border-color,box-shadow] duration-700 md:min-h-[420px] md:px-12 md:py-20"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 42%, rgb(var(--ei-deep-indigo-rgb) / 0.32) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.16) 55%, rgb(var(--ei-void-black-rgb) / 0.42) 100%)',
        borderColor: 'rgb(var(--ei-luxe-violet-rgb) / 0.18)',
        boxShadow:
          'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.04), inset 0 0 80px rgb(var(--ei-luxe-violet-rgb) / 0.06)',
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              borderColor: 'rgb(var(--ei-luxe-violet-rgb) / 0.26)',
              boxShadow:
                'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.05), inset 0 0 96px rgb(var(--ei-luxe-violet-rgb) / 0.08), 0 0 48px rgb(var(--ei-luxe-violet-rgb) / 0.05)',
            }
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 38%, rgb(var(--ei-luxe-violet-rgb) / 0.10) 0%, transparent 52%)',
        }}
      />

      <p
        className="relative z-[1] max-w-[24ch] whitespace-pre-line font-editorial text-[clamp(1.35rem,2.2vw,1.75rem)] italic leading-[1.62] tracking-tight"
        style={{ color: 'rgb(var(--ei-soft-lavender-rgb) / 0.88)' }}
      >
        &ldquo;{lines.join('\n')}&rdquo;
      </p>

      <div className="absolute bottom-10 left-1/2 z-[1] -translate-x-1/2" aria-hidden="true">
        <span className="relative block h-2 w-2">
          <span
            className="absolute inset-0 rounded-full transition-shadow duration-700 group-hover:shadow-[0_0_18px_rgb(var(--ei-luxe-violet-rgb)/0.65)]"
            style={{
              background: 'var(--ei-ice-white)',
              boxShadow: '0 0 12px rgb(var(--ei-luxe-violet-rgb) / 0.55)',
            }}
          />
          <span
            className="absolute inset-[-8px] rounded-full blur-md opacity-70"
            style={{ background: 'rgb(var(--ei-luxe-violet-rgb) / 0.35)' }}
          />
        </span>
      </div>
    </motion.blockquote>
  );
}
