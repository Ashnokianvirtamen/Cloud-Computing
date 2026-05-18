import { useState } from "react";
import { PALETTE } from "../data/constants";

export default function PalettePanel() {
  const [picked, setPicked] = useState(null);

  return (
    <div style={{ padding: "8px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: 10,
        }}
      >
        {PALETTE.map((c) => (
          <div
            key={c.hex}
            onClick={() => setPicked(c)}
            title={c.name}
            style={{
              height: 60,
              borderRadius: 12,
              background: c.hex,
              cursor: "pointer",
              border: picked?.hex === c.hex ? "2.5px solid #fff" : "2.5px solid transparent",
              transform: picked?.hex === c.hex ? "scale(1.1)" : "scale(1)",
              transition: "transform .2s, border .2s",
            }}
          />
        ))}
      </div>

      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: picked ? picked.hex : "transparent",
          marginTop: 12,
          transition: "background .4s",
        }}
      />
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 13,
          color: "#888",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {picked ? `${picked.hex} · ${picked.name}` : "Pilih warna favoritmu"}
      </div>
    </div>
  );
}
