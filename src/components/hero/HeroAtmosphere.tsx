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
        className="absolute pointer-events-none z-[3]"
        style={{
          top: '5%',
          left: '2%',
          width: 'clamp(180px, 28vw, 420px)',
          height: 'clamp(140px, 20vw, 300px)',
          background: 'radial-gradient(ellipse 68% 62% at 35% 40%, rgba(168,85,247,0.07) 0%, rgba(120,55,200,0.04) 50%, transparent 80%)',
          filter: 'blur(64px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Secondary Energy Zone 2: Right-side indigo nebula depth */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[3]"
        style={{
          top: '28%',
          right: '3%',
          width: 'clamp(160px, 22vw, 360px)',
          height: 'clamp(200px, 28vw, 440px)',
          background: 'radial-gradient(ellipse 58% 70% at 62% 44%, rgba(30,140,255,0.06) 0%, rgba(99,102,241,0.03) 55%, transparent 82%)',
          filter: 'blur(76px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Secondary Energy Zone 3: Lower-left violet atmospheric pool */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[3]"
        style={{
          bottom: '22%',
          left: '5%',
          width: 'clamp(200px, 30vw, 460px)',
          height: 'clamp(110px, 16vw, 260px)',
          background: 'radial-gradient(ellipse 72% 58% at 32% 55%, rgba(180,75,240,0.05) 0%, rgba(99,102,241,0.03) 52%, transparent 80%)',
          filter: 'blur(82px)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
