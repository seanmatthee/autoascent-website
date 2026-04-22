import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0F0F0F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
          gap: "0px",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 160 160" fill="none">
          <line x1="40" y1="120" x2="80" y2="80"  stroke="#63CF6F" strokeWidth="6" strokeLinecap="round"/>
          <line x1="80" y1="80"  x2="120" y2="40" stroke="#63CF6F" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="40"  cy="120" r="10"   fill="#63CF6F"/>
          <circle cx="80"  cy="80"  r="14"   fill="#63CF6F"/>
          <circle cx="120" cy="40"  r="18"   fill="#63CF6F"/>
          <circle cx="40"  cy="120" r="4"    fill="#0F0F0F"/>
          <circle cx="80"  cy="80"  r="5.5"  fill="#0F0F0F"/>
          <circle cx="120" cy="40"  r="7.5"  fill="#0F0F0F"/>
        </svg>
        <div style={{ display: "flex", marginTop: "20px", fontSize: "68px", fontWeight: 800, letterSpacing: "-3px" }}>
          <span style={{ color: "#FFFFFF" }}>Auto</span>
          <span style={{ color: "#63CF6F" }}>Ascent</span>
        </div>
        <div style={{ marginTop: "16px", fontSize: "24px", color: "#888888", textAlign: "center" }}>
          Zapier Automation for US Small Businesses
        </div>
        <div style={{
          marginTop: "36px",
          background: "#63CF6F",
          color: "#000",
          padding: "12px 32px",
          borderRadius: "100px",
          fontSize: "18px",
          fontWeight: 700,
        }}>
          Free Discovery Call — auto-ascent.us
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
