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
        className="hidden md:block absolute left-[48%] top-[52%] -translate-y-1/2 h-[82vh] w-auto object-contain opacity-[0.82] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.88) saturate(0.88) contrast(0.98)',
          mixBlendMode: 'normal',
        }}
      />

      {/* MOBILE MONOGRAM */}
      <img
        src={mobilePng}
        alt=""
        aria-hidden="true"
        className="block md:hidden absolute inset-0 h-full w-full object-cover object-center opacity-[0.82] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.88) saturate(0.88) contrast(0.98)',
          mixBlendMode: 'normal',
        }}
      />

      {/* LEFT READABILITY FADE */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none z-[2]"
  style={{
    background: `linear-gradient(
      90deg,
      rgb(var(--ei-cosmic-black-rgb) / 0.94) 0%,
      rgb(var(--ei-cosmic-black-rgb) / 0.78) 24%,
      rgb(var(--ei-cosmic-black-rgb) / 0.28) 46%,
      transparent 64%
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
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[4] h-[18vh] md:h-[24vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-cosmic-black-rgb) / 0.22) 70%, var(--ei-cosmic-black) 100%)',
        }}
      />
    </>
  );
}