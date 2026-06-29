import { motion } from "framer-motion";
import { PageOfferAnchor } from "@/components/sections/PageOfferAnchor";
import { heroReveal } from "@/lib/motion-cinematic";

export function HeroHeading() {
  return (
    <div className="ei-monogram-frame max-w-[640px] md:max-w-[620px] lg:max-w-[680px]">
      <motion.div
        variants={heroReveal}
        className="mb-4 flex items-center gap-4 md:mb-5"
      >
        <span className="ei-type-hero-eyebrow text-[var(--ei-color-text-secondary)]">
          WE DESIGN WORLDS
        </span>

        <div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_14px_rgb(var(--ei-halo-blue-rgb)/0.5)]"
          style={{
            background:
              "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.98) 100%)",
          }}
        />
      </motion.div>

      <h1
        id="hero-heading"
        className="ei-type-hero-home max-w-[24ch] whitespace-pre-line text-[var(--ei-color-text-primary)]"
        style={{
          textShadow:
            "0 2px 28px rgb(0 0 0 / 0.44), 0 0 54px rgb(var(--ei-violet-rgb) / 0.08)",
        }}
      >
        {"Designing the worlds your work lives in."}
      </h1>

      <PageOfferAnchor className="mt-6">
        Identity, digital atmosphere, and creative systems for brands and
        projects becoming more distinct.
      </PageOfferAnchor>

      <motion.p
        variants={heroReveal}
        className="ei-type-hero-description mt-6 max-w-[46ch] text-[1rem] leading-[1.82] text-[var(--ei-color-text-secondary)] md:text-[1.02rem]"
      >
        Echo in Ink helps founders, artists, and teams turn emerging identity,
        digital experience, and atmosphere into a coherent public world.
      </motion.p>
    </div>
  );
}
