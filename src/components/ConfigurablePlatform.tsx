import React from "react";
import icon1 from "../assets/icons-ConfigurablePlatform/AccesoMultiple.svg"
import icon2 from "../assets/icons-ConfigurablePlatform/ReduccionDeCostos.svg";
import icon3 from "../assets/icons-ConfigurablePlatform/Personalizacion.svg";

const ConfigurablePlatform: React.FC = () => {
  return (
    <section
      id="bigenerativo"
      className="relative bg-transparent py-16 px-4 md:px-16 text-white overflow-hidden transform font-lato"
    >
      {/* Fondo SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 987"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_2048_325)">
          <g clip-path="url(#clip1_2048_325)">
            <g clip-path="url(#clip2_2048_325)">
              <path
                d="M1501.81 20.2765C1570.38 -7.59988 1648 40.4739 1648 114.494V214H-444C10.245 111.013 266.746 64.44 742.306 92C1092.72 131.745 1283.32 109.101 1501.81 20.2765Z"
                fill="#09243F"
              />
            </g>
          </g>
        </g>
        <g clip-path="url(#clip3_2048_325)">
          <g clip-path="url(#clip4_2048_325)">
            <g clip-path="url(#clip5_2048_325)">
              <path
                d="M0 965.14V842.14H1440.5V891C1104.31 891.362 1617.27 844.056 1378.5 912.5C1103.77 965.661 263.091 992.621 0 965.14Z"
                fill="#09243F"
              />
            </g>
          </g>
        </g>
        <rect
          width="1440"
          height="664"
          transform="translate(0 200)"
          fill="#09243F"
        />
        <defs>
          <clipPath id="clip0_2048_325">
            <rect
              width="1440"
              height="200"
              fill="white"
              transform="translate(0 2)"
            />
          </clipPath>
          <clipPath id="clip1_2048_325">
            <rect
              width="1440"
              height="200"
              fill="white"
              transform="translate(0 2)"
            />
          </clipPath>
          <clipPath id="clip2_2048_325">
            <rect
              width="1900.99"
              height="200"
              fill="white"
              transform="translate(-460.99 2)"
            />
          </clipPath>
          <clipPath id="clip3_2048_325">
            <rect
              width="1440"
              height="123"
              fill="white"
              transform="translate(0 854)"
            />
          </clipPath>
          <clipPath id="clip4_2048_325">
            <rect
              width="1440"
              height="200"
              fill="white"
              transform="translate(0 854)"
            />
          </clipPath>
          <clipPath id="clip5_2048_325">
            <rect
              width="1901"
              height="123"
              fill="white"
              transform="translate(0 854.14)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="relative z-10">
        {/* Encabezado superior */}
        <div className="flex flex-col items-center justify-center mb-8 mt-16">
          <span className="text-transparent text-[17px] bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-[0.45em] text-md font-semibold">
            DISEÑADO PARA AJUSTARSE
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-[0.45em] text-md font-semibold">
            A TI
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold font-lato text-center mb-2 mt-2">
            Una Plataforma, Múltiples Formas De
            <br />
            Configurarla
          </h2>
          <p className="font-lato font-normal text-[16px] leading-[21.6px] text-[#a7aebf] text-center max-w-3xl antialiased mb-3">
            Desde la identidad visual hasta la organización de dashboards por
            unidad o categoría, MiVisualization permite una configuración
            granular que garantiza eficiencia operativa, control de accesos y
            una experiencia alineada a la cultura de cada empresa.
          </p>
        </div>
        {/* Pestañas de categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            "ROLES DE USUARIO",
            "ACCESOS POR ÁREA",
            "ORGANIZACIÓN DE CONTENIDO",
            "PERMISOS POR RECURSO",
            "IDENTIDAD VISUAL",
            "CONTROL DE SESIONES",
            "ASIGNACIÓN DE DASHBOARDS",
            "MÓDULOS ACTIVABLES",
          ].map((tab) => (
            <span
              key={tab}
              className="bg-[#12263A] hover:bg-[#1A3450] text-xs md:text-[12px] font-normal rounded-full px-4 py-2 transition-colors cursor-pointer select-none"
            >
              {tab}
            </span>
          ))}
        </div>
        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto mt-8">
          {/* Tarjeta 1 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-4">
              {/* Icono de acceso múltiple */}
              <img src={icon1} alt="Reducción de costos"  />
            <div className="flex flex-col">
              <h3 className="xl:text-[16px] 2xl:text-[18px] font-bold mb-2">Acceso múltiple</h3>
              <p className="text-[#a7aebf] font-lato font-light xl:text-[14px] 2xl:text-[16px] leading-[21.6px]">
                Accede a tus dashboards desde cualquier dispositivo, en
                cualquier momento. Sincronización en tiempo real entre web,
                móvil y tablet.
              </p>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-4">
              {/* Icono de reducción de costos */}
              <img src={icon2} alt="Reducción de costos" />
            <div className="flex flex-col">
              <h3 className="xl:text-[16px] 2xl:text-[18px] font-bold mb-2">Reducción de costos</h3>
              <p className="text-[#a7aebf] font-lato font-light xl:text-[14px] 2xl:text-[16px] leading-[21.6px]">
                Elimina la necesidad de múltiples licencias y reduce los costos
                operativos hasta un 60% consolidando todas tus herramientas de
                BI.
              </p>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-2">
              {/* Icono de personalización */}
              <img src={icon3} alt="Reducción de costos" />
            <div className="flex flex-col">
              <h3 className="xl:text-[16px] 2xl:text-[18px] font-bold mb-2">Personaliza</h3>
              <p className="text-[#a7aebf] font-lato font-light xl:text-[14px] 2xl:text-[16px] leading-[21.6px]">
                Personaliza accesos, roles, contenido y diseño para alinear la
                plataforma con tu estructura organizacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurablePlatform;
