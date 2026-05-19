import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
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
<div className="absolute inset-0 flex justify-center pointer-events-none pt-[6vh]">        <div className="relative">
          <HeroLighting />
        </div>
      </div>

      {/* Layer 3: Content/text - anchored near lower portion */}
<div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center px-6 pb-8 md:pb-12">        <HeroHeading />
        <HeroCTA />
      </div>

      <Footer />
    </section>
  );
}
