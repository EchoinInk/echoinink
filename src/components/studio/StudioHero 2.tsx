import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { EyebrowLabel } from '@/components/editorial/EyebrowLabel';
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
  const titleParts = italicWord
    ? title.split(new RegExp(`(${italicWord.replace('.', '\\.')})`, 'i'))
    : [title];

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden pt-20 md:min-h-[92vh] md:pt-24"
      aria-labelledby="studio-hero-heading"
    >
      {/* Atmospheric depth — page-level haze */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 72% 24%, rgb(var(--ei-luxe-violet-rgb) / 0.20) 0%, transparent 36%), radial-gradient(circle at 80% 38%, rgb(var(--ei-aurora-blue-rgb) / 0.16) 0%, transparent 32%), radial-gradient(ellipse 55% 45% at 18% 62%, rgb(var(--ei-deep-indigo-rgb) / 0.12) 0%, transparent 58%)',
        }}
      />

      {/* Hero vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 42%, rgb(var(--ei-void-black-rgb) / 0.55) 100%)',
        }}
      />

      {/* Desktop — environmental image layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[62vw] md:block lg:w-[58vw]"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-[58%_42%]"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--ei-void-black) 0%, transparent 42%, rgba(5, 7, 13, 0.25) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 70% at 68% 48%, transparent 32%, rgb(var(--ei-void-black-rgb) / 0.38) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 58%, rgb(var(--ei-void-black-rgb) / 0.45) 88%, var(--ei-void-black) 100%)',
          }}
        />
      </div>

      {/* Bottom dissolve into page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-32 md:h-40"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, var(--ei-void-black) 100%)',
        }}
      />

      <Container size="xl" className="relative z-10 flex min-h-[calc(88vh-5rem)] items-center md:min-h-[calc(92vh-6rem)]">
        <motion.div
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="w-full max-w-[1180px]"
        >
          <div className="max-w-[640px] md:max-w-[52%] lg:max-w-[46%]">
            <motion.div variants={driftUp} className="mb-7 md:mb-9">
              <EyebrowLabel>{eyebrow}</EyebrowLabel>
            </motion.div>

            <motion.h1
              id="studio-hero-heading"
              variants={blurEmergence}
              className="font-editorial tracking-[-0.045em]"
              style={{
                fontSize: 'clamp(3.75rem, 7vw, 7rem)',
                lineHeight: 0.94,
                color: 'var(--ei-text-primary)',
                textShadow: '0 0 120px rgb(var(--ei-luxe-violet-rgb) / 0.10)',
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
                            'linear-gradient(135deg, rgb(var(--ei-soft-lavender-rgb) / 0.95) 0%, var(--ei-luxe-violet) 48%, var(--ei-orchid-pink) 100%)',
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
              className="mt-7 max-w-[36ch] font-structural text-[15px] leading-[1.68] md:mt-8 md:text-[17px]"
              style={{ color: 'rgb(var(--ei-ice-white-rgb) / 0.78)' }}
            >
              {description}
            </motion.p>
          </div>

          {/* Mobile — full-width atmospheric image */}
          <motion.div variants={blurEmergence} className="relative mt-12 w-full md:hidden">
            <img
              src={mobileImage}
              alt={imageAlt}
              className="h-[min(58vh,520px)] w-full object-cover object-[50%_42%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, var(--ei-void-black) 0%, transparent 28%), linear-gradient(to right, var(--ei-void-black) 0%, transparent 35%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgb(var(--ei-void-black-rgb) / 0.35) 100%)',
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
