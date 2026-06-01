import widePng from '@/assets/imagery/hero/home-hero.png';

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-void-black)]"
      />

      {/* MONOGRAM — one responsive image, no breakpoint swapping */}
      <img
  src={widePng}
  alt="Echo in Ink monogram"
  aria-hidden="true"
  className="
    absolute inset-0 z-[1] pointer-events-none select-none
    w-full h-full object-cover
    opacity-[0.9] brightness-[0.94] saturate-[0.82]
  "
  style={{ mixBlendMode: 'normal' }}
/>

      {/* LEFT FADE */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `linear-gradient(
            90deg,
            rgb(var(--ei-void-black-rgb) / 1) 0%,
            rgb(var(--ei-void-black-rgb) / 0.96) 18%,
            rgb(var(--ei-void-black-rgb) / 0.74) 34%,
            rgb(var(--ei-void-black-rgb) / 0.26) 48%,
            transparent 60%
          )`,
        }}
      />

      {/* TOP FADE */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgb(var(--ei-void-black-rgb) / 0.82) 0%,
            rgb(var(--ei-void-black-rgb) / 0.34) 12%,
            transparent 28%
          )`,
        }}
      />

      {/* MOBILE COPY FADE */}
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

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5] h-[22vh]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgb(var(--ei-void-black-rgb) / 0.42) 68%,
            var(--ei-void-black) 100%
          )`,
        }}
      />
    </>
  );
}