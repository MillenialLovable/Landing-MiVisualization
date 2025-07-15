import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import dashboardImg from "../assets/dashboard.png";
import {
  UserIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import icon1 from "../assets/icons/GobiernoTotal.svg";
import icon2 from "../assets/icons/BIGenerativo.svg";
import icon3 from "../assets/icons/Escabilidad.svg";
import icon4 from "../assets/icons/AccesibilidadTotal.svg";
import icon5 from "../assets/icons/SeguridadAvanzada.svg";
import icon6 from "../assets/icons/Auditoria.svg";
import icon7 from "../assets/icons/KPI.svg";
import icon8 from "../assets/icons/ParaTodos.svg";

const Hero: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Creamos el mensaje personalizado
    const formData = new FormData(form.current);
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const correo = formData.get("correo");
    const empresa = formData.get("empresa");
    const cargo = formData.get("cargo");
    const celular = formData.get("celular"); // <-- Agrega esta línea

    const message = `
Hay una nueva consulta de interés:
- Nombre Completo: ${nombre} ${apellido}
- Correo Electrónico: ${correo}
- Celular: ${celular}
- Empresa: ${empresa}
- Cargo: ${cargo}
    `;

    // Enviamos usando EmailJS
    emailjs
      .send(
        "service_502naya",
        "template_btlp6lr",
        {
          name: `${nombre} ${apellido}`,
          email: correo,
          message: message,
          title: "Contacto desde Landing", // <-- agrega esto si tu template lo pide
        },
        "warw7n_ywPCdoR-Km" // <-- Reemplaza con tu User ID (o Public Key)
      )
      .then(
        () => {
          setSent(true);
          if (form.current) form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje. Intenta de nuevo.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section
      id="home"
      className="text-white py-12 lg:py-[70px] px-6 lg:px-20 font-lato"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201440%201900%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_1877_310%29%22%3E%3Cg%20clip-path%3D%22url%28%23clip1_1877_310%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M-1019.5%20-377.88C-930.282%20-929.931%20-327.987%20-1164.34%20135.456%20-1477.28C528.386%20-1742.62%20914.393%20-2075.87%201382.36%20-1999.74C1879.79%20-1918.81%202233.65%20-1522.59%202497.25%20-1093.06C2810.9%20-581.981%203229.92%2025.006%202950.59%20555.621C2674.48%201080.13%201926.08%20962.469%201347.46%201091.07C776.286%201218.02%20186.967%201588.89%20-310.188%201280.36C-847.608%20946.829%20-1120.4%20246.529%20-1019.5%20-377.88Z%22%20fill%3D%22url%28%23paint0_linear_1877_310%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_1877_310%22%20x1%3D%223167.16%22%20y1%3D%221212.62%22%20x2%3D%22258.807%22%20y2%3D%22-583.358%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220.168198%22%20stop-color%3D%22%232EE0A2%22%2F%3E%3Cstop%20offset%3D%220.576286%22%20stop-color%3D%22%235F7EFF%22%2F%3E%3Cstop%20offset%3D%220.984375%22%20stop-color%3D%22%23000E29%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath%20id%3D%22clip0_1877_310%22%3E%3Crect%20width%3D%221440%22%20height%3D%221400%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3CclipPath%20id%3D%22clip1_1877_310%22%3E%3Crect%20width%3D%222785.49%22%20height%3D%221400%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 sm:mt-12 md:mt-12 lg:mt-18 xl:mt-18 2xl:mt-20">
        {/* Fila 1 - Columna 1: Texto */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl text-left grid grid-rows-[auto_1fr] gap-6">
            {/* Texto arriba */}
            <div>
              <h1 className="text-4xl lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-bold mb-[15px]">
                <span className="bg-gradient-to-r from-[#2EE0A2] to-[#26B7FF]  bg-clip-text text-transparent">
                  Reduce costos de Power BI
                </span>{" "}
                hasta un <span className="text-[#2EE0A2]">30%</span> con Mi
                Visualization hoy
              </h1>
              <p className="mb-[32px] text-white font-lato font-semibold xl:text-[18px] 2xl:text-[24px] leading-1">
                Ahorra y escala: reportes centralizados, seguros y{" "}
                <span className="text-[#2EE0A2]">
                  hasta 20 usuarios por $2,540 al año
                </span>
                .
              </p>
            </div>
            {/* Iconos abajo */}
            <div className="grid grid-rows-2 gap-6">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <img src={icon1} alt="Icon 1" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Gobierno Total
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon2} alt="Icon 2" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    BI generativa con IA
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon3} alt="Icon 3" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Escabilidad
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon4} alt="Icon 4" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Accesibilidad total
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <img src={icon5} alt="Icon 5" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Seguridad avanzada
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon6} alt="Icon 6" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Auditoria
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon7} alt="Icon 7" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    KPI con analítica avanzada
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={icon8} alt="Icon 8" className="h-12 w-12" />
                  <span className="text-white font-lato text-md leading-1 mt-2 text-center">
                    Para Todos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fila 1 - Columna 2: Formulario */}
        <div className="lg:col-span-1 flex justify-center items-center">
          <div className="bg-gray-100 text-gray-900 p-6 rounded-3xl shadow-lg w-full max-w-lg min-w-[280px] overflow-auto mx-h-md">
            <h3 className="xl:text-[20px] 2xl:text-[25px] font-bold font-lato text-center mb-4">
              ¿Interesado? <br />
              <span className="font-bold font-lato">
                Comienza o pide una demostración
              </span>
            </h3>
            {sent ? (
              <div className="text-green-600 text-center font-bold">
                ¡Mensaje enviado! Nos pondremos en contacto pronto.
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid grid-cols-2 gap-4"
              >
                {/* Nombre y Apellido */}
                <div className="col-span-1 relative">
                  <UserIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full pl-9 p-2 border rounded"
                    required
                  />
                </div>

                <div className="col-span-1 relative">
                  <UserIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="w-full pl-9 p-2 border rounded"
                    required
                  />
                </div>

                {/* Celular */}
                <div className="col-span-1 relative">
                  <PhoneIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Celular"
                    className="w-full pl-9 p-2 border rounded"
                  />
                </div>

                {/* Correo */}
                <div className="col-span-1 relative">
                  <EnvelopeIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    className="w-full pl-9 p-2 border rounded"
                    required
                  />
                </div>

                {/* Empresa */}
                <div className="col-span-1 relative">
                  <BuildingOfficeIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la empresa"
                    className="w-full pl-9 p-2 border rounded"
                    required
                  />
                </div>

                {/* Cargo */}
                <div className="col-span-1 relative">
                  <BriefcaseIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    name="cargo"
                    placeholder="Cargo"
                    className="w-full pl-9 p-2 border rounded"
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="col-span-2 mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Fila 2 - Imagen (full width) */}
        <div className="col-span-full flex justify-center hidden lg:flex">
          <img
            src={dashboardImg}
            alt="Dashboard MiVisualization"
            className="rounded-xl shadow-none w-xl lg:w-auto xl:max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
