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
      className="relative min-h-[80vh] overflow-hidden pt-20 md:pt-24"
      aria-labelledby="studio-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 72% 24%, rgb(113, 7, 234 / 0.10) 0%, transparent 36%), radial-gradient(circle at 80% 38%, rgb(73, 133, 253 / 0.08) 0%, transparent 32%)',
        }}
      />

      <Container size="xl" className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[0.45fr_0.55fr] md:gap-14 lg:min-h-[calc(80vh-6rem)] lg:gap-16"
        >
          <div className="max-w-[540px]">
            <motion.div variants={driftUp} className="mb-6 md:mb-8">
              <EyebrowLabel>{eyebrow}</EyebrowLabel>
            </motion.div>

            <motion.h1
              id="studio-hero-heading"
              variants={blurEmergence}
              className="font-editorial tracking-[-0.03em]"
              style={{
                fontSize: 'clamp(3.5rem, 5vw, 5.8rem)',
                lineHeight: 1.02,
                color: 'var(--ei-text-primary)',
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
                            'linear-gradient(135deg, rgb(227, 216, 253 / 0.92) 0%, var(--ei-violet) 50%, var(--ei-echo-magenta) 100%)',
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
              className="ei-section-description mt-6 max-w-[36ch] md:mt-7"
            >
              {description}
            </motion.p>
          </div>

          <motion.div variants={blurEmergence} className="relative w-full">
            <div className="relative hidden min-h-[480px] overflow-hidden md:block lg:min-h-[540px]">
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-[52%_46%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to right, var(--ei-void) 0%, transparent 38%, rgba(5, 3, 11, 0.18) 100%)',
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 65% at 58% 48%, transparent 40%, rgba(5, 3, 11, 0.28) 100%)',
                }}
              />
            </div>

            <div className="relative min-h-[52vh] overflow-hidden md:hidden">
              <img
                src={mobileImage}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, var(--ei-void) 0%, transparent 32%), linear-gradient(to right, var(--ei-void) 0%, transparent 28%)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
