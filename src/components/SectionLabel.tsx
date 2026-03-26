interface Props { children: React.ReactNode }
export default function SectionLabel({ children }: Props) {
  return (
    <div style={{ color: "#00C2CB", fontWeight: 700, fontSize: 13,
                  letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
      {children}
    </div>
  );
}
