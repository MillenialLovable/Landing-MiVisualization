import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// Importar los datos del blog desde el componente React existente
const blogPosts = [
  {
    id: 1,
    title: "Transformación Digital con BI Generativo",
    excerpt: "Descubre cómo el BI Generativo está revolucionando la forma en que las empresas analizan y visualizan sus datos.",
    content: "El Business Intelligence Generativo representa una evolución natural en el análisis de datos empresariales. Esta tecnología combina la potencia de la inteligencia artificial con herramientas tradicionales de BI para crear insights más profundos y accionables. Las empresas que adoptan BI Generativo pueden automatizar la creación de reportes, generar visualizaciones dinámicas y obtener respuestas a preguntas complejas de negocio en tiempo real.",
    image: "/blog1.jpg",
    date: "2024-01-15",
    author: "Equipo Mi Visualization",
    tags: ["BI Generativo", "Transformación Digital", "Análisis de Datos"]
  },
  {
    id: 2,
    title: "Seguridad en Plataformas de Business Intelligence",
    excerpt: "La importancia de mantener tus datos seguros mientras aprovechas al máximo las capacidades de análisis.",
    content: "La seguridad en Business Intelligence no es solo una característica adicional, sino un requisito fundamental. En Mi Visualization, implementamos múltiples capas de seguridad que incluyen encriptación end-to-end, autenticación multifactor y controles de acceso granulares. Nuestro enfoque de seguridad por diseño garantiza que los datos sensibles permanezcan protegidos mientras se mantiene la flexibilidad necesaria para el análisis empresarial.",
    image: "/blog2.jpg",
    date: "2024-01-10",
    author: "Equipo de Seguridad",
    tags: ["Seguridad", "Protección de Datos", "Compliance"]
  },
  {
    id: 3,
    title: "Dashboards Configurables: Personalización Total",
    excerpt: "Aprende a crear dashboards que se adapten perfectamente a las necesidades específicas de tu organización.",
    content: "Los dashboards configurables son la clave para democratizar el acceso a los datos en cualquier organización. Con Mi Visualization, cada usuario puede crear visualizaciones personalizadas que reflejen sus KPIs específicos y métricas de rendimiento. Nuestra interfaz intuitiva de arrastrar y soltar permite a usuarios no técnicos crear dashboards profesionales en minutos, no horas.",
    image: "/blog3.jpg",
    date: "2024-01-05",
    author: "Equipo de Producto",
    tags: ["Dashboards", "Personalización", "UX/UI"]
  }
];

// Componente dinámico para evitar problemas de hidratación
const BlogDetailContent = dynamic(() => import('../../../src/pages/BlogDetail'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  ),
})

interface BlogPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    return {
      title: 'Artículo no encontrado - Mi Visualization',
      description: 'El artículo que buscas no existe o ha sido movido.',
    }
  }

  return {
    title: `${post.title} - Mi Visualization Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mivisualization.com/blog/${post.id}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://mivisualization.com/blog/${post.id}`,
    },
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <main>
      <BlogDetailContent />
    </main>
  )
}