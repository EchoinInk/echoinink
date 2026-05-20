export function HeroReflection() {
  return (
    <>
      {/* Cosmic surface reflection - nebula light diffusion below Ei */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[4]"
        style={{
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(220px, 32vw, 480px)',
          height: 'clamp(45px, 9vh, 100px)',
          background: 'radial-gradient(ellipse 80% 35% at 50% 60%, rgba(120, 80, 180, 0.05) 0%, rgba(30, 50, 120, 0.03) 40%, rgba(0, 180, 200, 0.02) 65%, rgba(180, 60, 120, 0.015) 80%, transparent 100%)',
          filter: 'blur(45px)',
          mixBlendMode: 'screen',
          opacity: 0.5,
        }}
      />
    </>
  );
}
