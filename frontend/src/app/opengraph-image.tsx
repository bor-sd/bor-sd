import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — personal site`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f7",
          padding: 80,
        }}
      >
        <svg viewBox="0 0 36 36" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="9" fill="#1a1a18" />
          <path
            d="M11 8 V28 M11 8 H16.5 A5 5 0 0 1 16.5 18 H11 M11 18 H18 A5 5 0 0 1 18 28 H11"
            fill="none"
            stroke="#faf9f7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27.5" cy="25.5" r="2.75" fill="#d6552b" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              color: "#1a1a18",
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 30,
              color: "#6b6b66",
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", height: 6, width: 160, background: "#d6552b" }} />
      </div>
    ),
    size
  );
}
