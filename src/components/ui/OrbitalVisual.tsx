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

interface OrbitalVisualProps {
  variant?: OrbitalVariant;
  size?: number;
  className?: string;
}

export function OrbitalVisual({
  variant = "orbit",
  size = 64,
  className = "",
}: OrbitalVisualProps) {
  const c = size / 2;
  const r = c - 4;
 const photon = "rgb(var(--ei-ice-white-rgb) / 0.95)";
const photonSoft = "rgb(var(--ei-moonlit-rgb) / 0.75)";
const photonDim = "rgb(var(--ei-moonlit-rgb) / 0.55)";

const cobalt = "rgb(var(--ei-electric-blue-rgb) / 0.9)";
const cobaltSoft = "rgb(var(--ei-halo-blue-rgb) / 0.75)";
const cobaltDim = "rgb(var(--ei-halo-blue-rgb) / 0.55)";

const violet = "rgb(var(--ei-violet-rgb) / 0.85)";
const violetSoft = "rgb(var(--ei-soft-neon-rgb) / 0.7)";
const violetDim = "rgb(var(--ei-soft-neon-rgb) / 0.5)";

const magenta = "rgb(var(--ei-echo-magenta-rgb) / 0.85)";
const magentaSoft = "rgb(var(--ei-soft-neon-rgb) / 0.65)";


  const icons: Record<OrbitalVariant, React.ReactElement> = {
    triangle: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.5" />

        <polygon
          points={`${c},${9} ${size - 9},${size - 9} ${9},${size - 9}`}
          stroke={violetSoft}
          strokeWidth="0.9"
        />

        <circle cx={c} cy={9} r="2.5" fill={photon} />

        <circle cx={c} cy={c} r="1.5" fill={cobalt} />
      </svg>
    ),

    orbit: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <ellipse
          cx={c}
          cy={c}
          rx={r - 4}
          ry={(r - 4) * 0.42}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />

        <circle cx={c + (r - 4)} cy={c} r="2.5" fill={violet} />

        <circle cx={c} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    nodes: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.4" />

        <line
          x1={c}
          y1={11}
          x2={11}
          y2={size - 11}
          stroke={violetSoft}
          strokeWidth="0.4"
        />

        <line
          x1={c}
          y1={11}
          x2={size - 11}
          y2={size - 11}
          stroke={violetSoft}
          strokeWidth="0.7"
        />

        <line
          x1={11}
          y1={size - 11}
          x2={size - 11}
          y2={size - 11}
          stroke={violetSoft}
          strokeWidth="0.5"
        />

        <circle cx={c} cy={11} r="2.5" fill={cobalt} />

        <circle cx={11} cy={size - 11} r="2" fill={cobalt} />

        <circle cx={size - 11} cy={size - 11} r="2" fill={cobalt} />
      </svg>
    ),

    compass: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.5" />

        <circle cx={c} cy={c} r={r - 9} stroke={violetDim} strokeWidth="0.4" />

        <line
          x1={c}
          y1={7}
          x2={c}
          y2={size - 7}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />

        <line
          x1={7}
          y1={c}
          x2={size - 7}
          y2={c}
          stroke={photonSoft}
          strokeWidth="0.5"
        />

        <circle cx={c} cy={c} r="1.8" fill={photon} />

        <circle cx={c} cy={7} r="1.5" fill={photon} />
      </svg>
    ),

    canvas: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <circle cx={c} cy={c} r={r - 9} stroke={violetDim} strokeWidth="0.4" />

        <ellipse
          cx={c}
          cy={c}
          rx={r - 9}
          ry={(r - 9) * 0.48}
          stroke={magentaSoft}
          strokeWidth="0.8"
          transform={`rotate(42 ${c} ${c})`}
        />

        <circle cx={c} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    reflection: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.4" />

        <line
          x1={c}
          y1={9}
          x2={c}
          y2={size - 9}
          stroke={cobaltSoft}
          strokeWidth="0.6"
        />

        <line
          x1={9}
          y1={c}
          x2={size - 9}
          y2={c}
          stroke={photonSoft}
          strokeWidth="0.3"
        />

        <line
          x1={15}
          y1={15}
          x2={size - 15}
          y2={size - 15}
          stroke={violetDim}
          strokeWidth="0.5"
        />

        <line
          x1={size - 15}
          y1={15}
          x2={15}
          y2={size - 15}
          stroke={magentaSoft}
          strokeWidth="0.8"
        />

        <circle cx={c} cy={c} r="2.5" fill={photon} />
      </svg>
    ),

    architect: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <ellipse
          cx={c}
          cy={c}
          rx={r - 5}
          ry={(r - 5) * 0.38}
          stroke={cobaltSoft}
          strokeWidth="1"
        />

        <ellipse
          cx={c}
          cy={c}
          rx={r - 5}
          ry={(r - 5) * 0.38}
          stroke={violetSoft}
          strokeWidth="0.7"
          transform={`rotate(58 ${c} ${c})`}
        />

        <circle cx={c} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    gpt: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <circle
          cx={c}
          cy={c}
          r={14}
          stroke={violetSoft}
          strokeWidth="0.6"
          fill="rgb(113 7 234 / 0.09)"
        />

        <circle cx={c} cy={c} r={5} fill="rgb(73 133 253 / 0.18)" />

        <circle cx={c} cy={c} r={2.5} fill={photon} />

        <circle cx={c} cy={c} r={1} fill={cobalt} />
      </svg>
    ),

    uikit: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={cobaltSoft} strokeWidth="0.8" />

        <circle cx={c} cy={c} r={r - 9} stroke={photonDim} strokeWidth="0.3" />

        <circle
          cx={c}
          cy={c}
          r={r - 17}
          stroke={violetSoft}
          strokeWidth="0.7"
        />

        <circle
          cx={c}
          cy={c}
          r={r - 23}
          stroke={magentaSoft}
          strokeWidth="0.4"
        />

        <circle cx={c} cy={c} r={2} fill={cobalt} />
      </svg>
    ),

    constellation: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.3" />

        <line
          x1="16"
          y1="18"
          x2={c}
          y2={c}
          stroke={photonSoft}
          strokeWidth="0.7"
        />

        <line
          x1={c}
          y1={c}
          x2={size - 14}
          y2="16"
          stroke={cobaltSoft}
          strokeWidth="1.2"
        />

        <line
          x1={c}
          y1={c}
          x2={size - 18}
          y2={size - 18}
          stroke={violetSoft}
          strokeWidth="0.6"
        />

        <circle cx="16" cy="18" r="2" fill={photonSoft} />

        <circle cx={c} cy={c} r="2.5" fill={photon} />

        <circle cx={size - 14} cy="16" r="2" fill={cobalt} />

        <circle cx={size - 18} cy={size - 18} r="2" fill={violet} />
      </svg>
    ),

    signal: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <path
          d={`M10 ${c} Q ${c} 10 ${size - 10} ${c}`}
          stroke={cobaltSoft}
          strokeWidth="1.1"
          fill="none"
        />

        <path
          d={`M10 ${c + 8} Q ${c} 18 ${size - 10} ${c + 8}`}
          stroke={violetSoft}
          strokeWidth="0.6"
          fill="none"
        />

        <circle cx={size - 10} cy={c} r="2.5" fill={cobalt} />
      </svg>
    ),

    hexgrid: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <polygon
          points={`${c},8 ${size - 12},18 ${size - 12},${size - 18} ${c},${size - 8} 12,${size - 18} 12,18`}
          stroke={violetSoft}
          strokeWidth="0.5"
        />

        <circle cx={c} cy={8} r="2.5" fill={photon} />
      </svg>
    ),
    prism: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c} 8 L${size - 10} ${size - 12} L10 ${size - 12} Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${c} 8 L${c} ${size - 12}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M10 ${size - 12} L${size - 10} ${size - 12}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M${c} ${size - 12} L${size - 10} ${size - 12}`}
          stroke={magentaSoft}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={8} r="2.2" fill={photon} />
      </svg>
    ),

    threshold: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M14 ${size - 10} V14 H${size - 14} V${size - 10}`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M22 ${size - 10} V22 H${size - 22} V${size - 10}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M${c} 14 V${size - 10}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={22} r="2" fill={cobalt} />
      </svg>
    ),

    fold: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M12 14 L${size - 12} 10 L${size - 18} ${size - 12} L16 ${size - 16} Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M12 14 L${c} ${c} L${size - 18} ${size - 12}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M${size - 12} 10 L${c} ${c} L16 ${size - 16}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={c} r="2" fill={photon} />
      </svg>
    ),

    sigil: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c} 8 V${size - 8}`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M16 18 H${size - 16}`}
          stroke={violetSoft}
          strokeWidth="0.6"
        />
        <path
          d={`M20 ${size - 16} L${c} ${c + 4} L${size - 20} ${size - 16}`}
          stroke={magentaSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M${c - 8} ${c} H${c + 8}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={8} r="2" fill={photon} />
        <circle cx={c} cy={c + 4} r="1.8" fill={cobalt} />
      </svg>
    ),

    pathway: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M12 ${size - 12} C18 ${c + 10}, 24 ${c - 6}, ${c} ${c} S${size - 18} 20, ${size - 12} 10`}
          stroke={cobaltSoft}
          strokeWidth="1"
          fill="none"
        />
        <path
          d={`M16 ${size - 8} C24 ${c + 8}, 28 ${c + 2}, ${c} ${c + 6} S${size - 18} 28, ${size - 8} 20`}
          stroke={violetSoft}
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx={12} cy={size - 12} r="2" fill={photonSoft} />
        <circle cx={size - 12} cy={10} r="2.4" fill={cobalt} />
      </svg>
    ),

    axis: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path d={`M${c} 8 V${size - 8}`} stroke={photonDim} strokeWidth="0.5" />
        <path
          d={`M10 ${c} H${size - 10}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M18 18 L${size - 18} ${size - 18}`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${size - 18} 18 L18 ${size - 18}`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <circle cx={c} cy={c} r="2.2" fill={photon} />
      </svg>
    ),

    frame: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path d={`M12 12 H28`} stroke={cobaltSoft} strokeWidth="0.8" />
        <path
          d={`M36 12 H${size - 12} V28`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${size - 12} 36 V${size - 12} H36`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M28 ${size - 12} H12 V36`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path d={`M12 28 V12`} stroke={photonDim} strokeWidth="0.5" />
        <circle cx={size - 12} cy={size - 12} r="2" fill={cobalt} />
      </svg>
    ),

    echo: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M14 ${c - 10} C24 ${c - 18}, 40 ${c - 18}, ${size - 14} ${c - 10}`}
          stroke={violetSoft}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={`M12 ${c} C24 ${c - 10}, 40 ${c - 10}, ${size - 12} ${c}`}
          stroke={cobaltSoft}
          strokeWidth="1"
          fill="none"
        />
        <path
          d={`M14 ${c + 10} C24 ${c + 2}, 40 ${c + 2}, ${size - 14} ${c + 10}`}
          stroke={magentaSoft}
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx={12} cy={c} r="2" fill={photon} />
        <circle cx={size - 12} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    flare: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path d={`M${c} 8 V24`} stroke={photonSoft} strokeWidth="0.7" />
        <path
          d={`M${c} ${size - 8} V${size - 24}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path d={`M8 ${c} H24`} stroke={photonDim} strokeWidth="0.5" />
        <path
          d={`M${size - 8} ${c} H${size - 24}`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M18 18 L${c - 4} ${c - 4}`}
          stroke={violetSoft}
          strokeWidth="0.6"
        />
        <path
          d={`M${size - 18} ${size - 18} L${c + 4} ${c + 4}`}
          stroke={magentaSoft}
          strokeWidth="0.6"
        />
        <circle cx={c} cy={c} r="2.4" fill={photon} />
      </svg>
    ),

    glyph: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c} 10 L${size - 14} ${c} L${c} ${size - 10} L14 ${c} Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${c} 10 V${size - 10}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M14 ${c} H${size - 14}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M22 ${c} L${c} 22 L${size - 22} ${c} L${c} ${size - 22} Z`}
          stroke={magentaSoft}
          strokeWidth="0.4"
        />
        <circle cx={c} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    archive: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M14 16 H${size - 14} V${size - 14} H14 Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M20 10 H${size - 20} V16 H20 Z`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M22 28 H${size - 22}`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path d={`M22 38 H${size - 28}`} stroke={photonDim} strokeWidth="0.5" />
        <path
          d={`M22 48 H${size - 34}`}
          stroke={magentaSoft}
          strokeWidth="0.5"
        />
        <circle cx={size - 22} cy={28} r="2" fill={cobalt} />
      </svg>
    ),

    beacon: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c} 10 L${size - 14} ${size - 12} H14 Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${c} 10 L${c} ${size - 12}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M22 ${size - 12} L${c} 30 L${size - 22} ${size - 12}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M${c - 8} 22 H${c + 8}`}
          stroke={magentaSoft}
          strokeWidth="0.6"
        />
        <circle cx={c} cy={10} r="2.5" fill={photon} />
        <circle cx={c} cy={30} r="1.8" fill={cobalt} />
      </svg>
    ),
    veil: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M12 ${c + 10} C20 ${c - 18}, 36 ${c - 20}, ${size - 12} ${c - 6}`}
          stroke={cobaltSoft}
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d={`M14 ${c + 16} C24 ${c - 4}, 38 ${c - 8}, ${size - 14} ${c + 4}`}
          stroke={violetSoft}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={`M18 ${c - 2} C28 ${c - 16}, 42 ${c - 14}, ${size - 18} ${c - 20}`}
          stroke={magentaSoft}
          strokeWidth="0.45"
          fill="none"
        />
        <circle cx={12} cy={c + 10} r="1.8" fill={photonSoft} />
        <circle cx={size - 12} cy={c - 6} r="2.2" fill={cobalt} />
      </svg>
    ),

    ribbon: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M12 ${c} C18 12, ${c + 8} 12, ${c} ${c} S${size - 18} ${size - 12}, ${size - 12} ${c}`}
          stroke={cobaltSoft}
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d={`M16 ${c + 8} C24 20, ${c + 4} 20, ${c} ${c + 6} S${size - 24} ${size - 18}, ${size - 16} ${c + 8}`}
          stroke={violetSoft}
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx={c} cy={c} r="2" fill={photon} />
        <circle cx={size - 12} cy={c} r="2" fill={magenta} />
      </svg>
    ),

    lens: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <ellipse
          cx={c}
          cy={c}
          rx={r - 7}
          ry={r - 18}
          stroke={cobaltSoft}
          strokeWidth="0.7"
          transform={`rotate(-28 ${c} ${c})`}
        />
        <ellipse
          cx={c}
          cy={c}
          rx={r - 12}
          ry={r - 22}
          stroke={violetSoft}
          strokeWidth="0.5"
          transform={`rotate(28 ${c} ${c})`}
        />
        <path
          d={`M14 ${c} H${size - 14}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={c} r="2.2" fill={cobalt} />
        <circle cx={c + 10} cy={c - 10} r="1.5" fill={photonSoft} />
      </svg>
    ),

    lattice: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M16 16 L${size - 16} 24 L${size - 24} ${size - 16} L24 ${size - 24} Z`}
          stroke={violetSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M16 16 L${size - 24} ${size - 16}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M${size - 16} 24 L24 ${size - 24}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M${c} 12 V${size - 12}`}
          stroke={magentaSoft}
          strokeWidth="0.45"
        />
        <circle cx={16} cy={16} r="1.8" fill={photonSoft} />
        <circle cx={size - 16} cy={24} r="2" fill={cobalt} />
        <circle cx={c} cy={c} r="1.8" fill={photon} />
      </svg>
    ),

    hinge: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M14 16 H${c} V${size - 14}`}
          stroke={cobaltSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${c} ${c} H${size - 12} V18`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path d={`M${c} 16 V${c}`} stroke={photonDim} strokeWidth="0.5" />
        <path
          d={`M${c} ${c} L${size - 12} ${size - 12}`}
          stroke={magentaSoft}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={c} r="2.4" fill={photon} />
        <circle cx={size - 12} cy={18} r="1.8" fill={cobalt} />
      </svg>
    ),

    spiral: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${size - 12} ${c} C${size - 14} 16, 18 16, 18 ${c} C18 ${size - 12}, ${size - 16} ${size - 12}, ${size - 16} ${c + 4} C${size - 16} 26, 28 26, 28 ${c} C28 ${c + 10}, ${c + 8} ${c + 10}, ${c + 8} ${c}`}
          stroke={cobaltSoft}
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d={`M${size - 16} ${c + 8} C${size - 22} ${size - 6}, 14 ${size - 8}, 14 ${c}`}
          stroke={violetSoft}
          strokeWidth="0.45"
          fill="none"
        />
        <circle cx={c + 8} cy={c} r="2" fill={cobalt} />
        <circle cx={size - 12} cy={c} r="1.8" fill={photonSoft} />
      </svg>
    ),

    monolith: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c - 10} 12 L${c + 10} 18 L${c + 8} ${size - 12} L${c - 12} ${size - 18} Z`}
          stroke={violetSoft}
          strokeWidth="0.8"
        />
        <path
          d={`M${c + 10} 18 L${c + 8} ${size - 12}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
        />
        <path
          d={`M${c - 10} 12 L${c - 12} ${size - 18}`}
          stroke={photonDim}
          strokeWidth="0.5"
        />
        <path
          d={`M${c - 12} ${size - 18} L${c + 8} ${size - 12}`}
          stroke={magentaSoft}
          strokeWidth="0.5"
        />
        <circle cx={c} cy={18} r="2" fill={photon} />
      </svg>
    ),

    pulse: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M10 ${c} H22 L28 ${c - 12} L36 ${c + 12} L42 ${c} H${size - 10}`}
          stroke={cobaltSoft}
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d={`M12 ${c + 10} H24 L30 ${c + 2} L36 ${c + 14} L44 ${c + 6} H${size - 12}`}
          stroke={violetSoft}
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx={10} cy={c} r="1.8" fill={photonSoft} />
        <circle cx={size - 10} cy={c} r="2" fill={cobalt} />
      </svg>
    ),

    ember: (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M${c} 10 C${size - 8} 24, ${size - 18} ${size - 8}, ${c} ${size - 10} C14 ${size - 18}, 10 28, ${c} 10 Z`}
          stroke={magentaSoft}
          strokeWidth="0.7"
          fill="rgb(221 18 203 / 0.035)"
        />
        <path
          d={`M${c} 18 C${size - 16} 28, ${size - 24} ${size - 18}, ${c} ${size - 16} C22 ${size - 22}, 20 32, ${c} 18 Z`}
          stroke={violetSoft}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={`M${c} 26 C${c + 8} 34, ${c + 6} 44, ${c} ${size - 18}`}
          stroke={cobaltSoft}
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx={c} cy={size - 18} r="2.2" fill={cobalt} />
        <circle cx={c} cy={10} r="1.8" fill={photon} />
      </svg>
    ),
  };

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ei-halo-blue-rgb) / 0.08) 0%, rgb(var(--ei-violet-rgb) / 0.055) 44%, rgb(var(--ei-echo-magenta-rgb) / 0.035) 64%, transparent 74%)",
          filter: "blur(7px)",
          borderRadius: "50%",
        }}
      />
      {icons[variant]}
    </div>
  );
}
