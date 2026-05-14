import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="mb-8 md:mb-10">
          <span
            className="font-editorial text-7xl md:text-8xl lg:text-9xl text-white/90"
            style={{
              textShadow: '0 0 40px rgba(30, 200, 255, 0.3), 0 0 80px rgba(167, 139, 250, 0.2)',
            }}
          >
            Ei
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-5 tracking-wide">
          Echo in Ink
        </h1>

        {/* Tagline */}
        <p className="font-structural text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6 md:mb-8">
          DESIGN. EMOTION. ECHO.
        </p>

        {/* Subcopy */}
        <div className="font-structural text-sm md:text-base text-white/50 leading-relaxed mb-10 md:mb-12 max-w-md">
          <p>Where ideas find resonance.</p>
          <p>Where stories find form.</p>
        </div>

        {/* CTA */}
        <Button>ENTER THE SANCTUARY</Button>
      </div>

      <Footer />
    </section>
  );
}
