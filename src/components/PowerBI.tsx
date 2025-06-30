import React from "react";
import imgleft from "../assets/login-espaol-1.png";
import imgcenter from "../assets/reportes-21.png";
import imgrigth from "../assets/reportes-1.png";
import img4 from "../assets/celu.png";

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
          S O L U C I Ó N   B I   I N T E G R A D A
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
            <div className="w-8 h-8 border-radius-5px bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-md flex items-center justify-center mb-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16 21.8901V19.8901C16 18.8293 15.5786 17.8119 14.8284 17.0617C14.0783 16.3116 13.0609 15.8901 12 15.8901H6C4.93913 15.8901 3.92172 16.3116 3.17157 17.0617C2.42143 17.8119 2 18.8293 2 19.8901V21.8901"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11.8901C11.2091 11.8901 13 10.0993 13 7.89014C13 5.681 11.2091 3.89014 9 3.89014C6.79086 3.89014 5 5.681 5 7.89014C5 10.0993 6.79086 11.8901 9 11.8901Z"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 21.89V19.89C21.9993 19.0037 21.7044 18.1428 21.1614 17.4423C20.6184 16.7419 19.8581 16.2416 19 16.02"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 4.02002C16.8604 4.24032 17.623 4.74072 18.1676 5.44233C18.7122 6.14394 19.0078 7.00685 19.0078 7.89502C19.0078 8.78319 18.7122 9.6461 18.1676 10.3477C17.623 11.0493 16.8604 11.5497 16 11.77"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
            <div className="w-8 h-8 border-radius-5px bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-md flex items-center justify-center mb-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
            <div className="w-8 h-8 border-radius-5px bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-md flex items-center justify-center mb-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M19.3198 11.8901H5.31982C4.21525 11.8901 3.31982 12.7856 3.31982 13.8901V20.8901C3.31982 21.9947 4.21525 22.8901 5.31982 22.8901H19.3198C20.4244 22.8901 21.3198 21.9947 21.3198 20.8901V13.8901C21.3198 12.7856 20.4244 11.8901 19.3198 11.8901Z"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.31982 11.8901V7.89014C7.31982 6.56405 7.84661 5.29228 8.78429 4.3546C9.72197 3.41692 10.9937 2.89014 12.3198 2.89014C13.6459 2.89014 14.9177 3.41692 15.8554 4.3546C16.793 5.29228 17.3198 6.56405 17.3198 7.89014V11.8901"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
            <div className="w-8 h-8 border-radius-5px bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-md flex items-center justify-center mb-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.83 2.18011C12.5694 2.06126 12.2864 1.99976 12 1.99976C11.7136 1.99976 11.4305 2.06126 11.17 2.18011L2.59996 6.08011C2.42251 6.15836 2.27164 6.28651 2.16573 6.44897C2.05981 6.61143 2.00342 6.80118 2.00342 6.99511C2.00342 7.18905 2.05981 7.3788 2.16573 7.54126C2.27164 7.70371 2.42251 7.83187 2.59996 7.91011L11.18 11.8201C11.4405 11.939 11.7236 12.0005 12.01 12.0005C12.2964 12.0005 12.5794 11.939 12.84 11.8201L21.42 7.92011C21.5974 7.84187 21.7483 7.71371 21.8542 7.55126C21.9601 7.3888 22.0165 7.19905 22.0165 7.00511C22.0165 6.81118 21.9601 6.62143 21.8542 6.45897C21.7483 6.29651 21.5974 6.16836 21.42 6.09011L12.83 2.18011Z"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 17.6499L12.83 21.8099C12.5694 21.9288 12.2864 21.9903 12 21.9903C11.7136 21.9903 11.4306 21.9288 11.17 21.8099L2 17.6499"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12.6499L12.83 16.8099C12.5694 16.9288 12.2864 16.9903 12 16.9903C11.7136 16.9903 11.4306 16.9288 11.17 16.8099L2 12.6499"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
