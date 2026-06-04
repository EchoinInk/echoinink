import { motion } from 'framer-motion';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

interface EditorialImageHeroProps {
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

export function EditorialImageHero({
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
}: EditorialImageHeroProps) {
  const titleParts = italicWord
    ? title.split(new RegExp(`(${italicWord})`, 'i'))
    : [title];

  const isLeft = align === 'left';

  return (
    <motion.section
      variants={staggerContainer(STAGGER.cinematic, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.loose}
      className="
        relative flex min-h-[48vh] items-start overflow-hidden
        bg-[var(--ei-void)]
        pt-16 sm:pt-20 md:min-h-[78vh] md:pt-20 lg:min-h-[82vh]
      "
      aria-labelledby="editorial-hero-heading"
    >
      <picture className="absolute inset-0 z-0 block" aria-hidden="true">
        <source media="(min-width: 768px)" srcSet={image} />
        <img
          src={mobileImage}
          alt=""
          className="
            h-full w-full object-cover object-center saturate-[0.84]
            md:object-[72%_50%]
          "
          fetchPriority="high"
        />
      </picture>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(6, 8, 18, 0.15) 0%, rgba(6, 8, 18, 0.45) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: isLeft
            ? 'linear-gradient(90deg, transparent 0%, transparent 44%, rgb(5, 3, 11 / 0.16) 100%)'
            : 'linear-gradient(90deg, rgb(5, 3, 11 / 0.16) 0%, transparent 56%, transparent 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: isLeft
            ? 'radial-gradient(ellipse 54% 62% at 20% 48%, rgb(5, 3, 11 / 0.54) 0%, rgb(5, 3, 11 / 0.34) 42%, transparent 72%), linear-gradient(90deg, rgb(5, 3, 11 / 0.32) 0%, transparent 54%)'
            : 'radial-gradient(ellipse 54% 62% at 80% 48%, rgb(5, 3, 11 / 0.54) 0%, rgb(5, 3, 11 / 0.34) 42%, transparent 72%), linear-gradient(270deg, rgb(5, 3, 11 / 0.32) 0%, transparent 54%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-[20vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgb(5, 3, 11 / 0.34) 70%, var(--ei-void) 100%)',
        }}
      />

     <Container
  size="xl"
  className="
    relative z-10 w-full
    pt-[clamp(2.5rem,7vh,4.5rem)]
    md:pt-[clamp(3.5rem,9vh,5.5rem)]
    lg:pt-[clamp(4rem,10vh,6rem)]
  "
>
        <div className={`max-w-[680px] ${isLeft ? '' : 'mx-auto text-center'}`}>
          <motion.div
            variants={driftUp}
            className={`
              max-w-[680px]
              ${isLeft ? 'text-left md:pl-10 lg:pl-14' : 'text-center'}
            `}
          >
            <div
              className={`
                mb-3 flex items-center gap-4 md:mb-5
                ${isLeft ? '' : 'justify-center'}
              `}
            >
              <span className="font-structural text-[11px] uppercase tracking-[0.2em] text-white/60">
                {eyebrow}
              </span>

              <div
                className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(73, 133, 253/0.45)]"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(11, 13, 42 / 0.15) 0%, rgb(73, 133, 253 / 0.95) 100%)',
                }}
                aria-hidden="true"
              />
            </div>

            <h1
              id="editorial-hero-heading"
              className="
               font-editorial
    max-w-[29ch]
    whitespace-pre-line
    text-[2.45rem]
    leading-[1.06]
    tracking-tight
    text-white/[0.94]
    md:text-[3.45rem]
    md:leading-[1.04]
    lg:text-[4.15rem]
              "
              style={{
                textShadow: '0 0 48px rgb(var(--ei-violet-rgb) / 0.04)',
              }}
            >
              {italicWord
                ? titleParts.map((part, i) =>
                    part.toLowerCase() === italicWord.toLowerCase() ? (
                      <em
                        key={i}
                        className="font-normal italic text-[rgb(227, 216, 253/0.9)]"
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
              className="
                mt-5 max-w-[42ch] font-structural
                text-[14px] leading-[1.65] text-white/84
                md:mt-6 md:max-w-[46ch] md:text-[15px]
              "
              style={{ letterSpacing: '0.005em' }}
            >
              {description}
            </p>

            {ctaLabel && ctaHref && (
              <motion.div
                variants={fadeSoft}
                className={`mt-8 md:mt-10 ${isLeft ? '' : 'flex justify-center'}`}
              >
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