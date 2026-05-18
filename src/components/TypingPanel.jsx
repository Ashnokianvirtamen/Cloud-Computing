import { useState } from "react";

const STATS = [
  { label: "Karakter", key: "chars" },
  { label: "Kata", key: "words" },
  { label: "Kalimat", key: "sentences" },
  { label: "Mnt baca", key: "readMin" },
];

export default function TypingPanel() {
  const [text, setText] = useState("");

  const chars = text.length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
  const readMin = Math.ceil((words / 200) * 10) / 10 || 0;

  const values = { chars, words, sentences, readMin };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Mulai mengetik di sini..."
        style={{
          width: "100%",
          background: "#13131a",
          border: "1px solid #2a2a38",
          borderRadius: 12,
          padding: 16,
          fontFamily: "monospace",
          fontSize: 14,
          color: "#f0eeff",
          outline: "none",
          resize: "none",
          minHeight: 100,
        }}
      />
      <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
        {STATS.map(({ label, key }) => (
          <div
            key={key}
            style={{
              background: "#13131a",
              border: "1px solid #2a2a38",
              borderRadius: 8,
              padding: "8px 14px",
              fontFamily: "monospace",
              fontSize: 12,
              color: "#888",
              flex: "1 1 60px",
            }}
          >
            {label}
            <div style={{ color: "#f0eeff", fontSize: 18, fontWeight: 700, marginTop: 2 }}>
              {values[key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
