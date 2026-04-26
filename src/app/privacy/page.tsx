import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AutoAscent Privacy Policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://auto-ascent.us/privacy" },
  robots: { index: false, follow: false },
};

const h2: CSSProperties = {
  fontFamily: "var(--font-outfit)",
  fontWeight: 700,
  fontSize: "22px",
  color: "#000",
  marginBottom: "12px",
  marginTop: "48px",
};

const p: CSSProperties = {
  fontFamily: "var(--font-jakarta)",
  fontSize: "17px",
  color: "#3D3D3D",
  lineHeight: 1.75,
  marginBottom: "16px",
};

const li: CSSProperties = {
  fontFamily: "var(--font-jakarta)",
  fontSize: "17px",
  color: "#3D3D3D",
  lineHeight: 1.75,
};

const th: CSSProperties = {
  background: "#F5F5F5",
  padding: "12px 16px",
  fontFamily: "var(--font-outfit)",
  fontWeight: 700,
  fontSize: "14px",
  color: "#000",
  textAlign: "left",
  borderBottom: "2px solid #000",
};

const td: CSSProperties = {
  padding: "12px 16px",
  fontFamily: "var(--font-jakarta)",
  fontSize: "15px",
  color: "#3D3D3D",
  borderBottom: "1px solid #E8E8E8",
  verticalAlign: "top",
  lineHeight: 1.6,
};

const tableWrap: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
  marginBottom: "24px",
  border: "2px solid #000",
  borderRadius: "12px",
  overflow: "hidden",
};

