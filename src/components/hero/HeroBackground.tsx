export function HeroBackground() {
  return (
    <>
      {/* Layer 1: Cosmic black base with nebula color foundation */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
          backgroundImage: `
            /* Aqua/cyan diffusion from left */
            radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0, 180, 200, 0.15) 0%, transparent 70%),
            /* Deep indigo from center */
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30, 50, 120, 0.2) 0%, transparent 60%),
            /* Soft electric violet from upper right */
            radial-gradient(ellipse 50% 50% at 75% 30%, rgba(120, 80, 180, 0.12) 0%, transparent 65%),
            /* Restrained magenta/pink from lower right */
            radial-gradient(ellipse 40% 40% at 85% 70%, rgba(180, 60, 120, 0.1) 0%, transparent 60%),
            /* Deep cosmic black falloff */
            radial-gradient(circle at center, transparent 40%, rgba(0, 0, 10, 0.8) 100%)
          `,
        }}
      />

      {/* Layer 2: Subtle embossed grid - barely visible, elegant */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Layer 3: Atmospheric nebula haze - soft diffusion */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(20, 30, 80, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Layer 4: Cinematic edge darkening - depth framing */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 10, 0.5) 100%)',
        }}
      />

      {/* Layer 5: Top atmospheric frame - soft darkness for navigation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[6]"
        style={{
          height: '20vh',
          background: 'linear-gradient(to bottom, rgba(0, 0, 10, 0.3) 0%, transparent 100%)',
        }}
      />

      {/* Layer 6: Bottom atmospheric fade - cinematic dissolve */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 10, 0.3) 40%, rgba(0, 0, 10, 0.6) 72%, #000000 100%)',
        }}
      />
    </>
  );
}
