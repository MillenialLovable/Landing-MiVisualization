import tarjeta1 from "../assets/Tarjeta11.png";
import tarjeta2 from "../assets/Tarjeta2.png";
import tarjeta3 from "../assets/Tarjeta3.png";
import tarjeta4 from "../assets/Tarjeta4.png";
import tarjeta5 from "../assets/Tarjeta5.png";
import { type ReactNode } from "react";

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  time: string;
  img: string | any;
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
    img: tarjeta1 as string,
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
    img: tarjeta2 as string,
    avatar:
      "https://storage.googleapis.com/a1aa/image/47763a4e-919b-41d7-8f71-c7a2817de218.jpg",
    alt: "Captura de video con tres personas en conferencia en recuadros",
    link: "/blog/2",
    content:
      "Descubre cómo potenciar tus análisis de datos integrando AWS Quicksight con diversas fuentes externas. Aprende a conectar bases de datos SQL, hojas de cálculo y servicios en la nube para centralizar la información y obtener visualizaciones dinámicas en tiempo real. Este artículo te guía paso a paso en la configuración de conectores, la gestión de permisos y la automatización de actualizaciones, permitiéndote tomar decisiones informadas y ágiles. Optimiza tus reportes y comparte insights clave con tu equipo de manera segura y eficiente.",
  },
  {
    id: 3,
    title: "Visualización de datos: mejores prácticas para dashboards efectivos",
    author: "María L",
    time: "3 minutos",
    img: tarjeta3 as string,
    avatar:
      "https://storage.googleapis.com/a1aa/image/e5a42dca-e51c-4cd5-1201-da08396fe8f3.jpg",
    alt: "Pantalla con dashboard interactivo y gráficos de barras y líneas",
    link: "/blog/3",
    content:
      "Descubre los principios clave para crear dashboards claros y útiles. Aprende a elegir los gráficos adecuados, organizar la información y resaltar los KPIs más importantes. Evita la sobrecarga visual y facilita la toma de decisiones con visualizaciones intuitivas y personalizables.",
  },
  {
    id: 4,
    title: "BI Generativo: La herramienta que transforma tus datos en gráficos con IA",
    author: "Carlos M",
    time: "2 minutos",
    img: tarjeta4 as string,
    avatar:
      "https://storage.googleapis.com/a1aa/image/47763a4e-919b-41d7-8f71-c7a2817de218.jpg",
    alt: "Gráficos generados por inteligencia artificial en pantalla",
    link: "/blog/4",
    content:
      "Descubre cómo BI Generativo está revolucionando la manera de visualizar datos mediante el uso de inteligencia artificial. Aprende a crear gráficos automáticamente a partir de tus datos, optimizando el análisis y facilitando la toma de decisiones. Este artículo explora las ventajas de integrar IA en tus procesos analíticos para obtener insights rápidos y precisos.",
  },
  {
    id: 5,
    title: "Errores comunes al migrar datos y cómo evitarlos",
    author: "Lucía P",
    time: "4 minutos",
    img: tarjeta5 as string,
    avatar:
      "https://storage.googleapis.com/a1aa/image/e5a42dca-e51c-4cd5-1201-da08396fe8f3.jpg",
    alt: "Iconos de advertencia y archivos en proceso de transferencia",
    link: "/blog/5",
    content:
      "La migración de datos puede ser compleja y propensa a errores. En este artículo, identificamos los problemas más frecuentes, como la pérdida de información, incompatibilidades de formato y fallos en la validación. Descubre estrategias y herramientas para asegurar una migración exitosa y sin sobresaltos.",
  },
];
