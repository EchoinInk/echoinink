export type OrbitalVariant =
  | "axiom-ring"
  | "vector-lattice"
  | "signal-bridge"
  | "prism-mirror"
  | "inner-tide"
  | "quiet-axis"
  | "chorus-core"
  | "memory-comet"
  | "synthesis-star"
  | "halo-gate"
  | "focus-dial"
  | "thread-beacon";

export type OrbitalCategory =
  | "Framework"
  | "Reflective Tool"
  | "GPT System"
  | "UI System";

export const ORBITALS: ReadonlyArray<{
  name: string;
  variant: OrbitalVariant;
  category: OrbitalCategory;
  description: string;
}> = [
  {
    name: "Axiom Ring",
    variant: "axiom-ring",
    category: "Framework",
    description:
      "A structural nucleus held by three independent constraints. It represents principles that remain stable while the surrounding system evolves.",
  },
  {
    name: "Vector Lattice",
    variant: "vector-lattice",
    category: "Framework",
    description:
      "An open geometric field for mapping relationships and direction. Its offset nodes suggest a framework that can expand without losing coherence.",
  },
  {
    name: "Signal Bridge",
    variant: "signal-bridge",
    category: "Framework",
    description:
      "Two domains joined through a deliberate central span. It signifies translation between ideas, systems, and layers of meaning.",
  },
  {
    name: "Prism Mirror",
    variant: "prism-mirror",
    category: "Reflective Tool",
    description:
      "A faceted mirror that separates one signal into multiple perspectives. It invites examination without prescribing a single interpretation.",
  },
  {
    name: "Inner Tide",
    variant: "inner-tide",
    category: "Reflective Tool",
    description:
      "Nested waves move around a quiet point of attention. It represents emotions and thoughts observed as changing currents.",
  },
  {
    name: "Quiet Axis",
    variant: "quiet-axis",
    category: "Reflective Tool",
    description:
      "An interrupted vertical axis balances two suspended forms. It marks the pause where reaction becomes considered response.",
  },
  {
    name: "Chorus Core",
    variant: "chorus-core",
    category: "GPT System",
    description:
      "Several distinct voices converge around a shared intelligence. The open center preserves space for synthesis rather than uniformity.",
  },
  {
    name: "Memory Comet",
    variant: "memory-comet",
    category: "GPT System",
    description:
      "A bright reasoning core carries layered traces of prior context. Its directional silhouette expresses continuity across an evolving conversation.",
  },
  {
    name: "Synthesis Star",
    variant: "synthesis-star",
    category: "GPT System",
    description:
      "Four inputs fold into a compact generative center. It represents the emergence of a new idea from previously separate signals.",
  },
  {
    name: "Halo Gate",
    variant: "halo-gate",
    category: "UI System",
    description:
      "An illuminated threshold frames a clear point of entry. It identifies navigation moments that lead into deeper layers of the interface.",
  },
  {
    name: "Focus Dial",
    variant: "focus-dial",
    category: "UI System",
    description:
      "An asymmetric control ring resolves toward a precise selection. It expresses adjustment, attention, and intentional state changes.",
  },
  {
    name: "Thread Beacon",
    variant: "thread-beacon",
    category: "UI System",
    description:
      "A vertical beacon anchors branching interface paths. It signals continuity, active location, and the next available direction.",
  },
];

export const ELECTRIC_BLUE = "rgb(11 32 246)";
export const HALO_BLUE = "rgb(73 133 253)";
export const VIOLET = "rgb(113 7 234)";
export const ECHO_MAGENTA = "rgb(221 18 203)";
export const SOFT_NEON = "rgb(230 105 242)";
export const MOONLIT = "rgb(227 216 253)";
export const ICE_WHITE = "rgb(247 245 250)";

export const svgProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 96 96",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
});
