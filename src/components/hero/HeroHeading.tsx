import { StarDivider } from '../StarDivider';

export function HeroHeading() {
  return (
    <>
      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#F0F4FF] mt-[62vh] md:mt-[62vh] mb-2 md:mb-3 tracking-wide"
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
        aria-label="Design, Emotion, Echo"
      >
        DESIGN. EMOTION. ECHO.
      </p>

      <StarDivider />

      {/* Clarity line — concise positioning statement */}
      <p
        className="font-structural text-[14px] md:text-[15px] text-white/65 leading-[1.8] mb-6 md:mb-8 text-center"
        style={{ maxWidth: '48ch' }}
      >
        <span className="text-white/80">Echo in Ink</span> is a creative studio crafting atmospheric design, identity, and immersive digital experiences.
      </p>
    </>
  );
}
