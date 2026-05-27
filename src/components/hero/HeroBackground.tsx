import widePng from '@/assets/ei-hero-monogram-tr.png';
import mobilePng from '@/assets/ei-hero-monogram.png';

export function HeroBackground() {
  return (
    <>
      {/* Base: no blue glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ei-cosmic-black)]"
      />

      {/* DESKTOP MONOGRAM */}
      <img
        src={widePng}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute left-[52%] top-[52%] -translate-y-1/2 h-[82vh] w-auto object-contain opacity-[0.78] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.82) saturate(0.85) contrast(1)',
          mixBlendMode: 'normal',
        }}
      />

      {/* MOBILE MONOGRAM */}
      <img
        src={mobilePng}
        alt=""
        aria-hidden="true"
        className="block md:hidden absolute inset-0 h-full w-full object-cover object-center opacity-[0.72] pointer-events-none select-none z-[1]"
        style={{
          filter: 'brightness(0.82) saturate(0.85) contrast(1)',
          mixBlendMode: 'normal',
        }}
      />

      {/* LEFT BLACK FADE ONLY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `linear-gradient(
            90deg,
            rgb(var(--ei-cosmic-black-rgb) / 1) 0%,
            rgb(var(--ei-cosmic-black-rgb) / 0.98) 22%,
            rgb(var(--ei-cosmic-black-rgb) / 0.82) 40%,
            rgb(var(--ei-cosmic-black-rgb) / 0.36) 56%,
            transparent 72%
          )`,
        }}
      />

      {/* TOP BLACK FADE ONLY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgb(var(--ei-cosmic-black-rgb) / 0.88) 0%,
            rgb(var(--ei-cosmic-black-rgb) / 0.44) 14%,
            transparent 34%
          )`,
        }}
      />

      {/* BOTTOM BLACK FADE ONLY */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[4] h-[24vh]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgb(var(--ei-cosmic-black-rgb) / 0.5) 70%,
            var(--ei-cosmic-black) 100%
          )`,
        }}
      />
    </>
  );
}