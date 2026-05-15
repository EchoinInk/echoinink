import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import { StarDivider } from './StarDivider';
import monogram from '@/assets/monogram-balanced.png';

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

      {/* Water surface reflection — monogram light caught on the water below */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(240px, 50vw, 720px)',
          height: 'clamp(50px, 14vh, 160px)',
          background: 'radial-gradient(ellipse 75% 50% at 50% 55%, rgba(168,85,247,0.16) 0%, rgba(30,200,255,0.09) 45%, rgba(232,121,249,0.05) 70%, transparent 100%)',
          filter: 'blur(52px)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram */}
        <div className="relative mt-10 md:mt-12 mb-2 md:mb-3">
          {/* Layer 1: Wide atmospheric haze — fills the surrounding environment with magenta-blue diffusion */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 'clamp(580px, 88vw, 1300px)',
              height: 'clamp(320px, 55vw, 840px)',
              background: 'radial-gradient(ellipse 62% 48% at 48% 52%, rgba(232,121,249,0.13) 0%, rgba(168,85,247,0.07) 40%, rgba(99,102,241,0.04) 65%, transparent 80%)',
              filter: 'blur(90px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          {/* Layer 2: Lateral nebula-blue spread — illuminates surrounding fog and clouds */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 'clamp(380px, 62vw, 900px)',
              height: 'clamp(200px, 36vw, 540px)',
              background: 'radial-gradient(ellipse 72% 42% at 52% 50%, rgba(30,200,255,0.11) 0%, rgba(99,102,241,0.07) 48%, transparent 78%)',
              filter: 'blur(68px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          {/* Layer 3: Core volumetric bloom — primary radiance emanating from the monogram */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 'clamp(190px, 26vw, 400px)',
              height: 'clamp(210px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 52% 62% at 50% 47%, rgba(232,121,249,0.34) 0%, rgba(168,85,247,0.21) 38%, rgba(99,102,241,0.1) 62%, transparent 100%)',
              filter: 'blur(30px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          {/* Layer 4: Inner hot core — luminous source point */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 'clamp(80px, 9vw, 155px)',
              height: 'clamp(85px, 10vw, 170px)',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.18) 0%, rgba(232,121,249,0.22) 45%, transparent 100%)',
              filter: 'blur(14px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />

          <img
            src={monogram}
            alt="Ei monogram"
            className="relative mx-auto"
            style={{
              width: 'clamp(155px, 29vh, 382px)',
              filter: 'drop-shadow(0 0 14px rgba(232, 121, 249, 0.48)) drop-shadow(0 0 36px rgba(168, 85, 247, 0.32)) drop-shadow(0 0 88px rgba(99, 102, 241, 0.16)) drop-shadow(0 0 150px rgba(168, 85, 247, 0.07))',
              zIndex: 2,
            }}
          />

          {/* Atmospheric mist wisp A — environmental fog partially veiling the lower monogram edge */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-38%, -44%)',
              width: 'clamp(160px, 24vw, 360px)',
              height: 'clamp(60px, 10vw, 150px)',
              background: 'radial-gradient(ellipse 85% 55% at 25% 60%, rgba(120,80,200,0.13) 0%, rgba(30,180,255,0.07) 55%, transparent 100%)',
              filter: 'blur(24px)',
              mixBlendMode: 'screen',
              zIndex: 3,
            }}
          />
          {/* Atmospheric mist wisp B — upper trailing cloud passing across the monogram */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-58%, -62%)',
              width: 'clamp(120px, 18vw, 280px)',
              height: 'clamp(45px, 7vw, 110px)',
              background: 'radial-gradient(ellipse 80% 50% at 65% 50%, rgba(168,85,247,0.1) 0%, rgba(30,200,255,0.05) 60%, transparent 100%)',
              filter: 'blur(20px)',
              mixBlendMode: 'screen',
              zIndex: 3,
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
