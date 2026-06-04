const PALETTE = [
  'var(--ei-electric-blue)',
  'var(--ei-halo-blue)',
  'var(--ei-violet)',
  'var(--ei-echo-magenta)',
  'var(--ei-soft-neon)',
];

const ATTRIBUTES = ['Atmosphere', 'Language', 'Rhythm', 'Voice', 'Presence'];

/**
 * IdentityHeroVisual — a restrained right-side hero visual for the Identity page.
 * Reads as identity direction (palette chips, type specimen, moodboard fragments,
 * a tone line) over a soft light field and quiet linework — not cosmic worldbuilding.
 * Purely decorative; the parent marks it aria-hidden.
 */
export function IdentityHeroVisual() {
  return (
    <div className="ei-identity-visual">
      <div className="ei-identity-visual-field" />
      <div className="ei-identity-visual-grid" />

      <div className="ei-identity-board">
        <div className="ei-identity-board-head">
          <span className="ei-identity-specimen">Aa</span>
          <div className="ei-identity-typelines">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="ei-identity-palette">
          {PALETTE.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>

        <div className="ei-identity-mood">
          <span />
          <span />
          <span />
        </div>

        <svg
          className="ei-identity-wave"
          viewBox="0 0 220 28"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 14h14l5-9 6 18 6-22 6 26 6-18 5 5h16l5-7 6 14 6-16 6 20 6-14 5 3h84"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <ul className="ei-identity-rail">
        {ATTRIBUTES.map((label) => (
          <li key={label}>
            <span className="ei-identity-rail-dot" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
