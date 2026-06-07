// -----------------------------
// ORBITAL TYPES
// -----------------------------

export type OrbitalName =
  | "axiomRing"
  | "vectorLattice"
  | "signalBridge"
  | "prismMirror"
  | "innerTide"
  | "quietAxis"
  | "chorusCore"
  | "memoryComet"
  | "synthesisStar"
  | "haloGate"
  | "focusDial"
  | "threadBeacon"

// Each orbital is a function that returns JSX
export type OrbitalFn = (size?: number) => JSX.Element

// The orbitals object must contain exactly these keys
export type OrbitalsMap = Record<OrbitalName, OrbitalFn>

// -----------------------------
// ORBITALS OBJECT (YOUR SVGs GO HERE)
// -----------------------------
// -----------------------------
// COLORS
// -----------------------------
const ELECTRIC_BLUE = "rgb(11 32 246)"
const HALO_BLUE = "rgb(73 133 253)"
const VIOLET = "rgb(113 7 234)"
const ECHO_MAGENTA = "rgb(221 18 203)"
const SOFT_NEON = "rgb(230 105 242)"
const MOONLIT = "rgb(227 216 253)"
const ICE_WHITE = "rgb(247 245 250)"

// -----------------------------
// TYPES
// -----------------------------
export type OrbitalName =
  | "axiomRing"
  | "vectorLattice"
  | "signalBridge"
  | "prismMirror"
  | "innerTide"
  | "quietAxis"
  | "chorusCore"
  | "memoryComet"
  | "synthesisStar"
  | "haloGate"
  | "focusDial"
  | "threadBeacon"

export type OrbitalFn = (size?: number) => JSX.Element
export type OrbitalsMap = Record<OrbitalName, OrbitalFn>

