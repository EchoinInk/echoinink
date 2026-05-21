import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroDescription } from './HeroDescription';
import { HeroHeading } from './HeroHeading';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative 
        w-full 
        overflow-hidden 
        aspect-[9/16] 
        md:aspect-[21/9]
      "
    >
      <HeroBackground />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 top-[68%] md:top-[70%] -translate-x-1/2 text-center px-6">
          <HeroHeading />
        </div>

        <div className="absolute left-1/2 bottom-[6vh] md:bottom-[8vh] -translate-x-1/2 text-center px-6">
          <HeroCTA />
        </div>
      </div>

      <section className="relative w-full overflow-hidden aspect-[9/16] md:aspect-[21/9]">
  <HeroBackground />

  <div className="absolute inset-0 z-10 pointer-events-none">
    <HeroHeading />
    <HeroCTA />

    {/* Footer text inside hero */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white opacity-80">
      <p className="text-xs tracking-wide">INK MEETS LIGHT.</p>
      <p className="text-xs tracking-wide">EMOTIONS BECOME DESIGN.</p>
    </div>
  </div>
</section>

{/* Real footer below */}
<Footer />
  );
}