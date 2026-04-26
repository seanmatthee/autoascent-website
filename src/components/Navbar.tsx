"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",          href: "/" },
  { label: "What We Build", href: "/what-we-build" },
  { label: "About Us",      href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "2px solid #000",
        overflow: "visible",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — left */}
        <Link href="/" style={{ display: "block", flexShrink: 0 }}>
          <Image
            src="/logo-white.png"
            alt="AutoAscent"
            width={180}
            height={45}
            priority
            quality={85}
            style={{ display: "block" }}
          />
        </Link>

        {/* Email — true centre */}
        <a
          href="mailto:seanmatthee@auto-ascent.us"
          className="hidden md:flex"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "15px",
            color: "#63CF6F",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s ease",
            cursor: "pointer",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          seanmatthee@auto-ascent.us
        </a>

        {/* Nav links + CTA — right */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#000",
              textDecoration: "none",
              background: "#63CF6F",
              border: "2px solid #000",
              borderRadius: "8px",
              padding: "10px 20px",
              transition: "all 0.2s ease",
              cursor: "pointer",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
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
            Contact Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden", background: "#fff", borderTop: "2px solid #000" }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: "16px 24px 24px", gap: "4px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#000",
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid #E8E8E8",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:seanmatthee@auto-ascent.us"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#63CF6F",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid #E8E8E8",
                  letterSpacing: "-0.01em",
                }}
              >
                seanmatthee@auto-ascent.us
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#000",
                  textDecoration: "none",
                  background: "#63CF6F",
                  border: "2px solid #000",
                  borderRadius: "8px",
                  padding: "14px 20px",
                  marginTop: "12px",
                  textAlign: "center",
                }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-outfit)",
        fontWeight: 600,
        fontSize: "14px",
        color: "#000",
        textDecoration: "none",
        position: "relative",
        paddingBottom: "4px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget.querySelector(".underline-bar") as HTMLElement;
        if (el) el.style.width = "100%";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget.querySelector(".underline-bar") as HTMLElement;
        if (el) el.style.width = "0%";
      }}
    >
      {label}
      <span
        className="underline-bar"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: "0%",
          background: "#63CF6F",
          transition: "width 0.25s ease",
          display: "block",
        }}
      />
    </Link>
  );
}
