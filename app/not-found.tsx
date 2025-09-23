import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada - Mi Visualization',
  description: 'La página que buscas no existe o ha sido movida.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Volver al inicio
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>¿Necesitas ayuda? Contáctanos:</p>
            <a
              href="mailto:info@mivisualization.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              info@mivisualization.com
            </a>
          </div>
        </div>
        
        <div className="mt-12">
          <svg
            className="mx-auto h-24 w-24 text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.709M15 17H9v-2.5A3.5 3.5 0 0112.5 11h0A3.5 3.5 0 0116 14.5V17z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}