import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

const scope = [
  {
    title: 'Immersive Digital Environments',
    body: 'Atmospheric websites and interactive experiences that feel like stepping into a world — not browsing a page.',
  },
  {
    title: 'Narrative Systems',
    body: 'Storytelling frameworks that give your brand a voice, a mythology, and a reason to be returned to.',
  },
  {
    title: 'Cinematic Launches',
    body: 'Carefully orchestrated release experiences — for albums, collections, projects, and brands entering the world with intention.',
  },
  {
    title: 'Atmospheric Identity',
    body: 'A complete emotional and visual language — from type to colour to motion to tone — built around the soul of your vision.',
  },
] as const;

export function WorldsPage() {
  return (
    <div className="relative bg-[#0F1220] min-h-screen">
      <Helmet>
        <title>Creative Universe Building — Echo in Ink</title>
        <meta name="description" content="Rare, selective collaborations for brands and creators ready to build immersive digital worlds shaped by narrative, atmosphere, and cinematic detail." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section aria-labelledby="worlds-hero-heading" className="relative min-h-screen flex items-end overflow-hidden">
        {/* Deep cosmic violet bloom — centered upper */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(600px, 80vw, 1100px)',
            height: 'clamp(500px, 70vh, 860px)',
            background:
              'radial-gradient(ellipse 55% 55% at 50% 30%, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.08) 40%, rgba(30,200,255,0.03) 68%, transparent 82%)',
            filter: 'blur(75px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Lower left atmospheric depth */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '15%',
            left: '-8%',
            width: 'clamp(280px, 36vw, 540px)',
            height: 'clamp(280px, 36vw, 540px)',
            background:
              'radial-gradient(ellipse 68% 68% at 28% 56%, rgba(168,85,247,0.06) 0%, transparent 72%)',
            filter: 'blur(70px)',
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

        {/* Hero content */}
        <div
          className="relative z-10 ei-container w-full pb-20 md:pb-32"
          style={{ paddingTop: 'clamp(7rem, 18vh, 14rem)' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.2 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-10 md:mb-14"
          >
            Creative Universe Building
          </motion.span>

          <motion.h1
            id="worlds-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slower, ease: EASE, delay: 0.35 }}
            className="font-editorial text-[2.4rem] md:text-[3.6rem] lg:text-[4.8rem] text-[#E8EAF6]/90 leading-[1.08] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.018em', maxWidth: '25rem' }}
          >
            An immersive world built around your vision, from the inside out.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.58 }}
            className="font-structural text-[13px] md:text-[15px] text-white/38 leading-[1.95] max-w-[50ch]"
          >
            Rare, selective collaborations for brands and creators ready to build
            something that will be remembered — felt — and returned to.
          </motion.p>
        </div>
      </section>

      {/* ── What it is ───────────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-36 overflow-hidden">
        <div className="ei-container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT.normal}
              transition={{ duration: DURATION.normal, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              What it is
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.loose}
              transition={{ duration: DURATION.cinematic, ease: EASE, delay: 0.1 }}
              className="font-editorial text-[1.65rem] md:text-[2.15rem] text-[#E8EAF6]/80 leading-[1.3] mb-12 md:mb-16"
              style={{ letterSpacing: '-0.012em' }}
            >
              Not a service. A selective partnership — a process of worldbuilding
              undertaken with full authorial attention and creative investment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.2 }}
              className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.95] max-w-[60ch] mb-6"
            >
              Creative Universe Building is the deepest form of collaboration
              Echo in Ink offers. The result is not a deliverable. It is a living
              world — an immersive digital environment shaped by narrative,
              atmosphere, emotional identity, and cinematic detail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.normal }}
              className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] max-w-[55ch]"
            >
              Each collaboration begins with listening — with no predetermined
              scope, no template, and no outcome that isn't shaped entirely
              around the vision at its center.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── The scope ────────────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-32 overflow-hidden">
        {/* Faint indigo ambient */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            right: '-5%',
            width: 'clamp(300px, 40vw, 580px)',
            height: 'clamp(300px, 40vw, 580px)',
            background:
              'radial-gradient(ellipse 70% 70% at 68% 44%, rgba(99,102,241,0.045) 0%, transparent 72%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="ei-container">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT.normal}
              transition={{ duration: DURATION.normal, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              The scope
            </motion.span>

            <div
              className="w-full h-px mb-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 70%, transparent)',
              }}
            />

            {scope.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * i }}
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
                {i < scope.length - 1 && (
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

      {/* ── Who it's for ─────────────────────────────────── */}
      <section className="relative ei-section py-20 md:py-36">
        <div className="ei-container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT.normal}
              transition={{ duration: DURATION.normal, ease: EASE }}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
            >
              Who it's for
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.loose}
              transition={{ duration: DURATION.cinematic, ease: EASE, delay: 0.1 }}
              className="font-editorial text-[1.65rem] md:text-[2.1rem] text-[#E8EAF6]/78 leading-[1.32] mb-12 md:mb-16"
              style={{ letterSpacing: '-0.012em' }}
            >
              Creative Universe Building is not for everyone.
              It is for those ready to invest in something that earns
              attention through atmosphere rather than spectacle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.2 }}
              className="font-structural text-[14px] md:text-[15px] text-white/38 leading-[1.95] max-w-[58ch] mb-6"
            >
              These collaborations are rare, deeply considered, and undertaken
              with full creative investment. Projects are accepted selectively —
              not by budget, but by resonance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.cinematic }}
              className="font-structural text-[13px] md:text-[14px] text-white/25 leading-[1.95] max-w-[52ch]"
            >
              If you're looking for a website, there are excellent studios for that.
              If you're looking for a world — enter.
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
              'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 ei-container text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
          >
            Creative Universe Building
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slower, ease: EASE, delay: 0.1 }}
            className="font-editorial text-[1.9rem] md:text-[2.6rem] text-[#E8EAF6]/80 leading-[1.22] mb-8 mx-auto"
            style={{ letterSpacing: '-0.01em', maxWidth: '28rem' }}
          >
            Ready to build something that will be remembered?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.normal }}
            className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] mx-auto mb-12"
            style={{ maxWidth: '40ch' }}
          >
            Enter by sending a brief note about your vision.
            From there, we discover together whether it resonates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.cinematic }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="ei-gradient-border-btn relative inline-flex items-center justify-center px-10 py-4 font-structural text-[11px] tracking-[0.22em] uppercase text-white/85 transition-all duration-500 hover:text-white hover:scale-[1.02]">
              <span className="relative z-10">Build a World</span>
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
    </div>
  );
}
