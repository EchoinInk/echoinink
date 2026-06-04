import heroAtmosphere from '@/assets/imagery/hero/identity-hero-atmosphere.png';

/**
 * IdentityHeroVisual — the right-side atmospheric field for the Identity hero.
 * Uses the luminous identity-hero asset, cropped on the ring/glow and dissolved
 * into the page background with edge fades + a feathered mask so it supports the
 * copy rather than reading as a full landscape. Purely decorative (aria-hidden).
 */
export function IdentityHeroVisual() {
  return (
    <div className="ei-identity-hero-media">
      <img
        src={heroAtmosphere}
        alt="Echo in Ink - Identity"
        aria-hidden="true"
        className="ei-identity-hero-img"
      />
      <div className="ei-identity-hero-veil" aria-hidden="true" />
      <div className="ei-identity-hero-fade-left" aria-hidden="true" />
      <div className="ei-identity-hero-fade-bottom" aria-hidden="true" />
    </div>
  );
}
