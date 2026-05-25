import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import {
  driftUp,
  blurEmergence,
  dissolveReveal,
  cinematicContainer,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from '@/lib/motion-cinematic';

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden ei-section-closing py-32 md:py-40">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC FRAMING
          Deep volumetric haze creating emotional weight
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glow — violet luminescence */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          animate={{
            opacity: [0.04, 0.06, 0.04],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: DURATION.ambient * 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(168,85,247,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Outer haze — indigo depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.03) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Radial vignette — focus inward */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(5,7,16,0.4) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        variants={cinematicContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
      >
        {/* Eyebrow — quiet invitation */}
        <motion.span
          variants={dissolveReveal}
          className="font-structural text-[10px] tracking-[0.28em] uppercase text-white/30 block mb-8"
        >
          Begin
        </motion.span>

        {/* Heading — the question */}
        <motion.h2
          variants={blurEmergence}
          className="font-editorial text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] text-white/80 leading-[1.25] mb-8"
          style={{ letterSpacing: '-0.01em' }}
        >
          Ready to translate your world?
        </motion.h2>

        {/* Description — emotional resonance */}
        <motion.p
          variants={driftUp}
          className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.8] max-w-[46ch] mx-auto mb-12 whitespace-pre-line"
        >
          {"If the resonance is there, we'll build the language \nyour work has been waiting to speak."}
        </motion.p>

        {/* CTA — refined invitation button */}
        <motion.div variants={driftUp}>
          <Button to="/contact" variant="invitation">
            Start a Conversation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
