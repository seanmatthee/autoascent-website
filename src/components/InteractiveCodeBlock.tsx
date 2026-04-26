"use client";

import { useState, useRef } from "react";

// ── Tokeniser ────────────────────────────────────────────────────────────────

type TType = "comment" | "string" | "keyword" | "number" | "plain";

const C: Record<TType, string> = {
  comment: "#6B7280",
  string:  "#86EFAC",
  keyword: "#60A5FA",
  number:  "#FCD34D",
  plain:   "#D1D5DB",
};

const KW = new Set([
  "const", "let", "var", "export", "default", "import", "from",
  "async", "await", "return", "if", "else", "function", "type",
  "interface", "enum", "class", "new", "typeof", "extends",
  "implements", "true", "false", "null", "undefined",
]);

function parseLine(
  line: string,
  inBlock: { v: boolean }
): { t: TType; v: string }[] {
  const toks: { t: TType; v: string }[] = [];
  let i = 0;

  while (i < line.length) {
    // Inside block comment
    if (inBlock.v) {
      const end = line.indexOf("*/", i);
      if (end >= 0) {
        toks.push({ t: "comment", v: line.slice(i, end + 2) });
        i = end + 2;
        inBlock.v = false;
      } else {
        toks.push({ t: "comment", v: line.slice(i) });
        i = line.length;
      }
      continue;
    }

    const ch = line[i];

    // Hash comment (shell / JSON-with-comments)
    if (ch === "#") {
      toks.push({ t: "comment", v: line.slice(i) });
      break;
    }

    // Line comment
    if (ch === "/" && line[i + 1] === "/") {
      toks.push({ t: "comment", v: line.slice(i) });
      break;
    }

    // Block comment
    if (ch === "/" && line[i + 1] === "*") {
      const end = line.indexOf("*/", i + 2);
      if (end >= 0) {
        toks.push({ t: "comment", v: line.slice(i, end + 2) });
        i = end + 2;
      } else {
        toks.push({ t: "comment", v: line.slice(i) });
        i = line.length;
        inBlock.v = true;
      }
      continue;
    }

    // String (single / double / backtick)
    if (ch === '"' || ch === "'" || ch === "`") {
      let j = i + 1;
      while (j < line.length && line[j] !== ch) {
        if (line[j] === "\\") j++;
        j++;
      }
      toks.push({ t: "string", v: line.slice(i, Math.min(j + 1, line.length)) });
      i = j + 1;
      continue;
    }

    // Number (not after an identifier char)
    if (/\d/.test(ch) && (i === 0 || !/[a-zA-Z_$]/.test(line[i - 1]))) {
      let j = i;
      while (j < line.length && /[\d._]/.test(line[j])) j++;
      toks.push({ t: "number", v: line.slice(i, j) });
      i = j;
      continue;
    }

    // Identifier / keyword
    if (/[a-zA-Z_$]/.test(ch)) {
      let j = i;
      while (j < line.length && /[a-zA-Z\d_$]/.test(line[j])) j++;
      const word = line.slice(i, j);
      toks.push({ t: KW.has(word) ? "keyword" : "plain", v: word });
      i = j;
      continue;
    }

    toks.push({ t: "plain", v: ch });
    i++;
  }

  return toks;
}

function renderCode(code: string) {
  const lines = code.split("\n");
  const inBlock = { v: false };

  return lines.map((line, li) => {
    const toks = parseLine(line, inBlock);
    return (
      <div key={li} style={{ display: "flex", minHeight: "1.6em", whiteSpace: "pre" }}>
        <span
          style={{
            color: "#4B5563",
            userSelect: "none",
            minWidth: "2.8em",
            textAlign: "right",
            paddingRight: "1.2em",
            flexShrink: 0,
            fontSize: "11px",
            lineHeight: "1.6em",
            whiteSpace: "normal",
          }}
        >
          {li + 1}
        </span>
        <span>
          {toks.map((tok, ti) => (
            <span key={ti} style={{ color: C[tok.t] }}>
              {tok.v}
            </span>
          ))}
        </span>
      </div>
    );
  });
}

// ── Component ────────────────────────────────────────────────────────────────

export interface CodeStep {
  title: string;
  filename: string;
  code: string;
}

interface Props {
  steps: CodeStep[];
}

export default function InteractiveCodeBlock({ steps }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!hovered) setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
  }

  return (
    <>
      <style>{`
        @keyframes codeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Step list */}
        <div className="lg:col-span-2">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                width: "100%",
                background: activeStep === i ? "#F5F5F5" : "transparent",
                border: "none",
                padding: "16px 20px",
                cursor: "pointer",
                textAlign: "left",
                borderLeft: `3px solid ${activeStep === i ? "#63CF6F" : "transparent"}`,
                borderRadius: "0 8px 8px 0",
                transition: "all 0.2s ease",
                marginBottom: "4px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: activeStep === i ? "#63CF6F" : "#bbb",
                  minWidth: "22px",
                  paddingTop: "1px",
                  transition: "color 0.2s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: activeStep === i ? 700 : 500,
                  fontSize: activeStep === i ? "15px" : "14px",
                  color: activeStep === i ? "#000" : "#666",
                  transition: "all 0.2s ease",
                }}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Code panel */}
        <div
          className="lg:col-span-3"
          ref={panelRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div
            style={{
              background: "#0F0F0F",
              border: "2px solid #333",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Mouse gradient overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1,
                background: mousePos
                  ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(87,154,194,0.10), transparent 70%)`
                  : "none",
                opacity: hovered ? 1 : 0,
                transition: hovered ? "none" : "opacity 0.4s ease",
              }}
            />

            {/* Window chrome */}
            <div
              style={{
                background: "#1A1A1A",
                padding: "10px 16px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                borderBottom: "1px solid #333",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57", flexShrink: 0 }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E", flexShrink: 0 }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#555",
                  marginLeft: "8px",
                }}
              >
                {steps[activeStep].filename}
              </span>
            </div>

            {/* Code */}
            <div
              key={activeStep}
              style={{
                padding: "20px 16px",
                fontFamily: "monospace",
                fontSize: "13px",
                lineHeight: "1.7",
                overflowX: "auto",
                minHeight: "360px",
                position: "relative",
                zIndex: 0,
                animation: "codeIn 0.2s ease",
              }}
            >
              {renderCode(steps[activeStep].code)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
