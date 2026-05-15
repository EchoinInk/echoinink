import { useEffect, useState } from 'react';
import bgMobile from '@/assets/ei-hero-bg-dark-mobile-9x16.png';
import bgStandard from '@/assets/ei-hero-bg-dark-16x9.png';
import bgWide from '@/assets/ei-hero-bg-dark-21x9.png';

export function BackgroundLayer() {
  const [bgImage, setBgImage] = useState<string>(bgStandard);

  useEffect(() => {
    const updateBg = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      if (aspect < 0.75) {
        setBgImage(bgMobile);   // phones only
      } else {
        setBgImage(bgWide);     // everything else
      }
    };

    updateBg();
    window.addEventListener('resize', updateBg);
    return () => window.removeEventListener('resize', updateBg);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Radial glow overlays */}
    
    </div>
  );
}
