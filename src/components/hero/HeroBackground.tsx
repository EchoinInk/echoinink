import { BackgroundLayer } from '../BackgroundLayer';

export function HeroBackground() {
  return (
    <>
      <BackgroundLayer />

      {/* Cinematic top frame — atmospheric darkness framing the navigation region */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,7,16,0.50) 0%, rgba(5,7,16,0.14) 11%, transparent 24%)',
        }}
      />

      {/* Bottom atmospheric fade — cinematic dissolve into page */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[7]"
        style={{
          height: '32vh',
          background: 'linear-gradient(to bottom, transparent, rgba(15,18,32,0.45) 40%, rgba(15,18,32,0.80) 72%, #0F1220 100%)',
        }}
      />
    </>
  );
}
