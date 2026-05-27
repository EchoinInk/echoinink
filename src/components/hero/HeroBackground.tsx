import widePng from '@/assets/ei-hero-monogram.png';
import mobilePng from '@/assets/ei-hero-monogram.png';

export function HeroBackground() {
  return (
    <>
      {/* Base atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-cosmic-black)]"
      />

      {/* DESKTOP MONOGRAM */}
<img
  src={widePng}
  alt=""
  aria-hidden="true"
  className="hidden md:block absolute left-[46%] top-[53%] -translate-y-1/2 h-[100vh] w-auto object-contain opacity-[0.88] pointer-events-none select-none z-[1]"
  style={{
    filter: 'brightness(0.92) saturate(0.9) contrast(0.96)',
  }}
/>

      {/* MOBILE MONOGRAM */}
      <img
        src={mobilePng}
        alt=""
        aria-hidden="true"
        className="block md:hidden absolute inset-0 h-full w-full object-cover object-center opacity-[0.92] pointer-events-none select-none z-[1]"
      />

     {/* LEFT READABILITY FADE */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none z-[2]"
  style={{
    background: `linear-gradient(
      90deg,
      rgb(var(--ei-cosmic-black-rgb) / 0.98) 0%,
      rgb(var(--ei-cosmic-black-rgb) / 0.94) 24%,
      rgb(var(--ei-cosmic-black-rgb) / 0.68) 42%,
      rgb(var(--ei-cosmic-black-rgb) / 0.18) 58%,
      transparent 72%
    )`,
  }}
/>

{/* TOP CLEAN FADE */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none z-[3]"
  style={{
    background:
      'linear-gradient(to bottom, rgb(var(--ei-cosmic-black-rgb) / 0.72) 0%, rgb(var(--ei-cosmic-black-rgb) / 0.32) 12%, transparent 30%)',
  }}
/>
      {/* BOTTOM ATMOSPHERIC FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[4] h-[16vh] md:h-[28vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-void-plum-rgb) / 0.18) 42%, rgb(var(--ei-void-plum-rgb) / 0.38) 74%, var(--ei-cosmic-black) 100%)',
        }}
      />
    </>
  );
}