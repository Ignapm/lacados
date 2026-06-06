import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.main}>
        <div style={styles.container}>
          {/* Brand */}
          <div style={styles.brand}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>⬡</span>
              <div>
                <div style={styles.logoMain}>LACADOS ALACANT</div>
                <div style={styles.logoSub}>S.L.</div>
              </div>
            </div>
            <p style={styles.brandDesc}>
              Empresa especializada en el lacado y decorado en polvo de perfiles
              y chapas de aluminio. Calidad QUALICOAT garantizada desde 2005.
            </p>
            <div style={styles.quickContact}>
              <a href="tel:+34965483531" style={styles.contactLink}>
                <Phone size={14} color="#c8a96e" />
                965 483 531
              </a>
              <a href="mailto:alacant@lacadosalacant.com" style={styles.contactLink}>
                <Mail size={14} color="#c8a96e" />
                alacant@lacadosalacant.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={styles.colTitle}>Servicios</div>
            <ul style={styles.linkList}>
              {["Lacado en Polvo", "Imitación Madera", "Metalizados", "Texturados", "Ultradurables", "Almacenaje"].map(s => (
                <li key={s}>
                  <a href="#servicios" style={styles.link}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>Empresa</div>
            <ul style={styles.linkList}>
              {["Quiénes Somos", "Calidad", "Nuestras Instalaciones", "Certificaciones", "Contacto"].map(l => (
                <li key={l}>
                  <a href="#nosotros" style={styles.link}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <div style={styles.colTitle}>Localización</div>
            <div style={styles.addressBlock}>
              <MapPin size={15} color="#c8a96e" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={styles.address}>
                C/ Zapateros Nº 18<br />
                P.I. Tres Hermanas<br />
                03680 Aspe, Alicante<br />
                España
              </div>
            </div>
            <div style={styles.certBadge}>
              <div style={styles.certBadgeIcon}>Q</div>
              <div>
                <div style={styles.certBadgeTitle}>QUALICOAT</div>
                <div style={styles.certBadgeDesc}>Certificado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <div style={styles.bottomInner}>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} Lacados Alacant S.L. · CIF: B84304831 · Todos los derechos reservados.
          </div>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bottomLink}>Aviso legal</a>
            <a href="#" style={styles.bottomLink}>Política de privacidad</a>
            <a href="#" style={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111827",
  },
  main: {
    padding: "80px 0 60px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
    gap: 60,
  },
  brand: {},
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  logoIcon: {
    fontSize: 32,
    color: "#c8a96e",
  },
  logoMain: {
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: "0.15em",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1.1,
  },
  logoSub: {
    fontSize: 11,
    letterSpacing: "0.3em",
    color: "#c8a96e",
    fontFamily: "Montserrat, sans-serif",
  },
  brandDesc: {
    fontSize: 13,
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.8,
    marginBottom: 24,
  },
  quickContact: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  contactLink: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    color: "rgba(255,255,255,0.65)",
    transition: "color 0.2s",
  },
  colTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 20,
    fontFamily: "Montserrat, sans-serif",
  },
  linkList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  link: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    transition: "color 0.2s",
  },
  addressBlock: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    marginBottom: 24,
  },
  address: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    lineHeight: 1.8,
  },
  certBadge: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "rgba(200,169,110,0.08)",
    border: "1px solid rgba(200,169,110,0.2)",
    padding: "12px 16px",
    borderRadius: 4,
  },
  certBadgeIcon: {
    width: 36,
    height: 36,
    background: "#c8a96e",
    color: "#1a2235",
    fontWeight: 900,
    fontSize: 18,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    flexShrink: 0,
  },
  certBadgeTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#c8a96e",
    fontFamily: "Montserrat, sans-serif",
  },
  certBadgeDesc: {
    fontSize: 11,
    color: "rgba(255,255,255,0.4)",
  },
  bottom: {
    padding: "20px 0",
  },
  bottomInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
  copyright: {
    fontSize: 12,
    color: "rgba(255,255,255,0.3)",
  },
  bottomLinks: {
    display: "flex",
    gap: 20,
  },
  bottomLink: {
    fontSize: 11,
    color: "rgba(255,255,255,0.3)",
    letterSpacing: "0.05em",
  },
};
