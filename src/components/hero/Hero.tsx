import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';

export function Hero() {
  return (
<section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background */}
      <HeroBackground />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-start text-left px-6"
        style={{ transform: 'translateY(6vh)' }}
      >
        <HeroHeading />
        <HeroCTA />
      </div>

      {/* Footer OVERLAY — does NOT affect height */}
<div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none pb-4 md:pb-6">
  <Footer />
</div>
        <Footer />
      </div>

    </section>
  );
}
