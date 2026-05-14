import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import monogram from '@/assets/monogram-balanced.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="relative mb-8 md:mb-10">
          {/* Glow halo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style={{
              width: 'clamp(300px, 45vw, 700px)',
              height: 'clamp(300px, 45vw, 700px)',
              background: 'radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(99,102,241,0.22) 35%, rgba(56,189,248,0.12) 60%, transparent 100%)',
              filter: 'blur(90px)',
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
        <p
          className="font-structural text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 md:mb-8"
          style={{
            background: 'linear-gradient(90deg, #1EC8FF, #6366F1, #A78BFA, #E879F9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          DESIGN. EMOTION. ECHO.
        </p>

        {/* Subcopy */}
        <div className="leading-relaxed mb-10 md:mb-12 max-w-md">
          <p className="font-editorial text-base md:text-lg text-white/60">
            Where ideas find resonance.
          </p>
          <p className="font-structural text-xs md:text-sm text-white/40 mt-1">
            Where stories find form.
          </p>
        </div>

        {/* CTA */}
        <Button>ENTER THE SANCTUARY</Button>
      </div>

      <Footer />
    </section>
  );
}
