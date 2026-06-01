import { motion } from 'framer-motion';
import { heroReveal } from '@/lib/motion-cinematic';

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame max-w-[640px] md:max-w-[620px] lg:max-w-[680px]">
      <motion.div
        variants={heroReveal}
        className="mb-3 flex items-center gap-4 md:mb-5"
      >
        <span className="font-structural text-[11px] uppercase tracking-[0.2em] text-white/60">
          WE DESIGN WORLDS
        </span>

        <div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-aurora-blue-rgb)/0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgb(var(--ei-deep-indigo-rgb) / 0.15) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.95) 100%)',
          }}
        />
      </motion.div>

      <h1
        id="hero-heading"
        className="font-editorial max-w-[30ch] whitespace-pre-line text-[2.4rem] leading-[1.04] tracking-tight text-white/[0.94] max--md:leading-[1.1] md:text-[3.35rem] lg:text-[4rem] pt-8 md:pt-12"
        style={{
          textShadow: '0 0 90px rgb(var(--ei-luxe-violet-rgb) / 0.08)',
        }}
      >
        Designing the worlds your work lives in.
      </h1>

      {/* SERVICE DESCRIPTOR — clarifies offering while preserving intrigue */}
      <p className="font-structural mt-3 text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-ei-orchid/80">
        Identity Systems, Digital Experiences & Narrative Direction
      </p>

      <motion.p
        variants={heroReveal}
        className="font-structural mt-5 max-w-[42ch] text-[15px] leading-[1.62] text-white/88 md:mt-6 md:max-w-[46ch] md:text-[16px]"
        style={{
          letterSpacing: '0.005em',
        }}
      >
        Emotionally intelligent identity systems, immersive websites, and atmospheric digital experiences for founders, artists, and emerging brands.
      </motion.p>
    </div>
  );
}