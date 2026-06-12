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
        className="pointer-events-none absolute inset-0 z-[1] block select-none"
      >
        <source media="(max-width: 768px)" srcSet={homeHeroMobile} />

        <img
          src={homeHero}
          alt=""
          className="
            h-full w-full object-cover object-[70%_38%]
            opacity-[0.82] brightness-[0.9] saturate-[0.9]
            md:object-[66%_40%] md:opacity-[0.86] md:brightness-[0.92]
          "
          style={{
            mixBlendMode: "normal",
          }}
        />
      </picture>

      {/* Desktop headline protection */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[2]
          hidden w-[64%] bg-gradient-to-r
          from-[#080718] via-[#080718]/88 to-transparent
          md:block
        "
      />

      {/* Main left fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: `linear-gradient(
            90deg,
            rgb(8 7 24 / 0.98) 0%,
            rgb(8 7 24 / 0.94) 18%,
            rgb(8 7 24 / 0.74) 36%,
            rgb(8 7 24 / 0.32) 52%,
            transparent 68%
          )`,
        }}
      />

      {/* Soft local scrim behind hero copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[12%] z-[3] hidden h-[62%] w-[58%] rounded-r-[999px] md:block"
        style={{
          background:
            "radial-gradient(ellipse 78% 70% at 28% 48%, rgb(8 7 24 / 0.72) 0%, rgb(8 7 24 / 0.46) 48%, transparent 76%)",
          filter: "blur(18px)",
        }}
      />

      {/* Navigation protection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 left-0 z-[4] h-[150px]"
        style={{
          background: `linear-gradient(
            180deg,
            rgb(8 7 24 / 0.78) 0%,
            rgb(8 7 24 / 0.42) 55%,
            rgb(8 7 24 / 0) 100%
          )`,
        }}
      />

      {/* Mobile copy fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4] md:hidden"
        style={{
          background: `linear-gradient(
            90deg,
            rgb(8 7 24 / 0.96) 0%,
            rgb(8 7 24 / 0.82) 36%,
            rgb(8 7 24 / 0.52) 62%,
            rgb(8 7 24 / 0.16) 100%
          )`,
        }}
      />

      {/* Mobile vertical breathing scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[56vh] md:hidden"
        style={{
          background: `linear-gradient(
            180deg,
            rgb(8 7 24 / 0.82) 0%,
            rgb(8 7 24 / 0.44) 42%,
            rgb(8 7 24 / 0) 100%
          )`,
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[6] h-[42vh]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgb(8 7 24 / 0.48) 52%,
            rgb(8 7 24 / 0.82) 80%,
            var(--ei-ink) 100%
          )`,
        }}
      />
    </>
  );
}