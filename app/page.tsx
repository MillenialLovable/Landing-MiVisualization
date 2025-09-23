import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Importación dinámica del componente App de React para evitar problemas de hidratación
const App = dynamic(() => import('../src/App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  ),
})

export const metadata: Metadata = {
  title: 'Mi Visualization - Plataforma de Business Intelligence y Análisis de Datos',
  description: 'Descubre la plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad. Transforma tus datos en insights accionables con Mi Visualization.',
  keywords: 'business intelligence, BI, análisis de datos, dashboards, Power BI, visualización de datos, analytics, inteligencia artificial, BI generativo',
  openGraph: {
    title: 'Mi Visualization - Plataforma de Business Intelligence',
    description: 'Plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad.',
    url: 'https://mivisualization.com',
    images: [
      {
        url: '/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard de Mi Visualization - Plataforma de Business Intelligence',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <main>
      <App />
    </main>
  )
}