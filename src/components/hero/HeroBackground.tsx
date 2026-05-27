import widePng from '@/assets/ei-hero-monogram.png';
import mobilePng from '@/assets/ei-hero-monogram.png';

export function HeroBackground() {
  return (
    <>
      {/* Base atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-deep-nebula)]"
      />

      {/* DESKTOP MONOGRAM */}
      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="
          hidden md:block

          absolute
          left-[46%]
          top-[53%]
          -translate-y-1/2

          h-[100vh]
          w-auto
          object-contain

          opacity-[0.94]

          pointer-events-none
          select-none
          z-[1]
        "
        style={{
          filter: `
            brightness(1.02)
            saturate(1)
          `,
          mixBlendMode: 'screen',
        }}
      />

      {/* MOBILE MONOGRAM */}
      <img
        src={mobilePng}
        alt=""
        aria-hidden="true"
        className="
          block md:hidden

          absolute
          inset-0

          h-full
          w-full
          object-cover
          object-center

          opacity-[0.92]

          pointer-events-none
          select-none
          z-[1]
        "
      />

      {/* LEFT READABILITY FADE */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
  linear-gradient(
    90deg,
    rgb(var(--ei-cosmic-black-rgb) / 0.90) 0%,
    rgb(var(--ei-cosmic-black-rgb) / 0.72) 22%,
    rgb(var(--ei-cosmic-black-rgb) / 0.16) 44%,
    transparent 60%
  )`,
        }}
      />

      {/* TOP CINEMATIC FRAME */}
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