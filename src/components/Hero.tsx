import { Link } from "react-router-dom";
import BackgroundLayer from "./BackgroundLayer";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="relative min-h-screen -mt-28 pt-28 flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      {/* Glow overlay */}
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-12">
        {/* Monogram */}
        <img
          src="/monogram-elevated.png"
          alt="Echo in Ink monogram"
          className="hero-monogram mb-8 md:mb-10"
          width={360}
          height={360}
          loading="eager"
          decoding="async"
        />

        {/* Typography */}
        <div className="max-w-[40ch] space-y-3 md:space-y-4">
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Echo in Ink
          </h1>
          <p className="font-sans text-lg md:text-xl tracking-[0.12em] uppercase text-foreground/80">
            Design. Emotion. Echo.
          </p>
          <p className="font-sans text-sm md:text-base text-foreground/60 font-light">
            Where ideas find resonance.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <Link to="/work" className="hero-cta-border">
            <span className="hero-cta-inner">ENTER THE SANCTUARY</span>
          </Link>
        </div>
      </div>

      {/* Microcopy */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
        <p className="font-sans text-xs uppercase tracking-widest text-foreground/40">
          INK MEETS LIGHT.
        </p>
      </div>
    </section>
  );
};

export default Hero;
