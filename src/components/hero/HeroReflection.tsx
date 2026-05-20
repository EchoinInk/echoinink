export function HeroReflection() {
  return (
    <>
      {/* Subtle galaxy reflection - nebula light diffusion below Ei */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[4]"
        style={{
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(200px, 30vw, 460px)',
          height: 'clamp(40px, 8vh, 90px)',
          background: 'radial-gradient(ellipse 80% 35% at 50% 60%, rgba(180, 140, 220, 0.04) 0%, rgba(120, 80, 180, 0.025) 40%, rgba(0, 180, 200, 0.015) 65%, transparent 100%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          opacity: 0.45,
        }}
      />
    </>
  );
}
