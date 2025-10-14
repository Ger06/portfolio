# Portfolio Gerardo Kohatus

Portfolio profesional construido con Next.js 15, TypeScript y Tailwind CSS.

## Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## Características

- ✨ Single Page Application con smooth scroll
- 🎨 Diseño moderno y responsivo
- 🌗 Modo dark/light theme
- 🎭 Animaciones suaves con Framer Motion
- 📱 Totalmente responsive
- ⚡ Optimizado para SEO
- 🚀 Performance optimizado

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Deploy

Este proyecto está optimizado para deployarse en Vercel:

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Deploy automático en cada push a main

## Estructura del proyecto

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx       # Layout principal con metadata SEO
│   ├── page.tsx         # Página principal (SPA)
│   └── globals.css      # Estilos globales
├── components/
│   ├── sections/        # Secciones de la página
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx       # Navegación con scroll suave
│   ├── footer.tsx       # Footer
│   └── theme-provider.tsx  # Provider para dark/light theme
├── lib/
│   ├── data.ts          # Datos del portfolio
│   └── utils.ts         # Utilidades
└── public/
    └── cv-Gerardo-Kohatus-fullstack.pdf

```

## Personalización

Para personalizar el contenido del portfolio, edita el archivo `lib/data.ts` con tu información personal, experiencia, proyectos y skills.

## Autor

**Gerardo Kohatus**
- Email: gerardo.kohatus@gmail.com
- LinkedIn: [linkedin.com/in/gerardo-kohatus](https://linkedin.com/in/gerardo-kohatus)
- GitHub: [github.com/Ger06](https://github.com/Ger06)
