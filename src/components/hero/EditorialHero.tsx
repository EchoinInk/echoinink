import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface EditorialHeroProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'studio';
}

export function EditorialHero({
  eyebrow,
  title,
  italicWord,
  description,
  ctaLabel,
  ctaHref,
  image,
  mobileImage,
  imageAlt,
  align = 'left',
  variant = 'default',
}: EditorialHeroProps) {
  const titleParts = italicWord
    ? title.split(new RegExp(`(${italicWord})`, 'i'))
    : [title];

  const isLeft = align === 'left';
  const isStudio = variant === 'studio';

  return (
    <motion.section
      variants={staggerContainer(STAGGER.cinematic, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className={`
        relative flex items-center overflow-hidden bg-[var(--ei-void-black)]
        pt-16 sm:pt-20 md:pt-20
        ${
          isStudio
  ? 'min-h-[620px] md:min-h-[76vh] lg:min-h-[820px]'
  : 'min-h-[52vh] md:min-h-[78vh] lg:min-h-[82vh]'
        }
      `}
      aria-labelledby="editorial-hero-heading"
    >
      <picture className="absolute inset-0 z-0 block" aria-hidden="true">
        <source media="(min-width: 768px)" srcSet={image} />
        <img
          src={mobileImage}
          alt=""
          className={`
            h-full w-full object-cover
            ${
              isStudio
                ? 'object-[68%_35%] opacity-[0.86] saturate-[0.86] brightness-[0.96] contrast-[1]'
                : 'object-center saturate-[0.84] md:object-[72%_50%]'
            }
          `}
          fetchPriority="high"
        />
      </picture>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: isStudio
            ? `
              linear-gradient(
                90deg,
                rgb(var(--ei-void-black-rgb) / 0.78) 0%,
                rgb(var(--ei-void-black-rgb) / 0.54) 42%,
                rgb(var(--ei-void-black-rgb) / 0.18) 100%
              ),
              linear-gradient(
                180deg,
                rgb(var(--ei-void-black-rgb) / 0.34) 0%,
                rgb(var(--ei-void-black-rgb) / 0.08) 42%,
                rgb(var(--ei-void-black-rgb) / 0.82) 100%
              )
            `
            : 'linear-gradient(180deg, rgba(6, 8, 18, 0.15) 0%, rgba(6, 8, 18, 0.45) 100%)',
        }}
      />

      {!isStudio && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: isLeft
                ? 'linear-gradient(90deg, transparent 0%, transparent 44%, rgb(var(--ei-void-black-rgb) / 0.16) 100%)'
                : 'linear-gradient(90deg, rgb(var(--ei-void-black-rgb) / 0.16) 0%, transparent 56%, transparent 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background: isLeft
                ? 'radial-gradient(ellipse 54% 62% at 20% 48%, rgb(var(--ei-void-black-rgb) / 0.54) 0%, rgb(var(--ei-void-black-rgb) / 0.34) 42%, transparent 72%), linear-gradient(90deg, rgb(var(--ei-void-black-rgb) / 0.32) 0%, transparent 54%)'
                : 'radial-gradient(ellipse 54% 62% at 80% 48%, rgb(var(--ei-void-black-rgb) / 0.54) 0%, rgb(var(--ei-void-black-rgb) / 0.34) 42%, transparent 72%), linear-gradient(270deg, rgb(var(--ei-void-black-rgb) / 0.32) 0%, transparent 54%)',
            }}
          />
        </>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-[20vh]"
        style={{
          background: isStudio
            ? 'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-void-black-rgb) / 0.46) 58%, var(--ei-void-black) 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-void-black-rgb) / 0.34) 70%, var(--ei-void-black) 100%)',
        }}
      />

      <Container size="xl" className="relative z-10">
        <div className={`max-w-[680px] ${isLeft ? '' : 'mx-auto text-center'}`}>
          <motion.div
            variants={driftUp}
            className={`
              max-w-[680px]
              ${isLeft ? 'text-left md:pl-10 lg:pl-14' : 'text-center'}
              ${isStudio ? 'md:-translate-y-[1vh]' : 'md:-translate-y-[2vh]'}
            `}
          >
            <div
              className={`mb-3 flex items-center gap-4 md:mb-5 ${
                isLeft ? '' : 'justify-center'
              }`}
            >
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
            </div>

            <h1
              id="editorial-hero-heading"
              className="
                max-w-[680px] pt-8 font-editorial
                text-[2.25rem] leading-[1.06] tracking-tight
                max-md:leading-[1.12]
                md:pt-12 md:text-[3.1rem]
                lg:text-[3.7rem]
              "
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
                        style={{ color: 'var(--ei-text-soft)' }}
                      >
                        {part}
                      </em>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )
                : title}
            </h1>

            <p
              className="mt-5 max-w-[42ch] font-structural text-[14px] leading-[1.65] md:mt-6 md:max-w-[46ch] md:text-[15px]"
              style={{
                color: 'var(--ei-text-secondary)',
                letterSpacing: '0.005em',
              }}
            >
              {description}
            </p>

            {ctaLabel && ctaHref && (
              <motion.div variants={fadeSoft} className="mt-8 md:mt-10">
                <Button to={ctaHref} variant="primary" className="self-start">
                  {ctaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>

      <span className="sr-only">{imageAlt}</span>
    </motion.section>
  );
}