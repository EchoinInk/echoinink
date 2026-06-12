import {
  OrbitalVisual,
  type OrbitalVariant,
} from "@/components/ui/OrbitalVisual";

const variants: OrbitalVariant[] = [
  "axiomRing",
  "vectorLattice",
  "signalBridge",
  "prismMirror",
  "innerTide",
  "quietAxis",
  "chorusCore",
  "memoryComet",
  "synthesisStar",
  "haloGate",
  "focusDial",
  "threadBeacon",
];

export default function OrbitalsSheet() {
  return (
    <div className="mx-auto max-w-[1200px] p-10">
      <h1 className="mb-10 text-3xl font-semibold text-[var(--ei-color-text-primary)]">
        Orbital Variants Sheet
      </h1>

      <div className="grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-6">
        {variants.map((variant) => (
          <div
            key={variant}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[rgb(var(--ei-midnight-rgb)/0.6)] p-5"
          >
            <div className="brightness-125 contrast-125">
              <OrbitalVisual variant={variant} size={110} />
            </div>
            <span className="text-xs text-[var(--ei-color-text-secondary)]">{variant}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
