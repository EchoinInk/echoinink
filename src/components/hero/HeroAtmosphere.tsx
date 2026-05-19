export function HeroAtmosphere() {
  return (
    <>
      {/* Vignette to darken busy background behind the focal area */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 65% 64% at 50% 45%, rgba(8,10,22,0.68) 0%, rgba(8,10,22,0.30) 42%, transparent 72%)',
        }}
      />
    </>
  );
}
