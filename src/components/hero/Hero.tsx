import { Footer } from '../Footer';
import { HeroAtmosphere } from './HeroAtmosphere';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { HeroLighting } from './HeroLighting';
import { HeroMonogram } from './HeroMonogram';
import { HeroReflection } from './HeroReflection';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-screen overflow-hidden">
      {/* Layer 1: Background */}
      <HeroBackground />
      <HeroAtmosphere />
      <HeroReflection />

      {/* Layer 2: Ei artwork - centered in viewport */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <HeroLighting />
          <HeroMonogram />
        </div>
      </div>

      {/* Layer 3: Content/text - anchored near lower portion */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center text-center px-6 pb-16 md:pb-24" style={{ marginTop: '14vh' }}>
        <HeroHeading />
        <HeroCTA />
      </div>

      <Footer />
    </section>
  );
}
