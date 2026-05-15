import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import { StarDivider } from './StarDivider';
import monogram from '@/assets/monogram-hero.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      {/* Vignette to darken busy background behind the focal area */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 42%, rgba(8,10,22,0.6) 0%, rgba(8,10,22,0.25) 40%, transparent 72%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="relative mt-14 md:mt-16 mb-2 md:mb-3">
          {/* Layered cinematic glow — concentrated and luminous */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style={{
              width: 'clamp(240px, 30vw, 460px)',
              height: 'clamp(240px, 30vw, 460px)',
              background: 'radial-gradient(circle, rgba(232,121,249,0.28) 0%, rgba(168,85,247,0.18) 35%, rgba(99,102,241,0.08) 60%, transparent 100%)',
              filter: 'blur(48px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style={{
              width: 'clamp(160px, 18vw, 300px)',
              height: 'clamp(160px, 18vw, 300px)',
              background: 'radial-gradient(circle, rgba(30,200,255,0.22) 0%, rgba(99,102,241,0.14) 45%, transparent 100%)',
              filter: 'blur(32px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style={{
              width: 'clamp(100px, 11vw, 190px)',
              height: 'clamp(100px, 11vw, 190px)',
              background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(232,121,249,0.12) 50%, transparent 100%)',
              filter: 'blur(18px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />

          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(170px, 32vh, 420px)',
              filter: 'drop-shadow(0 0 18px rgba(232, 121, 249, 0.55)) drop-shadow(0 0 42px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 80px rgba(99, 102, 241, 0.2))',
              zIndex: 2,
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#F0F4FF] mt-3 md:mt-4 mb-0.5 md:mb-1 tracking-wide"
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
        <div className="leading-relaxed mb-4 md:mb-6 max-w-2xl">
          <p className="font-editorial text-xl md:text-5xl text-white/90">
            Where ideas find resonance.
          </p>
          <p className="font-structural text-xl md:text-xl font-light text-white/60 mt-1.5">
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
