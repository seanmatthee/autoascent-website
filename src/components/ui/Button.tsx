"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export default function Button({
  label,
  href,
  variant = "primary",
  onClick,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 28px",
    border: "2px solid #000",
    borderRadius: "8px",
    fontFamily: "var(--font-outfit)",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease",
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap" as const,
  };

  const primary: React.CSSProperties = {
    ...base,
    background: "#63CF6F",
    color: "#000",
  };

  const secondary: React.CSSProperties = {
    ...base,
    background: "#fff",
    color: "#000",
  };

  const style = variant === "primary" ? primary : secondary;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
    (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #000";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
}
