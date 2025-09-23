/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para trabajar junto con Vite
  experimental: {
    appDir: true,
  },
  
  // Configuración de imágenes optimizadas
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración de rutas
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  
  // Configuración para assets estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Configuración de Tailwind CSS
  experimental: {
    appDir: true,
  },
  
  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Configuración para SEO
  generateEtags: true,
  poweredByHeader: false,
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de headers para SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;