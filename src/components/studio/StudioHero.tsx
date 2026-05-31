import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface StudioHeroProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
}

export function StudioHero({
  eyebrow,
  title,
  italicWord,
  description,
  image,
  mobileImage,
  imageAlt,
}: StudioHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const titleParts = italicWord
    ? title.split(new RegExp(`(${italicWord})`, 'i'))
    : [title];

  return (
    <section
      className="relative flex min-h-[80vh] items-center overflow-hidden pt-20 md:pt-24"
      aria-labelledby="studio-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 72% 42%, rgb(var(--ei-luxe-violet-rgb) / 0.06) 0%, transparent 68%), radial-gradient(ellipse 40% 35% at 20% 20%, rgb(var(--ei-aurora-blue-rgb) / 0.04) 0%, transparent 70%)',
        }}
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20"
        >
          <div className="max-w-[640px]">
            <motion.div variants={driftUp} className="mb-5 flex items-center gap-4">
              <span
                className="font-structural text-[11px] uppercase tracking-[0.2em]"
                style={{ color: 'var(--ei-text-tertiary)' }}
              >
                {eyebrow}
              </span>
              <div
                className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-aurora-blue-rgb)/0.45)]"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(var(--ei-deep-indigo-rgb) / 0.15) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.95) 100%)',
                }}
                aria-hidden="true"
              />
            </motion.div>

            <motion.h1
              id="studio-hero-heading"
              variants={blurEmergence}
              className="font-editorial text-[clamp(2.35rem,4.5vw,3.85rem)] leading-[1.06] tracking-tight"
              style={{
                color: 'var(--ei-text-primary)',
                textShadow: '0 0 90px rgb(var(--ei-luxe-violet-rgb) / 0.08)',
              }}
            >
              {italicWord
                ? titleParts.map((part, i) =>
                    part.toLowerCase() === italicWord.toLowerCase() ? (
                      <em
                        key={i}
                        className="font-normal italic"
                        style={{
                          color: 'transparent',
                          backgroundImage:
                            'linear-gradient(135deg, var(--ei-soft-lavender) 0%, var(--ei-luxe-violet) 55%, var(--ei-orchid-pink) 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                        }}
                      >
                        {part}
                      </em>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )
                : title}
            </motion.h1>

            <motion.p
              variants={driftUp}
              className="mt-6 max-w-[38ch] font-structural text-[15px] leading-[1.7] md:text-[16px]"
              style={{ color: 'var(--ei-text-secondary)' }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div variants={blurEmergence} className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[12%] rounded-full opacity-70"
              style={{
                background:
                  'radial-gradient(ellipse 58% 58% at 50% 48%, rgb(var(--ei-luxe-violet-rgb) / 0.14) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.06) 42%, transparent 72%)',
                filter: 'blur(40px)',
              }}
            />

            <picture className="relative block">
              <source media="(min-width: 768px)" srcSet={image} />
              <motion.img
                src={mobileImage}
                alt={imageAlt}
                className="relative z-[1] mx-auto w-full max-w-[520px] object-contain lg:max-w-none"
                style={{
                  maskImage:
                    'radial-gradient(ellipse 72% 72% at 50% 48%, black 42%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 72% 72% at 50% 48%, black 42%, transparent 100%)',
                }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -6, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 14, ease: 'easeInOut', repeat: Infinity }
                }
              />
            </picture>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
