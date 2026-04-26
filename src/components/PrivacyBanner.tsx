"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "autoascent_privacy_accepted";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function handleAgree() {
    localStorage.setItem(STORAGE_KEY, "true");
    setDismissing(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "#F5F5F5",
        borderTop: "2px solid #000",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
        opacity: dismissing ? 0 : 1,
        transform: dismissing ? "translateY(100%)" : "translateY(0)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px" }}
        className="flex flex-col md:flex-row md:items-center gap-4"
      >
        {/* Text */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "15px",
              color: "#000",
              lineHeight: 1.6,
              marginBottom: "4px",
              maxWidth: "none",
            }}
          >
            We collect only the information you submit via our contact form. We don't track you,
            sell your data, or use advertising cookies.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "13px",
              color: "#888",
              maxWidth: "none",
            }}
          >
            By continuing to use this site, you agree to our{" "}
            <Link
              href="/privacy"
              style={{ color: "#555", borderBottom: "1px solid #63CF6F", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={handleAgree}
            className="w-full md:w-auto"
            style={{
              background: "#63CF6F",
              border: "2px solid #000",
              borderRadius: "10px",
              padding: "12px 24px",
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: "15px",
              color: "#000",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "4px 4px 0px #000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            I Agree
          </button>
          <Link
            href="/privacy"
            className="w-full md:w-auto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "2px solid #000",
              borderRadius: "10px",
              padding: "12px 24px",
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: "15px",
              color: "#000",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Read Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
