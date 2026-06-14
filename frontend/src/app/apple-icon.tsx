import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same mark as components/brand/Logo.tsx at home-screen resolution.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg viewBox="0 0 36 36" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="#1a1a18" />
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
    ),
    { ...size }
  );
}
