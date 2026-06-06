# Lacados Alacant - Web Corporativa

Sitio web moderno y responsive en React para Lacados Alacant S.L.

## Estructura del proyecto

```
src/
  components/
    Navbar.jsx      - Navegación fija con scroll effect + menú móvil
    Hero.jsx        - Sección principal con stats
    About.jsx       - Quiénes somos con valores
    Services.jsx    - Servicios con tabs + carta RAL
    Quality.jsx     - Calidad, certificaciones y proceso
    Contact.jsx     - Formulario de contacto
    Footer.jsx      - Pie de página completo
  index.css         - Estilos globales + Google Fonts
  App.jsx           - Componente raíz
public/images/      - Imágenes del sitio
```

## Cómo arrancar en desarrollo

```bash
npm install
npm start
```

## Cómo hacer el build de producción

```bash
npm run build
```

Luego sirve el contenido de `build/` con cualquier servidor web.

## Personalización

1. **Imágenes**: Sustituir `/public/images/*.jpg` por fotos reales de la empresa
2. **Colores**: Variables en `src/index.css` (`--primary`, `--secondary`, `--accent`)
3. **Contenido**: Editar textos directamente en cada componente JSX
4. **Formulario**: Conectar el `handleSubmit` en `Contact.jsx` a un backend o EmailJS

## Tecnologías

- React 19
- Vite
- lucide-react (iconos)
- Google Fonts: Montserrat + Playfair Display
- CSS-in-JS (estilos inline + media queries globales)

## Secciones

- **Hero** – Banner principal animado con estadísticas clave
- **Nosotros** – Historia, instalaciones y valores de empresa
- **Servicios** – Lacado en polvo, imitación madera, acabados especiales, almacenaje
- **Calidad** – Certificaciones, proceso de producción y CTA
- **Contacto** – Formulario + datos de contacto
- **Footer** – Links, dirección, certificación QUALICOAT
