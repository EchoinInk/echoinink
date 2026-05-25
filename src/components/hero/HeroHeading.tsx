export function HeroHeading() {
  return (
    <div className="ei-monogram-frame">
      {/* Display heading — The EI monogram identity 
          Sacred visual element - isolated, timeless, emotionally weighted */}
      <h1
        id="hero-heading"
        className="ei-hero-display"
        style={{ 
          marginBottom: '2rem',
          WebkitTextStroke: '0.1px rgba(36, 41, 74, 0.35)',
          textShadow: '0 0 60px rgba(99, 102, 241, 0.08), 0 0 120px rgba(99, 102, 241, 0.04)',
          letterSpacing: '-0.02em',
        }}
      >
        Echo in Ink
      </h1>

      {/* Lead text — Emotional positioning (separate from monogram) */}
      <p 
        className="ei-hero-lead"
        style={{ 
          marginTop: '1.5rem',
          opacity: 0.48,
        }}
      >
        Translating inner worlds into coherent identities.
      </p>
    </div>
  );
}
