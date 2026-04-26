"use client";

import { useState, useRef, useEffect } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  tools: string;
  timeWaster: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  company?: string;
  tools?: string;
  timeWaster?: string;
  budget?: string;
}

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "ZAR", name: "South African Rand" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "DKK", name: "Danish Krone" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "RON", name: "Romanian Leu" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "TZS", name: "Tanzanian Shilling" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "ETB", name: "Ethiopian Birr" },
  { code: "MUR", name: "Mauritian Rupee" },
  { code: "NAD", name: "Namibian Dollar" },
  { code: "THB", name: "Thai Baht" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "KRW", name: "South Korean Won" },
  { code: "TWD", name: "Taiwan Dollar" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "COP", name: "Colombian Peso" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "UYU", name: "Uruguayan Peso" },
  { code: "ILS", name: "Israeli Shekel" },
  { code: "JOD", name: "Jordanian Dinar" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "TND", name: "Tunisian Dinar" },
  { code: "DZD", name: "Algerian Dinar" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "RSD", name: "Serbian Dinar" },
  { code: "ISK", name: "Icelandic Krona" },
  { code: "GEL", name: "Georgian Lari" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "KZT", name: "Kazakhstani Tenge" },
  { code: "UZS", name: "Uzbekistani Som" },
  { code: "KGS", name: "Kyrgyzstani Som" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "MMK", name: "Myanmar Kyat" },
  { code: "LAK", name: "Lao Kip" },
  { code: "KHR", name: "Cambodian Riel" },
  { code: "MDL", name: "Moldovan Leu" },
  { code: "GYD", name: "Guyanese Dollar" },
  { code: "JMD", name: "Jamaican Dollar" },
  { code: "TTD", name: "Trinidad Dollar" },
  { code: "GTQ", name: "Guatemalan Quetzal" },
  { code: "HNL", name: "Honduran Lempira" },
  { code: "CRC", name: "Costa Rican Colón" },
  { code: "NIO", name: "Nicaraguan Córdoba" },
  { code: "BOB", name: "Bolivian Boliviano" },
  { code: "PYG", name: "Paraguayan Guarani" },
  { code: "SRD", name: "Surinamese Dollar" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "PGK", name: "Papua New Guinean Kina" },
  { code: "XAF", name: "Central African CFA Franc" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "XPF", name: "CFP Franc" },
];

const EXCHANGE_RATES: Record<string, number> = {
  USD: 1, EUR: 0.925, GBP: 0.795, ZAR: 18.5, AUD: 1.56, CAD: 1.39,
  NZD: 1.71, CHF: 0.895, JPY: 152, CNY: 7.24, INR: 83.5, BRL: 5.0,
  MXN: 17.0, SGD: 1.35, HKD: 7.82, NOK: 10.8, SEK: 10.5, DKK: 6.90,
  PLN: 4.02, CZK: 23.4, HUF: 360, RON: 4.60, TRY: 32.5, RUB: 92,
  UAH: 39, AED: 3.67, SAR: 3.75, EGP: 49, NGN: 1600, KES: 130,
  GHS: 15.3, TZS: 2650, UGX: 3750, ZMW: 26.5, BWP: 13.6, MAD: 10.0,
  ETB: 113, MUR: 45.2, NAD: 18.5, THB: 35.5, IDR: 16200, MYR: 4.72,
  PHP: 57, VND: 25300, PKR: 280, BDT: 110, LKR: 310, KRW: 1350,
  TWD: 32, CLP: 960, COP: 4000, ARS: 990, PEN: 3.78, UYU: 40,
  ILS: 3.75, JOD: 0.71, KWD: 0.307, BHD: 0.377, OMR: 0.385, QAR: 3.64,
  TND: 3.10, DZD: 135, BGN: 1.81, RSD: 108, ISK: 138, GEL: 2.66,
  AMD: 393, AZN: 1.70, KZT: 461, UZS: 12700, KGS: 87.5, BND: 1.35,
  MMK: 2100, LAK: 21500, KHR: 4100, MDL: 17.7, GYD: 209, JMD: 157,
  TTD: 6.79, GTQ: 7.77, HNL: 24.7, CRC: 520, NIO: 36.7, BOB: 6.91,
  PYG: 7450, SRD: 37, FJD: 2.27, PGK: 3.95, XAF: 607, XOF: 607, XPF: 110,
};

