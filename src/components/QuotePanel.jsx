import { useState } from "react";
import { QUOTES } from "../data/constants";

export default function QuotePanel() {
  const [idx, setIdx] = useState(0);
  const q = QUOTES[idx];

  return (
    <div>
      <div
        style={{
          background: "#13131a",
          border: "1px solid #2a2a38",
          borderRadius: 14,
          padding: 24,
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.6, marginBottom: 10 }}>
          "{q.text}"
        </div>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>
          — {q.author}
        </div>
      </div>
      <button
        onClick={() => setIdx((i) => (i + 1) % QUOTES.length)}
        style={{
          background: "#7c6aff",
          border: "none",
          color: "#fff",
          fontWeight: 700,
          fontSize: 14,
          padding: "10px 24px",
          borderRadius: 99,
          cursor: "pointer",
        }}
      >
        Kutipan baru ✦
      </button>
    </div>
  );
}
