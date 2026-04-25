"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27713854935"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        border: "2.5px solid #000",
        boxShadow: "4px 4px 0px #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "6px 6px 0px #000";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "4px 4px 0px #000";
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.826 1.78 6.855L2 30l7.338-1.757A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.82-1.587l-.416-.247-4.352 1.042 1.075-4.24-.27-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.617c-.345-.173-2.04-1.007-2.356-1.122-.316-.115-.547-.173-.777.173-.23.346-.893 1.122-1.095 1.352-.2.23-.402.259-.748.086-.345-.173-1.459-.537-2.779-1.714-1.027-.916-1.72-2.047-1.922-2.392-.201-.346-.021-.532.151-.704.155-.155.346-.403.519-.605.173-.2.23-.345.346-.576.115-.23.058-.432-.029-.605-.086-.173-.777-1.873-1.065-2.564-.28-.673-.565-.582-.777-.593l-.662-.011c-.23 0-.605.086-.921.432-.316.346-1.21 1.18-1.21 2.879s1.238 3.34 1.411 3.57c.172.23 2.437 3.72 5.904 5.218.825.356 1.469.569 1.97.728.828.264 1.582.227 2.178.138.664-.1 2.04-.834 2.327-1.638.288-.805.288-1.495.202-1.638-.086-.144-.316-.23-.662-.403z" />
      </svg>
    </a>
  );
}
