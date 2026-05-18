import { useState, useEffect } from "react";
import { DAYS, MONTHS } from "../data/constants";

export default function ClockPanel() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const date = `${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

  return (
    <div style={{ textAlign: "center", padding: "32px 0" }}>
      <div
        style={{
          fontSize: "clamp(48px,10vw,72px)",
          fontWeight: 800,
          letterSpacing: "-2px",
          fontVariantNumeric: "tabular-nums",
          background: "linear-gradient(135deg,#7c6aff,#ff6a9b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        {time}
      </div>
      <div style={{ fontFamily: "monospace", color: "#888", marginTop: 10, fontSize: 14 }}>
        {date}
      </div>
    </div>
  );
}