const link: CSSProperties = {
  color: "#000",
  borderBottom: "1.5px solid #63CF6F",
  textDecoration: "none",
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: "80px 24px 100px", background: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <SectionLabel text="LEGAL" />
        <h1
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 48px)",
            letterSpacing: "-0.025em",
            color: "#000",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", color: "#888", marginBottom: "48px", lineHeight: 1.6, maxWidth: "none" }}>
          Effective Date: [DATE TO BE UPDATED] · AutoAscent, operated by Sean Matthee · Centurion, Gauteng, South Africa
        </p>

        {/* 1 */}
        <h2 style={h2}>1. Introduction</h2>
        <p style={p}>
          This Privacy Policy describes how AutoAscent ("we", "us", "our") collects, uses, stores, and protects the personal information you provide when using our website at auto-ascent.us ("the Site") or contacting us for services.
        </p>
        <p style={p}>
          We are committed to complying with the Protection of Personal Information Act 4 of 2013 (POPIA) of South Africa and, where applicable, the General Data Protection Regulation (GDPR) for users in the European Union and United Kingdom.
        </p>

        {/* 2 */}
        <h2 style={h2}>2. Information We Collect</h2>
        <p style={p}>When you submit our contact form, we collect the following personal information:</p>
        <table style={tableWrap}>
          <thead>
            <tr>
              <th style={th}>Field</th>
              <th style={th}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Full name", "To address you personally in communications"],
              ["Business email address", "To send our reply and schedule your discovery call"],
              ["Company / business name", "To understand your business context"],
              ["Tools currently in use", "To scope a relevant solution for your stack"],
              ["Biggest manual time-waster", "To identify automation or website opportunities"],
              ["Project budget", "To confirm we can serve your project within scope"],
            ].map(([field, purpose]) => (
              <tr key={field}>
                <td style={{ ...td, fontWeight: 600 }}>{field}</td>
                <td style={td}>{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={p}>We do not collect payment information, government ID numbers, or any sensitive personal information as defined under POPIA.</p>

        {/* 3 */}
        <h2 style={h2}>3. How We Use Your Information</h2>
        <p style={p}>We use the information you provide solely to:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Respond to your inquiry via email within 24 hours",
            "Prepare for and conduct your free discovery call",
            "Scope and quote your project accurately",
            "Send follow-up communications related to your project",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>
        <p style={p}>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        {/* 4 */}
        <h2 style={h2}>4. How We Store Your Information</h2>
        <p style={p}>
          Your form submission is processed via Resend (resend.com), a transactional email service, and delivered directly to our business email inbox. We do not use a CRM or store form data in a database beyond the email record itself.
        </p>
        <p style={p}>
          Email records are retained for up to <strong>12 months</strong> from the date of submission. After this period, records may be archived or deleted at our discretion.
        </p>
        <p style={p}>We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, or destruction.</p>

        {/* 5 */}
        <h2 style={h2}>5. Cookies and Analytics</h2>
        <p style={p}>
          The Site uses <strong>Vercel Analytics</strong> to collect anonymised, aggregated usage data (page views, session data). Vercel Analytics does not use cookies and does not collect personally identifiable information. No tracking cookies are set on your device.
        </p>
        <p style={p}>We do not use Google Analytics, Facebook Pixel, or any other third-party advertising trackers.</p>

        {/* 6 */}
        <h2 style={h2}>6. Your Rights</h2>
        <p style={{ ...p, fontWeight: 600 }}>Under POPIA (South African users), you have the right to:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Request access to the personal information we hold about you",
            "Request correction of inaccurate personal information",
            "Request deletion of your personal information",
            "Object to the processing of your personal information",
            "Lodge a complaint with the Information Regulator of South Africa",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>
        <p style={{ ...p, fontWeight: 600 }}>Under GDPR (EU/UK users), you have the right to:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Access your personal data",
            "Rectify inaccurate data",
            'Erasure ("right to be forgotten")',
            "Restrict or object to processing",
            "Data portability",
            "Lodge a complaint with your local supervisory authority",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>
        <p style={p}>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:seanmatthee@auto-ascent.us" style={link}>seanmatthee@auto-ascent.us</a>.{" "}
          We will respond within 30 days.
        </p>

        {/* 7 */}
        <h2 style={h2}>7. Legal Basis for Processing (GDPR)</h2>
        <p style={p}>
          For users in the EU/UK, our legal basis for processing your personal information is <strong>legitimate interests</strong> (Article 6(1)(f) GDPR) — specifically, to respond to your business inquiry and scope a service engagement. Where required by law, we will obtain explicit consent before processing.
        </p>

        {/* 8 */}
        <h2 style={h2}>8. International Data Transfers</h2>
        <p style={p}>
          AutoAscent is based in South Africa. If you submit information from outside South Africa, your data is transferred to and processed in South Africa. By submitting the form, you consent to this transfer.
        </p>
        <p style={p}>
          For EU/UK users: data is transferred to South Africa, which may not have an adequacy decision from the European Commission. We rely on your explicit consent as the transfer mechanism.
        </p>

        {/* 9 */}
        <h2 style={h2}>9. Third-Party Services</h2>
        <p style={p}>We use the following third-party services that may process your data:</p>
        <table style={tableWrap}>
          <thead>
            <tr>
              <th style={th}>Service</th>
              <th style={th}>Purpose</th>
              <th style={th}>Privacy Policy</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Resend", "Transactional email delivery", "resend.com/privacy"],
              ["Vercel", "Website hosting and analytics", "vercel.com/legal/privacy-policy"],
            ].map(([service, purpose, url]) => (
              <tr key={service}>
                <td style={{ ...td, fontWeight: 600 }}>{service}</td>
                <td style={td}>{purpose}</td>
                <td style={td}>
                  <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" style={link}>{url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 10 */}
        <h2 style={h2}>10. Children's Privacy</h2>
        <p style={p}>
          Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.
        </p>

        {/* 11 */}
        <h2 style={h2}>11. Changes to This Policy</h2>
        <p style={p}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.
        </p>

        {/* 12 */}
        <h2 style={h2}>12. Contact Us</h2>
        <p style={p}>For any privacy-related questions, access requests, or complaints:</p>
        <div
          style={{
            background: "#F5F5F5",
            border: "2px solid #000",
            borderRadius: "12px",
            padding: "20px 24px",
            fontFamily: "var(--font-jakarta)",
            fontSize: "16px",
            color: "#3D3D3D",
            lineHeight: 1.75,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div><strong>Email:</strong>{" "}<a href="mailto:seanmatthee@auto-ascent.us" style={link}>seanmatthee@auto-ascent.us</a></div>
          <div><strong>Business:</strong> AutoAscent by Sean Matthee</div>
          <div><strong>Address:</strong> Centurion, Gauteng, South Africa</div>
        </div>

        <p style={{ ...p, marginTop: "48px", fontSize: "14px", color: "#aaa", fontStyle: "italic" }}>
          This policy was last reviewed on [DATE].
        </p>
      </div>
    </section>
  );
}
