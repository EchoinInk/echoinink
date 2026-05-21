import heroPng from '@/assets/ei-x-mono-16x9.png';
import heroWebp from '@/assets/ei-dark-mono-16x9.webp';
import heroAvif from '@/assets/ei-dark-mono-16x9.avif';

export function HeroBackground() {
  return (
    <>
      {/* Layer 1: Primary hero image - exact creative direction */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <picture>
          <source srcSet={heroAvif} type="image/avif" />
          <source srcSet={heroWebp} type="image/webp" />
          <img
            src={heroPng}
            alt=""
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
        </picture>
      </div>

      {/* Layer 2: Very subtle center focus - preserves nebula basin illumination */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 10, 0.08) 100%)',
        }}
      />

      {/* Layer 3: Soft vignette - preserves environmental darkness */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 55%, rgba(0, 0, 10, 0.12) 100%)',
        }}
      />

      {/* Layer 4: Top atmospheric frame - soft darkness for navigation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[6]"
        style={{
          height: '15vh',
          background: 'linear-gradient(to bottom, rgba(0, 0, 10, 0.2) 0%, transparent 100%)',
        }}
      />

      {/* Layer 5: Bottom atmospheric fade - cinematic dissolve */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '35vh',
          background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 10, 0.15) 40%, rgba(0, 0, 10, 0.35) 70%, #000000 100%)',
        }}
      />
    </>
  );
}
