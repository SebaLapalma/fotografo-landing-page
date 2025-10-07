# 📸 Landing Page - Sebastian Lapalma Fotografía

Landing page profesional y moderna para fotógrafo independiente, construida con React y Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop)

## ✨ Características

- 🎨 **Diseño Moderno y Elegante** - Interfaz profesional con animaciones suaves
- 📱 **Totalmente Responsive** - Adaptado para móviles, tablets y escritorio
- 🖼️ **Galería Interactiva** - Modal con navegación de imágenes por categoría
- 📧 **Formulario de Contacto** - Integrado con cliente de correo
- 💬 **Botón WhatsApp Flotante** - Con animación de rebote para llamar la atención
- 🌐 **Redes Sociales** - Enlaces a Instagram, Facebook, Twitter y LinkedIn
- ⚡ **Rendimiento Optimizado** - Carga rápida y experiencia fluida

## 🚀 Demo

[Ver Demo en Vivo](#) *(Agrega tu link de deploy aquí)*

## 📋 Secciones

1. **Hero Section** - Presentación impactante con call-to-action
2. **Galería de Trabajos** - 6 categorías principales con galerías expandibles
3. **Servicios** - Descripción de servicios ofrecidos
4. **Contacto** - Formulario para consultas
5. **Footer** - Información y redes sociales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Iconos modernos y ligeros
- **Unsplash** - Imágenes de alta calidad (placeholder)

## 📦 Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/landing-fotografo.git
cd landing-fotografo
```

2. Instala las dependencias:
```bash
npm install
```

3. Instala Tailwind CSS y sus dependencias:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Configura Tailwind CSS en `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Crea o actualiza `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## ⚙️ Configuración

### Datos de Contacto

Edita las siguientes constantes en el componente principal:

```javascript
// Número de WhatsApp (formato internacional)
const whatsappNumber = "5493454019821";

// Email de contacto
const contactEmail = "e.sebastian.lapalma@gmail.com";
```

### Redes Sociales

Actualiza los enlaces en el footer:

```javascript
// Instagram
href="https://instagram.com/tu_usuario"

// Facebook
href="https://facebook.com/tu_usuario"

// Twitter/X
href="https://twitter.com/tu_usuario"

// LinkedIn
href="https://linkedin.com/in/tu_usuario"
```

### Galería de Imágenes

Para personalizar las imágenes, edita el array `galleryItems` en el componente. Reemplaza las URLs de Unsplash con tus propias imágenes:

```javascript
const galleryItems = [
  {
    img: 'ruta/a/tu/imagen.jpg',
    title: 'Categoría',
    desc: 'Descripción',
    fullGallery: [
      'ruta/imagen1.jpg',
      'ruta/imagen2.jpg',
      // ... más imágenes
    ]
  },
  // ... más categorías
];
```

## 📂 Estructura del Proyecto

```
landing-fotografo/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Componente principal
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales y Tailwind
├── package.json
├── tailwind.config.js      # Configuración de Tailwind
└── README.md
```

## 🎨 Personalización de Colores

Los colores principales pueden modificarse en las clases de Tailwind:

- **Color primario**: `yellow-500` (dorado/amarillo)
- **Backgrounds oscuros**: `gray-900`, `gray-700`
- **WhatsApp**: `green-500`

Para cambiar el esquema de colores, busca y reemplaza estas clases en el componente.

## 📱 Funcionalidades Destacadas

### Modal de Galería
- Navegación con flechas laterales
- Indicadores de posición
- Cierre con botón X
- Fondo oscuro semitransparente

### Animaciones
- Fade in al cargar el hero
- Bounce en el botón de WhatsApp
- Hover effects en imágenes y tarjetas
- Transiciones suaves en toda la interfaz

### Formulario de Contacto
El formulario abre el cliente de correo predeterminado con los datos pre-cargados. Para integrar un backend o servicio de email, considera usar:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [SendGrid](https://sendgrid.com/)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega:
```bash
vercel
```

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `build` a [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega scripts en `package.json`:
```json
"homepage": "https://tuusuario.github.io/landing-fotografo",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Despliega:
```bash
npm run deploy
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Sebastian Lapalma**

- WhatsApp: [+54 9 3454 019821](https://wa.me/5493454019821)
- Email: e.sebastian.lapalma@gmail.com

## 🙏 Agradecimientos

- Imágenes de [Unsplash](https://unsplash.com)
- Iconos de [Lucide](https://lucide.dev)
- Framework CSS: [Tailwind CSS](https://tailwindcss.com)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ y React**
