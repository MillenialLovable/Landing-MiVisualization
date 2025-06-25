import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import BlogCarrusel from "../components/BlogCarrusel";
import tarjeta1 from "../assets/tarjeta1.png";
import tarjeta2 from "../assets/tarjeta2.png";

const blogPosts = [
  {
    id: 1,
    title: "Cómo migrar de Excel a Power BI sin perder datos",
    author: "Jessie G",
    time: "2 minutos",
    img: tarjeta1,
    avatar:
      "https://storage.googleapis.com/a1aa/image/e5a42dca-e51c-4cd5-1201-da08396fe8f3.jpg",
    alt: "Ilustración colorida de gráficos y tablas de analítica en pantalla de computadora y papeles",
    content: (
      <div className="bg-transparent rounded-lg">
        <p className="text-white mt-4">
          Revolucione las operaciones, cree nuevos productos y fuentes de ingresos, y mejore la experiencia del cliente. Nuestra completa gama de servicios abarca desde consultoría y creación de plataformas hasta soluciones específicas de la industria, gestión de infraestructura y transformación de la cadena de valor. Proporcionamos soporte integral para mejorar sus operaciones comerciales, impulsar la innovación y maximizar el valor.
       </p>
        <p className="text-white mt-4">
          Con nuestra experiencia en dominios industriales y aplicaciones comerciales, nuestros consultores colaboran con usted para identificar áreas específicas de sus operaciones donde la IA generativa puede ofrecer el valor más significativo. Podemos ayudarle a seleccionar los modelos, arquitecturas y socios adecuados, mientras desarrollamos el talento necesario y garantizamos el cumplimiento normativo y la gestión de riesgos. Trabaje con nosotros para aprovechar todo el potencial de la IA generativa y mantenerse a la vanguardia.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Integración de AWS Quicksight con fuentes externas",
    author: "Brian D",
    time: "1 minuto",
    img: tarjeta2,
    avatar:
      "https://storage.googleapis.com/a1aa/image/47763a4e-919b-41d7-8f71-c7a2817de218.jpg",
    alt: "Captura de video con tres personas en conferencia en recuadros",
    content: (
      <>
        <p>
          AWS Quicksight permite conectar y analizar datos de múltiples fuentes externas de manera sencilla...
        </p>
        {/* Agrega aquí el contenido completo del blog */}
      </>
    ),
  },
];

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <>
        <NavBar />
        <div className="text-white p-8">
          <h2>No se encontró el post</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#09243F] min-h-screen py-[60px] px-2 sm:px-4 text-white">
        <div className="bg-transparent rounded-xl mx-auto p-2 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-stretch max-w-4xl xl:max-w-6xl lg:min-h-[100px]">
          {/* Imagen arriba en mobile/tablet, derecha en desktop */}
          <div className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:w-[340px] xl:w-[400px] 2xl:w-[420px] mb-6 lg:mb-0  order-1 lg:order-2 flex-shrink-0 flex items-center h-auto lg:h-auto">
            <img
              src={post.img}
              alt={post.alt}
              className="w-full h-auto lg:h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Texto */}
          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full" />
              <span>{post.author}</span>
            </div>
            <div className="text-[#BFD7ED] text-base sm:text-lg text-left">{post.content}</div>
          </div>
        </div>
      </div>
      {/* Carrusel debajo del contenido */}
      <div className="bg-[#09243F] py-[60px] px-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-start text-white mb-8">
          Insights y Novedades sobre BI y Analítica
        </h1>
        <BlogCarrusel />
      </div>
    </>
  );
};

export default BlogDetail;