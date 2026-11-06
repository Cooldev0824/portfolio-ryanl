import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0b1630 0%, #070d1a 60%)",
          color: "#f4f2ed",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ fontSize: 56, letterSpacing: -3 }}>{profile.initials}</div>
          <div style={{ width: 2, height: 56, background: "#2a3a57" }} />
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>{profile.name}</span>
            <span style={{ fontSize: 22, color: "#c8cedb" }}>{profile.title}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
          <span>{profile.headline.lead}</span>
          <span style={{ color: "#f2bd5c", fontStyle: "italic" }}>{profile.headline.emphasis}</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#f2bd5c", fontFamily: "sans-serif" }}>
          {profile.eyebrow.join("  •  ").toUpperCase()}
        </div>
      </div>
    ),
    size,
  );
}
