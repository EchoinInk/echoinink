import { motion, useReducedMotion } from 'framer-motion';

export function HeroLighting() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      {/* Layer 1: Wide atmospheric haze — fills the surrounding environment with magenta-blue diffusion */}
      <div
        aria-hidden="true"
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
        aria-hidden="true"
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
      {/* Layer 3: Core volumetric bloom — primary radiance, slow echo pulse */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {prefersReduced ? (
          <div
            style={{
              width: 'clamp(190px, 26vw, 400px)',
              height: 'clamp(210px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgba(232,121,249,0.25) 0%, rgba(168,85,247,0.15) 38%, rgba(99,102,241,0.07) 62%, transparent 100%)',
              filter: 'blur(38px)',
              mixBlendMode: 'screen' as const,
            }}
          />
        ) : (
          <motion.div
            animate={{ opacity: [0.75, 1, 0.75], scale: [0.97, 1.03, 0.97] }}
            transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            style={{
              width: 'clamp(190px, 26vw, 400px)',
              height: 'clamp(210px, 30vw, 460px)',
              background: 'radial-gradient(ellipse 50% 64% at 46% 49%, rgba(232,121,249,0.25) 0%, rgba(168,85,247,0.15) 38%, rgba(99,102,241,0.07) 62%, transparent 100%)',
              filter: 'blur(38px)',
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>
      {/* Layer 4: Inner hot core — luminous source point */}
      <div
        aria-hidden="true"
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

      {/* Atmospheric mist wisp A — environmental fog partially veiling the lower monogram edge */}
      <div
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
    </>
  );
}
