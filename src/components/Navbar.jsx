import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      { label: "Lacado en Polvo", href: "#lacado-polvo" },
      { label: "Imitación Madera", href: "#imitacion-madera" },
      { label: "Acabados Especiales", href: "#acabados" },
    ],
  },
  { label: "Calidad", href: "#calidad" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={styles.nav(scrolled)}>
      <div style={styles.container}>
        {/* Logo */}
        <a href="#inicio" style={styles.logo}>
          <span style={styles.logoIcon}>⬡</span>
          <div>
            <div style={styles.logoMain}>LACADOS</div>
            <div style={styles.logoSub}>ALACANT</div>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={styles.links}>
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                style={styles.linkItem}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a href={link.href} style={styles.link}>
                  {link.label}
                  <ChevronDown size={14} style={{ marginLeft: 4 }} />
                </a>
                {dropdownOpen && (
                  <ul style={styles.dropdown}>
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} style={styles.dropdownLink}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label} style={styles.linkItem}>
                <a href={link.href} style={styles.link}>
                  {link.label}
                </a>
              </li>
            )
          )}
          <li>
            <a href="#contacto" style={styles.cta}>
              Solicitar presupuesto
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Solicitar presupuesto
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: (scrolled) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: scrolled
      ? "rgba(26, 34, 53, 0.97)"
      : "linear-gradient(to bottom, rgba(26,34,53,0.9) 0%, transparent 100%)",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    transition: "all 0.4s ease",
    borderBottom: scrolled ? "1px solid rgba(200,169,110,0.2)" : "none",
  }),
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#fff",
  },
  logoIcon: {
    fontSize: 28,
    color: "#c8a96e",
    lineHeight: 1,
  },
  logoMain: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: "0.18em",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1.1,
  },
  logoSub: {
    fontSize: 10,
    letterSpacing: "0.35em",
    color: "#c8a96e",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
  },
  links: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    gap: 4,
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  linkItem: {
    position: "relative",
  },
  link: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "8px 14px",
    display: "flex",
    alignItems: "center",
    transition: "color 0.25s",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "rgba(26,34,53,0.98)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(200,169,110,0.25)",
    borderRadius: 4,
    padding: "8px 0",
    minWidth: 200,
    listStyle: "none",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  dropdownLink: {
    display: "block",
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    padding: "10px 20px",
    transition: "all 0.2s",
    letterSpacing: "0.05em",
  },
  cta: {
    background: "linear-gradient(135deg, #c8a96e, #e8c87a)",
    color: "#1a2235",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "10px 20px",
    borderRadius: 3,
    marginLeft: 8,
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    padding: 8,
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(26,34,53,0.99)",
    borderTop: "1px solid rgba(200,169,110,0.2)",
    padding: "16px 24px 24px",
    gap: 4,
  },
  mobileLink: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    fontWeight: 500,
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    letterSpacing: "0.06em",
  },
  mobileCta: {
    background: "linear-gradient(135deg, #c8a96e, #e8c87a)",
    color: "#1a2235",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textAlign: "center",
    padding: "14px",
    borderRadius: 4,
    marginTop: 12,
  },
};
