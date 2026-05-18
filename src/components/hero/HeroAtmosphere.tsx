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

      {/* Left-side violet nebula — combined upper-left and lower-left energy zones */}
      <div
        aria-hidden="true"
        className="ei-nebula-violet absolute pointer-events-none z-[3]"
        style={{
          top: '5%',
          left: '2%',
          width: 'clamp(220px, 32vw, 480px)',
          height: 'clamp(400px, 56vh, 640px)',
        }}
      />
      {/* Right-side indigo nebula depth */}
      <div
        aria-hidden="true"
        className="ei-nebula-cyan absolute pointer-events-none z-[3]"
        style={{
          top: '28%',
          right: '3%',
          width: 'clamp(160px, 22vw, 360px)',
          height: 'clamp(200px, 28vw, 440px)',
        }}
      />
    </>
  );
}
