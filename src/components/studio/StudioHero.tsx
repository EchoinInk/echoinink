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
            'radial-gradient(ellipse 42% 38% at 78% 44%, rgb(var(--ei-luxe-violet-rgb) / 0.05) 0%, transparent 68%)',
        }}
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="grid items-center gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14 lg:gap-16"
        >
          <div className="max-w-[520px]">
            <motion.div variants={driftUp} className="mb-6 md:mb-8">
              <EyebrowLabel>{eyebrow}</EyebrowLabel>
            </motion.div>

            <motion.h1
              id="studio-hero-heading"
              variants={blurEmergence}
              className="font-editorial text-[clamp(2.35rem,4.2vw,3.75rem)] leading-[1.06] tracking-tight"
              style={{
                color: 'var(--ei-text-primary)',
                textShadow: '0 0 90px rgb(var(--ei-luxe-violet-rgb) / 0.06)',
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
              className="mt-6 max-w-[36ch] font-structural text-[15px] leading-[1.72] md:text-[16px]"
              style={{ color: 'var(--ei-text-secondary)' }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div variants={blurEmergence} className="relative w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] md:aspect-[5/4] lg:aspect-[16/11]">
              <picture className="absolute inset-0 block">
                <source media="(min-width: 768px)" srcSet={image} />
                <img
                  src={mobileImage}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-[58%_50%]"
                />
              </picture>

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(5, 7, 13, 0.9) 0%, rgba(5, 7, 13, 0.2) 55%, rgba(5, 7, 13, 0.05) 100%)',
                }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 65% at 72% 48%, transparent 35%, rgb(var(--ei-void-black-rgb) / 0.45) 100%)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
