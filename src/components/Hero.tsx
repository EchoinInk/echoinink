import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import { StarDivider } from './StarDivider';
import monogram from '@/assets/monogram-balanced-3.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="relative mt-28 md:mt-32 mb-8 md:mb-10">
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
              width: 'clamp(135px, 22vw, 260px)',
              filter: 'drop-shadow(0 0 24px rgba(167, 139, 250, 0.5)) drop-shadow(0 0 48px rgba(99, 102, 241, 0.3))',
              zIndex: 2,
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#F0F4FF] mb-1 md:mb-2 tracking-wide"
          style={{ WebkitTextStroke: '0.25px #24294A' }}
        >
          Echo in Ink
        </h1>
 {/* Tagline */}
        <p
          className="font-structural text-[15px] md:text-[16px] tracking-[0.45em] uppercase mb-0 md:mb-0.5"
          style={{
            background: 'linear-gradient(90deg, #E879F9, #1EC8FF, #6366F1, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          DESIGN. EMOTION. ECHO.
        </p>
        <StarDivider />
        {/* Subcopy */}
        <div className="leading-relaxed mb-5 md:mb-7 max-w-2xl">
          <p className="font-editorial text-xl md:text-5xl text-white/90">
            Where ideas find resonance.
          </p>
          <p className="font-structural text-xl md:text-xl font-light text-white/60 mt-2">
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
