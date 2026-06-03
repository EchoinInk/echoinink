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
      className="
  group relative mx-auto flex min-h-[260px] w-full max-w-[420px]
  flex-col items-center justify-center overflow-hidden
  rounded-[var(--radius-card)] border px-8 py-10 text-center
  transition-[border-color,box-shadow,transform] duration-700
  md:min-h-[300px] md:px-9 md:py-12
"
      style={{
        background:
          `
          radial-gradient(
            circle at 50% 68%,
            rgb(var(--ei-electric-cyan-rgb) / 0.14) 0%,
            rgb(var(--ei-aurora-blue-rgb) / 0.055) 22%,
            transparent 46%
          ),
          radial-gradient(
            ellipse 78% 66% at 50% 42%,
            rgb(var(--ei-deep-indigo-rgb) / 0.34) 0%,
            rgb(var(--ei-deep-indigo-rgb) / 0.16) 54%,
            rgb(var(--ei-void-black-rgb) / 0.42) 100%
          )
          `,
        borderColor: 'rgb(var(--ei-aurora-blue-rgb) / 0.18)',
        boxShadow:
          `
          inset 0 0 72px rgb(var(--ei-aurora-blue-rgb) / 0.055),
          0 0 42px rgb(var(--ei-aurora-blue-rgb) / 0.045)
          `,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              borderColor: 'rgb(var(--ei-electric-cyan-rgb) / 0.28)',
              boxShadow:
                `
                inset 0 0 82px rgb(var(--ei-aurora-blue-rgb) / 0.075),
                0 0 54px rgb(var(--ei-aurora-blue-rgb) / 0.07)
                `,
            }
      }
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border opacity-45"
        style={{
          borderColor: 'rgb(var(--ei-aurora-blue-rgb) / 0.09)',
          transform:
            'translate(-50%, -50%) rotate(-7deg)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[58%] h-[92px] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border opacity-35"
        style={{
          borderColor: 'rgb(var(--ei-aurora-blue-rgb) / 0.13)',
          transform:
            'translate(-50%, -50%) rotate(-9deg)',
        }}
        aria-hidden="true"
      />

      <p
        className="
          relative z-10 max-w-[24ch] whitespace-pre-line
          ei-quote italic leading-[1.62] tracking-tight
        "
        style={{
          color: 'rgb(var(--ei-electric-cyan-rgb) / 0.88)',
          textShadow: '0 0 18px rgb(var(--ei-electric-cyan-rgb) / 0.10)',
        }}
      >
        &ldquo;{lines.join('\n')}&rdquo;
      </p>

      <div
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <span
          className="block h-1.5 w-1.5 rounded-full"
          style={{
            background: 'var(--ei-luxe-violet)',
            boxShadow:
              `
              0 0 10px rgb(var(--ei-luxe-white-rgb) / 0.58),
              0 0 22px rgb(var(--ei-aurora-blue-rgb) / 0.52)
              `,
          }}
        />
      </div>
    </motion.blockquote>
  );
}