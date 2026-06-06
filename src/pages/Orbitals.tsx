import OrbitalSheet from "@/components/dev/OrbitalSheet";
import OrbitalsNewPreview from "@/components/dev/OrbitalsNewPreview";

export default function OrbitalsPage() {
  return (
    <div className="flex flex-col gap-20 p-10">
      {/* Original orbital system */}
      <section>
        <h2 className="text-white text-2xl mb-6">Original Orbitals</h2>
        <OrbitalSheet />
      </section>

      {/* New Codex‑generated orbital system */}
      <section>
        <h2 className="text-white text-2xl mb-6">New Orbitals</h2>
        <OrbitalsNewPreview />
      </section>
    </div>
  );
}
