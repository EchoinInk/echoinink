import GlowCard from "./GlowCard";

export default function ServiceCards() {
  return (
    <section className="bg-[#050816] text-white py-40 px-8">
      <div className="max-w-5xl mx-auto mb-24">

        {/* Eyebrow */}
        <p className="font-structural uppercase text-[11px] tracking-[0.28em] text-white/30 mb-6">
          What We Design
        </p>

        {/* Main Heading */}
        <h2 className="font-editorial text-[2.6rem] md:text-[3rem] leading-[1.2] text-white/90 mb-4">
          We build worlds with intention and precision.
        </h2>

        {/* Subheading */}
        <p className="font-structural text-[15px] text-white/55 leading-[1.85] max-w-[60ch]">
          Explore our core areas of creative direction.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <GlowCard
          title="Sessions"
          description="Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation."
          image="/images/session-card.jpg"
        />

        <GlowCard
          title="Identity"
          description="Where inner worlds become coherent external form. Emotional, narrative, and visual translation for founders, studios, and evolving brands."
          image="/images/identity-card.jpg"
        />

        <GlowCard
          title="Worlds"
          description="Identity extended into living systems. Immersive digital ecosystems designed for coherence, resonance, and long‑term evolution."
          image="/images/worlds-card.jpg"
        />

      </div>
    </section>
  );
}
