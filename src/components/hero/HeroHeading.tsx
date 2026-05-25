export function HeroHeading() {
  return (
    <div className="ei-monogram-frame">
      {/* Display heading — The EI monogram identity */}
      <h1
        id="hero-heading"
        className="ei-hero-display ei-text-space-lg"
        style={{ 
          WebkitTextStroke: '0.15px rgba(36, 41, 74, 0.5)',
          textShadow: '0 0 80px rgba(99, 102, 241, 0.15)',
        }}
      >
        Echo in Ink
      </h1>

      {/* Lead text — Emotional positioning */}
      <p className="ei-hero-lead">
        Translating inner worlds into coherent identities.
      </p>
    </div>
  );
}
