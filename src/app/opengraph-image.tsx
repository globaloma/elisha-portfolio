import { ImageResponse } from "next/og";

export const alt =
  "Elisha Ibeabuchi — UI/UX Designer & Mobile App Developer, Founder & CEO of Crib";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card shown when the homepage is shared on X, LinkedIn,
// WhatsApp, iMessage, Slack, etc. Big driver of click-through from shares.
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
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 85% -10%, rgba(34,211,238,0.22), transparent 60%), #0a0c0b",
          color: "#f4f6f6",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)",
              color: "#04181c",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            E
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#9fb0b2" }}>
            UIUX Design &amp; Mobile Development
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.02 }}>
            Elisha Ibeabuchi
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 36,
              fontWeight: 500,
              color: "#c3d0d1",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Founder &amp; CEO of Crib — building modern, user-focused mobile
            apps from first sketch to the App Store.
          </div>
        </div>

        {/* Footer tags */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Mobile App Developer", "UI/UX Designer", "Flutter"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 26,
                color: "#9fb0b2",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#22d3ee",
                }}
              />
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
