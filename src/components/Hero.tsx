import { Link } from "react-router-dom";
import BackgroundLayer from "./BackgroundLayer";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="relative min-h-screen -mt-28 pt-28 flex items-center justify-center overflow-hidden">
      <BackgroundLayer />

      {/* Nebula color wash */}
      <div className="absolute inset-0 hero-nebula" aria-hidden="true" />

      {/* Central luminous glow */}
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />

      {/* Edge vignette */}
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />

      {/* Subtle grain */}
      <div className="absolute inset-0 hero-grain" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-12">
        {/* Monogram */}
        <img
          src="/monogram-elevated.png"
          alt="Echo in Ink monogram"
          className="hero-monogram mb-10 md:mb-14"
          width={360}
          height={360}
          loading="eager"
          decoding="async"
        />

        {/* Typography */}
        <div className="max-w-[40ch] space-y-5 md:space-y-7">
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08]">
            Echo in Ink
          </h1>
          <p className="font-sans font-light text-lg md:text-xl tracking-[0.14em] uppercase text-foreground/75">
            Design. Emotion. Echo.
          </p>
          <div className="space-y-1.5">
            <p className="font-sans text-sm md:text-base text-foreground/55 font-light tracking-wide">
              Where ideas find resonance.
            </p>
            <p className="font-sans text-sm md:text-base text-foreground/45 font-light tracking-wide">
              Where stories find form.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14">
          <Link to="/work" className="hero-cta-border">
            <span className="hero-cta-inner">ENTER THE SANCTUARY</span>
          </Link>
        </div>
      </div>

      {/* Microcopy bottom-left */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
        <p className="font-sans text-xs uppercase tracking-widest text-foreground/40">
          INK MEETS LIGHT.
        </p>
      </div>

      {/* Microcopy bottom-right */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10">
        <p className="font-sans text-xs uppercase tracking-widest text-foreground/40">
          EMOTIONS BECOME DESIGN.
        </p>
      </div>
    </section>
  );
};

export default Hero;
