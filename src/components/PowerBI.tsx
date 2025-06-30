import React from "react";
import imgleft from "../assets/login-espaol-1.png";
import imgcenter from "../assets/reportes-21.png";
import imgrigth from "../assets/reportes-1.png";
import img4 from "../assets/celu.png";
import feature1 from "../assets/icons-power-bi/AccesoUnificado.svg";
import feature2 from "../assets/icons-power-bi/AccesoTotal.svg";
import feature3 from "../assets/icons-power-bi/SeguridadAvanzada2.svg";
import feature4 from "../assets/icons-power-bi/TodoEnUno.svg";

const PowerBi: React.FC = () => {
  return (
    <section
      id="powerbi"
      className="pb-12 lg:pb-[70px] px-6 lg:px-20 font-lato"
    >
      {/* Línea de texto superior */}
      <div className="flex items-center justify-center gap-4 text-[9px] font-semibold text-[#a7aebf] uppercase mb-6 select-none tracking-wider">
        <div className="border-t border-[#d1d5db] w-28"></div>
        <p className="text-[16px] leading-[1.1] text-center font-lato font-semibold">
          DONDE EL BI SE VUELVE ACCESIBLE,
          <br />
          PERSONALIZABLE Y SIN
          <span className="font-bold"> LÍMITES.</span>
        </p>
        <div className="border-t border-[#d1d5db] w-28"></div>
      </div>

      {/* Título y descripción */}
      <div className="max-w-auto mx-auto md:mx-0 text-center md:text-left">
        <p
          className="text-[17px] font-semibold font-lato text-[#178EE8] tracking-widest mb-2 uppercase"
          style={{ letterSpacing: "0.3em" }}
        >
          SOLUCIÓN BI INTEGRADA
        </p>
        <h1 className="text-[36px] sm:text-[38px] md:text-[40px] font-lato font-extrabold leading-[1.1] mb-3">
          Centraliza, Protege Y Optimiza Tu
          <br />
          Inteligencia De Negocios
        </h1>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-lato font-bold leading-snug max-w-auto mx-auto md:mx-0 text-justify">
          MiVisualization es una plataforma segura y centralizada que integra
          reportes de Power BI, Tableau, QuickSight y Excel en un solo lugar.
          Permite gestionar usuarios, accesos y sesiones con control total y sin
          necesidad de licencias individuales. Además, incorpora BI generativo
          con IA para explorar datos fácilmente usando lenguaje natural.
        </p>
      </div>

      {/* Contenedor de imágenes y forma de gradiente */}
      <div>
        {/* Triángulo rojo a la izquierda */}
        <div className="hidden lg:block absolute lg:left-[-70px] lg:bottom-[1450px] xl:left-[-70px] xl:bottom-[-1000px] 2xl:left-[-100px] 2xl:bottom-[-955px] z-0">
          <svg
            className="w-[150px] h-[200px] sm:w-[200px] sm:h-[270px] md:w-[250px] md:h-[340px] lg:w-[280px] lg:h-[380px] xl:w-[280px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[450px]"
            viewBox="0 0 191 444"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1877_405)">
              <g clip-path="url(#clip1_1877_405)">
                <g clip-path="url(#clip2_1877_405)">
                  <path
                    d="M-73.4841 18.426L-234.574 179.515C-258.005 202.947 -258.005 240.937 -234.574 264.368L-73.4841 425.458C-50.0526 448.889 -12.0627 448.889 11.3687 425.458L172.458 264.368C195.89 240.937 195.89 202.947 172.458 179.515L11.3687 18.4259C-12.0627 -5.00551 -50.0526 -5.0055 -73.4841 18.426Z"
                    fill="url(#paint0_linear_1877_405)"
                  />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1877_405"
                x1="208.897"
                y1="200.907"
                x2="-80.8632"
                y2="293.437"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.168198" stop-color="#2EE0A2" />
                <stop offset="0.576286" stop-color="#5F7EFF" />
                <stop offset="0.984375" stop-color="#000E29" />
              </linearGradient>
              <clipPath id="clip0_1877_405">
                <rect width="191" height="444" fill="white" />
              </clipPath>
              <clipPath id="clip1_1877_405">
                <rect width="191" height="444" fill="white" />
              </clipPath>
              <clipPath id="clip2_1877_405">
                <rect width="191" height="444" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="relative mt-12 mb-5 sm:mb-8 md:mb-[150px] flex flex-col md:flex-row justify-center items-center w-full max-w-[1100px] mx-auto gap-3 sm:gap-1 md:gap-10 xl:gap-4 2xl:gap-0"
          style={{ minHeight: "auto" }}
        >
          {/* Imagen superpuesta arriba a la derecha */}
          <div className="hidden xl:block absolute top-20 lg:right-[-15px] xl:top-32 xl:right-[-125px] 2xl:top-32 2xl:right-[-270px] z-30 w-24 h-24 lg:w-32 lg:h-32 xl:w-[280px] xl:h-auto">
            <img
              src={img4}
              alt="Imagen superpuesta"
              className="object-contain w-auto h-auto"
            />
          </div>
          {/* Imagen izquierda */}
          <div className="relative z-0 w-auto h-auto sm:w-[220px] sm:h-[160px] md:w-[360px] md:h-[190px] lg:h-[200px] lg:w-[400px] xl:w-[600px] xl:h-[310px] 2xl:w-[750px] 2xl:h-[400px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              alt="Personas trabajando en una mesa con laptops y documentos, representando plataforma de gestión de reportes"
              className="object-cover w-full h-full"
              height="400"
              loading="lazy"
              src={imgleft}
              width="750"
            />
          </div>

          {/* Imagen central (superpuesta y centrada desde md+) */}
          <div className="relative z-20 md:absolute md:left-1/2 md:top-[70%] md:-translate-x-1/2 md:-translate-y-1/2 w-auto h-auto sm:w-[220px] sm:h-[160px] md:w-[360px] md:h-[190px] lg:h-[200px] lg:w-[400px] xl:w-[600px] xl:h-[310px] 2xl:w-[750px] 2xl:h-[400px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
            <img
              alt="Interfaz de MiVisualization mostrando reportes de Power BI y Excel en un dashboard"
              className="object-cover w-full h-full"
              height="400"
              loading="lazy"
              src={imgcenter}
              width="750"
            />
          </div>

          {/* Imagen derecha */}
          <div className="relative z-0 w-auto h-auto sm:w-[220px] sm:h-[150px] md:w-[360px] md:h-[190px] lg:h-[200px] lg:w-[400px] xl:w-[600px] xl:h-[310px] 2xl:w-[750px] 2xl:h-[400px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 md:ml-0 xl:ml-[100px]">
            <img
              alt="Interfaz de MiVisualization en dispositivo móvil mostrando gráficos de usuarios y sesiones"
              className="object-cover w-full h-full"
              height="400"
              loading="lazy"
              src={imgrigth}
              width="750"
            />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mt-14 xl:max-w-[1000px] 2xl:max-w-[1380px] justify-center md:justify-start items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex gap-3 border-l-4 border-[#178EE8] pl-4">
          <div className="flex flex-col">
            <div className="w-8 h-8 border-radius-5px bg-transparent rounded-md flex items-center justify-center mb-1 ">
              <img src={feature1} alt="Acceso unificado" />
            </div>
            <div>
              <h3 className="xl:text-[16px] 2xl:text-[20px] font-lato font-semibold mb-1">
                Acceso Unificado
              </h3>
              <p className="font-lato font-normal text-[14px] leading-[21.6px] text-[#6b7280] antialiased">
                Interfaz intuitiva diseñada para usuarios de todos los niveles
                técnicos. Desde principiantes hasta expertos en análisis de
                datos.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-3 border-l-4 border-[#178EE8] pl-4">
          <div className="flex flex-col">
            <div className="w-8 h-8 border-radius-5px bg-transparent rounded-md flex items-center justify-center mb-1 ">
              <img src={feature2} alt="Acceso unificado" />
            </div>
            <div>
              <h3 className="xl:text-[16px] 2xl:text-[20px] font-semibold font-lato mb-1">
                Acceso total
              </h3>
              <p className="font-lato font-normal text-[14px] leading-[21.6px] text-[#6b7280] antialiased">
                Conecta y visualiza datos desde múltiples fuentes de manera
                unificada. Power BI, Tableau, Excel y más en una sola
                plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-3 border-l-4 border-[#178EE8] pl-4">
          <div className="flex flex-col">
            <div className="w-8 h-8 border-radius-5px bg-transparent rounded-md flex items-center justify-center mb-1 ">
              <img src={feature3} alt="Acceso unificado" />
            </div>
            <div>
              <h3 className="xl:text-[16px] 2xl:text-[20px] font-semibold font-lato mb-1">
                Seguridad avanzada
              </h3>
              <p className="font-lato font-normal text-[14px] leading-[21.6px] text-[#6b7280] antialiased">
                Protección de datos de nivel empresarial con encriptación
                end-to-end y controles de acceso granulares.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-3 border-l-4 border-[#178EE8] pl-4">
          <div className="flex flex-col">
            <div className="w-8 h-8 border-radius-5px bg-transparent rounded-md flex items-center justify-center mb-1 ">
              <img src={feature4} alt="Acceso unificado" />
            </div>
            <div>
              <h3 className="xl:text-[16px] 2xl:text-[20px] font-lato font-semibold mb-1">
                Todo en uno
              </h3>
              <p className="font-lato font-normal text-[14px] leading-[21.6px] text-[#6b7280] antialiased">
                Solución completa que integra análisis, visualización, reportes
                y colaboración en una experiencia unificada..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PowerBi;
