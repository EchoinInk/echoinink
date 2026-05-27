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
className="
absolute
top-[4%]
right-[-6%]
w-[92%]
h-auto
object-contain
object-top

md:top-0
md:right-[-4%]
md:w-[78%]
md:h-full
md:object-contain
md:object-right

opacity-[0.92]
scale-[0.92]
"          />
        </picture>
      </div>

      {/* Cinematic top frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,7,16,0.14) 0%, rgba(5,7,16,0.04) 10%, transparent 22%)',
        }}
      />

      {/* Bottom atmospheric fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7] h-[14vh] md:h-[28vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(8,10,22,0.14) 38%, rgba(8,10,22,0.32) 72%, #070B17 100%)',
        }}
      />
    </>
  );
}
