import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';
import { HeroLighting } from './HeroLighting';
import { HeroReflection } from './HeroReflection';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroReflection />

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ transform: 'translateY(6vh)' }}>
        {/* Monogram */}
        <div className="relative mt-4 md:mt-6 mb-2 md:mb-4">
          <HeroLighting />
        </div>

        <HeroHeading />
        <HeroCTA />
      </div>

      <Footer />
    </section>
  );
}