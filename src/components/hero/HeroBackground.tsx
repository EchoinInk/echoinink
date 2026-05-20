export function HeroBackground() {
  return (
    <>
      {/* Layer 1: Dark ink surface with embossed editorial grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: '#0F1220',
          backgroundImage: `
            linear-gradient(90deg, rgba(28, 32, 64, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(28, 32, 64, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Layer 2: Atmospheric radial illumination - light interacting with ink */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(21, 25, 51, 0.6) 0%, rgba(15, 18, 32, 0.85) 50%, #0F1220 100%)',
        }}
      />

      {/* Layer 3: Subtle volumetric haze */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(167, 139, 250, 0.03) 0%, transparent 50%)',
        }}
      />

      {/* Layer 4: Cinematic edge falloff - darkness at edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(5, 7, 16, 0.4) 100%)',
        }}
      />

      {/* Layer 5: Top atmospheric frame - soft darkness for navigation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[6]"
        style={{
          height: '20vh',
          background: 'linear-gradient(to bottom, rgba(5, 7, 16, 0.25) 0%, transparent 100%)',
        }}
      />

      {/* Layer 6: Bottom atmospheric fade - cinematic dissolve */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(15, 18, 32, 0.25) 40%, rgba(15, 18, 32, 0.5) 72%, #0F1220 100%)',
        }}
      />
    </>
  );
}
