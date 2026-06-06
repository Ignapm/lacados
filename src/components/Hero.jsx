import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="inicio" style={styles.section}>
      {/* Background image with overlay */}
      <div style={styles.bg}>
        <img
          src="/images/hero.jpg"
          alt="Instalaciones Lacados Alacant"
          style={styles.bgImg}
        />
        <div style={styles.overlay} />
        <div style={styles.overlayGradient} />
      </div>

      {/* Geometric decorative lines */}
      <div style={styles.decorLines}>
        <div style={styles.line1} />
        <div style={styles.line2} />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div
          style={{
            ...styles.tagline,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <span style={styles.taglineBar} />
          Expertos en lacado de aluminio desde 2005
          <span style={styles.taglineBar} />
        </div>

        <h1
          style={{
            ...styles.heading,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(30px)",
            transition: "all 0.9s ease 0.4s",
          }}
        >
          Calidad y Precisión
          <br />
          <em style={styles.headingItalic}>en cada acabado</em>
        </h1>

        <p
          style={{
            ...styles.sub,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.65s",
          }}
        >
          Lacado y decorado en polvo de perfiles y chapas de aluminio.
          <br />
          Acabados Carta RAL · Metalizados · Imitación madera · Texturados
        </p>

        <div
          style={{
            ...styles.actions,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.85s",
          }}
        >
          <a href="#servicios" style={styles.btnPrimary}>
            Nuestros Servicios
          </a>
          <a href="#contacto" style={styles.btnSecondary}>
            Contactar
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={styles.statsBar}>
        {[
          { value: "+20", label: "Años de experiencia" },
          { value: "5.500m²", label: "De instalaciones" },
          { value: "29", label: "Profesionales" },
          { value: "QUALICOAT", label: "Certificación" },
        ].map((stat) => (
          <div key={stat.label} style={styles.stat}>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a href="#nosotros" style={styles.scrollIndicator}>
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    height: "100vh",
    minHeight: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "#fff",
  },
  bg: {
    position: "absolute",
    inset: 0,
  },
  bgImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    filter: "brightness(0.6)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(26,34,53,0.55)",
  },
  overlayGradient: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(26,34,53,0.2) 0%, rgba(26,34,53,0.6) 60%, rgba(26,34,53,0.9) 100%)",
  },
  decorLines: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
  line1: {
    position: "absolute",
    left: "8%",
    top: "15%",
    width: 1,
    height: "40%",
    background:
      "linear-gradient(to bottom, transparent, rgba(200,169,110,0.4), transparent)",
  },
  line2: {
    position: "absolute",
    right: "8%",
    top: "25%",
    width: 1,
    height: "30%",
    background:
      "linear-gradient(to bottom, transparent, rgba(200,169,110,0.3), transparent)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: 820,
    padding: "0 24px",
    marginBottom: 80,
  },
  tagline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 28,
  },
  taglineBar: {
    width: 40,
    height: 1,
    background: "#c8a96e",
    display: "inline-block",
  },
  heading: {
    fontSize: "clamp(40px, 7vw, 80px)",
    fontWeight: 700,
    lineHeight: 1.1,
    color: "#fff",
    marginBottom: 24,
    textShadow: "0 2px 20px rgba(0,0,0,0.3)",
  },
  headingItalic: {
    color: "#c8a96e",
    fontStyle: "italic",
    fontWeight: 400,
  },
  sub: {
    fontSize: "clamp(14px, 2vw, 17px)",
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.8,
    marginBottom: 40,
    fontWeight: 300,
    letterSpacing: "0.02em",
  },
  actions: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #c8a96e, #e8c87a)",
    color: "#1a2235",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "16px 36px",
    borderRadius: 3,
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 8px 24px rgba(200,169,110,0.35)",
  },
  btnSecondary: {
    background: "transparent",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "15px 36px",
    borderRadius: 3,
    border: "1px solid rgba(255,255,255,0.45)",
    transition: "border-color 0.2s, background 0.2s",
  },
  statsBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    background: "rgba(26,34,53,0.92)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(200,169,110,0.2)",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "20px 40px",
    gap: 0,
  },
  stat: {
    textAlign: "center",
    padding: "8px 0",
    borderRight: "1px solid rgba(255,255,255,0.08)",
  },
  statValue: {
    fontSize: "clamp(18px, 3vw, 28px)",
    fontWeight: 800,
    color: "#c8a96e",
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: "0.02em",
  },
  statLabel: {
    fontSize: 10,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginTop: 4,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: 120,
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,0.5)",
    animation: "bounce 2s infinite",
    zIndex: 3,
  },
};
