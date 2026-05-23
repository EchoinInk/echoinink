import GlowCard from "./GlowCard";

export default function ServiceCards() {
  return (
    <section className="bg-[#050816] text-white py-40 px-8">
      <div className="max-w-4xl mx-auto mb-32">
        <p className="font-structural uppercase text-[11px] tracking-[0.28em] text-white/30 mb-8">
          What We Design
        </p>

        <h2 className="font-editorial text-[2.4rem] md:text-[3rem] leading-[1.25] text-white/85 mb-6">
          We build worlds with intention and precision.
        </h2>

        <p className="font-structural text-[15px] text-white/55 leading-[1.85] max-w-[60ch]">
          Echo in Ink exists for founders, artists, and visionaries carrying something
          real beneath the surface — something difficult to translate clearly without
          losing its texture. Through identity, atmosphere, narrative, and systems,
          we create work that feels coherent, emotionally precise, and unmistakably true.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <GlowCard
          title="Sessions"
          description="Focused creative direction for moments of emotional transition."
          image="/images/session-card.jpg"
        />

        <GlowCard
          title="Identity"
          description="Narrative and visual translation for founders and studios."
          image="/images/identity-card.jpg"
        />

        <GlowCard
          title="Worlds"
          description="Immersive digital ecosystems designed for resonance."
          image="/images/worlds-card.jpg"
        />
      </div>
    </section>
  );
}
