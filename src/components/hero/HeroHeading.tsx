
export function HeroHeading() {
  return (
    <>
      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-editorial text-3xl md:text-4xl lg:text-6xl text-[#F0F4FF] mb-2 md:mb-3 tracking-wide text-left leading-[1.1]"
        style={{ WebkitTextStroke: '0.25px #24294A' }}
      >
        Echo in Ink
      </h1>

      {/* Tagline */}
      <p
        className="font-structural text-[13px] md:text-[14px] text-white/70 leading-[1.85] mb-8 md:mb-10 text-left"
        style={{
          background: 'linear-gradient(90deg, #E879F9, #1EC8FF, #6366F1, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.85,
        }}
        aria-label="Design, Emotion, Echo"
      >
        DESIGN. EMOTION. ECHO.
      </p>

      {/* Clarity line */}
      <p
  className="font-structural text-[14px] md:text-[15px] text-white/60 leading-[1.75] mb-8 md:mb-10 text-left"
  style={{ maxWidth: '48ch' }}
>
  <span className="text-white/75">Echo in Ink</span> is a creative studio crafting atmospheric
  <span className="block">design, identity, and immersive digital experiences.</span>
</p>

    </>
  );
}
