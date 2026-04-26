import Link from "next/link";
import Image from "next/image";
import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#000", color: "#fff" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Col 1 — Brand */}
        <div>
          <div style={{ marginBottom: "16px" }}>
            <Image
              src="/logo-black.png"
              alt="AutoAscent"
              width={160}
              height={40}
              quality={85}
              style={{ display: "block" }}
            />
          </div>
          <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px", maxWidth: "none" }}>
            Custom websites and automation workflows for businesses worldwide.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="#"
              style={{ color: "#aaa", cursor: "pointer", minHeight: "44px", minWidth: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
              className="hover:text-green-primary transition-colors"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              style={{ color: "#aaa", cursor: "pointer", minHeight: "44px", minWidth: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
              className="hover:text-green-primary transition-colors"
              aria-label="Share"
            >
              <Share2 size={20} />
            </a>
          </div>
        </div>

        {/* Col 2 — Links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Navigation
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Home",             href: "/" },
              { label: "Services",         href: "/#services" },
              { label: "About Us",         href: "/about" },
              { label: "Contact Us",       href: "/contact" },
              { label: "Book a Free Call", href: "/contact" },
              { label: "Privacy Policy",   href: "/privacy" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ color: "#aaa", textDecoration: "none", fontSize: "16px", cursor: "pointer", display: "inline-block", minHeight: "44px", lineHeight: "44px" }}
                  className="hover:text-green-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Contact
          </h4>
          <address style={{ fontStyle: "normal" }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ color: "#aaa", fontSize: "16px", fontFamily: "var(--font-jakarta)" }}>seanmatthee@auto-ascent.us</li>
              <li style={{ color: "#aaa", fontSize: "16px", fontFamily: "var(--font-jakarta)" }}>Centurion, South Africa</li>
              <li style={{ color: "#aaa", fontSize: "16px", fontFamily: "var(--font-jakarta)" }}>Serving clients worldwide, remotely</li>
            </ul>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #333",
          padding: "20px 24px",
          textAlign: "center",
          color: "#aaa",
          fontSize: "14px",
          fontFamily: "var(--font-jakarta)",
        }}
      >
        © 2026 AutoAscent®. All rights reserved.
      </div>
    </footer>
  );
}
