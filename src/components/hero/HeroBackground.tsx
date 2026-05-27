import widePng from '@/assets/ei-hero-monogram.png';
import mobilePng from '@/assets/ei-hero-monogram.png';

export function HeroBackground() {
  return (
    <>
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
      90deg, rgb(var(--ei-cosmic-black-rgb) / 0.94) 0%,
      rgb(var(--ei-cosmic-black-rgb) / 0.78) 24%,
      rgb(var(--ei-cosmic-black-rgb) / 0.28) 46%,
      transparent 64%
    )`,
  }}
/> {/* TOP CINEMATIC FRAME */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: 
            'linear-gradient(to bottom, rgb(var(--ei-deep-nebula-rgb) / 0.18) 0%, rgb(var(--ei-deep-nebula-rgb) / 0.04) 12%, transparent 26%)',
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