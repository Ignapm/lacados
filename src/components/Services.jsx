import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "lacado-polvo",
    img: "/images/proceso.jpg",
    category: "Proceso principal",
    title: "Lacado en Polvo",
    desc: "Proceso automatizado de lacado en polvo poliéster sobre perfiles y chapas de aluminio. Acabados que cumplen con la normativa QUALICOAT para máxima durabilidad.",
    features: [
      "Carta RAL completa",
      "Acabados mates y brillantes",
      "Calidad MARINA / SEASIDE",
      "Para interior y exterior",
      "Homologación QUALICOAT",
    ],
    color: "#1a2235",
  },
  {
    id: "imitacion-madera",
    img: "/images/madera.jpg",
    category: "Acabado especial",
    title: "Imitación Madera",
    desc: "Proceso de sublimación que reproduce fielmente esencias naturales de diferentes tipos de madera, veta de mármoles y granitos sobre perfiles de aluminio.",
    features: [
      "Múltiples esencias de madera",
      "Imitación mármol y granito",
      "Proceso de sublimación",
      "Alta durabilidad exterior",
      "Aspecto natural fiel",
    ],
    color: "#8b5e3c",
  },
  {
    id: "acabados",
    img: "/images/fachada.jpg",
    category: "Acabados premium",
    title: "Acabados Especiales",
    desc: "Amplio abanico de posibilidades: metalizados, texturados, ultradurables, foliados y rechapados. Protección con film adhesivo para caras vistas.",
    features: [
      "Metalizados",
      "Texturados",
      "Ultradurables",
      "Foliados y rechapados",
      "Film protectivo adhesivo",
    ],
    color: "#2d4a6e",
  },
  {
    id: "almacenaje",
    img: "/images/aluminio.jpg",
    category: "Servicio adicional",
    title: "Almacenaje y Logística",
    desc: "Ponemos a disposición de nuestros clientes espacio en nuestras instalaciones para almacenar materiales. Gestión integral del stock de aluminio.",
    features: [
      "Almacén propio en planta",
      "Gestión de stock",
      "Servicio a medida",
      "Logística integrada",
      "Atención personalizada",
    ],
    color: "#3d5a4f",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section id="servicios" style={styles.section}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowBar} />
          Lo que ofrecemos
          <span style={styles.eyebrowBar} />
        </div>
        <h2 style={styles.heading}>Nuestros Servicios</h2>
        <p style={styles.subheading}>
          Soluciones completas de lacado y acabado para perfiles y chapas de
          aluminio con los más altos estándares de calidad.
        </p>
      </div>

      {/* Tab selector */}
      <div style={styles.tabs}>
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              ...styles.tab,
              ...(active === i ? styles.tabActive : {}),
            }}
          >
            <span style={styles.tabCat}>{s.category}</span>
            <span style={styles.tabTitle}>{s.title}</span>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <div style={styles.imageWrap}>
          <img src={svc.img} alt={svc.title} style={styles.image} />
          <div
            style={{
              ...styles.imageOverlay,
              background: `linear-gradient(135deg, ${svc.color}dd, ${svc.color}88)`,
            }}
          />
          <div style={styles.imageBadge}>
            <div style={styles.badgeCat}>{svc.category}</div>
          </div>
        </div>

        <div style={styles.info}>
          <h3 style={styles.title}>{svc.title}</h3>
          <p style={styles.desc}>{svc.desc}</p>

          <ul style={styles.features}>
            {svc.features.map((f) => (
              <li key={f} style={styles.feature}>
                <CheckCircle size={16} color="#c8a96e" style={{ flexShrink: 0 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a href="#contacto" style={styles.cta}>
            Solicitar información
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* RAL colors display */}
      <div style={styles.ralSection}>
        <div style={styles.ralHeader}>
          <h3 style={styles.ralTitle}>Carta de Colores RAL</h3>
          <p style={styles.ralDesc}>
            Disponemos de toda la gama de colores RAL para adaptarnos a cualquier proyecto
          </p>
        </div>
        <div style={styles.ralColors}>
          {[
            "#f4f4f4","#e8e8e8","#d6d6d6","#1a1a1a","#333333",
            "#c0392b","#e74c3c","#e67e22","#f39c12","#f1c40f",
            "#2ecc71","#27ae60","#3498db","#2980b9","#9b59b6",
            "#1a2235","#2d4a6e","#8b5e3c","#c8a96e","#e8c87a",
          ].map((color, i) => (
            <div
              key={i}
              style={{ ...styles.ralSwatch, background: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "100px 0 80px",
  },
  header: {
    textAlign: "center",
    maxWidth: 640,
    margin: "0 auto 60px",
    padding: "0 24px",
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
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 15,
    color: "#6b7280",
    lineHeight: 1.75,
  },
  tabs: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    maxWidth: 1280,
    margin: "0 auto 0",
    padding: "0 40px",
    gap: 8,
    marginBottom: 0,
  },
  tab: {
    background: "#f5f5f0",
    border: "none",
    padding: "20px 16px",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.25s",
    borderTop: "3px solid transparent",
    borderRadius: "4px 4px 0 0",
  },
  tabActive: {
    background: "#1a2235",
    borderTopColor: "#c8a96e",
  },
  tabCat: {
    display: "block",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 6,
    fontFamily: "Montserrat, sans-serif",
  },
  tabTitle: {
    display: "block",
    fontSize: 14,
    fontWeight: 700,
    color: "#1a2235",
    fontFamily: "Montserrat, sans-serif",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    background: "#1a2235",
    gap: 0,
  },
  imageWrap: {
    position: "relative",
    height: 460,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    opacity: 0.5,
  },
  imageBadge: {
    position: "absolute",
    top: 24,
    left: 24,
    background: "rgba(26,34,53,0.85)",
    backdropFilter: "blur(8px)",
    padding: "8px 16px",
    borderLeft: "3px solid #c8a96e",
  },
  badgeCat: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#c8a96e",
  },
  info: {
    padding: "50px 50px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "clamp(22px, 3vw, 34px)",
    fontWeight: 700,
    color: "#fff",
    marginBottom: 16,
    fontFamily: "Playfair Display, serif",
  },
  desc: {
    fontSize: 14,
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.8,
    marginBottom: 28,
  },
  features: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 36,
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "linear-gradient(135deg, #c8a96e, #e8c87a)",
    color: "#1a2235",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "14px 28px",
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  ralSection: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "60px 40px 0",
  },
  ralHeader: {
    marginBottom: 28,
  },
  ralTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 8,
  },
  ralDesc: {
    fontSize: 14,
    color: "#6b7280",
  },
  ralColors: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  ralSwatch: {
    width: 48,
    height: 48,
    borderRadius: 4,
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
};
