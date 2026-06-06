import { OrbitalVisual } from "@/components/ui/OrbitalVisual";
import type { OrbitalVariant } from "@/components/ui/OrbitalVisual";

const variants: OrbitalVariant[] = [
  "triangle",
  "orbit",
  "nodes",
  "compass",
  "canvas",
  "reflection",
  "architect",
  "gpt",
  "uikit",
  "hexgrid",
  "signal",
  "constellation",
  "prism",
  "threshold",
  "fold",
  "sigil",
  "pathway",
  "axis",
  "frame",
  "echo",
  "flare",
  "glyph",
  "archive",
  "beacon",
  "veil",
  "ribbon",
  "lens",
  "lattice",
  "hinge",
  "spiral",
  "monolith",
  "pulse",
  "ember",
];

export default function OrbitalsSheet() {
  return (
    <div className="mx-auto max-w-[1200px] p-10">
      <h1 className="mb-10 text-3xl font-semibold text-white/90">
        Orbital Variants Sheet
      </h1>

      <div className="grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-6">
        {variants.map((v) => (
          <div className="brightness-125 contrast-125">
  <OrbitalVisual variant={v} size={96} />
</div>

        ))}
      </div>
    </div>
  );
}
