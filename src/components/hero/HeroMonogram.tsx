import monogram from '@/assets/ei-bg-moono.png';

export function HeroMonogram() {
  return (
    <img
      src={monogram}
      alt="Ei monogram"
      className="relative mx-auto"
      style={{
        width: 'clamp(155px, 29vh, 382px)',
        filter: 'brightness(0.91) contrast(0.87) saturate(1.08) drop-shadow(0 0 10px rgba(232, 121, 249, 0.18)) drop-shadow(-1px 1px 32px rgba(168, 85, 247, 0.16)) drop-shadow(-2px 2px 80px rgba(99, 102, 241, 0.10)) drop-shadow(0 0 140px rgba(168, 85, 247, 0.05))',
        zIndex: 2,
      }}
    />
  );
}
