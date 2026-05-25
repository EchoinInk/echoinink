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
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Soft atmospheric framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 60%)',
          filter: 'blur(60px)',
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
          className="font-structural text-[10px] tracking-[0.28em] uppercase text-white/30 block mb-6"
        >
          Begin
        </motion.span>

        {/* Heading — the question */}
        <motion.h2
          variants={blurEmergence}
          className="font-editorial text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] text-white/80 leading-[1.3] mb-6"
          style={{ letterSpacing: '-0.01em' }}
        >
          Ready to translate your world?
        </motion.h2>

        {/* Description — emotional resonance */}
        <motion.p
          variants={driftUp}
          className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.7] max-w-[44ch] mx-auto mb-10 whitespace-pre-line"
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
