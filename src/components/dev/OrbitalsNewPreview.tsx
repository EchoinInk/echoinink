import React from "react";
import OrbitalVisualNew, { OrbitalVariant } from "../ui/OrbitalVisualNew";

// Runtime list of variants isn't exported from the module; keep a typed empty
// array to avoid using the type as a value at runtime. Update with actual
// variant strings if a runtime list becomes available.
const orbitalVariants: OrbitalVariant[] = [];

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
