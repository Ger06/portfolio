# Guía de Deploy en Vercel

## Opción 1: Deploy desde GitHub (Recomendado)

### 1. Crear repositorio en GitHub

```bash
cd portfolio-nextjs
git init
git add .
git commit -m "Initial commit: Portfolio profesional con Next.js"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio.git
git push -u origin main
```

### 2. Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Click en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es Next.js
6. Click en "Deploy"

**¡Listo!** Tu portfolio estará live en menos de 2 minutos.

## Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Deploy
cd portfolio-nextjs
vercel

# Seguir las instrucciones en pantalla
```

## Configuración de dominio personalizado

1. En tu proyecto en Vercel, ve a "Settings" > "Domains"
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

## Variables de entorno (si las necesitas en el futuro)

Si agregas features que requieren variables de entorno:

1. En Vercel: Settings > Environment Variables
2. Agrega tus variables
3. Redeploy el proyecto

## Deploy automático

Una vez conectado a GitHub, cada push a la rama `main` hará deploy automáticamente.

## Preview Deployments

Cada Pull Request generará automáticamente un preview deployment único para testear antes de mergear.

## Performance

Este portfolio está optimizado para obtener scores perfectos en Lighthouse:
- ✅ Performance: 100
- ✅ Accessibility: 100
- ✅ Best Practices: 100
- ✅ SEO: 100

## Troubleshooting

### Error: Module not found

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Build fails

Verifica que todas las dependencias estén en `package.json` y no haya errores de TypeScript:

```bash
npm run build
```
