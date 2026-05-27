import widePng from '@/assets/new-monogram-balanced-21x9.png';
import wideWebp from '@/assets/new-monogram-balanced-21x9.webp';
import wideAvif from '@/assets/new-monogram-balanced-21x9.avif';
import mobilePng from '@/assets/new-monogram-balanced-16x9.png';
import mobileWebp from '@/assets/new-monogram-balanced-9x16.webp';
import mobileAvif from '@/assets/new-monogram-balanced-9x16.avif';

export function HeroBackground() {
  return (
    <>
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#050816]">
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

      
    </>
  );
}