function toUSD(amount: number, currency: string): number {
  const rate = EXCHANGE_RATES[currency] ?? 1;
  return amount / rate;
}

function convertBetween(amount: number, fromCurrency: string, toCurrency: string): number {
  const usd = toUSD(amount, fromCurrency);
  const toRate = EXCHANGE_RATES[toCurrency] ?? 1;
  return usd * toRate;
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

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    tools: "",
    timeWaster: "",
  });

  const [currency, setCurrency] = useState("USD");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [hasUserTyped, setHasUserTyped] = useState(false);

  const [currencySearch, setCurrencySearch] = useState("USD");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const comboboxRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const filteredCurrencies = CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(currencySearch.toLowerCase()) ||
      c.name.toLowerCase().includes(currencySearch.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (comboboxRef.current && !comboboxRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setCurrencySearch(currency);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [currency]);

  function handleCurrencySelect(code: string) {
    if (hasUserTyped && budgetAmount && !isNaN(parseFloat(budgetAmount))) {
      const converted = convertBetween(parseFloat(budgetAmount), currency, code);
      setBudgetAmount(Math.round(converted).toString());
    }
    setCurrency(code);
    setCurrencySearch(code);
    setDropdownOpen(false);
  }

  const budgetNum = parseFloat(budgetAmount);
  const validBudget = !isNaN(budgetNum) && budgetNum > 0;
  const usdEquiv = validBudget && currency !== "USD"
    ? Math.round(toUSD(budgetNum, currency)).toLocaleString()
    : null;

  function validate(): ErrorState {
    const e: ErrorState = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.tools.trim()) e.tools = "Please list your current tools.";
    if (!form.timeWaster.trim()) e.timeWaster = "Please describe your biggest time-waster.";
    if (!budgetAmount.trim() || !validBudget) e.budget = "Please enter a valid budget amount.";
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

    const budgetStr = `${budgetAmount} ${currency}${usdEquiv ? ` (≈ ${usdEquiv} USD)` : ""}`;

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
          budget: budgetStr,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          id="name" name="name" type="text" value={form.name}
          onChange={handleChange}
          onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}
          style={getInputStyle("name")} placeholder="Jane Smith"
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}
      </div>

      {/* Business Email */}
      <div>
        <label style={labelStyle} htmlFor="email">Business Email</label>
        <input
          id="email" name="email" type="email" value={form.email}
          onChange={handleChange}
          onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
          style={getInputStyle("email")} placeholder="jane@yourbusiness.com"
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label style={labelStyle} htmlFor="company">Company / Business Name</label>
        <input
          id="company" name="company" type="text" value={form.company}
          onChange={handleChange}
          onFocus={() => setFocusedField("company")} onBlur={() => setFocusedField(null)}
          style={getInputStyle("company")} placeholder="Acme Co."
        />
        {errors.company && <p style={errorStyle}>{errors.company}</p>}
      </div>

      {/* Tools */}
      <div>
        <label style={labelStyle} htmlFor="tools">What tools are you currently using?</label>
        <input
          id="tools" name="tools" type="text" value={form.tools}
          onChange={handleChange}
          onFocus={() => setFocusedField("tools")} onBlur={() => setFocusedField(null)}
          style={getInputStyle("tools")} placeholder="e.g. HubSpot, Shopify, Gmail"
        />
        {errors.tools && <p style={errorStyle}>{errors.tools}</p>}
      </div>

      {/* Time Waster */}
      <div>
        <label style={labelStyle} htmlFor="timeWaster">What's your biggest manual time-waster?</label>
        <textarea
          id="timeWaster" name="timeWaster" rows={4} value={form.timeWaster}
          onChange={handleChange}
          onFocus={() => setFocusedField("timeWaster")} onBlur={() => setFocusedField(null)}
          style={{ ...getInputStyle("timeWaster"), resize: "vertical" }}
          placeholder="e.g. Manually copying leads from our form into our CRM every morning..."
        />
        {errors.timeWaster && <p style={errorStyle}>{errors.timeWaster}</p>}
      </div>

      {/* Budget — Currency Converter */}
      <div>
        <label style={labelStyle}>Project Budget</label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
          className="budget-row"
        >
          {/* Currency combobox */}
          <div ref={comboboxRef} style={{ position: "relative" }}>
            <input
              type="text"
              value={currencySearch}
              onChange={(e) => {
                setCurrencySearch(e.target.value);
                setDropdownOpen(true);
              }}
              onFocus={() => {
                setDropdownOpen(true);
                setCurrencySearch("");
              }}
              style={{
                ...inputBase,
                borderColor: errors.budget ? "#e53e3e" : "#000",
                outline: focusedField === "currency" ? "2px solid #63CF6F" : "none",
                outlineOffset: "2px",
                cursor: "pointer",
              }}
              placeholder="Currency"
              aria-label="Select currency"
            />
            {dropdownOpen && filteredCurrencies.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  boxShadow: "4px 4px 0px #000",
                  maxHeight: "220px",
                  overflowY: "auto",
                  zIndex: 50,
                }}
              >
                {filteredCurrencies.map((c) => (
                  <div
                    key={c.code}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleCurrencySelect(c.code);
                    }}
                    style={{
                      padding: "10px 14px",
                      cursor: "pointer",
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "14px",
                      color: "#000",
                      background: c.code === currency ? "#f0fdf4" : "transparent",
                      borderBottom: "1px solid #F3F4F6",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontWeight: 700, minWidth: "40px" }}>{c.code}</span>
                    <span style={{ color: "#555" }}>{c.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Amount input */}
          <div>
            <input
              type="number"
              value={budgetAmount}
              onChange={(e) => {
                setBudgetAmount(e.target.value);
                setHasUserTyped(true);
                if (errors.budget) setErrors((prev) => ({ ...prev, budget: undefined }));
              }}
              onFocus={() => setFocusedField("budgetAmount")}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputBase,
                borderColor: errors.budget ? "#e53e3e" : "#000",
                outline: focusedField === "budgetAmount" ? "2px solid #63CF6F" : "none",
                outlineOffset: "2px",
              }}
              placeholder="Amount"
              min="0"
              step="any"
              aria-label="Budget amount"
            />
          </div>
        </div>

        {usdEquiv && (
          <p
            style={{
              marginTop: "6px",
              fontFamily: "var(--font-jakarta)",
              fontSize: "13px",
              color: "#888",
            }}
          >
            ≈ {usdEquiv} USD equivalent
          </p>
        )}
        {errors.budget && <p style={errorStyle}>{errors.budget}</p>}
      </div>

      {submitError && (
        <p style={{ color: "#DC2626", fontSize: "14px", fontFamily: "var(--font-jakarta)" }}>
          {submitError}
        </p>
      )}

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
            <h3 style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "22px", color: "#000", marginBottom: "12px" }}>
              Confirm your email
            </h3>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "16px", color: "#555", lineHeight: 1.6, marginBottom: "24px", maxWidth: "none" }}>
              We'll send our reply to:
            </p>
            <div style={{ background: "#F5F5F5", border: "2px solid #000", borderRadius: "10px", padding: "14px 18px", fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#000", marginBottom: "28px", wordBreak: "break-all" }}>
              {form.email}
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                style={{ flex: 1, background: "#fff", border: "2px solid #000", borderRadius: "10px", padding: "14px", fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: "15px", color: "#000", cursor: "pointer" }}
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={confirmAndSend}
                style={{ flex: 2, background: "#63CF6F", border: "2px solid #000", borderRadius: "10px", padding: "14px", fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "15px", color: "#000", cursor: "pointer" }}
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
