import OrbitalsSheet from "@/components/dev/OrbitalSheet";

export default function OrbitalsPage() {
  return (
    <div className="flex flex-col gap-20 p-10">
      <section>
        <h2 className="text-white text-2xl mb-6">Original Orbitals</h2>
        <OrbitalsSheet />
      </section>
    </div>
  );
}
