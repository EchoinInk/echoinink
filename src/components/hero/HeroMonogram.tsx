import monogram from '@/assets/monogram-balanced.png';

export function HeroMonogram() {
  return (
    <img
      src={monogram}
      alt="Ei monogram"
      className="relative mx-auto"
      style={{
  width: 'clamp(140px, 14.9vh, 232px)',
  opacity: 0.88,
  filter: `
    brightness(0.95)
    contrast(0.88)
    saturate(1.02)
    drop-shadow(0 0 8px rgba(232, 121, 249, 0.07))
    drop-shadow(0 0 22px rgba(168, 85, 247, 0.06))
    drop-shadow(0 0 48px rgba(99, 102, 241, 0.04))
  `,
  zIndex: 2,
}}
    />
  );
}