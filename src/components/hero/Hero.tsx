import { Footer } from '../Footer';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroHeading } from './HeroHeading';

export function Hero() {
  return (
<section className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ transform: 'translateY(6vh)' }}>

        <HeroHeading />
        <HeroCTA />
      </div>
      <
    </section>
    
  );
}