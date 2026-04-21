"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  tools: string;
  timeWaster: string;
  budget: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  company?: string;
  tools?: string;
  timeWaster?: string;
  budget?: string;
}

const inputBase: React.CSSProperties = {
  width: "100%",
  border: "2px solid #000",
  borderRadius: "12px",
  padding: "14px 16px",
  fontSize: "16px",
  fontFamily: "var(--font-jakarta)",
  background: "#fff",
  color: "#000",
  transition: "border-color 0.15s ease, outline 0.15s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-outfit)",
  fontWeight: 600,
  fontSize: "16px",
  color: "#000",
  marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  color: "#e53e3e",
  fontSize: "14px",
  marginTop: "6px",
  fontFamily: "var(--font-jakarta)",
};

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ pointerEvents: "none" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    tools: "",
    timeWaster: "",
    budget: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(): ErrorState {
    const e: ErrorState = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.tools.trim()) e.tools = "Please list your current tools.";
    if (!form.timeWaster.trim()) e.timeWaster = "Please describe your biggest time-waster.";
    if (!form.budget) e.budget = "Please select a budget range.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setShowConfirm(true);
  }

  async function confirmAndSend() {
    setShowConfirm(false);
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          tools: form.tools,
          timewaster: form.timeWaster,
          budget: form.budget,
        }),
      });

      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us directly at seanmatthee@auto-ascent.us");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ErrorState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const getInputStyle = (field: keyof ErrorState): React.CSSProperties => ({
    ...inputBase,
    borderColor: errors[field] ? "#e53e3e" : "#000",
    outline: focusedField === field ? "2px solid #63CF6F" : "none",
    outlineOffset: "2px",
  });

  if (submitted) {
    return (
      <div
        style={{
          background: "#f0fdf4",
          border: "2px solid #63CF6F",
          borderRadius: "12px",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
        <h3
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "22px",
            color: "#000",
            marginBottom: "12px",
          }}
        >
          Thanks! We'll be in touch within 24 hours.
        </h3>
        <p style={{ color: "#555", fontFamily: "var(--font-jakarta)", fontSize: "16px", maxWidth: "none" }}>
          We've received your details and will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Full Name */}
      <div>
        <label style={labelStyle} htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          style={getInputStyle("name")}
          placeholder="Jane Smith"
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}
      </div>

      {/* Business Email */}
      <div>
        <label style={labelStyle} htmlFor="email">Business Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          style={getInputStyle("email")}
          placeholder="jane@yourbusiness.com"
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label style={labelStyle} htmlFor="company">Company / Business Name</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
          style={getInputStyle("company")}
          placeholder="Acme Co."
        />
        {errors.company && <p style={errorStyle}>{errors.company}</p>}
      </div>

      {/* Tools */}
      <div>
        <label style={labelStyle} htmlFor="tools">What tools are you currently using?</label>
        <input
          id="tools"
          name="tools"
          type="text"
          value={form.tools}
          onChange={handleChange}
          onFocus={() => setFocusedField("tools")}
          onBlur={() => setFocusedField(null)}
          style={getInputStyle("tools")}
          placeholder="e.g. HubSpot, Shopify, Gmail"
        />
        {errors.tools && <p style={errorStyle}>{errors.tools}</p>}
      </div>

      {/* Time Waster */}
      <div>
        <label style={labelStyle} htmlFor="timeWaster">What's your biggest manual time-waster?</label>
        <textarea
          id="timeWaster"
          name="timeWaster"
          rows={4}
          value={form.timeWaster}
          onChange={handleChange}
          onFocus={() => setFocusedField("timeWaster")}
          onBlur={() => setFocusedField(null)}
          style={{ ...getInputStyle("timeWaster"), resize: "vertical" }}
          placeholder="e.g. Manually copying leads from our form into our CRM every morning..."
        />
        {errors.timeWaster && <p style={errorStyle}>{errors.timeWaster}</p>}
      </div>

      {/* Budget */}
      <div>
        <label style={labelStyle} htmlFor="budget">Project Budget</label>
        <div style={{ position: "relative" }}>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            onFocus={() => setFocusedField("budget")}
            onBlur={() => setFocusedField(null)}
            style={{
              ...getInputStyle("budget"),
              appearance: "none",
              WebkitAppearance: "none",
              paddingRight: "40px",
              cursor: "pointer",
            }}
          >
            <option value="">Select a range...</option>
            <option value="1000-1500">$1,000 – $1,500 (One-off project)</option>
            <option value="1500-2000">$1,500 – $2,000 (Complex project)</option>
            <option value="retainer">$100–$200/month (Retainer)</option>
            <option value="unsure">Not sure yet</option>
          </select>
          <div style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
            <ChevronDown />
          </div>
        </div>
        {errors.budget && <p style={errorStyle}>{errors.budget}</p>}
      </div>

      {/* Submit error */}
      {submitError && (
        <p style={{ color: "#DC2626", fontSize: "14px", marginBottom: "0", fontFamily: "var(--font-jakarta)" }}>
          {submitError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          background: isSubmitting ? "#9CA3AF" : "#63CF6F",
          border: "2px solid #000",
          borderRadius: "10px",
          padding: "16px 28px",
          fontFamily: "var(--font-outfit)",
          fontWeight: 600,
          fontSize: "16px",
          color: "#000",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          marginTop: "8px",
          minHeight: "52px",
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "4px 4px 0px #000";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {isSubmitting ? "Sending..." : "Send My Details →"}
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "24px",
          }}
          onClick={() => setShowConfirm(false)}
        >
          <div
            style={{
              background: "#fff",
              border: "2px solid #000",
              borderRadius: "16px",
              boxShadow: "8px 8px 0px #000",
              padding: "40px 36px",
              maxWidth: "420px",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "22px",
                color: "#000",
                marginBottom: "12px",
              }}
            >
              Confirm your email
            </h3>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "none",
              }}
            >
              We'll send our reply to:
            </p>
            <div
              style={{
                background: "#F5F5F5",
                border: "2px solid #000",
                borderRadius: "10px",
                padding: "14px 18px",
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "17px",
                color: "#000",
                marginBottom: "28px",
                wordBreak: "break-all",
              }}
            >
              {form.email}
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                style={{
                  flex: 1,
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  padding: "14px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={confirmAndSend}
                style={{
                  flex: 2,
                  background: "#63CF6F",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  padding: "14px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Yes, Send My Details →
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
