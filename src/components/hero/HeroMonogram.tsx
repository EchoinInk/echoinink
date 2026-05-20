import monogram from '@/assets/ei-monogram-balanced.svg';

export function HeroMonogram() {
  return (
    <div className="relative">
      {/* Soft contact shadow - grounding Ei into the surface */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'clamp(180px, 20vw, 320px)',
          height: 'clamp(180px, 20vw, 320px)',
          background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(24px)',
          transform: 'translateY(12px)',
        }}
      />

      {/* Ei monogram - emerging from illuminated ink */}
      <img
        src={monogram}
        alt="Ei monogram"
        className="relative mx-auto"
        style={{
          width: 'clamp(160px, 18vw, 280px)',
          opacity: 0.95,
          filter: `
            brightness(0.94)
            contrast(0.92)
            saturate(1.0)
            drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))
            drop-shadow(0 0 16px rgba(167, 139, 250, 0.1))
            drop-shadow(0 0 32px rgba(99, 102, 241, 0.06))
          `,
          zIndex: 2,
        }}
      />
    </div>
  );
}
