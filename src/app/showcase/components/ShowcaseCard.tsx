"use client";

interface ShowcaseCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  demoHeight?: number;
}

export default function ShowcaseCard({
  title,
  description,
  children,
  demoHeight = 300,
}: ShowcaseCardProps) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "2px solid #1a1a1a",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#579AC2";
        e.currentTarget.style.boxShadow = "0 0 32px rgba(87,154,194,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1a1a1a";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ position: "relative", height: `${demoHeight}px`, overflow: "hidden" }}>
        {children}
      </div>
      <div style={{ padding: "20px 24px", borderTop: "1px solid #1a1a1a" }}>
        <h3
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            marginBottom: "6px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.6,
            maxWidth: "none",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
