import React from "react";

const ConfigurablePlatform: React.FC = () => {
  return (
    <section id="bigenerativo" className="relative bg-transparent py-16 px-4 md:px-16 text-white overflow-hidden transform ">
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
<path d="M1501.81 20.2765C1570.38 -7.59988 1648 40.4739 1648 114.494V214H-444C10.245 111.013 266.746 64.44 742.306 92C1092.72 131.745 1283.32 109.101 1501.81 20.2765Z" fill="#09243F"/>
</g>
</g>
</g>
<g clip-path="url(#clip3_2048_325)">
<g clip-path="url(#clip4_2048_325)">
<g clip-path="url(#clip5_2048_325)">
<path d="M0 965.14V842.14H1440.5V891C1104.31 891.362 1617.27 844.056 1378.5 912.5C1103.77 965.661 263.091 992.621 0 965.14Z" fill="#09243F"/>
</g>
</g>
</g>
<rect width="1440" height="664" transform="translate(0 200)" fill="#09243F"/>
<defs>
<clipPath id="clip0_2048_325">
<rect width="1440" height="200" fill="white" transform="translate(0 2)"/>
</clipPath>
<clipPath id="clip1_2048_325">
<rect width="1440" height="200" fill="white" transform="translate(0 2)"/>
</clipPath>
<clipPath id="clip2_2048_325">
<rect width="1900.99" height="200" fill="white" transform="translate(-460.99 2)"/>
</clipPath>
<clipPath id="clip3_2048_325">
<rect width="1440" height="123" fill="white" transform="translate(0 854)"/>
</clipPath>
<clipPath id="clip4_2048_325">
<rect width="1440" height="200" fill="white" transform="translate(0 854)"/>
</clipPath>
<clipPath id="clip5_2048_325">
<rect width="1901" height="123" fill="white" transform="translate(0 854.14)"/>
</clipPath>
</defs>
      </svg>
      <div className="relative z-10">
        {/* Encabezado superior */}
        <div className="flex flex-col items-center justify-center mb-8 mt-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-md font-semibold">
            DISEÑADO PARA AJUSTARSE
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF] tracking-widest text-md font-semibold">
            A TI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 mt-2">
            Una Plataforma, Múltiples Formas De
            <br />
            Configurarla
          </h2>
          <p className="text-[#a7aebf] text-base md:text-lg font-medium text-center max-w-2xl">
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
              className="bg-[#12263A] hover:bg-[#1A3450] text-xs md:text-sm font-bold rounded-full px-4 py-2 transition-colors cursor-pointer select-none"
            >
              {tab}
            </span>
          ))}
        </div>
        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto mt-8">
          {/* Tarjeta 1 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-4">
            <div className="bg-transparent">
              {/* Icono de acceso múltiple */}
              <svg
                width="84"
                height="85"
                viewBox="0 0 84 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_1924_298)">
                  <rect
                    x="12"
                    y="2.19995"
                    width="60"
                    height="60"
                    rx="12"
                    fill="url(#paint0_linear_1924_298)"
                  />
                  <path
                    d="M41.9998 45.5334C49.3636 45.5334 55.3332 39.5638 55.3332 32.2C55.3332 24.8362 49.3636 18.8667 41.9998 18.8667C34.636 18.8667 28.6665 24.8362 28.6665 32.2C28.6665 39.5638 34.636 45.5334 41.9998 45.5334Z"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41.9998 18.8667C38.5761 22.4616 36.6665 27.2357 36.6665 32.2C36.6665 37.1644 38.5761 41.9385 41.9998 45.5334C45.4235 41.9385 47.3332 37.1644 47.3332 32.2C47.3332 27.2357 45.4235 22.4616 41.9998 18.8667Z"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.6665 32.2H55.3332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1924_298"
                    x="0"
                    y="0.199951"
                    width="84"
                    height="84"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1924_298"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1924_298"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_1924_298"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1924_298"
                      result="effect2_dropShadow_1924_298"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1924_298"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1924_298"
                    x1="12"
                    y1="2.19995"
                    x2="72"
                    y2="62.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3B82F6" />
                    <stop offset="1" stop-color="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">Acceso múltiple</h3>
              <p className="text-[#a7aebf] text-base">
                Accede a tus dashboards desde cualquier dispositivo, en
                cualquier momento. Sincronización en tiempo real entre web,
                móvil y tablet.
              </p>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-4">
            <div className="bg-transparent">
              {/* Icono de reducción de costos */}
              <svg
                width="84"
                height="85"
                viewBox="0 0 84 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_1924_309)">
                  <rect
                    x="12"
                    y="2.19995"
                    width="60"
                    height="60"
                    rx="12"
                    fill="url(#paint0_linear_1924_309)"
                  />
                  <path
                    d="M55.3332 38.8665L43.9998 27.5332L37.3332 34.1999L28.6665 25.5332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.3335 38.8667H55.3335V30.8667"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1924_309"
                    x="0"
                    y="0.199951"
                    width="84"
                    height="84"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1924_309"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1924_309"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_1924_309"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1924_309"
                      result="effect2_dropShadow_1924_309"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1924_309"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1924_309"
                    x1="12"
                    y1="2.19995"
                    x2="72"
                    y2="62.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EF4444" />
                    <stop offset="1" stop-color="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">Reducción de costos</h3>
              <p className="text-[#a7aebf] text-base">
                Elimina la necesidad de múltiples licencias y reduce los costos
                operativos hasta un 60% consolidando todas tus herramientas de
                BI.
              </p>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-transparent p-6 flex flex-row items-start gap-2">
            <div className="bg-transparent">
              {/* Icono de personalización */}
              <svg
                width="85"
                height="85"
                viewBox="0 0 85 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_1877_554)">
                  <path
                    d="M12.6602 14.47C12.6602 7.84255 18.0327 2.46997 24.6602 2.46997H60.6602C67.2876 2.46997 72.6602 7.84255 72.6602 14.47V50.47C72.6602 57.0974 67.2876 62.47 60.6602 62.47H24.6602C18.0327 62.47 12.6602 57.0974 12.6602 50.47V14.47Z"
                    fill="url(#paint0_linear_1877_554)"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M49.6133 28.5325C49.8477 28.7668 50.0039 29.0793 50.0039 29.4309C50.0039 29.7825 49.8477 30.095 49.6133 30.2903L41.4102 38.5325V27.9465L44.3398 25.0168C44.5742 24.7825 44.8867 24.6653 45.1992 24.6653C45.5508 24.6653 45.8633 24.7825 46.0977 25.0168L49.6133 28.5325ZM51.4102 34.47C52.0742 34.47 52.6602 35.0559 52.6602 35.72V40.72C52.6602 41.4231 52.0742 41.97 51.4102 41.97H39.6914C39.7695 41.9309 39.8477 41.8528 39.9258 41.7747L47.2305 34.47H51.4102ZM40.1602 23.22V38.22C40.1602 40.2903 38.4414 41.97 36.4102 41.97C34.3398 41.97 32.6602 40.2903 32.6602 38.22V23.22C32.6602 22.5559 33.207 21.97 33.9102 21.97H38.9102C39.5742 21.97 40.1602 22.5559 40.1602 23.22ZM36.4102 39.1575C36.918 39.1575 37.3477 38.7668 37.3477 38.22C37.3477 37.7122 36.918 37.2825 36.4102 37.2825C35.8633 37.2825 35.4727 37.7122 35.4727 38.22C35.4727 38.7668 35.8633 39.1575 36.4102 39.1575ZM37.6602 31.97V29.47H35.1602V31.97H37.6602ZM37.6602 26.97V24.47H35.1602V26.97H37.6602Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1877_554"
                    x="0.660156"
                    y="0.469971"
                    width="84"
                    height="84"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1877_554"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1877_554"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_1877_554"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1877_554"
                      result="effect2_dropShadow_1877_554"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1877_554"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1877_554"
                    x1="12.6602"
                    y1="2.46997"
                    x2="72.6602"
                    y2="62.47"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A855F7" />
                    <stop offset="1" stop-color="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">Personaliza</h3>
              <p className="text-[#a7aebf] text-base">
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
