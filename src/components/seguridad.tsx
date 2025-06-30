import React from "react";
import seguridadIcon1 from "../assets/hugeicons_access.svg";
import seguridadIcon2 from "../assets/hugeicons_audit-02.svg";
import seguridadIcon3 from "../assets/bx_data.svg";
import seguridadIcon4 from "../assets/uim_lock-access.svg";
import BlogCarrusel from "./BlogCarrusel";

const Seguridad: React.FC = () => {
  return (
    <section
      id="seguridad"
      className="relative bg-[#09243F] py-12 md:py-16 px-4 md:px-8 lg:px-16 font-lato text-white overflow-hidden transform -skew-y-3"
    >
      <div className="transform skew-y-3">
        {/* Encabezado superior */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <span className="text-transparent font-lato bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-sm md:text-md font-semibold">
            Autenticación y Seguridad
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-lato text-center mb-2 mt-2 max-w-3xl">
            Protege tus Datos con la Seguridad más Avanzada
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8 lg:gap-x-20 gap-y-8 md:gap-y-12 max-w-6xl">
            <div className="bg-[#06182C] rounded-xl p-6 md:p-8 max-w-md w-full shadow-lg">
              <h3 className="font-normal text-[15px] md:text-[18px] font-lato leading-[20px] mb-2">
                Beneficios de Seguridad
              </h3>
              <p className="text-[12px] md:text-[14px] xl:text-[16px] leading-[16px] font-lato font-normal text-[#7B8A9E] mb-6">
                Seguridad avanzada para proteger tus datos y cumplir con las
                normativas.
              </p>
              <ul className="space-y-3 text-[12px] md:text-[14px] leading-[16px] font-normal">
                <li className="flex items-start gap-3">
                  <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00CFFF] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[#05203C] text-[10px]"></i>
                  </span>
                  Control total sobre quién ve tus datos.
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
                <span className="font-bold"> MiVisualization</span>, la seguridad
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
              <p className="text-[11px] xl:text-[18px] font-bold text-[#00CFFF] leading-[22px] max-w-[90px]">
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
              <p className="text-[11px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#00CFFF] leading-[22px] max-w-[90px]">
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
              <p className="text-[11px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#00CFFF] leading-[22px] max-w-[90px]">
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
              <p className="text-[11px] xl:text-[18px] font-bold text-[#00CFFF] leading-[22px] max-w-[90px]">
                Accesos controlados
              </p>
            </div>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mt-12 md:mt-20 px-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-sm md:text-md font-semibold">
            N U E S T R O B L O G
          </p>
          <h1 className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 max-w-3xl mx-auto">
            Insights Y Novedades Sobre BI Y Analítica
          </h1>
          <p className="text-[#8B9BB8] text-[11px] xl:text-[18px] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Mantente al día con las mejores prácticas, tendencias y casos de
            éxito en el mundo de la analítica de datos.
          </p>
        </div>
        {/* Aquí solo llamas al componente BlogCarrusel */}
        <BlogCarrusel />
      </div>
    </section>
  );
};

export default Seguridad;
