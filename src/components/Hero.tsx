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

      {/* Secondary Energy Zone 1: Upper-left nebula cloud pocket */}
      <div
        className="absolute pointer-events-none z-[3]"
        style={{
          top: '5%',
          left: '2%',
          width: 'clamp(180px, 28vw, 420px)',
          height: 'clamp(140px, 20vw, 300px)',
          background: 'radial-gradient(ellipse 68% 62% at 35% 40%, rgba(168,85,247,0.10) 0%, rgba(120,55,200,0.06) 50%, transparent 80%)',
          filter: 'blur(58px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Secondary Energy Zone 2: Right-side indigo nebula depth */}
      <div
        className="absolute pointer-events-none z-[3]"
        style={{
          top: '28%',
          right: '3%',
          width: 'clamp(160px, 22vw, 360px)',
          height: 'clamp(200px, 28vw, 440px)',
          background: 'radial-gradient(ellipse 58% 70% at 62% 44%, rgba(30,140,255,0.09) 0%, rgba(99,102,241,0.05) 55%, transparent 82%)',
          filter: 'blur(65px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Secondary Energy Zone 3: Lower-left violet atmospheric pool */}
      <div
        className="absolute pointer-events-none z-[3]"
        style={{
          bottom: '22%',
          left: '5%',
          width: 'clamp(200px, 30vw, 460px)',
          height: 'clamp(110px, 16vw, 260px)',
          background: 'radial-gradient(ellipse 72% 58% at 32% 55%, rgba(180,75,240,0.08) 0%, rgba(99,102,241,0.04) 52%, transparent 80%)',
          filter: 'blur(72px)',
          mixBlendMode: 'screen',
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
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, rgba(232,121,249,0.20) 45%, transparent 100%)',
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

          {/* Reciprocal edge tinting — nebula haze coloring logo edges, transparent at center */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(165px, 28vw, 420px)',
              height: 'clamp(175px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 92% 92% at 50% 50%, transparent 20%, rgba(110,50,200,0.26) 50%, rgba(40,110,240,0.16) 72%, transparent 100%)',
              filter: 'blur(10px)',
              mixBlendMode: 'multiply',
              zIndex: 4,
            }}
          />
          {/* Upper-left atmospheric depth — cool nebula feeding light into upper-left logo edge */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-82%, -68%)',
              width: 'clamp(80px, 12vw, 180px)',
              height: 'clamp(100px, 16vw, 240px)',
              background: 'radial-gradient(ellipse 80% 82% at 82% 60%, rgba(30,150,255,0.20) 0%, rgba(90,100,240,0.12) 55%, transparent 100%)',
              filter: 'blur(14px)',
              mixBlendMode: 'multiply',
              zIndex: 4,
            }}
          />
          {/* Lower-right atmospheric depth — warm violet contaminating lower-right logo edge */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-22%, -32%)',
              width: 'clamp(70px, 10vw, 160px)',
              height: 'clamp(90px, 14vw, 210px)',
              background: 'radial-gradient(ellipse 78% 80% at 20% 30%, rgba(180,70,230,0.18) 0%, rgba(99,60,220,0.10) 55%, transparent 100%)',
              filter: 'blur(13px)',
              mixBlendMode: 'multiply',
              zIndex: 4,
            }}
          />
          {/* Particulate shimmer — faint energy scatter around brightest logo zones */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(140px, 20vw, 320px)',
              height: 'clamp(150px, 22vw, 350px)',
              background: 'radial-gradient(circle at 18% 32%, rgba(255,255,255,0.07) 0%, transparent 32%), radial-gradient(circle at 78% 22%, rgba(232,121,249,0.06) 0%, transparent 26%), radial-gradient(circle at 62% 75%, rgba(30,200,255,0.05) 0%, transparent 30%), radial-gradient(circle at 28% 80%, rgba(168,85,247,0.06) 0%, transparent 24%), radial-gradient(circle at 90% 55%, rgba(255,255,255,0.04) 0%, transparent 20%)',
              filter: 'blur(5px)',
              mixBlendMode: 'screen',
              zIndex: 4,
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
