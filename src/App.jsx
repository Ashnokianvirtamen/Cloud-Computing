import { useState } from "react";
import { TABS } from "./data/constants";
import ClockPanel from "./components/ClockPanel";
import CounterPanel from "./components/CounterPanel";
import PalettePanel from "./components/PalettePanel";
import TypingPanel from "./components/TypingPanel";
import QuotePanel from "./components/QuotePanel";

const PANELS = [ClockPanel, CounterPanel, PalettePanel, TypingPanel, QuotePanel];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const ActivePanel = PANELS[activeTab];

  return (
    <div
      style={{
        background: "#0a0a0f",
        borderRadius: 16,
        padding: 28,
        fontFamily: "sans-serif",
        color: "#f0eeff",
        minHeight: 480,
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 16,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%,rgba(124,106,255,0.15),transparent)," +
            "radial-gradient(ellipse 60% 40% at 90% 110%,rgba(255,106,155,0.1),transparent)",
        }}
      />

      <div style={{ position: "relative" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: "clamp(32px,6vw,52px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          <span style={{ color: "#7c6aff" }}>Hello</span>{" "}
          <span style={{ color: "#ff6a9b" }}>World</span>
          <span style={{ color: "#6affd4" }}>!</span>
        </h1>
        <p style={{ fontFamily: "monospace", fontSize: 13, color: "#666", marginBottom: 24 }}>
          // By Ihsan Ramdani
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: activeTab === i ? "#7c6aff" : "#13131a",
                border: `1px solid ${activeTab === i ? "#7c6aff" : "#2a2a38"}`,
                color: activeTab === i ? "#fff" : "#888",
                fontFamily: "sans-serif",
                fontSize: 13,
                padding: "8px 16px",
                borderRadius: 99,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <ActivePanel key={activeTab} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
