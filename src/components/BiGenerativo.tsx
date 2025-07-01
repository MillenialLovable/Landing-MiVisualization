import React from "react";
import bigenrativo from "../assets/gifBI.gif";
import a2Icon from "../assets/icons-BiGenerativo/Exploracion.svg";
import a2Icon2 from "../assets/icons-BiGenerativo/Generacion.svg";
import a2Icon3 from "../assets/icons-BiGenerativo/Interaccion.svg";

const BiGenerativo: React.FC = () => {
  return (
    <section className="pb-12 lg:pb-[70px] px-6 lg:px-20 text-[#0f172a] font-lato">
      <div className="max-w-auto pt-10 pb-20 relative overflow-visible">
        <div className="flex items-center justify-center gap-4">
          <div className="border-t border-[#d1d5db] w-28"></div>
          <p className="text-center xl:text-[16px] 2xl:text-[18px] font-lato font-semibold text-[#a3abb7] uppercase leading-5 tracking-widest mb-6 select-none">
            ANALÍTICA CON {" "}
            <br />
            INTELIGENCIA ARTIFICIAL
          </p>
          <div className="border-t border-[#d1d5db] w-28"></div>
        </div>
        <h2
          className="text-[11px] sm:text-[12px] md:text-[14px] xl:text-[17px] 2xl:text-[19px] font-semibold font-lato text-[#0091ff] uppercase tracking-widest mb-1 select-none"
          style={{ letterSpacing: "0.3em" }}
        >
          IMPULSA TUS DECISIONES
        </h2>
        <h1
          className="text-[22px] sm:text-[26px] md:text-[28px] xl:text-[40px] 2xl:text-[42px] font-extrabold font-lato leading-[1.1] max-w-auto mb-[15px] select-none"
          style={{
            background: "linear-gradient(90deg, #2EE0A2 12.5%, #26B7FF 40.87%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Inteligencia
          <span className="text-[#0091ff]">
            {" "}
            Artificial Generativa AI Servicio De
          </span>
          <br />
          Tu BI
        </h1>
        <p className="text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] 2xl:text-[17px] max-w-auto font-lato font-normal text-[#1f2937] mb-10 leading-[1.3] max-w-[70em] padding-x-4">
          Explora tus datos con mayor agilidad mediante preguntas en lenguaje
          natural. Con MiVisualization, la IA generativa transforma la manera en
          que accedes a insights, permitiéndote interactuar con dashboards sin
          necesidad de conocimientos técnicos. Ideal para equipos que necesitan
          <strong> respuestas</strong> claras, rápidas y accionables.
        </p>

        {/* Blue shape on left */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="867"
          viewBox="0 0 220 867"
          fill="none"
          className="absolute -left-[185px] top-[180px] w-[420px] h-[420px] -z-10"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-574.173 709.621C-650.755 607.001 -593.42 470.688 -571.103 344.678C-552.182 237.84 -545.535 121.316 -458.515 56.5555C-366.018 -12.2805 -244.524 -7.28914 -131.923 17.8385C2.05676 47.7369 168.583 75.6038 211.374 206.046C253.672 334.989 115.18 439.205 44.2126 554.769C-25.8412 668.845 -58.6697 824.769 -188.556 857.294C-328.961 892.453 -487.553 825.692 -574.173 709.621Z"
            fill="url(#paint0_linear_2008_284)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2008_284"
              x1="353.894"
              y1="275.147"
              x2="-404.311"
              y2="467.432"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.168198" stopColor="#38DBFF" />
              <stop offset="0.984375" stopColor="#8A21DD" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex flex-col space-y-[55px] md:w-[400px] lg:w-[400px] xl:w-[500px]">
            {/* Card 1 */}
            <div
              className="bg-white shadow-lg rounded-md p-5 relative"
              style={{
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(to bottom, #2EE0A2, #26B7FF, #5F7EFF) 1 100%",
                borderImageSlice: 1,
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <img
                  alt="Icono A²"
                  className="w-10 h-10"
                  height="24"
                  src={a2Icon}
                  width="24"
                />
                <h3 className="font-bold xl:text-[16px] 2xl:text-[18px] text-[#0f172a] leading-tight">
                  Exploración de Datos con Lenguaje Natural
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-lg rounded-md p-5 relative"
              style={{
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(to bottom, #2EE0A2, #26B7FF, #5F7EFF) 1 100%",
                borderImageSlice: 1,
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <img
                  alt="Icono gráfico de barras y gráfico de columnas en tonos azul y verde"
                  className="w-10 h-10"
                  height="24"
                  src={a2Icon2}
                  width="24"
                />
                <h3 className="font-bold xl:text-[16px] 2xl:text-[18px] text-[#0f172a] leading-tight">
                  Generación Automática de Insights
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-lg rounded-md p-5 relative"
              style={{
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(to bottom, #2EE0A2, #26B7FF, #5F7EFF) 1 100%",
                borderImageSlice: 1,
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <img
                  alt="Icono azul con letras AI representando inteligencia artificial"
                  className="w-10 h-10"
                  height="24"
                  src={a2Icon3}
                  width="24"
                />
                <h3 className="font-bold xl:text-[16px] 2xl:text-[18px] text-[#0f172a] leading-tight">
                  Interacción Dinámica con Dashboards
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 flex-1 flex justify-center md:justify-center bg-transparent">
            <img
              alt="Captura de pantalla de dashboard de MiVisualization con varios paneles de datos y gráficos, barras laterales y menús en tonos azul claro y blanco"
              className="rounded-lg max-w-full h-auto bg-transparent"
              height="480"
              src={bigenrativo}
              width="750"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiGenerativo;
