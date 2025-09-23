import React from "react";
import dashboard from "../../assets/CasoExito/Analitica.png";
import eliminacionlicencias from "../../assets/CasoExito/eliminacionlicencias.svg";
import iconaccesounificado from "../../assets/CasoExito/iconacsesounificado.svg";
import iconentregareporte from "../../assets/CasoExito/iconentregareporte.svg";
import iconoacsesomultiple from "../../assets/CasoExito/iconoacsesomultiple.svg";
import iconoresponsabilidadsocial from "../../assets/CasoExito/iconoresponsabilidadsocialcorporativa.svg";

const Solucion: React.FC = () => {
  return (
    <section className="py-5 lg:py-[70px] px-6 lg:px-20 font-lato bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dashboard Image */}
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                La Solución:
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#5F7EFF] mb-2">
                Mi Visualización + Power BI Embedded
              </h3>
              <p className="text-[#243A52] text-lg max-w-2xl mx-auto">
                Implementamos una plataforma centralizada que revolucionó la
                forma en que SMI gestiona sus datos y reportes empresariales.
              </p>
            </div>
            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-lg shadow-lg p-4">
              {/* User Icons */}
              <div className="flex justify-center mb-6 space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.5 4.54077C13.5609 4.54077 14.5783 4.9622 15.3284 5.71234C16.0786 6.46249 16.5 7.47991 16.5 8.54077C16.5 9.60164 16.0786 10.6191 15.3284 11.3692C14.5783 12.1193 13.5609 12.5408 12.5 12.5408C11.4391 12.5408 10.4217 12.1193 9.67157 11.3692C8.92143 10.6191 8.5 9.60164 8.5 8.54077C8.5 7.47991 8.92143 6.46249 9.67157 5.71234C10.4217 4.9622 11.4391 4.54077 12.5 4.54077ZM12.5 14.5408C16.92 14.5408 20.5 16.3308 20.5 18.5408V20.5408H4.5V18.5408C4.5 16.3308 8.08 14.5408 12.5 14.5408Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                ))}
                <div className="text-gray-600 font-semibold mt-1">+145</div>
              </div>
              <img
                src={dashboard as string}
                alt="Dashboard Mi Visualización"
                className="w-auto h-auto rounded-lg"
              />
              {/* Bottom Text */}
              <div className="text-center my-3">
                <p className="text-gray-700 font-medium">
                  150 usuarios accediendo a 23 reportes sin licencias
                  individuales
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-[60px]">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={iconoresponsabilidadsocial}
                  alt="iconoresponsabilidadsocialcorporativa"
                />
              </div>
              <div className="flex items-center">
                <h4 className="font-semibold text-[#212529]">
                  Portal centralizado para todos los usuarios SMI
                </h4>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconoacsesomultiple} alt="iconoacsesomultiple" />
              </div>
              <div className="flex items-center">
                <h4 className="font-semibold text-[#212529]">
                  Integración completa con Power BI Embedded
                </h4>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconaccesounificado} alt="iconaccesounificado" />
              </div>
              <div className="flex items-center">
                <h4 className="font-semibold text-[#212529]">
                  Gestión inteligente de 150 perfiles de usuario
                </h4>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconentregareporte} alt="iconentregareporte" />
              </div>
              <div className="flex items-center">
                <h4 className="font-semibold text-[#212529]">
                  Control de acceso granular por reporte
                </h4>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={eliminacionlicencias}
                  alt="iconoliminacionlicencias"
                />
              </div>
              <div className="flex items-center">
                <h4 className="font-semibold text-[#212529]">
                  Eliminación de licencias individuales de Power BI
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucion;
