import { StarDivider } from '../StarDivider';

export function HeroHeading() {
  return (
    <>
      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#F0F4FF] mb-4 md:mb-5 tracking-wide"
        style={{ WebkitTextStroke: '0.25px #24294A' }}
      >
        Echo in Ink
      </h1>

      {/* Tagline */}
      <p
        className="font-structural text-[14px] md:text-[15px] text-white/65 leading-[1.9] mb-8 md:mb-10 text-center"
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
    </>
  );
}
