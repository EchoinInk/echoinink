export function HeroReflection() {
  return (
    /* Water surface reflection — monogram light caught on the water below */
    <div
      aria-hidden="true"
      className="absolute pointer-events-none z-[4]"
      style={{
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'clamp(240px, 50vw, 720px)',
        height: 'clamp(50px, 14vh, 160px)',
        background: 'radial-gradient(ellipse 84% 38% at 48% 58%, rgba(168,85,247,0.10) 0%, rgba(30,200,255,0.06) 48%, rgba(232,121,249,0.03) 72%, transparent 100%)',
        filter: 'blur(55px)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
