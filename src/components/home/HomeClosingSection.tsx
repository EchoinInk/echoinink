import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { CtaOrbitalBackground } from "@/components/ui/CTAOrbitalBackground";
import {
  driftUp,
  blurEmergence,
  dissolveReveal,
  EASE_LUXURY,
  DURATION,
} from "@/lib/motion-cinematic";

export function ClosingSection() {
  return (
    <section className="relative isolate min-h-[250px] overflow-hidden bg-[var(--ei-color-background-void)] pt-8 pb-10 md:pt-10 md:pb-12">
      <CtaOrbitalBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 52%, rgb(var(--ei-halo-blue-rgb) / 0.06) 0%, rgb(var(--ei-midnight-rgb) / 0.16) 38%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[220px] w-[680px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ei-void-rgb) / 0.48) 0%, rgb(var(--ei-void-rgb) / 0.22) 45%, transparent 72%)",
          filter: "blur(10px)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--ei-color-background-void) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.span
          variants={dissolveReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
          className="ei-type-label mb-3 block md:mb-4"
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
          className="ei-type-section mb-3 md:mb-4"
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
          className="mx-auto mb-6 max-w-[38ch] font-[var(--ei-font-copy)] text-[15px] leading-[1.8] tracking-[-0.006em] text-[var(--ei-type-color-secondary)] md:mb-8 md:text-[16px]"
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