// -----------------------------
// ORBITALS OBJECT
// -----------------------------
export const orbitals: OrbitalsMap = {
  axiomRing: (size = 96) => {
    const center = size / 2
    const path = "M48 15C66.2 15 81 29.8 81 48S66.2 81 48 81"

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={path} stroke={ELECTRIC_BLUE} strokeWidth="4.8" opacity="0.4" />
        <path d={path} stroke={ELECTRIC_BLUE} strokeWidth="1.7" strokeLinecap="round" />
        <path
          d="M48 81C29.8 81 15 66.2 15 48S29.8 15 48 15"
          stroke={HALO_BLUE}
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        <path
          d="M48 30L63.6 57H32.4L48 30Z"
          stroke={ELECTRIC_BLUE}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx={center} cy={center} r="4.5" stroke={HALO_BLUE} strokeWidth="1.1" />
        <circle cx={center} cy="15" r="2.8" fill={ICE_WHITE} stroke={HALO_BLUE} />
        <circle cx="32.4" cy="57" r="2.2" fill={ELECTRIC_BLUE} />
        <circle cx="63.6" cy="57" r="2.2" fill={ELECTRIC_BLUE} />
      </svg>
    )
  },

  vectorLattice: (size = 96) => {
    const center = size / 2
    const lattice = "M12 48L48 12L84 48L48 84Z"

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={lattice} stroke={ELECTRIC_BLUE} strokeWidth="4.5" opacity="0.38" />
        <path d={lattice} stroke={ELECTRIC_BLUE} strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M36 27L48 12M72 38L84 32M61 75L67 86"
          stroke={HALO_BLUE}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="36" cy="27" r="3" fill={ICE_WHITE} stroke={HALO_BLUE} />
        <circle cx="72" cy="38" r="3" fill={ELECTRIC_BLUE} />
        <circle cx="61" cy="75" r="3" fill={HALO_BLUE} />
        <circle cx="23" cy="67" r="3" fill={ICE_WHITE} stroke={ELECTRIC_BLUE} />
        <circle cx={center + 1} cy={center + 3} r="4" stroke={HALO_BLUE} strokeWidth="1.1" />
      </svg>
    )
  },
  signalBridge: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const bridge = "M14 61C24 61 27 36 39 36H57C69 36 72 61 82 61";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={bridge}
          stroke={ELECTRIC_BLUE}
          strokeWidth="5"
          opacity="0.42"
        />
        <path
          d={bridge}
          stroke={ELECTRIC_BLUE}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 68C27 68 30 45 40 45H56C66 45 69 68 82 68"
          stroke={HALO_BLUE}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M39 36L48 24L57 36M48 24V14"
          stroke={HALO_BLUE}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="61" r="4" fill={ICE_WHITE} stroke={ELECTRIC_BLUE} />
        <circle cx="82" cy="61" r="4" fill={ICE_WHITE} stroke={ELECTRIC_BLUE} />
        <circle cx={center} cy="24" r="3" fill={HALO_BLUE} />
        <circle cx={center} cy="14" r="2" fill={ICE_WHITE} />
      </svg>
    );
  },

  prismMirror: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const prism = "M48 14L77 69L48 82L19 69L48 14Z";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={prism} stroke={VIOLET} strokeWidth="4.8" opacity="0.4" />
        <path
          d={prism}
          stroke={VIOLET}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M48 14V82M19 69L48 48L77 69"
          stroke={SOFT_NEON}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M27 54L48 48L69 54"
          stroke={VIOLET}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r="4.5" fill={ICE_WHITE} stroke={SOFT_NEON} />
        <circle cx="19" cy="69" r="2.5" fill={VIOLET} />
        <circle cx="77" cy="69" r="2.5" fill={SOFT_NEON} />
      </svg>
    );
  },

  innerTide: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const wave = "M14 47C24 30 35 30 45 47S66 64 82 43";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={wave} stroke={VIOLET} strokeWidth="5" opacity="0.4" />
        <path
          d={wave}
          stroke={VIOLET}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M20 58C29 45 37 45 45 58S61 71 75 55"
          stroke={SOFT_NEON}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M24 35C32 24 42 24 50 35S66 46 74 34"
          stroke={SOFT_NEON}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx={center} cy={center} r="7" stroke={VIOLET} strokeWidth="1.5" />
        <circle cx={center} cy={center} r="2.8" fill={ICE_WHITE} />
        <circle cx="82" cy="43" r="2.5" fill={SOFT_NEON} />
      </svg>
    );
  },

  quietAxis: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const axis = "M48 13V37M48 59V83";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={axis} stroke={VIOLET} strokeWidth="4.8" opacity="0.42" />
        <path
          d={axis}
          stroke={VIOLET}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M20 38C29 31 38 33 43 41M76 58C67 65 58 63 53 55"
          stroke={SOFT_NEON}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M20 38L29 47L38 38L29 29L20 38ZM76 58L67 49L58 58L67 67L76 58Z"
          stroke={VIOLET}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx={center} cy={center} r="5.5" stroke={SOFT_NEON} strokeWidth="1.1" />
        <circle cx={center} cy={center} r="2" fill={ICE_WHITE} />
      </svg>
    );
  },

  chorusCore: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const voices =
      "M48 15C38 24 38 34 44 41M81 48C72 38 62 38 55 44M48 81C58 72 58 62 52 55M15 48C24 58 34 58 41 52";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={voices}
          stroke={ECHO_MAGENTA}
          strokeWidth="5"
          opacity="0.42"
          strokeLinecap="round"
        />
        <path
          d={voices}
          stroke={ECHO_MAGENTA}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M48 15L55 26L48 32L41 26L48 15ZM81 48L70 55L64 48L70 41L81 48ZM48 81L41 70L48 64L55 70L48 81ZM15 48L26 41L32 48L26 55L15 48Z"
          stroke={SOFT_NEON}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx={center} cy={center} r="9" stroke={ECHO_MAGENTA} strokeWidth="1.6" />
        <circle cx={center} cy={center} r="3" fill={ICE_WHITE} />
      </svg>
    );
  },

  memoryComet: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const comet = "M18 72C34 69 42 59 52 43C59 32 68 25 80 22";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={comet}
          stroke={ECHO_MAGENTA}
          strokeWidth="5.2"
          opacity="0.42"
          strokeLinecap="round"
        />
        <path
          d={comet}
          stroke={ECHO_MAGENTA}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 62C32 62 39 52 47 39M25 80C41 75 50 65 57 53"
          stroke={SOFT_NEON}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx={center + 24} cy={center - 20} r="10" stroke={ECHO_MAGENTA} strokeWidth="1.6" />
        <circle cx={center + 24} cy={center - 20} r="5" stroke={SOFT_NEON} strokeWidth="1" />
        <circle cx={center + 24} cy={center - 20} r="2.5" fill={ICE_WHITE} />
        <circle cx="18" cy="72" r="2.5" fill={SOFT_NEON} />
      </svg>
    );
  },

  synthesisStar: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const star =
      "M48 13L55 39L83 48L55 57L48 83L41 57L13 48L41 39L48 13Z";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={star}
          stroke={ECHO_MAGENTA}
          strokeWidth="5"
          opacity="0.4"
        />
        <path
          d={star}
          stroke={ECHO_MAGENTA}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M27 27L42 42M69 27L54 42M69 69L54 54M27 69L42 54"
          stroke={SOFT_NEON}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M48 38L58 48L48 58L38 48L48 38Z"
          stroke={ECHO_MAGENTA}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx={center} cy={center} r="3" fill={ICE_WHITE} />
      </svg>
    );
  },

  haloGate: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const gate = "M24 79V43C24 25 34 15 48 15C62 15 72 25 72 43V79";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path d={gate} stroke={HALO_BLUE} strokeWidth="5" opacity="0.42" />
        <path
          d={gate}
          stroke={HALO_BLUE}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M34 79V44C34 35 39 29 48 29C57 29 62 35 62 44V79"
          stroke={MOONLIT}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M18 79H78"
          stroke={HALO_BLUE}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r="5" stroke={MOONLIT} strokeWidth="1" />
        <path
          d="M48 53V66"
          stroke={HALO_BLUE}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r="2" fill={ICE_WHITE} />
      </svg>
    );
  },

  focusDial: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const dial = "M72 70A34 34 0 1 1 78 36";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={dial}
          stroke={HALO_BLUE}
          strokeWidth="5"
          opacity="0.42"
          strokeLinecap="round"
        />
        <path
          d={dial}
          stroke={HALO_BLUE}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M48 22V30M22 48H30M48 66V74"
          stroke={MOONLIT}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M48 48L74 32"
          stroke={HALO_BLUE}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r="9" stroke={MOONLIT} strokeWidth="1.1" />
        <circle cx={center} cy={center} r="3" fill={ICE_WHITE} />
        <circle cx="78" cy="36" r="4" fill={HALO_BLUE} stroke={MOONLIT} />
      </svg>
    );
  },

  threadBeacon: (size = 96) => {
    const c = size / 2;
    const center = (c / size) * 96;
    const beacon = "M48 14V82M48 31L70 43M48 55L25 68";

    return (
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
        <path
          d={beacon}
          stroke={HALO_BLUE}
          strokeWidth="5"
          opacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={beacon}
          stroke={HALO_BLUE}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 22L48 14L56 22M62 43L70 43L66 36M33 68L25 68L29 75"
          stroke={MOONLIT}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={center} cy="31" r="4" fill={ICE_WHITE} stroke={HALO_BLUE} />
        <circle cx={center} cy="55" r="4" fill={ICE_WHITE} stroke={HALO_BLUE} />
        <circle cx="70" cy="43" r="3" fill={MOONLIT} />
        <circle cx="25" cy="68" r="3" fill={MOONLIT} />
        <circle cx={center} cy="82" r="2.5" fill={HALO_BLUE} />
      </svg>
    );
  },
};