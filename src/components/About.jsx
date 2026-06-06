import { Award, Users, Factory, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Calidad QUALICOAT",
    desc: "Homologados por QUALICOAT, garantizando los más altos estándares en lacado de aluminio.",
  },
  {
    icon: Factory,
    title: "5.500 m² de instalaciones",
    desc: "Planta automatizada con maquinaria de última generación para un proceso óptimo de producción.",
  },
  {
    icon: Users,
    title: "Equipo especializado",
    desc: "29 profesionales altamente cualificados con más de 20 años de experiencia en el sector.",
  },
  {
    icon: Shield,
    title: "Garantía y compromiso",
    desc: "Seriedad, compromiso y experiencia para ofrecerle el mejor producto al mejor precio.",
  },
];

export default function About() {
  return (
    <section id="nosotros" style={styles.section}>
      <div style={styles.container}>
        {/* Left: Image */}
        <div style={styles.imageWrap}>
          <img src="/images/about.jpg" alt="Empresa Lacados Alacant" style={styles.image} />
          <div style={styles.imageBadge}>
            <div style={styles.badgeYear}>2005</div>
            <div style={styles.badgeText}>Fundación</div>
          </div>
          <div style={styles.imageAccent} />
        </div>

        {/* Right: Content */}
        <div style={styles.content}>
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowBar} />
            Quiénes somos
          </div>

          <h2 style={styles.heading}>
            Líderes en lacado
            <br />
            <em style={styles.italic}>de aluminio en Alicante</em>
          </h2>

          <p style={styles.text}>
            <strong>Lacados Alacant S.L.</strong> nace en noviembre de 2005 con
            la ilusión de afianzarse en un mercado cada vez más exigente en
            calidad y servicio. Somos una empresa dedicada al lacado y decorado
            en polvo de perfiles y chapas de aluminio.
          </p>

          <p style={styles.text}>
            Disponemos de unas instalaciones de <strong>5.500 m²</strong>{" "}
            dotadas de maquinaria moderna, operada por empleados altamente
            cualificados. Esto nos permite situarnos como una de las empresas
            referentes del sector en la Comunitat Valenciana.
          </p>

          {/* Values grid */}
          <div style={styles.valuesGrid}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={styles.valueCard}>
                <div style={styles.iconWrap}>
                  <Icon size={22} color="#c8a96e" />
                </div>
                <div>
                  <div style={styles.valueTitle}>{title}</div>
                  <div style={styles.valueDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f5f5f0",
    padding: "100px 0",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center",
  },
  imageWrap: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 520,
    objectFit: "cover",
    borderRadius: 4,
    filter: "brightness(0.85) saturate(0.7)",
  },
  imageBadge: {
    position: "absolute",
    bottom: -24,
    right: -24,
    background: "linear-gradient(135deg, #1a2235, #2a3550)",
    color: "#fff",
    padding: "28px 32px",
    textAlign: "center",
    borderRadius: 4,
    boxShadow: "0 20px 40px rgba(26,34,53,0.3)",
  },
  badgeYear: {
    fontSize: 40,
    fontWeight: 900,
    color: "#c8a96e",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1,
  },
  badgeText: {
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)",
    marginTop: 4,
  },
  imageAccent: {
    position: "absolute",
    top: -16,
    left: -16,
    width: "60%",
    height: "40%",
    border: "2px solid #c8a96e",
    borderRadius: 4,
    zIndex: -1,
  },
  content: {
    paddingRight: 20,
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 20,
    fontFamily: "Montserrat, sans-serif",
  },
  eyebrowBar: {
    width: 32,
    height: 2,
    background: "#c8a96e",
    display: "inline-block",
    flexShrink: 0,
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    color: "#1a2235",
    lineHeight: 1.2,
    marginBottom: 28,
  },
  italic: {
    fontStyle: "italic",
    fontWeight: 400,
    color: "#c8a96e",
  },
  text: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 1.85,
    marginBottom: 18,
    fontWeight: 400,
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginTop: 36,
  },
  valueCard: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    background: "#fff",
    padding: 20,
    borderRadius: 4,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    borderBottom: "3px solid #c8a96e",
  },
  iconWrap: {
    flexShrink: 0,
    width: 42,
    height: 42,
    background: "rgba(200,169,110,0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  valueTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 6,
    letterSpacing: "0.02em",
    fontFamily: "Montserrat, sans-serif",
  },
  valueDesc: {
    fontSize: 12,
    color: "#6b7280",
    lineHeight: 1.6,
  },
};
