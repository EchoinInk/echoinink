import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';

export function Hero() {
  return (
<section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background */}
      <HeroBackground />

      {/* Centered content */}
  <div className="ei-container"><div
  className="relative z-10 max-w-[600px] md:max-w-[680px] items-start text-left"
  style={{ transform: 'translateY(8vh)' }}
>

        <HeroHeading />
        <HeroCTA />
      </div>
    </div>
      {/* Footer OVERLAY — does NOT affect height */}
<div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
style={{ transform: 'translateY(22px)' }}></div>

    </section>
  );
}
