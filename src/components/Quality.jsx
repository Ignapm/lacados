import { Star, Award, ThumbsUp, Zap } from "lucide-react";

const certs = [
  {
    icon: Award,
    name: "QUALICOAT",
    desc: "Homologados por QUALICOAT, el sello de calidad internacional para el lacado de aluminio.",
  },
  {
    icon: Star,
    name: "Acabados Premium",
    desc: "Productos superan las pruebas más estrictas del sector, incluyendo resistencia marina.",
  },
  {
    icon: ThumbsUp,
    name: "AKZO NOBEL",
    desc: "Trabajamos con productos de AKZO NOBEL COATINGS, uno de los líderes mundiales en pinturas.",
  },
  {
    icon: Zap,
    name: "ADAPTA COLOR",
    desc: "Colaboración con ADAPTA COLOR para garantizar la precisión y consistencia cromática.",
  },
];

const processSteps = [
  { num: "01", title: "Pretratamiento", desc: "Limpieza y preparación química de la superficie del aluminio." },
  { num: "02", title: "Aplicación", desc: "Proyección electrostática del polvo de pintura sobre el perfil." },
  { num: "03", title: "Polimerización", desc: "Horno de curado a temperatura controlada para fijar el acabado." },
  { num: "04", title: "Control calidad", desc: "Inspección exhaustiva según normativa QUALICOAT antes de entrega." },
];

export default function Quality() {
  return (
    <section id="calidad" style={styles.section}>
      {/* Top: dark bg */}
      <div style={styles.darkTop}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.eyebrow}>
              <span style={styles.eyebrowBar} />
              Estándares
              <span style={styles.eyebrowBar} />
            </div>
            <h2 style={styles.heading}>Calidad que nos distingue</h2>
            <p style={styles.subheading}>
              Calidad, servicio, seriedad, compromiso y experiencia — los cinco pilares
              que definen cada proyecto que entregamos.
            </p>
          </div>

          {/* Certification cards */}
          <div style={styles.certGrid}>
            {certs.map(({ icon: Icon, name, desc }) => (
              <div key={name} style={styles.certCard}>
                <div style={styles.certIcon}>
                  <Icon size={28} color="#c8a96e" />
                </div>
                <h3 style={styles.certName}>{name}</h3>
                <p style={styles.certDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process steps */}
      <div style={styles.processSection}>
        <div style={styles.container}>
          <div style={styles.processHeader}>
            <h3 style={styles.processTitle}>El proceso de lacado</h3>
            <p style={styles.processDesc}>
              Un proceso automatizado y controlado en cada etapa para garantizar acabados perfectos.
            </p>
          </div>
          <div style={styles.steps}>
            {processSteps.map((step, i) => (
              <div key={step.num} style={styles.step}>
                <div style={styles.stepNum}>{step.num}</div>
                <div style={styles.stepConnector(i < processSteps.length - 1)} />
                <h4 style={styles.stepTitle}>{step.title}</h4>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerContent}>
          <h3 style={styles.bannerTitle}>
            ¿Listo para trabajar con los mejores?
          </h3>
          <p style={styles.bannerSub}>
            Contacte con nosotros y le ofreceremos la solución más adecuada para su proyecto.
          </p>
        </div>
        <a href="#contacto" style={styles.bannerCta}>
          Solicitar presupuesto
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f5f5f0",
  },
  darkTop: {
    background: "#1a2235",
    padding: "100px 0 80px",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
  },
  header: {
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto 60px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 16,
    fontFamily: "Montserrat, sans-serif",
  },
  eyebrowBar: {
    width: 28,
    height: 1,
    background: "#c8a96e",
    display: "inline-block",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 700,
    color: "#fff",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 15,
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.75,
  },
  certGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
  },
  certCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(200,169,110,0.2)",
    borderTop: "3px solid #c8a96e",
    padding: "36px 28px",
    borderRadius: "0 0 4px 4px",
    transition: "background 0.3s",
  },
  certIcon: {
    width: 56,
    height: 56,
    background: "rgba(200,169,110,0.12)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  certName: {
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 12,
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: "0.05em",
  },
  certDesc: {
    fontSize: 13,
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.7,
  },
  processSection: {
    padding: "80px 0",
    background: "#f5f5f0",
  },
  processHeader: {
    marginBottom: 52,
  },
  processTitle: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 12,
  },
  processDesc: {
    fontSize: 14,
    color: "#6b7280",
    maxWidth: 520,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    position: "relative",
  },
  step: {
    position: "relative",
  },
  stepNum: {
    fontSize: 48,
    fontWeight: 900,
    color: "rgba(200,169,110,0.25)",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1,
    marginBottom: 12,
  },
  stepConnector: (show) => ({
    display: show ? "block" : "none",
    position: "absolute",
    top: 24,
    right: -12,
    width: 24,
    height: 2,
    background: "#c8a96e",
    opacity: 0.4,
  }),
  stepTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 10,
    fontFamily: "Montserrat, sans-serif",
  },
  stepDesc: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 1.65,
  },
  banner: {
    background: "linear-gradient(135deg, #c8a96e 0%, #e8c87a 100%)",
    padding: "60px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
    flexWrap: "wrap",
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: "clamp(20px, 3vw, 30px)",
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 8,
  },
  bannerSub: {
    fontSize: 15,
    color: "rgba(26,34,53,0.7)",
  },
  bannerCta: {
    background: "#1a2235",
    color: "#c8a96e",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "16px 36px",
    borderRadius: 3,
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
};
