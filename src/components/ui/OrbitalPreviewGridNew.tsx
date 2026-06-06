import OrbitalVisualNew from "./OrbitalVisualNew";
import { ORBITALS } from "./orbitals-data";

export default function OrbitalPreviewGridNew() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 p-10 bg-[#05030b]">
      {ORBITALS.map((orbital) => (
        <div
          key={orbital.variant}
          className="flex flex-col items-center gap-3 text-center"
        >
          <OrbitalVisualNew variant={orbital.variant} />
          <span className="text-sm text-white">{orbital.name}</span>
        </div>
      ))}
    </div>
  );
}
