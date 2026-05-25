import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lumoinkdrift from '@/assets/ei-lumofeatured-bg.png';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  orchestratedReveal,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// LUMO CASE STUDY TEASER — Cinematic editorial moment
// Breaks from standard card patterns — more magazine, less component
// ═══════════════════════════════════════════════════════════════

export function LumoCaseStudyTeaser() {
  return (
    <Section spacing="sm" className="ei-section-intimate overflow-hidden relative">
      {/* Subtle atmospheric depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 25% at 20% 30%, rgba(168,85,247,0.025) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
        >
          {/* ═══════════════════════════════════════════════════════════════
              EDITORIAL COMPOSITION
              Asymmetric, magazine-style layout
              Reduced rounded corners, more sophisticated proportions
              ═══════════════════════════════════════════════════════════════ */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background image with editorial treatment */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src={lumoinkdrift}
                alt="Lumo Ink Drift"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9', minHeight: '400px' }}
              />

              {/* Sophisticated overlay — asymmetric gradient for editorial feel */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(10,12,24,0.92) 0%, rgba(10,12,24,0.75) 35%, rgba(10,12,24,0.4) 60%, transparent 100%)
                  `,
                }}
              />

              {/* Ultra-subtle grain texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Content — repositioned upward for better balance */}
              <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col">
                {/* Top — Editorial label */}
                <motion.div
                  variants={orchestratedReveal(0, 4)}
                  className="flex items-center gap-3 mb-auto"
                >
                  <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-violet-300/50">
                    Featured Case
                  </span>
                  <div className="h-px w-6 bg-violet-300/20" />
                </motion.div>

                {/* Main content — positioned higher */}
                <div className="max-w-lg mt-8 md:mt-12">
                  {/* Project title — large, editorial */}
                  <motion.h2
                    variants={orchestratedReveal(1, 4)}
                    className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white/95 mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    LUMO
                  </motion.h2>

                  {/* Tagline — human, emotional */}
                  <motion.p
                    variants={orchestratedReveal(2, 4)}
                    className="font-editorial text-lg md:text-xl text-white/70 mb-4 leading-[1.35]"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    A world built for overwhelmed humans.
                  </motion.p>

                  {/* Description — restrained, atmospheric */}
                  <motion.p
                    variants={orchestratedReveal(3, 4)}
                    className="font-structural text-[12px] md:text-[13px] text-white/40 leading-[1.7] max-w-[42ch] mb-6"
                  >
                    An emotionally intelligent app shaped by an identity system built to calm cognitive noise through atmosphere, rhythm, and restraint.
                  </motion.p>

                  {/* CTA — subtle, invitation-style */}
                  <motion.div variants={blurEmergence}>
                    <Link
                      to="/work/lumo"
                      className="group inline-flex items-center gap-2 font-structural text-[9px] tracking-[0.16em] uppercase text-violet-300/60 hover:text-violet-300 transition-colors duration-500"
                    >
                      <span>View Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}