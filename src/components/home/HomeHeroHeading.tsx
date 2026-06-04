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
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)',
          }}
        />
      </motion.div>

    <h1
  id="hero-heading"
  className="
    font-editorial
    max-w-[29ch]
    whitespace-pre-line
    text-[2.45rem]
    leading-[1.06]
    tracking-tight
    text-white/[0.94]
    md:text-[3.45rem]
    md:leading-[1.04]
    lg:text-[4.15rem]
  "
  style={{
    textShadow: '0 0 48px rgb(var(--ei-violet-rgb) / 0.04)',
  }}
>
  Designing the worlds your work lives in.
</h1>

<p className="
  font-structural
  mt-5
  text-[11px]
  md:text-[12px]
  tracking-[0.16em]
  uppercase
  letter-spacing-[0.16em]
  text-ei-echo/70
">
  Identity Systems, Digital Experiences & Narrative Direction
</p>

<motion.p
  variants={heroReveal}
  className="
    font-structural
    mt-6
    max-w-[46ch]
    text-[16px]
    md:text-[17px]
    leading-[1.68]
    text-white/88
  "
  style={{ letterSpacing: '0.005em' }}
>
  Emotionally intelligent identity systems, immersive websites, and atmospheric digital experiences for founders, artists, and emerging brands.
</motion.p>
    </div>
  );
}