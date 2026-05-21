import monogram from '@/assets/ei-glow-2.png';

export function HeroMonogram() {
  return (
    <img
      src={monogram}
      alt="Ei monogram"
      className="relative mx-auto"
      style={{
  width: 'clamp(170px, 18vh, 280px)',
  opacity: 0.94,
  filter: `
    brightness(0.92)
    contrast(0.9)
    saturate(1.02)
    drop-shadow(0 0 8px rgba(232, 121, 249, 0.12))
    drop-shadow(0 0 22px rgba(168, 85, 247, 0.10))
    drop-shadow(0 0 48px rgba(99, 102, 241, 0.06))
  `,
  zIndex: 2,
}}
    />
  );
}