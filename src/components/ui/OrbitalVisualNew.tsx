export default function OrbitalVisual({
variant,
size = 96,
}: {
variant: OrbitalVariant;
size?: number;
}) {
switch (variant) {
case "axiom-ring":
return <Orbital_AxiomRing size={size} />;
case "vector-lattice":
return <Orbital_VectorLattice size={size} />;
case "signal-bridge":
return <Orbital_SignalBridge size={size} />;
case "prism-mirror":
return <Orbital_PrismMirror size={size} />;
case "inner-tide":
return <Orbital_InnerTide size={size} />;
case "quiet-axis":
return <Orbital_QuietAxis size={size} />;
case "chorus-core":
return <Orbital_ChorusCore size={size} />;
case "memory-comet":
return <Orbital_MemoryComet size={size} />;
case "synthesis-star":
return <Orbital_SynthesisStar size={size} />;
case "halo-gate":
return <Orbital_HaloGate size={size} />;
case "focus-dial":
return <Orbital_FocusDial size={size} />;
case "thread-beacon":
return <Orbital_ThreadBeacon size={size} />;
default:
return null;
}
}