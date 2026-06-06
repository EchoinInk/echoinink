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

      <div
  key={v}
  className="flex flex-col items-center gap-3 rounded-xl bg-[rgb(var(--ei-midnight-rgb)/0.6)] border border-white/10 p-5"
>
  <div className="brightness-125 contrast-125">
    <OrbitalVisual variant={v} size={110} />
  </div>
  <span className="text-xs text-white/70">{v}</span>
</div>


        ))}
      </div>
    </div>
  );
}
