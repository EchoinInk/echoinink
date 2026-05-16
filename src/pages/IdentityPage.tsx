import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;

const included = [
  {
    title: 'Atmospheric Mood System',
    body: 'A curated visual atmosphere — colour ranges, light references, textural language, and emotional register mapped to the feeling you are building toward.',
  },
  {
    title: 'Typographic Direction',
    body: 'A foundational type system shaped around your voice — editorial, structural, and expressive — with specific direction for how type should feel, not just look.',
  },
  {
    title: 'Colour & Tone Language',
    body: 'A palette built on emotional resonance, not trend. The hues and tonal relationships that belong to your world, and how to use them with restraint.',
  },
  {
    title: 'Visual Reference World',
    body: 'A curated constellation of references — film stills, art, photography, texture, motion — that maps your aesthetic territory and gives collaborators a shared vocabulary.',
  },
  {
    title: 'Narrative Identity Statement',
    body: 'An authored sentence or short paragraph that captures the emotional core of your identity. Something you can return to when everything else feels uncertain.',
  },
] as const;

export function IdentityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative bg-[#0F1220] min-h-screen"
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Atmospheric violet/pink bloom — upper left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '0%',
            left: '-10%',
            width: 'clamp(500px, 65vw, 960px)',
            height: 'clamp(500px, 65vh, 800px)',
            background:
              'radial-gradient(ellipse 58% 62% at 28% 35%, rgba(232,121,249,0.11) 0%, rgba(168,85,247,0.07) 42%, transparent 72%)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Faint secondary right accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '30%',
            right: '-8%',
            width: 'clamp(280px, 36vw, 560px)',
            height: 'clamp(280px, 36vw, 560px)',
            background:
              'radial-gradient(ellipse 68% 68% at 68% 44%, rgba(99,102,241,0.06) 0%, transparent 72%)',
            filter: 'blur(90px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Bottom fade to page */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
          style={{
            height: '42%',
            background: 'linear-gradient(to bottom, transparent, #0F1220)',
          }}
        />

        {/* Hero content — bottom-aligned, below header */}
        <div
          className="relative z-10 ei-container w-full pb-20 md:pb-32"
          style={{ paddingTop: 'clamp(7rem, 18vh, 14rem)' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-10 md:mb-14"
          >
            Atmospheric Identity Kits
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.35 }}
            className="font-editorial text-[2.4rem] md:text-[3.6rem] lg:text-[4.8rem] text-[#E8EAF6]/90 leading-[1.1] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.018em', maxWidth: '22rem', lineHeight: 1.08 }}
          >
            Your world,<br />
            shaped through<br />
            atmosphere,<br />
            emotion, and light.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.58 }}
            className="font-structural text-[13px] md:text-[15px] text-white/38 leading-[1.95] max-w-[50ch]"
          >
            Curated identity systems for creators, founders, and brands seeking
            visual and narrative clarity that feels authentically theirs.
          </motion.p>
        </div>
      </section>

      {/* ── What it creates ──────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-36 overflow-hidden">
        <div className="ei-container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              What it creates
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
              className="font-editorial text-[1.65rem] md:text-[2.15rem] text-[#E8EAF6]/80 leading-[1.3] mb-12 md:mb-16"
              style={{ letterSpacing: '-0.012em' }}
            >
              Not a rebrand. A discovery — of the atmosphere
              that was always waiting beneath the surface of your work.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.95] max-w-[60ch] mb-6"
            >
              An Atmospheric Identity Kit is an authored creative direction document —
              a curated visual and narrative world built around who you are and what
              you make, shaped through intuition, research, and emotional instinct.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
              className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] max-w-[55ch]"
            >
              It is for those who know their work has an emotional quality that
              standard branding processes cannot touch — and who want that quality
              named, made visible, and made usable.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-32 overflow-hidden">
        {/* Faint violet ambient right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '15%',
            right: '-5%',
            width: 'clamp(300px, 40vw, 580px)',
            height: 'clamp(300px, 40vw, 580px)',
            background:
              'radial-gradient(ellipse 70% 70% at 70% 44%, rgba(168,85,247,0.045) 0%, transparent 72%)',
            filter: 'blur(90px)',
          }}
        />

        <div className="ei-container">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              What's included
            </motion.span>

            <div
              className="w-full h-px"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 70%, transparent)',
              }}
            />

            {included.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.06 * i }}
              >
                <div className="flex gap-6 md:gap-10 items-start py-9 md:py-12">
                  <span className="font-structural text-[9px] tracking-[0.28em] text-white/20 mt-1.5 shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-editorial text-[1.18rem] md:text-[1.5rem] text-[#E8EAF6]/75 leading-[1.2] mb-3 md:mb-4"
                      style={{ letterSpacing: '-0.006em' }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.88] max-w-[52ch]">
                      {item.body}
                    </p>
                  </div>
                </div>
                {i < included.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 65%, transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The process ──────────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-32">
        <div className="ei-container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              The process
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
              className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.95] max-w-[58ch] mb-6"
            >
              We begin with a deep intake — questions designed not to extract data,
              but to surface the emotional core of what you are building.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.22 }}
              className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.95] max-w-[54ch] mb-6"
            >
              From there, I build slowly — curating, writing, iterating until the
              system feels inevitable rather than designed.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.34 }}
              className="font-structural text-[13px] md:text-[14px] text-white/25 leading-[1.95] max-w-[50ch]"
            >
              The result arrives as a living document: yours to return to, grow
              from, and refine as your work evolves.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="relative ei-section py-24 md:py-44 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(168,85,247,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 ei-container text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
          >
            Atmospheric Identity Kits
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
            className="font-editorial text-[1.9rem] md:text-[2.6rem] text-[#E8EAF6]/80 leading-[1.22] mb-8 mx-auto"
            style={{ letterSpacing: '-0.01em', maxWidth: '30rem' }}
          >
            Ready to discover your atmospheric identity?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.24 }}
            className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] mx-auto mb-12"
            style={{ maxWidth: '38ch' }}
          >
            Each kit is built individually, over time, with full attention.
            Availability is limited.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="ei-gradient-border-btn relative inline-flex items-center justify-center px-10 py-4 font-structural text-[11px] tracking-[0.22em] uppercase text-white/85 transition-all duration-500 hover:text-white hover:scale-[1.02]">
              <span className="relative z-10">Begin an Identity</span>
            </button>
            <Link
              to="/"
              className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/25 hover:text-white/50 transition-colors duration-400"
            >
              ← Return to Studio
            </Link>
          </motion.div>
        </div>

        {/* Page footer strip */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 z-10">
          <div className="ei-container">
            <div className="flex items-end justify-between">
              <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
                INK MEETS LIGHT.
              </span>
              <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
                EMOTIONS BECOME DESIGN.
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
