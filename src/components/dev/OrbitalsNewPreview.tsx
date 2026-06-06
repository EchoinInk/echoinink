import React from "react";
import OrbitalVisualNew, { OrbitalVariant } from "../ui/OrbitalVisualNew";

// Derive the list of variants from the exported OrbitalVariant enum/type
const orbitalVariants = Object.values(OrbitalVariant) as OrbitalVariant[];

export default function OrbitalPreviewGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "32px",
        padding: "40px",
        background: "#080718",
      }}
    >
      {orbitalVariants.map((variant) => (
        <div
          key={variant}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            borderRadius: "16px",
            background: "#0b0d2a",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <OrbitalVisualNew variant={variant} size={96} />

          <div
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "white",
              opacity: 0.9,
              textAlign: "center",
            }}
          >
            {variant}
          </div>
        </div>
      ))}
    </div>
  );
}
