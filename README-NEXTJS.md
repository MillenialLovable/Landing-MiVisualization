# Configuración Híbrida: Vite + Next.js

Este proyecto utiliza una configuración híbrida que combina **Vite** para el desarrollo de la aplicación React principal y **Next.js** para páginas optimizadas con SSR/SSG y mejor SEO.

## 🚀 Estructura del Proyecto

```
├── src/                    # Aplicación React principal (Vite)
│   ├── components/         # Componentes React reutilizables
│   ├── pages/             # Páginas de React Router
│   └── utils/             # Utilidades y hooks
├── app/                   # Aplicación Next.js (App Router)
│   ├── layout.tsx         # Layout principal de Next.js
│   ├── page.tsx           # Página principal (renderiza App de React)
│   ├── blog/[id]/         # Páginas dinámicas del blog
│   ├── sitemap.ts         # Sitemap dinámico
│   └── robots.ts          # Robots.txt dinámico
├── public/                # Assets estáticos
├── vite.config.ts         # Configuración de Vite
└── next.config.js         # Configuración de Next.js
```

## 🛠️ Scripts Disponibles

### Desarrollo
```bash
# Servidor de desarrollo Vite (puerto 5173)
npm run dev

# Servidor de desarrollo Next.js (puerto 3001)
npm run dev:next
```

### Producción
```bash
# Build de Vite
npm run build

# Build de Next.js
npm run build:next

# Servidor de producción Next.js
npm run start:next
```

## 🎯 Casos de Uso

### Usar Vite cuando:
- Desarrollo rápido de componentes React
- Prototipado y testing
- Aplicación SPA tradicional
- Hot reload ultra-rápido

### Usar Next.js cuando:
- SEO crítico (páginas de landing, blog)
- Necesitas SSR/SSG
- Páginas estáticas optimizadas
- Mejor rendimiento en producción

## 🔧 Configuración

### Next.js
- **App Router**: Utiliza la nueva arquitectura de Next.js 13+
- **SSG**: Páginas del blog pre-generadas en build time
- **Metadata API**: SEO optimizado automáticamente
- **Sitemap/Robots**: Generación dinámica

### Vite
- **React**: Configuración optimizada para desarrollo
- **TypeScript**: Soporte completo
- **Tailwind CSS**: Estilos compartidos entre ambas aplicaciones

## 📊 Beneficios de esta Configuración

1. **Mejor SEO**: Next.js maneja las páginas críticas para SEO
2. **Desarrollo Rápido**: Vite para iteración rápida de componentes
3. **Flexibilidad**: Puedes elegir la herramienta adecuada para cada página
4. **Rendimiento**: SSG para páginas estáticas, SPA para interactividad
5. **Compatibilidad**: Ambas aplicaciones comparten componentes y estilos

## 🚦 Flujo de Trabajo Recomendado

1. **Desarrollo de componentes**: Usa Vite (`npm run dev`)
2. **Testing de SEO**: Usa Next.js (`npm run dev:next`)
3. **Producción**: Deploy ambas aplicaciones según necesidades

## 📝 Notas Importantes

- Los componentes React son compartidos entre ambas aplicaciones
- Tailwind CSS está configurado para ambos entornos
- Las rutas de Next.js tienen prioridad en producción
- El sitemap se genera automáticamente incluyendo páginas dinámicas

## 🔄 Migración Futura

Si decides migrar completamente a Next.js:
1. Los componentes ya están preparados
2. Las páginas pueden convertirse fácilmente
3. La configuración de TypeScript es compatible
4. Los estilos de Tailwind funcionarán sin cambios