import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
export const alt = "Muhammad Usama — SQA & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5f4ef",
        padding: 72,
        color: "#142c30",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, color: "#21685e" }}>
        SQA ENGINEERING / TEST AUTOMATION
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 86,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        Quality lives in the details.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
        }}
      >
        <span>{profile.name}</span>
        <span>Playwright · Python · pytest</span>
      </div>
    </div>,
    size,
  );
}
