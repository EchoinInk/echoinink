import { BackgroundLayer } from './BackgroundLayer';
import { Button } from './Button';
import { Footer } from './Footer';
import { StarDivider } from './StarDivider';
import monogram from '@/assets/monogram-balanced.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      {/* Cinematic top frame — atmospheric darkness framing the navigation region */}
      <div
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,7,16,0.50) 0%, rgba(5,7,16,0.14) 11%, transparent 24%)',
        }}
      />

      {/* Vignette to darken busy background behind the focal area */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse 65% 64% at 50% 45%, rgba(8,10,22,0.68) 0%, rgba(8,10,22,0.30) 42%, transparent 72%)',
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
          background: 'radial-gradient(ellipse 68% 62% at 35% 40%, rgba(168,85,247,0.07) 0%, rgba(120,55,200,0.04) 50%, transparent 80%)',
          filter: 'blur(64px)',
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
          background: 'radial-gradient(ellipse 58% 70% at 62% 44%, rgba(30,140,255,0.06) 0%, rgba(99,102,241,0.03) 55%, transparent 82%)',
          filter: 'blur(76px)',
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
          background: 'radial-gradient(ellipse 72% 58% at 32% 55%, rgba(180,75,240,0.05) 0%, rgba(99,102,241,0.03) 52%, transparent 80%)',
          filter: 'blur(82px)',
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
          background: 'radial-gradient(ellipse 84% 38% at 48% 58%, rgba(168,85,247,0.10) 0%, rgba(30,200,255,0.06) 48%, rgba(232,121,249,0.03) 72%, transparent 100%)',
          filter: 'blur(70px)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ transform: 'translateY(6vh)' }}>
        {/* Monogram */}
        <div className="relative mt-4 md:mt-6 mb-2 md:mb-4">
          {/* Layer 1: Wide atmospheric haze — fills the surrounding environment with magenta-blue diffusion */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              transform: 'translate(calc(-50% - 2.5vw), calc(-50% + 4vh))',
              width: 'clamp(580px, 88vw, 1300px)',
              height: 'clamp(260px, 44vw, 680px)',
              background: 'radial-gradient(ellipse 62% 48% at 44% 65%, rgba(232,121,249,0.09) 0%, rgba(168,85,247,0.05) 40%, rgba(99,102,241,0.025) 65%, transparent 80%)',
              filter: 'blur(90px)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          />
          {/* Layer 2: Lateral nebula-blue spread — illuminates surrounding fog and clouds */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              transform: 'translate(calc(-50% + 2vw), calc(-50% - 1.2vh))',
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
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgba(232,121,249,0.25) 0%, rgba(168,85,247,0.15) 38%, rgba(99,102,241,0.07) 62%, transparent 100%)',
              filter: 'blur(38px)',
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
              background: 'radial-gradient(ellipse at 44% 50%, rgba(255,255,255,0.07) 0%, rgba(232,121,249,0.16) 45%, transparent 100%)',
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
              filter: 'brightness(0.91) contrast(0.87) saturate(1.08) drop-shadow(0 0 10px rgba(232, 121, 249, 0.18)) drop-shadow(-1px 1px 32px rgba(168, 85, 247, 0.16)) drop-shadow(-2px 2px 80px rgba(99, 102, 241, 0.10)) drop-shadow(0 0 140px rgba(168, 85, 247, 0.05))',
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
              background: 'radial-gradient(ellipse 85% 55% at 25% 60%, rgba(120,80,200,0.09) 0%, rgba(30,180,255,0.05) 55%, transparent 100%)',
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
              background: 'radial-gradient(ellipse 90% 94% at 47% 52%, transparent 20%, rgba(110,50,200,0.20) 50%, rgba(40,110,240,0.12) 72%, transparent 100%)',
              filter: 'blur(12px)',
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
              background: 'radial-gradient(ellipse 80% 82% at 82% 60%, rgba(30,150,255,0.15) 0%, rgba(90,100,240,0.09) 55%, transparent 100%)',
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
              background: 'radial-gradient(ellipse 78% 80% at 20% 30%, rgba(180,70,230,0.13) 0%, rgba(99,60,220,0.07) 55%, transparent 100%)',
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

          {/* Ambient surface tint — pale cinematic grade pulling peak whites toward nebula hue */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(155px, 29vh, 382px)',
              height: 'clamp(155px, 29vh, 382px)',
              background: 'radial-gradient(ellipse 83% 88% at 52% 49%, rgba(200,170,230,0.06) 0%, rgba(160,130,215,0.16) 60%, rgba(140,110,200,0.22) 88%, transparent 100%)',
              filter: 'blur(6px)',
              mixBlendMode: 'multiply',
              zIndex: 5,
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#F0F4FF] mt-2 md:mt-3 mb-0.5 md:mb-1 tracking-wide"
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

        {/* Studio description */}
        <p
          className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.95] mb-4 md:mb-5 text-center"
          style={{ maxWidth: '18rem' }}
        >
          A creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media.
        </p>

        {/* CTA */}
        <Button>EXPLORE THE WORLD</Button>
      </div>

      {/* Bottom atmospheric fade — cinematic dissolve into page */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(15,18,32,0.45) 40%, rgba(15,18,32,0.80) 72%, #0F1220 100%)',
        }}
      />

      <Footer />
    </section>
  );
}
