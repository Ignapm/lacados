import { MapPin, Phone, Mail, Printer, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" style={styles.section}>
      <div style={styles.container}>
        {/* Left: info */}
        <div style={styles.info}>
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowBar} />
            Estamos aquí
          </div>
          <h2 style={styles.heading}>Contacte con nosotros</h2>
          <p style={styles.subheading}>
            Cuéntenos su proyecto y le ofreceremos la solución más adecuada.
            Nuestro equipo le responderá en menos de 24 horas.
          </p>

          <div style={styles.contactItems}>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <MapPin size={20} color="#c8a96e" />
              </div>
              <div>
                <div style={styles.contactLabel}>Dirección</div>
                <div style={styles.contactValue}>
                  C/ Zapateros Nº 18, P.I. Tres Hermanas
                  <br />
                  03680 Aspe, Alicante
                </div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Phone size={20} color="#c8a96e" />
              </div>
              <div>
                <div style={styles.contactLabel}>Teléfono</div>
                <a href="tel:+34965483531" style={styles.contactValue}>
                  965 483 531
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Printer size={20} color="#c8a96e" />
              </div>
              <div>
                <div style={styles.contactLabel}>Fax</div>
                <div style={styles.contactValue}>965 483 575</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Mail size={20} color="#c8a96e" />
              </div>
              <div>
                <div style={styles.contactLabel}>Email</div>
                <a href="mailto:alacant@lacadosalacant.com" style={styles.contactValue}>
                  alacant@lacadosalacant.com
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Clock size={20} color="#c8a96e" />
              </div>
              <div>
                <div style={styles.contactLabel}>Horario</div>
                <div style={styles.contactValue}>
                  Lunes – Viernes: 8:00 – 18:00
                  <br />
                  Sábados y festivos: Cerrado
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={styles.mapPlaceholder}>
            <div style={styles.mapInner}>
              <MapPin size={36} color="#c8a96e" />
              <div style={styles.mapLabel}>P.I. Tres Hermanas, Aspe</div>
              <a
                href="https://maps.google.com/?q=C/+Zapateros+18,+Aspe,+Alicante"
                target="_blank"
                rel="noreferrer"
                style={styles.mapLink}
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div style={styles.formWrap}>
          <div style={styles.formHeader}>
            <h3 style={styles.formTitle}>Solicitar presupuesto</h3>
            <p style={styles.formDesc}>
              Rellene el formulario y nos pondremos en contacto con usted.
            </p>
          </div>

          {sent ? (
            <div style={styles.successMsg}>
              <div style={styles.successIcon}>✓</div>
              <div style={styles.successText}>
                Mensaje enviado correctamente. Le contactaremos pronto.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.row}>
                <div style={styles.field}>
                  <label style={styles.label}>Nombre *</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Su nombre"
                    required
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Email *</label>
                  <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="su@email.com"
                    required
                  />
                </div>
              </div>

              <div style={styles.row}>
                <div style={styles.field}>
                  <label style={styles.label}>Teléfono</label>
                  <input
                    style={styles.input}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="612 345 678"
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Asunto *</label>
                  <select
                    style={styles.input}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione...</option>
                    <option value="presupuesto">Solicitar presupuesto</option>
                    <option value="lacado-polvo">Lacado en polvo</option>
                    <option value="imitacion-madera">Imitación madera</option>
                    <option value="acabados">Acabados especiales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Mensaje *</label>
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descríbanos su proyecto o consulta..."
                  required
                  rows={5}
                />
              </div>

              <button type="submit" style={styles.submit}>
                <Send size={16} />
                Enviar mensaje
              </button>
            </form>
          )}
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
    gridTemplateColumns: "1fr 1.3fr",
    gap: 80,
    alignItems: "start",
  },
  info: {},
  eyebrow: {
    display: "flex",
    alignItems: "center",
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
    height: 2,
    background: "#c8a96e",
    display: "inline-block",
  },
  heading: {
    fontSize: "clamp(26px, 3.5vw, 40px)",
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 1.8,
    marginBottom: 40,
  },
  contactItems: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 36,
  },
  contactItem: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  },
  contactIcon: {
    width: 44,
    height: 44,
    background: "rgba(200,169,110,0.12)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#c8a96e",
    marginBottom: 4,
    fontFamily: "Montserrat, sans-serif",
  },
  contactValue: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 1.6,
  },
  mapPlaceholder: {
    background: "#1a2235",
    borderRadius: 4,
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mapInner: {
    textAlign: "center",
  },
  mapLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 8,
  },
  mapLink: {
    color: "#c8a96e",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.05em",
  },
  formWrap: {
    background: "#fff",
    borderRadius: 8,
    padding: 48,
    boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
  },
  formHeader: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: "1px solid #e5e7eb",
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1a2235",
    marginBottom: 8,
  },
  formDesc: {
    fontSize: 13,
    color: "#9ca3af",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#6b7280",
    fontFamily: "Montserrat, sans-serif",
  },
  input: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 4,
    padding: "12px 16px",
    fontSize: 14,
    color: "#1a2235",
    outline: "none",
    fontFamily: "Montserrat, sans-serif",
    transition: "border-color 0.2s",
    width: "100%",
  },
  textarea: {
    resize: "vertical",
    minHeight: 120,
  },
  submit: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    background: "linear-gradient(135deg, #1a2235, #2a3550)",
    color: "#c8a96e",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "16px 36px",
    border: "none",
    borderRadius: 3,
    cursor: "pointer",
    transition: "opacity 0.2s",
    marginTop: 8,
  },
  successMsg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: "60px 0",
    textAlign: "center",
  },
  successIcon: {
    width: 64,
    height: 64,
    background: "linear-gradient(135deg, #c8a96e, #e8c87a)",
    color: "#1a2235",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 700,
  },
  successText: {
    fontSize: 16,
    color: "#374151",
    fontWeight: 500,
    maxWidth: 300,
    lineHeight: 1.6,
  },
};
