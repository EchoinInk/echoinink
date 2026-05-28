import widePng from '@/assets/ei-hero-monogram-tr.png';
import mobilePng from '@/assets/ei-hero-monogram-tr.png';

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-cosmic-black)]"
      />

      {/* MONOGRAM — one responsive image, no breakpoint swapping */}

      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="absolute z-[1] pointer-events-none select-none left-1/2 top-[50%] h-[92vh] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.9] sm:left-[50%] sm:h-[92vh] md:left-[56%] md:h-[86vh] md:opacity-[0.92] lg:left-[62%] lg:h-[88vh] lg:opacity-[0.96] xl:left-[64%] xl:h-[92vh] 2xl:left-[63%] 2xl:h-[96vh]"
        style={{
          filter: 'brightness(1) saturate(1) contrast(1)',
          mixBlendMode: 'normal',
        }}
      />

     {/* LEFT FADE */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none z-[2]"
  style={{
    background: `linear-gradient( 90deg,
      rgb(var(--ei-cosmic-black-rgb) / 1) 0%,
      rgb(var(--ei-cosmic-black-rgb) / 0.96) 18%,
      rgb(var(--ei-cosmic-black-rgb) / 0.74) 34%,
      rgb(var(--ei-cosmic-black-rgb) / 0.26) 48%,
      transparent 60%
    )`,
  }}
/>

      {/* TOP FADE */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: `linear-gradient(            to bottom,
            rgb(var(--ei-cosmic-black-rgb) / 0.82) 0%,
            rgb(var(--ei-cosmic-black-rgb) / 0.34) 12%,
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
            rgb(var(--ei-cosmic-black-rgb) / 0.42) 68%,
            var(--ei-cosmic-black) 100%
          )`,
        }}
      />
    </>
  );
}