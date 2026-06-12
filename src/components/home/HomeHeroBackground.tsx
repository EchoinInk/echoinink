// Use public static assets by path instead of importing from @public
const homeHero = "/home-hero-desktop.webp";
const homeHeroMobile = "/home-hero-mobile.webp";

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-ink)]"
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
            opacity-[0.92] brightness-[0.98] saturate-[0.9]
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
          from-[#080718] via-[#080718]/78 to-transparent
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
            rgb(8 7 24 / 0.94) 0%,
            rgb(8 7 24 / 0.88) 18%,
            rgb(8 7 24 / 0.62) 34%,
            rgb(8 7 24 / 0.18) 48%,
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
            rgb(8 7 24 / 0.68) 0%,
            rgb(8 7 24 / 0.34) 55%,
            rgb(8 7 24 / 0) 100%
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
            rgb(8 7 24 / 0.9) 0%,
            rgb(8 7 24 / 0.66) 30%,
            rgb(8 7 24 / 0.28) 52%,
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
            rgb(8 7 24 / 0.42) 52%,
            rgb(8 7 24 / 0.78) 80%,
            var(--ei-ink) 100%
          )`,
        }}
      />
    </>
  );
}