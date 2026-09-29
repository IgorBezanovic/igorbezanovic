import { ImageResponse } from "next/og";
export const alt = "Igor Bezanovic — Software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 90,
        background: "#f8f7f3",
        color: "#202b26",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 27,
          color: "#245d47",
          marginBottom: 35,
        }}
      >
        SOFTWARE ENGINEER
      </div>
      <div style={{ display: "flex", fontSize: 88 }}>Igor Bezanovic.</div>
      <div style={{ display: "flex", fontSize: 32, marginTop: 35 }}>
        Web applications & digital products
      </div>
    </div>,
    size,
  );
}
