import mobilePng from '@/assets/ei-dark-mono-9x16.png';
import mobileWebp from '@/assets/ei-dark-mono-9x16.webp';
import mobileAvif from '@/assets/ei-dark-mono-9x16.avif';
import widePng from '@/assets/ei-dark-mono-21x9.png';
import wideWebp from '@/assets/ei-dark-mono-21x9.webp';
import wideAvif from '@/assets/ei-dark-mono-21x9.avif';

export function HeroBackground() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <picture>
          {/* Mobile (portrait) sources */}
          <source media="(max-aspect-ratio: 3/4)" srcSet={mobileAvif} type="image/avif" />
          <source media="(max-aspect-ratio: 3/4)" srcSet={mobileWebp} type="image/webp" />
          <source media="(max-aspect-ratio: 3/4)" srcSet={mobilePng} type="image/png" />

          {/* Wide / desktop sources */}
          <source srcSet={wideAvif} type="image/avif" />
          <source srcSet={wideWebp} type="image/webp" />

          <img
            src={widePng}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Cinematic top frame — atmospheric darkness framing the navigation region */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,7,16,0.18) 0%, rgba(5,7,16,0.06) 11%, transparent 24%)',
        }}
      />

      {/* Bottom atmospheric fade — cinematic dissolve into page */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(15,18,32,0.20) 40%, rgba(15,18,32,0.30) 72%, #0F1220 100%)',
        }}
      />
      <div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none z-[5]"
  style={{
    background:
      'radial-gradient(circle at center, transparent 38%, rgba(3,5,12,0.16) 100%)',
  }}
/>
    </>
  );
}
