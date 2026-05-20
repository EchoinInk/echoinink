export function HeroBackground() {
  return (
    <>
      {/* Layer 1: Deep cosmic void base */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
        }}
      />

      {/* Layer 2: Valley composition - nebula clouds curving inward toward center */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `
            /* Upper left nebula cloud - violet/indigo curving inward */
            radial-gradient(ellipse 70% 50% at 15% 25%, rgba(120, 80, 180, 0.25) 0%, rgba(60, 40, 100, 0.15) 40%, transparent 70%),
            /* Upper right nebula cloud - magenta/violet curving inward */
            radial-gradient(ellipse 65% 45% at 85% 30%, rgba(180, 60, 120, 0.2) 0%, rgba(120, 40, 80, 0.12) 45%, transparent 70%),
            /* Lower left nebula cloud - aqua/indigo curving inward */
            radial-gradient(ellipse 60% 40% at 20% 75%, rgba(0, 180, 200, 0.18) 0%, rgba(30, 50, 120, 0.12) 50%, transparent 70%),
            /* Lower right nebula cloud - indigo/violet curving inward */
            radial-gradient(ellipse 55% 35% at 80% 70%, rgba(60, 40, 120, 0.2) 0%, rgba(120, 80, 180, 0.1) 45%, transparent 70%),
            /* Central luminous basin - light source behind Ei */
            radial-gradient(ellipse 50% 40% at 50% 55%, rgba(180, 140, 220, 0.15) 0%, rgba(120, 80, 180, 0.1) 40%, transparent 65%),
            /* Deep indigo voids at edges */
            radial-gradient(circle at 10% 50%, rgba(10, 15, 40, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(10, 15, 40, 0.6) 0%, transparent 50%),
            /* Cinematic edge falloff - valley composition */
            radial-gradient(circle at center, transparent 45%, rgba(0, 0, 10, 0.7) 100%)
          `,
        }}
      />

      {/* Layer 3: Atmospheric aqua glow - luminous center illumination */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 180, 200, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Layer 4: Restrained star field - subtle depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 15%, rgba(255, 255, 255, 0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 25%, rgba(255, 255, 255, 0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 65%, rgba(255, 255, 255, 0.28) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 80%, rgba(255, 255, 255, 0.32) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 70%, rgba(255, 255, 255, 0.26) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 85%, rgba(255, 255, 255, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 75%, rgba(255, 255, 255, 0.34) 0%, transparent 100%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Layer 5: Reflective cosmic ink surface - beneath Ei */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '45vh',
          background: 'linear-gradient(to bottom, transparent, rgba(60, 40, 120, 0.15) 30%, rgba(0, 180, 200, 0.1) 50%, rgba(180, 140, 220, 0.12) 70%, rgba(0, 0, 10, 0.8) 100%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Layer 6: Top atmospheric frame - soft darkness for navigation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[6]"
        style={{
          height: '15vh',
          background: 'linear-gradient(to bottom, rgba(0, 0, 10, 0.4) 0%, transparent 100%)',
        }}
      />

      {/* Layer 7: Bottom atmospheric fade - cinematic dissolve */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '35vh',
          background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 10, 0.3) 40%, rgba(0, 0, 10, 0.6) 70%, #000000 100%)',
        }}
      />
    </>
  );
}
