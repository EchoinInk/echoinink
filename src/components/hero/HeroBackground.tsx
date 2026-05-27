import widePng from '@/assets/ei-min-hero-16x9.png';
import mobilePng from '@/assets/ei-min-hero-9x16.png';

export function HeroBackground() {
  return (
    <>
      {/* Base atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#050816]"
      />

      {/* DESKTOP MONOGRAM */}
      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="
          hidden md:block

          absolute
          right-[-2%]
          top-1/2
          -translate-y-1/2

          h-[88vh]
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
              rgba(4,6,14,0.92) 0%,
              rgba(4,6,14,0.78) 24%,
              rgba(4,6,14,0.38) 48%,
              transparent 70%
            )
          `,
        }}
      />

      {/* TOP CINEMATIC FRAME */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,7,16,0.18) 0%, rgba(5,7,16,0.04) 12%, transparent 26%)',
        }}
      />

      {/* BOTTOM ATMOSPHERIC FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[4] h-[16vh] md:h-[28vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(7,11,23,0.18) 42%, rgba(7,11,23,0.38) 74%, #070B17 100%)',
        }}
      />
    </>
  );
}