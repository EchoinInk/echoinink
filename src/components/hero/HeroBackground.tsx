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

      {/* MOBILE MONOGRAM */}
      <img
        src={mobilePng}
        alt=""
        aria-hidden="true"
        className="block md:hidden absolute inset-0 h-full w-full object-cover object-center opacity-[0.9] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.95) saturate(1) contrast(1)',
          mixBlendMode: 'normal',
        }}
      />

      {/* TABLET MONOGRAM */}
      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="hidden md:block lg:hidden absolute left-[32%] top-[51%] -translate-y-1/2 h-[86vh] w-auto object-contain opacity-[0.9] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.95) saturate(1) contrast(1)',
          mixBlendMode: 'normal',
        }}
      />

      {/* DESKTOP MONOGRAM */}
      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-[54%] top-[52%] -translate-y-1/2 h-[86vh] xl:h-[92vh] w-auto object-contain opacity-[0.96] pointer-events-none select-none z-[1]"
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
          background: `linear-gradient(
            90deg,
            rgb(var(--ei-cosmic-black-rgb) / 1) 0%,
            rgb(var(--ei-cosmic-black-rgb) / 0.98) 20%,
            rgb(var(--ei-cosmic-black-rgb) / 0.78) 36%,
            rgb(var(--ei-cosmic-black-rgb) / 0.28) 50%,
            transparent 62%
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