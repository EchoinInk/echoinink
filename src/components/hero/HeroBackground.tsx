import widePng from '@/assets/ei-hero-monogram-tr.png';

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
        className="absolute z-[1] pointer-events-none select-none max-w-none object-contain left-1/2 top-1/2 h-[92vh] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.9] brightness-100 saturate-100

    sm:left-[52%]
    sm:h-[92vh]
  
    md:left-[60%]
    md:h-[86vh]

    lg:left-[68%]
    lg:h-[88vh]

    xl:left-[70%]
    xl:h-[92vh]

    2xl:left-[69%]
    2xl:h-[96vh]
  "
  style={{
    mixBlendMode: 'normal',
  }}
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

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[4] h-[22vh]"
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