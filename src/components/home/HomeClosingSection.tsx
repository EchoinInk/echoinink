import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';
import { CtaOrbitalBackground } from '@/components/ui/CTAOrbitalBackground';
import {

  driftUp,

  blurEmergence,

  dissolveReveal,

  EASE_LUXURY,

  DURATION,

} from '@/lib/motion-cinematic';

export function ClosingSection() {

  return (

    <section className="relative isolate min-h-[300px] overflow-hidden bg-[#05070D] py-14 md:py-20">

      <CtaOrbitalBackground />

      {/* Soft vignette so the text stays readable */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute left-1/2 top-[46%] z-[1] h-[190px] w-[760px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full"

        style={{

          background:

            'radial-gradient(circle, rgba(5, 7, 13, 0.68) 0%, rgba(5, 7, 13, 0.38) 46%, transparent 76%)',

          filter: 'blur(12px)',

        }}

      />

      {/* Subtle darkening behind the copy */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[220px] w-[680px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full"

        style={{

          background:

            'radial-gradient(circle, rgba(5, 7, 13, 0.48) 0%, rgba(5, 7, 13, 0.22) 45%, transparent 72%)',

          filter: 'blur(10px)',

        }}

      />

      <motion.div

        className="relative z-10 mx-auto max-w-3xl px-6 text-center"

        initial="hidden"

        whileInView="visible"

        viewport={{ once: true, margin: '-50px' }}

      >

        <motion.span

          variants={dissolveReveal}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}

          className="font-structural mb-3 block text-[10px] uppercase tracking-[0.28em] text-white/55 md:mb-4"

        >

          Begin

        </motion.span>

        <motion.h2

          variants={blurEmergence}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          transition={{

            duration: DURATION.slow,

            ease: EASE_LUXURY,

            delay: 0.05,

          }}

          className="font-editorial mb-3 text-[2.1rem] leading-[1.24] text-[var(--ei-stellar-lilac)] md:mb-4 md:text-[1.8rem] lg:text-[2.2rem]"

          style={{ letterSpacing: '-0.01em' }}

        >

          Ready to translate your world?

        </motion.h2>

        <motion.p

          variants={driftUp}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          transition={{

            duration: DURATION.slow,

            ease: EASE_LUXURY,

            delay: 0.1,

          }}

          className="font-structural mx-auto mb-6 max-w-[40ch] text-[15px] leading-[1.85] text-white/68 md:mb-8 md:text-[16px]"

        >

          Let&apos;s build something meaningful, atmospheric, and unforgettable.

        </motion.p>

        <motion.div

          initial={{ opacity: 0, y: 10 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{

            duration: DURATION.slow,

            ease: EASE_LUXURY,

            delay: 0.15,

          }}

        >

          <Button to="/contact" variant="primary">

            Start a Conversation

          </Button>

        </motion.div>

      </motion.div>

    </section>

  );

}