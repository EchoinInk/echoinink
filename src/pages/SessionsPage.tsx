import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

const navigations = [
  { label: 'Creative identity and positioning' },
  { label: 'Visual direction and aesthetic clarity' },
  { label: 'Narrative development and story systems' },
  { label: 'Brand atmosphere and emotional register' },
  { label: 'Project direction and momentum' },
  { label: 'Creative blocks and resistance patterns' },
] as const;

export function SessionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.cinematic, ease: EASE }}
      className="relative bg-[#0F1220] min-h-screen"
    >
      <Helmet>
        <title>Echo Sessions — Echo in Ink</title>
        <meta name="description" content="60-minute premium creative direction sessions for clarity, narrative cohesion, and aesthetic alignment." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Aqua/indigo atmospheric bloom — upper right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '0%',
            right: '-8%',
            width: 'clamp(480px, 62vw, 920px)',
            height: 'clamp(480px, 62vh, 760px)',
            background:
              'radial-gradient(ellipse 58% 60% at 72% 32%, rgba(30,200,255,0.10) 0%, rgba(99,102,241,0.07) 44%, transparent 72%)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Faint violet secondary left */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '20%',
            left: '-6%',
            width: 'clamp(260px, 34vw, 520px)',
            height: 'clamp(260px, 34vw, 520px)',
            background:
              'radial-gradient(ellipse 68% 68% at 30% 54%, rgba(168,85,247,0.055) 0%, transparent 72%)',
            filter: 'blur(85px)',
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
            Echo Sessions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slower, ease: EASE, delay: 0.35 }}
            className="font-editorial text-[2.4rem] md:text-[3.6rem] lg:text-[4.8rem] text-[#E8EAF6]/90 leading-[1.08] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.018em', maxWidth: '24rem' }}
          >
            A creative direction experience for what won't stay quiet.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.58 }}
            className="font-structural text-[13px] md:text-[15px] text-white/38 leading-[1.95] max-w-[50ch]"
          >
            60-minute premium sessions for clarity, narrative cohesion, and
            aesthetic alignment — when your work needs a witness and a direction.
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
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE }}
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
              Not a consulting call.
              A focused creative direction experience — a space where your questions,
              tensions, and creative fog find clarity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.2 }}
              className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.95] max-w-[60ch] mb-6"
            >
              Echo Sessions are designed for founders, artists, and makers who
              need momentum: on identity, on narrative, on visual direction, or
              on the quiet resistance that sits between where you are and where
              your work wants to go.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.3 }}
              className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] max-w-[55ch]"
            >
              These sessions are intimate, focused, and held with full creative
              attention. No frameworks. No templates. Just honest, intuitive
              direction shaped around what you actually need.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── What you might navigate ──────────────────────── */}
      <section className="relative ei-section py-20 md:py-32 overflow-hidden">
        {/* Faint aqua ambient right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%',
            right: '-5%',
            width: 'clamp(260px, 34vw, 520px)',
            height: 'clamp(260px, 34vw, 520px)',
            background:
              'radial-gradient(ellipse 68% 68% at 68% 44%, rgba(30,200,255,0.04) 0%, transparent 72%)',
            filter: 'blur(80px)',
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
              What you might navigate
            </motion.span>

            <div
              className="w-full h-px mb-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 70%, transparent)',
              }}
            />

            {navigations.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
              >
                <div className="flex gap-6 md:gap-10 items-center py-6 md:py-7">
                  <span className="font-structural text-[9px] tracking-[0.28em] text-white/18 shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="font-editorial text-[1.05rem] md:text-[1.3rem] text-[#E8EAF6]/65 leading-[1.3]"
                    style={{ letterSpacing: '-0.004em' }}
                  >
                    {item.label}
                  </p>
                </div>
                {i < navigations.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 60%, transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
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
              How it works
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.normal}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.1 }}
              className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.95] max-w-[58ch] mb-6"
            >
              Before each session, you complete a brief creative intake — sharing
              where you are, what's unclear, and what you're trying to move toward.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.normal }}
              className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.95] max-w-[54ch] mb-6"
            >
              The session itself moves between questions, observations, and
              directional guidance — not a presentation, but a conversation with
              creative intelligence at its center.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.tight}
              transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.loose }}
              className="font-structural text-[13px] md:text-[14px] text-white/25 leading-[1.95] max-w-[50ch]"
            >
              Afterwards, you receive a session document: a distillation of what
              emerged, with direction, language fragments, and specific next steps.
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
              'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(30,200,255,0.055) 0%, transparent 70%)',
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
            Echo Sessions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slower, ease: EASE, delay: 0.1 }}
            className="font-editorial text-[1.9rem] md:text-[2.6rem] text-[#E8EAF6]/80 leading-[1.22] mb-8 mx-auto"
            style={{ letterSpacing: '-0.01em', maxWidth: '30rem' }}
          >
            Ready to find clarity in the creative fog?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.normal }}
            className="font-structural text-[13px] md:text-[14px] text-white/28 leading-[1.95] mx-auto mb-12"
            style={{ maxWidth: '38ch' }}
          >
            Sessions are booked individually and held with full attention.
            Limited availability each month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.cinematic }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="ei-gradient-border-btn relative inline-flex items-center justify-center px-10 py-4 font-structural text-[11px] tracking-[0.22em] uppercase text-white/85 transition-all duration-500 hover:text-white hover:scale-[1.02]">
              <span className="relative z-10">Begin a Session</span>
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
