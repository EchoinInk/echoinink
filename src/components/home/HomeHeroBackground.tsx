import homeHero from "@/assets/imagery/hero/home-hero.webp";
import homeHeroMobile from "@/assets/imagery/sections/home-hero-mobile.webp";

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-void)]"
      />

      {/* Responsive hero image */}
      <picture
        aria-hidden="true"
        className="absolute inset-0 z-[1] block pointer-events-none select-none"
      >
        <source media="(max-width: 768px)" srcSet={homeHeroMobile} />

        <img
          src={homeHero}
          alt=""
          className="
            h-full w-full object-cover
            opacity-[0.88] brightness-[0.94] saturate-[0.82]
          "
          style={{
            mixBlendMode: "normal",
            objectPosition: "58% center",
          }}
        />
      </picture>

      {/* Desktop left fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[2]
          hidden w-[55%] bg-gradient-to-r
          from-[#020615] via-[#020615]/85 to-transparent
          md:block
        "
      />

      {/* Main left fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `linear-gradient(
            90deg,
            rgb(5 3 11 / 1) 0%,
            rgb(5 3 11 / 0.96) 18%,
            rgb(5 3 11 / 0.74) 34%,
            rgb(5 3 11 / 0.26) 48%,
            transparent 60%
          )`,
        }}
      />

      {/* Navigation protection */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[140px] pointer-events-none z-[3]"
        style={{
          background: `linear-gradient(
            180deg,
            rgb(5 3 11 / 0.78) 0%,
            rgb(5 3 11 / 0.42) 55%,
            rgb(5 3 11 / 0) 100%
          )`,
        }}
      />

      {/* Mobile copy fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[4] md:hidden"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(6, 8, 18, 0.94) 0%,
            rgba(6, 8, 18, 0.72) 30%,
            rgba(6, 8, 18, 0.32) 52%,
            transparent 100%
          )`,
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5] h-[42vh]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgb(5 3 11 / 0.55) 52%,
            rgb(5 3 11 / 0.9) 80%,
            var(--ei-void) 100%
          )`,
        }}
      />
    </>
  );
}