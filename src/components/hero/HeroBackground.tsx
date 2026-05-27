import widePng from '@/assets/new-monogram-balanced-16.png';
import wideWebp from '@/assets/new-monogram-balanced.webp';
import wideAvif from '@/assets/new-monogram-balanced.avif';
import mobilePng from '@/assets/ei-min-hero-9x16.png';
import mobileWebp from '@/assets/ei-min-hero-9x16.webp';
import mobileAvif from '@/assets/ei-min-hero-9x16.avif';

export function HeroBackground() {
  return (
    <>
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#060816]">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileAvif} type="image/avif" />
          <source media="(max-width: 767px)" srcSet={mobileWebp} type="image/webp" />
          <source srcSet={wideAvif} type="image/avif" />
          <source srcSet={wideWebp} type="image/webp" />
          <img
            src={widePng}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-auto object-contain object-top md:inset-0 md:h-full md:object-cover md:object-center"
          />
        </picture>
      </div>

      {/* Cinematic top frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,7,16,0.18) 0%, rgba(5,7,16,0.06) 11%, transparent 24%)',
        }}
      />

      {/* Bottom atmospheric fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7] h-[10vh] md:h-[32vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(15,18,32,0.20) 40%, rgba(15,18,32,0.30) 72%, #0F1220 100%)',
        }}
      />

      {/* Radial vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'radial-gradient(circle at center, transparent 38%, rgba(3,5,12,0.13) 100%)',
        }}
      />
    </>
  );
}
