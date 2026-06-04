import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
  EASE_LUXURY,
  DURATION,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// PRODUCT HERO — Editorial hero for a product, system, or offer
// Full-bleed atmospheric with cinematic text reveal
// Accepts headline, subline, description, CTA, and color accent
// ═══════════════════════════════════════════════════════════════

interface ProductHeroProps {
  eyebrow?: string;
  headline: string;
  subline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: string;
}

export function ProductHero({
  eyebrow,
  headline,
  subline,
  description,
  ctaLabel = 'Explore',
  ctaHref = '/contact',
  accentColor = 'rgb(var(--ei-luxe-violet-rgb) / 0.07)',
}: ProductHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-start overflow-hidden py-20 md:py-32">
      {/* Atmospheric depth field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 75% 60% at 25% 45%, ${accentColor} 0%, transparent 60%)`,
          filter: 'blur(90px)',
        }}
      />

      {/* Luminance veil */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT.loose}
        transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.3 }}
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgb(var(--ei-ice-white-rgb) / 0.008) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-midnight-rgb) / 0.6) 60%, var(--ei-void) 100%)',
        }}
      />

      {/* Content */}
      <div className="ei-container relative z-20 w-full">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="max-w-[680px]"
        >
          {eyebrow && (
            <motion.span
              variants={driftUp}
              className="font-structural text-[10px] tracking-[0.28em] uppercase text-white/45 block mb-4"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h2
            variants={blurEmergence}
            className="font-editorial text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] text-white/90 leading-[1.08] tracking-tight mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            {headline}
          </motion.h2>

          {subline && (
            <motion.p
              variants={driftUp}
              className="font-structural text-[14px] md:text-[15px] text-white/72 leading-[1.65] max-w-[52ch] mb-3"
            >
              {subline}
            </motion.p>
          )}

          {description && (
            <motion.p
              variants={driftUp}
              className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.75] max-w-[44ch] mb-8"
            >
              {description}
            </motion.p>
          )}

          {ctaLabel && (
            <motion.div variants={driftUp}>
              <Button to={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
