import galaxyPng from '@/assets/ei-galaxy-background-21x9.png';
import galaxyWebp from '@/assets/ei-galaxy-background-21x9.webp';
import galaxyAvif from '@/assets/ei-galaxy-background-21x9.avif';

export function HeroBackground() {
  return (
    <>
      {/* Layer 1: Galaxy image - primary environment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <picture>
          <source srcSet={galaxyAvif} type="image/avif" />
          <source srcSet={galaxyWebp} type="image/webp" />
          <img
            src={galaxyPng}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Layer 2: Very subtle center focus - enhances nebula visibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 10, 0.15) 100%)',
        }}
      />

      {/* Layer 3: Soft vignette - restrained edge darkening */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 60%, rgba(0, 0, 10, 0.25) 100%)',
        }}
      />

      {/* Layer 4: Slight atmospheric diffusion - faint haze integration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(20, 30, 80, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Layer 5: Top atmospheric frame - soft darkness for navigation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[6]"
        style={{
          height: '20vh',
          background: 'linear-gradient(to bottom, rgba(0, 0, 10, 0.15) 0%, transparent 100%)',
        }}
      />

      {/* Layer 6: Bottom atmospheric fade - cinematic dissolve */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 10, 0.15) 40%, rgba(0, 0, 10, 0.35) 72%, #000000 100%)',
        }}
      />
    </>
  );
}
