interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span
      style={{
        color: "#63CF6F",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "var(--font-outfit)",
        display: "block",
        marginBottom: "12px",
      }}
    >
      {text}
    </span>
  );
}
