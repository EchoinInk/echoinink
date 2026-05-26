import widePng from '@/assets/ei-min-hero-16x9.png';
import wideWebp from '@/assets/ei-min-hero-16x9.webp';
import wideAvif from '@/assets/ei-min-hero-16x9.avif';
import mobilePng from '@/assets/ei-min-hero-9x16.png';
import mobileWebp from '@/assets/ei-min-hero-9x16.webp';
import mobileAvif from '@/assets/ei-min-hero-9x16.avif';

export function HeroBackground() {
  return (
    <>
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-aspect-ratio: 9/16)" srcSet={mobileAvif} type="image/avif" />
          <source media="(max-aspect-ratio: 9/16)" srcSet={mobileWebp} type="image/webp" />
          <source srcSet={wideAvif} type="image/avif" />
          <source srcSet={wideWebp} type="image/webp" />
          <img
            src={widePng}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
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
