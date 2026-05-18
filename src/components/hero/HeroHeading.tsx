import { StarDivider } from '../StarDivider';

export function HeroHeading() {
  return (
    <>
      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#F0F4FF] mt-2 md:mt-3 mb-2 md:mb-3 tracking-wide"
        style={{ WebkitTextStroke: '0.25px #24294A' }}
      >
        Echo in Ink
      </h1>

      {/* Tagline */}
      <p
        className="font-structural text-[13px] md:text-[14px] tracking-[0.42em] uppercase mb-1 md:mb-1.5"
        style={{
          background: 'linear-gradient(90deg, #E879F9, #1EC8FF, #6366F1, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.8,
        }}
      >
        DESIGN. EMOTION. ECHO.
      </p>

      <StarDivider />

      {/* Clarity line — positioning statement */}
      <p
        className="font-structural text-[14px] md:text-[15px] text-white/55 leading-[1.9] mb-7 md:mb-9 text-center"
        style={{ maxWidth: '52ch' }}
      >
        Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media.
      </p>
    </>
  );
}
