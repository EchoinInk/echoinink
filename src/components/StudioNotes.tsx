import { motion } from 'framer-motion';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

export function StudioNotes() {
  return (
    <section className="relative ei-section py-20 md:py-32 overflow-hidden">
      {/* Faint pink ambient left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '-6%',
          width: 'clamp(240px, 32vw, 500px)',
          height: 'clamp(240px, 32vw, 500px)',
          background:
            'radial-gradient(ellipse 70% 70% at 30% 52%, rgba(232,121,249,0.035) 0%, transparent 72%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="ei-container">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/15 mb-10 md:mb-14"
          >
            Studio Notes
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.cinematic, ease: EASE, delay: 0.1 }}
            className="font-editorial text-[1.18rem] md:text-[1.42rem] text-[#E8EAF6]/48 leading-[1.76] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.006em', fontStyle: 'italic' }}
          >
            "There is a particular quality to the moment when a visual language
            clicks into place — not designed so much as discovered. I keep trying
            to create that feeling for other people."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.loose }}
            className="flex items-center gap-4 mb-10 md:mb-14"
          >
            <div
              className="h-px"
              style={{
                width: '2.5rem',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
            <span className="font-structural text-[9px] tracking-[0.30em] uppercase text-white/20">
              April — Studio Journal
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: 'easeInOut', delay: STAGGER.cinematic }}
            className="font-structural text-[12px] md:text-[13px] text-white/25 leading-[1.95] max-w-[50ch]"
          >
            Atmosphere is not decoration. It is the emotional register of a space —
            the thing that tells your nervous system whether you are safe, curious,
            reverent, or alive.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
