import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SelectedWorks } from '@/components/SelectedWorks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function WorksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative bg-[#0F1220] min-h-screen"
    >
      <Helmet>
        <title>Selected Works — Echo in Ink</title>
        <meta name="description" content="A curated record of visual and narrative experiments — atmospheres built, identities discovered, and worlds made luminous." />
      </Helmet>

      {/* ── Page header ──────────────────────────────────── */}
      <section aria-labelledby="works-heading" className="relative ei-section overflow-hidden">
        {/* Faint violet ambient top right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '0%',
            right: '-6%',
            width: 'clamp(320px, 42vw, 640px)',
            height: 'clamp(280px, 36vw, 560px)',
            background:
              'radial-gradient(ellipse 66% 62% at 68% 38%, rgba(168,85,247,0.06) 0%, transparent 72%)',
            filter: 'blur(70px)',
          }}
        />

        <div
          className="ei-container"
          style={{ paddingTop: 'clamp(7rem, 18vh, 13rem)', paddingBottom: '4rem' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-10 md:mb-14"
          >
            The Archive
          </motion.span>

          <motion.h1
            id="works-heading"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.35 }}
            className="font-editorial text-[2.4rem] md:text-[3.4rem] lg:text-[4.4rem] text-[#E8EAF6]/88 leading-[1.12] mb-7 md:mb-9"
            style={{ letterSpacing: '-0.016em', maxWidth: '28rem' }}
          >
            Selected Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.52 }}
            className="font-structural text-[13px] md:text-[15px] text-white/35 leading-[1.95] max-w-[52ch]"
          >
            A curated record of visual and narrative experiments —
            atmospheres built, identities discovered, and worlds made luminous.
          </motion.p>
        </div>
      </section>

      {/* ── Works gallery ────────────────────────────────── */}
      <SelectedWorks hideViewAll />

      {/* ── Page footer strip ────────────────────────────── */}
      <div className="relative ei-section py-12 md:py-16">
        <div className="ei-container">
          <div
            className="w-full h-px mb-10 md:mb-14"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 75%, transparent)',
            }}
          />
          <div className="flex items-center justify-between">
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
              INK MEETS LIGHT.
            </span>
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
              EMOTIONS BECOME DESIGN.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
