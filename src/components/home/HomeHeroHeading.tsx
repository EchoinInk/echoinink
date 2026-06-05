import { motion } from "framer-motion";
import { heroReveal } from "@/lib/motion-cinematic";

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame max-w-[640px] md:max-w-[620px] lg:max-w-[680px]">
      <motion.div
        variants={heroReveal}
        className="mb-3 flex items-center gap-4 md:mb-5"
      >
        <span className="ei-type-hero-eyebrow">WE DESIGN WORLDS</span>

        <div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.45)]"
          style={{
            background:
              "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
          }}
        />
      </motion.div>

      <h1
        id="hero-heading"
        className="ei-type-hero-home max-w-[23ch] whitespace-pre-line"
        style={{
          textShadow: "0 0 48px rgb(var(--ei-violet-rgb) / 0.04)",
        }}
      >
        Designing the worldsnyour work lives in.
      </h1>

      <p className="ei-type-hero-kicker mt-5">
        Identity systems, digital experiences, and narrative direction.
      </p>

      <motion.p
        variants={heroReveal}
        className="ei-type-hero-description mt-6 max-w-[46ch]"
      >
        Emotionally intelligent identity systems, immersive websites, and
        atmospheric digital experiences for founders, artists, and emerging
        brands.
      </motion.p>
    </div>
  );
}
