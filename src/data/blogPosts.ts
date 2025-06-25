import tarjeta1 from "../assets/Tarjeta11.png";
import tarjeta2 from "../assets/Tarjeta2.png";
import { type ReactNode } from "react";

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  time: string;
  img: string;
  avatar: string;
  alt: string;
  link: string;
  content: ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cómo migrar de Excel a Power BI sin perder datos",
    author: "Jessie G",
    time: "2 minutos",
    img: tarjeta1,
    avatar:
      "https://storage.googleapis.com/a1aa/image/e5a42dca-e51c-4cd5-1201-da08396fe8f3.jpg",
    alt: "Ilustración colorida de gráficos y tablas de analítica en pantalla de computadora y papeles",
    link: "/blog/1",
    content:
      "Revolucione las operaciones, cree nuevos productos y fuentes de ingresos, y mejore la experiencia del cliente. Nuestra completa gama de servicios abarca desde consultoría y creación de plataformas hasta soluciones específicas de la industria, gestión de infraestructura y transformación de la cadena de valor. Proporcionamos soporte integral para mejorar sus operaciones comerciales, impulsar la innovación y maximizar el valor.\n\nCon nuestra experiencia en dominios industriales y aplicaciones comerciales, nuestros consultores colaboran con usted para identificar áreas específicas de sus operaciones donde la IA generativa puede ofrecer el valor más significativo. Podemos ayudarle a seleccionar los modelos, arquitecturas y socios adecuados, mientras desarrollamos el talento necesario y garantizamos el cumplimiento normativo y la gestión de riesgos. Trabaje con nosotros para aprovechar todo el potencial de la IA generativa y mantenerse a la vanguardia.",
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
    link: "/blog/2",
    content:
      "Descubre cómo potenciar tus análisis de datos integrando AWS Quicksight con diversas fuentes externas. Aprende a conectar bases de datos SQL, hojas de cálculo y servicios en la nube para centralizar la información y obtener visualizaciones dinámicas en tiempo real. Este artículo te guía paso a paso en la configuración de conectores, la gestión de permisos y la automatización de actualizaciones, permitiéndote tomar decisiones informadas y ágiles. Optimiza tus reportes y comparte insights clave con tu equipo de manera segura y eficiente.",
  },
];
