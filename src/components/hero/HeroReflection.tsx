export function HeroReflection() {
  return (
    /* Water surface reflection — monogram light caught on the water below */
    <div
      aria-hidden="true"
      className="absolute pointer-events-none z-[4]"
      style={{
  bottom: '7%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'clamp(160px, 28vw, 420px)',
  height: 'clamp(32px, 7vh, 82px)',
  background:
    'radial-gradient(ellipse 78% 32% at 50% 58%, rgba(168,85,247,0.06) 0%, rgba(30,200,255,0.035) 48%, rgba(232,121,249,0.015) 72%, transparent 100%)',
  filter: 'blur(32px)',
  mixBlendMode: 'screen',
  opacity: 0.7,
}}
    />
  );
}
