import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Visualization - Plataforma de Business Intelligence',
  description: 'Plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad. Transforma tus datos en insights accionables.',
  keywords: 'business intelligence, BI, análisis de datos, dashboards, Power BI, visualización de datos, analytics',
  authors: [{ name: 'Mi Visualization' }],
  creator: 'Mi Visualization',
  publisher: 'Mi Visualization',
  robots: 'index, follow',
  openGraph: {
    title: 'Mi Visualization - Plataforma de Business Intelligence',
    description: 'Plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad.',
    url: 'https://mivisualization.com',
    siteName: 'Mi Visualization',
    images: [
      {
        url: '/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard de Mi Visualization',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Visualization - Plataforma de Business Intelligence',
    description: 'Plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad.',
    images: ['/dashboard.png'],
  },
  alternates: {
    canonical: 'https://mivisualization.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}