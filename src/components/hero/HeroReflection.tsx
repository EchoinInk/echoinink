export function HeroReflection() {
  return (
    <>
      {/* Subtle ink surface reflection - ambient light diffusion below Ei */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[4]"
        style={{
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(200px, 30vw, 450px)',
          height: 'clamp(40px, 8vh, 90px)',
          background: 'radial-gradient(ellipse 80% 35% at 50% 60%, rgba(167, 139, 250, 0.04) 0%, rgba(99, 102, 241, 0.025) 45%, rgba(30, 200, 255, 0.015) 70%, transparent 100%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
      />
    </>
  );
}
