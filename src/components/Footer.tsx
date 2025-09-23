import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Analitica2.png";
import nube from "../assets/VerDemostracion.svg";
import logo2 from "../assets/logo2.svg";

const Footer: React.FC = () => {
  return (
    <section
      className="text-white mt-20 font-lato"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 2000 800" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M2817.66 1716.14C2731.58 2248.82 2150.43 2475.01 1703.24 2776.96C1324.09 3032.96 951.634 3354.53 500.094 3281.07C20.1298 3202.99 -321.318 2820.67 -575.67 2406.21C-878.312 1913.09 -1282.63 1327.4 -1013.1 815.42C-746.675 309.32 -24.5526 422.856 533.768 298.766C1084.9 176.275 1653.54 -181.578 2133.25 116.129C2651.8 437.945 2915.03 1113.66 2817.66 1716.14Z" fill="%2309243F"/%3E%3C/svg%3E')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Demo section */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-row lg:grid-cols-2 gap-0 rounded-2xl p-4 sm:p-8 md:px-0 md:pr-0 bg-transparent">
            <div
              className="flex items-center justify-center md:justify-start p-4 sm:p-8 rounded-2xl md:rounded-l-2xl"
              style={{ background: "rgba(245, 246, 247, 0.92)" }}
            >
              <div className="max-w-[320px] md:max-w-[400px] text-center md:text-left">
                <div className="hidden xl:block bg-transparent mb-4 flex items-center justify-center">
                  <img
                    src={nube}
                    alt="Icono de nube - Mi Visualization"
                    className=" ml-1"
                  />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-[#0f2f5e] leading-tight mb-2">
                  ¿Te gustaría ver
                  <br />
                  Mi Visualization en acción?
                </h2>
                <p className="text-[#4f5361] text-xs md:text-xs lg:text-sm xl:text-lg font-lato font-normal leading-relaxed mb-4 w-full md:w-[330px]">
                  Descubre cómo nuestra plataforma puede transformar tu gestión
                  y visualización de datos. Solicita una demo ahora y nuestro
                  equipo te mostrará cómo puede impulsar tu negocio.
                </p>
                <a
                  className="text-[#1a6dbb] font-normal text-sm md:text-sm lg:text-sm xl:text-lg flex items-center justify-center md:justify-start hover:underline"
                  href="#"
                >
                  Ponte en contacto
                </a>
              </div>
            </div>
            <img
              src={logo as unknown as string}
              alt="Dashboard de Mi Visualization - Plataforma de Business Intelligence"
              className="hidden md:block w-auto md:w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[800px] h-[0px] md:h-[280px] lg:h-[310px] xl:h-[460px] 2xl:h-[450px] rounded-lg absolute md:absolute md:top-5 lg:top-2 xl:top-0 2xl:top-3 md:transform-none md:right-[-20px] lg:right-[40px] xl:-right-[70px] 2xl:-right-[90px] mt-4 md:mt-0"
            />
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm md:text-base">
          <div className="md:col-span-4 space-y-4">
            <img
              alt="Mi Visualization logo with blue and green bars"
              className="w-auto h-auto"
              height="24"
              loading="lazy"
              src={logo2}
              width="24"
            />
            <p className="text-[#a3b0c0] leading-relaxed max-w-[280px] font-lato font-light">
              Transformamos datos en decisiones inteligentes. La plataforma de
              Business Intelligence más completa del mercado.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="LinkedIn"
                className="text-[#4f5361] hover:text-white transition p-2"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(6, 182, 212, 0.30)",
                  background:
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.20) 0%, rgba(59, 130, 246, 0.20) 100%)",
                }}
                href="https://www.linkedin.com/company/mivisualization/posts/?feedView=all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.3335 6.66699C14.6596 6.66699 15.9313 7.19378 16.869 8.13146C17.8067 9.06914 18.3335 10.3409 18.3335 11.667V17.5003H15.0002V11.667C15.0002 11.225 14.8246 10.801 14.512 10.4885C14.1994 10.1759 13.7755 10.0003 13.3335 10.0003C12.8915 10.0003 12.4675 10.1759 12.155 10.4885C11.8424 10.801 11.6668 11.225 11.6668 11.667V17.5003H8.3335V11.667C8.3335 10.3409 8.86028 9.06914 9.79796 8.13146C10.7356 7.19378 12.0074 6.66699 13.3335 6.66699Z"
                    stroke="#06B6D4"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99984 7.5H1.6665V17.5H4.99984V7.5Z"
                    stroke="#06B6D4"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33317 5.00033C4.25365 5.00033 4.99984 4.25413 4.99984 3.33366C4.99984 2.41318 4.25365 1.66699 3.33317 1.66699C2.4127 1.66699 1.6665 2.41318 1.6665 3.33366C1.6665 4.25413 2.4127 5.00033 3.33317 5.00033Z"
                    stroke="#06B6D4"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <h4 className="font-semibold text-white mb-3">Enlaces Rápidos</h4>
            <ul className="space-y-1 text-[#a3b0c0] font-normal">
              <li>
                <a className="hover:text-white transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  ¿Qué es el MI Visualization?
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  BI Generativo
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Seguridad
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Contactanos
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 space-y-4">
            {/* <h4 className="font-semibold text-white mb-3">
              Información de Contacto
            </h4>
            <div className="text-[#a3b0c0] space-y-3 text-sm md:text-base max-w-[1000px]">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <p className="flex items-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
                        stroke="#06B6D4"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33333C16.6667 4.65144 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65144 3.33334 8.33333C3.33334 12.0152 6.66668 15 10 18.3333Z"
                        stroke="#06B6D4"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      Dirección
                      Faustino Sánchez Carrión 790
                      Magdalena, Lima - Perú
                    </span>
                  </p>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6667 3.33334H3.33334C2.41286 3.33334 1.66667 4.07953 1.66667 5.00001V15C1.66667 15.9205 2.41286 16.6667 3.33334 16.6667H16.6667C17.5871 16.6667 18.3333 15.9205 18.3333 15V5.00001C18.3333 4.07953 17.5871 3.33334 16.6667 3.33334Z"
                        stroke="#06B6D4"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3333 5L10 10.8333L1.66667 5"
                        stroke="#06B6D4"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      className="hover:text-white transition"
                      href="mailto:info@mivisualization"
                    >
                      info@millev.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M18.3333 14.1V16.6C18.3344 16.8321 18.2867 17.0618 18.1936 17.2745C18.1005 17.4871 17.9644 17.6782 17.7939 17.8349C17.6234 17.9916 17.4222 18.1103 17.203 18.1839C16.9839 18.2575 16.752 18.2844 16.5217 18.2633C13.9524 17.9888 11.4892 17.1118 9.32499 15.7083C7.31264 14.4288 5.60369 12.7199 4.32499 10.7083C2.91667 8.53431 2.04014 6.05945 1.76666 3.47833C1.74559 3.24841 1.77241 3.01689 1.84588 2.79802C1.91935 2.57914 2.03779 2.37826 2.19421 2.20799C2.35064 2.03773 2.54141 1.90172 2.75378 1.80853C2.96615 1.71535 3.19558 1.66745 3.42749 1.66833H5.92749C6.32922 1.66296 6.72148 1.80559 7.02828 2.06924C7.33508 2.33289 7.53584 2.69873 7.59166 3.09333C7.70938 3.90078 7.92207 4.69157 8.22499 5.45C8.39407 5.86403 8.38132 6.33114 8.18907 6.735L7.21666 8.79167C8.50334 10.9117 10.5883 11.9967 12.7083 13.2833L14.765 12.31C15.1684 12.1178 15.6351 12.1051 16.0488 12.2742C16.4625 12.4433 16.7911 12.7792 16.9583 13.2083C17.2613 13.9667 17.474 14.7575 17.5917 15.565C17.6508 15.9628 17.7881 16.3439 18.0333 16.6667L18.3333 14.1Z"
                        stroke="#06B6D4"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      className="hover:text-white transition"
                      href="tel:+519933650110"
                    >
                      (+51) 975 113 510
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
            <div
              className="rounded-xl p-4 max-w-auto mt-4"
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(6, 182, 212, 0.20)",
                background: "#09243F",
              }}
            >
              <p className="text-[#a3b0c0] text-md mb-3 font-lato font-semibold">
                ¿Listo para transformar tus datos?
              </p>
              <p className="text-[#a3b0c0] text-md mb-4 font-lato leading-tight">
                Programa una demo personalizada y descubre el potencial de Mi
                Visualization
              </p>
              <a
                className="inline-block text-white text-md font-lato font-semibold px-4 py-2 rounded-xl transition"
                style={{
                  borderRadius: "12px",
                  background:
                    "linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)",
                }}
                href="#home"
              >
                Ponte en contacto
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-16 border-t border-[#1a6dbb] pt-6 text-[#a3b0c0] font-lato text-xs md:text-sm flex flex-col md:flex-row justify-between">
          <p>© 2024 Mi Visualization. Todos los derechos reservados.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <Link className="hover:text-white transition" to="/privacidad">
              Política de Privacidad
            </Link>
            {/* <Link className="hover:text-white transition" to="/terminos">
              Términos de Servicio
            </Link>
            <Link className="hover:text-white transition" to="/cookies">
              Política de Cookies
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
