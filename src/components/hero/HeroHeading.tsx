
export function HeroHeading() {
  return (
    <>
      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-editorial text-3xl md:text-4xl lg:text-6xl text-[#F0F4FF] mb-6 md:mb-8 tracking-wide text-left leading-[1.1]"
        style={{ WebkitTextStroke: '0.25px #24294A' }}
      >
        Echo in Ink
      </h1>

      {/* Core line */}
      <p className="font-structural text-[15px] md:text-[17px] text-white/70 leading-[1.75] mb-10 md:mb-12 text-left max-w-[48ch]">
        Translating inner worlds into identities that survive contact with the world.
      </p>
    </>
  );
}
