import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroDescription } from './HeroDescription';
import { HeroHeading } from './HeroHeading';
import { HeroLighting } from './HeroLighting';
import { HeroReflection } from './HeroReflection';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-screen overflow-hidden">
      {/* Layer 1: Background */}
      <HeroBackground />
      <HeroReflection />

      {/* Layer 2: Ei artwork - centered in viewport */}
      <div className="absolute inset-0 flex justify-center pointer-events-none pt-[6vh]">
        <div className="relative">
          <HeroLighting />
        </div>
      </div>

      {/* Layer 3: Content - split into 2 independent groups */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Heading Group */}
        <div className="absolute left-1/2 top-[68%] md:top-[70%] -translate-x-1/2 text-center px-6">
          <HeroHeading />
        </div>

        {/* Lower Content Group */}
        <div className="absolute left-1/2 bottom-[6vh] md:bottom-[8vh] -translate-x-1/2 text-center px-6">
          <HeroCTA />
        </div>
      </div>

      <Footer />
    </section>
  );
}
