import { useState } from "react";

const btnStyle = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  border: "1.5px solid #2a2a38",
  background: "#13131a",
  color: "#f0eeff",
  fontSize: 28,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
};

export default function CounterPanel() {
  const [count, setCount] = useState(0);
  const color = count > 0 ? "#6affd4" : count < 0 ? "#ff6a9b" : "#f0eeff";

  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          marginBottom: 8,
        }}
      >
        <button onClick={() => setCount((c) => c - 1)} style={btnStyle}>−</button>
        <span
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            minWidth: 110,
            color,
            transition: "color .3s",
          }}
        >
          {count}
        </span>
        <button onClick={() => setCount((c) => c + 1)} style={btnStyle}>+</button>
      </div>
      <button
        onClick={() => setCount(0)}
        style={{
          background: "none",
          border: "none",
          color: "#666",
          fontFamily: "monospace",
          fontSize: 12,
          cursor: "pointer",
          padding: "4px 8px",
        }}
      >
        reset
      </button>
    </div>
  );
}
