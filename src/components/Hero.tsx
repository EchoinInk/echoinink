import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import monogram from '@/assets/monogram_elevated.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="relative mb-8 md:mb-10">
          {/* Glow sphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.05) 70%, transparent 100%)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(180px, 30vw, 360px)',
              filter: 'drop-shadow(0 0 24px rgba(167, 139, 250, 0.5)) drop-shadow(0 0 48px rgba(99, 102, 241, 0.3))',
              zIndex: 2,
            }}
          />
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
