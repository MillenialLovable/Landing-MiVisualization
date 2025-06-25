import React from "react";
import seguridadIcon1 from "../assets/hugeicons_access.svg";
import seguridadIcon2 from "../assets/hugeicons_audit-02.svg";
import seguridadIcon3 from "../assets/bx_data.svg";
import seguridadIcon4 from "../assets/uim_lock-access.svg";

const Seguridad: React.FC = () => {
  return (
    <section
      id="seguridad"
      className="relative bg-[#09243F] py-12 md:py-16 px-4 md:px-8 lg:px-16 text-white overflow-hidden transform -skew-y-3"
    >
      <div className="transform skew-y-3">
        {/* Encabezado superior */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-sm md:text-md font-semibold">
            Autenticación y Seguridad
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 mt-2 max-w-3xl">
            Protege tus Datos con la Seguridad más Avanzada
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8 lg:gap-x-20 gap-y-8 md:gap-y-12 max-w-6xl">
            <div className="bg-[#06182C] rounded-xl p-6 md:p-8 max-w-md w-full shadow-lg">
              <h3 className="font-bold text-[15px] md:text-[18px] leading-[20px] mb-2">
                Beneficios de Seguridad
              </h3>
              <p className="text-[12px] md:text-[14px] leading-[16px] font-semibold text-[#7B8A9E] mb-6">
                Seguridad avanzada para proteger tus datos y cumplir con las
                normativas.
              </p>
              <ul className="space-y-3 text-[12px] md:text-[14px] leading-[16px] font-normal">
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Control total sobre quién ve qué datos.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Registro completo de interacciones con los datos.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Cumple con GDPR, CCPA y más.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Protege la información con encriptación avanzada.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Seguridad con autenticación multifactor.
                </li>
              </ul>
            </div>
            <div className="max-w-md w-full">
              <h3 className="font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[30px] mb-4">
                Garantía de Protección y Cumplimiento Total
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[24px] md:leading-[30px] font-semibold text-[#7B8A9E]">
                En
                <span className="font-bold">MiVisualization</span>, la seguridad
                de tus datos es nuestra máxima prioridad. Con tecnología de
                encriptación de última generación, control granular de accesos y
                una auditoría exhaustiva de todos los registros de usuario,
                garantizamos que solo las personas autorizadas puedan
                interactuar con la información crítica
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-20 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-8 lg:gap-x-[210px] text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#041B2E] rounded-xl w-[64px] h-[64px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                <img
                  alt="Icono de servidor azul"
                  className="w-7 h-7"
                  height="20"
                  src={seguridadIcon1}
                  width="20"
                />
              </div>
              <p className="text-[11px] md:text-[12px] font-bold text-[#00CFFF] leading-[16px] max-w-[90px]">
                Accesos Granulares
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#041B2E] rounded-xl w-[64px] h-[64px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                <img
                  alt="Icono de servidor azul"
                  className="w-7 h-7"
                  height="20"
                  src={seguridadIcon2}
                  width="20"
                />
              </div>
              <p className="text-[11px] md:text-[12px] font-bold text-[#00CFFF] leading-[16px] max-w-[90px]">
                Auditoría Detallada
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#041B2E] rounded-xl w-[64px] h-[64px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                <img
                  alt="Icono de servidor azul"
                  className="w-7 h-7"
                  height="20"
                  src={seguridadIcon3}
                  width="20"
                />
              </div>
              <p className="text-[11px] md:text-[12px] font-bold text-[#00CFFF] leading-[16px] max-w-[90px]">
                Cifrado de Datos
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#041B2E] rounded-xl w-[64px] h-[64px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                <img
                  alt="Icono de servidor azul"
                  className="w-7 h-7"
                  height="20"
                  src={seguridadIcon4}
                  width="20"
                />
              </div>
              <p className="text-[11px] md:text-[12px] font-bold text-[#00CFFF] leading-[16px] max-w-[90px]">
                Prevención de accesos no autorizados
              </p>
            </div>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mt-12 md:mt-20 px-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-sm md:text-md font-semibold">
            N U E S T R O B L O G
          </p>
          <h1 className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
            Insights Y Novedades Sobre BI Y Analítica
          </h1>
          <p className="text-[#8B9BB8] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Mantente al día con las mejores prácticas, tendencias y casos de
            éxito en el mundo de la analítica de datos.
          </p>
        </div>
        <div className="my-8 md:my-12 px-4">
          {/* Cambia el contenedor flex por grid para mejor responsividad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
            {/* Tarjeta 1 */}
            <article className="flex flex-col xl:flex-row bg-gradient-to-br from-[#112B4A] to-[#0D1E33] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 h-auto max-w-2xl mx-auto w-full">
              <img
                alt="Ilustración colorida de gráficos y tablas de analítica en pantalla de computadora y papeles"
                className="w-full xl:w-64 xl:h-[355px] object-cover h-48"
                src="https://storage.googleapis.com/a1aa/image/4e474978-2e2e-4354-314d-de2058f59351.jpg"
              />
              <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
                <h2 className="text-[#00BFFF] font-semibold text-base sm:text-xl md:text-2xl leading-snug mb-4 md:mb-0 drop-shadow-md">
                  Cómo migrar de Excel a Power BI sin perder datos
                </h2>
                <div className="flex items-center justify-between text-[#6B7A99] text-xs sm:text-sm md:text-base">
                  <div className="flex items-center space-x-3">
                    <img
                      alt="Avatar de Jessie G"
                      className="rounded-full border-2 border-[#00BFFF]"
                      height="32"
                      src="https://storage.googleapis.com/a1aa/image/e5a42dca-e51c-4cd5-1201-da08396fe8f3.jpg"
                      width="32"
                    />
                    <span className="font-medium text-white">Jessie G</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="far fa-clock text-[#6B7A99] text-base"></i>
                    <span>2 minutos</span>
                  </div>
                </div>
              </div>
            </article>
            {/* Tarjeta 2 */}
            <article className="flex flex-col bg-gradient-to-br from-[#112B4A] to-[#0D1E33] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 max-w-2xl mx-auto w-full">
              <img
                alt="Captura de video con tres personas en conferencia en recuadros"
                className="w-full h-48 object-cover"
                src="https://storage.googleapis.com/a1aa/image/42682cda-4487-404d-11f2-d70030a31956.jpg"
              />
              <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
                <h2 className="text-[#00BFFF] font-semibold text-base sm:text-xl md:text-2xl leading-snug mb-4 md:mb-5 drop-shadow-md">
                  Integración de AWS Quicksight con fuentes externas
                </h2>
                <div className="flex items-center justify-between text-[#6B7A99] text-xs sm:text-sm md:text-base">
                  <div className="flex items-center space-x-3">
                    <img
                      alt="Avatar de Brian D"
                      className="rounded-full border-2 border-[#00BFFF]"
                      height="32"
                      src="https://storage.googleapis.com/a1aa/image/47763a4e-919b-41d7-8f71-c7a2817de218.jpg"
                      width="32"
                    />
                    <span className="font-medium text-white">Brian D</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="far fa-clock text-[#6B7A99] text-base"></i>
                    <span>1 minuto</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seguridad;
