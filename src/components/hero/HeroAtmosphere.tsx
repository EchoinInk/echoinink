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

      {/* Secondary Energy Zone 1: Upper-left nebula cloud pocket */}
      <div
        aria-hidden="true"
        className="ei-nebula-violet absolute pointer-events-none z-[3]"
        style={{
          top: '5%',
          left: '2%',
          width: 'clamp(180px, 28vw, 420px)',
          height: 'clamp(140px, 20vw, 300px)',
        }}
      />
      {/* Secondary Energy Zone 2: Right-side indigo nebula depth */}
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
      {/* Secondary Energy Zone 3: Lower-left violet atmospheric pool */}
      <div
        aria-hidden="true"
        className="ei-nebula-violet absolute pointer-events-none z-[3]"
        style={{
          bottom: '22%',
          left: '5%',
          width: 'clamp(200px, 30vw, 460px)',
          height: 'clamp(110px, 16vw, 260px)',
        }}
      />
    </>
  );
}
