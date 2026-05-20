export function HeroReflection() {
  return (
    <>
      {/* Subtle nebula reflection - atmospheric light diffusion below Ei */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[4]"
        style={{
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(180px, 28vw, 440px)',
          height: 'clamp(38px, 7.5vh, 85px)',
          background: 'radial-gradient(ellipse 80% 35% at 50% 60%, rgba(180, 140, 220, 0.035) 0%, rgba(120, 80, 180, 0.02) 40%, rgba(160, 120, 200, 0.015) 65%, transparent 100%)',
          filter: 'blur(38px)',
          mixBlendMode: 'screen',
          opacity: 0.4,
        }}
      />
    </>
  );
}
