import React from "react";
import dashboardImg from "../assets/dashboard.png"; // Asegúrate de que exista esa imagen
import {
  UserIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="text-white py-12 lg:py-[70px] px-6 lg:px-20"
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
          <div className="w-full max-w-3xl text-left">
            {" "}
            {/* Contenedor interno para alinear texto a izquierda */}
            <p className="text-md font-bold leading-tight uppercase mb-2">
              Información Accesible y Gestionada para Todos
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Potencia Tu Estrategia Con{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#2EE0A2] via-[#26B7FF] to-[#2EE0A2] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x-slow before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shine before:bg-[length:300%_100%] before:bg-clip-text before:text-transparent">
                Mi Visualización
              </span>
              <span className="text-lg font-bold text-gray-200 block mt-2">
                todos tus dashboards en un solo lugar
              </span>
            </h1>
            <ul className="space-y-3 text-lg text-white mb-8">
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-2">✔</span>
                <span>
                  Compatible con Power BI, Tableau, QuickSight, Excel, Looker y
                  PDF.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-2">✔</span>
                <span>
                  Administra perfiles, permisos y grupos según roles o áreas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-2">✔</span>
                <span>
                  Control total de accesos con tokens, sesiones y auditoría por
                  usuario.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-2">✔</span>
                <span>Genera insights con IA usando lenguaje natural.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila 1 - Columna 2: Formulario */}
        <div className="lg:col-span-1 flex justify-center items-center">
          <div className="bg-white text-gray-900 p-6 rounded-3xl shadow-lg w-full max-w-md mx-h-md">
            <h3 className="text-lg font-semibold text-center mb-4">
              ¿Interesado? <br />
              <span className="font-normal">
                Comienza o pide una demostración
              </span>
            </h3>
            <form className="grid grid-cols-2 gap-4">
              {/* Nombre y Apellido */}
              <div className="col-span-1 relative">
                <UserIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full pl-9 p-2 border rounded"
                />
              </div>

              <div className="col-span-1 relative">
                <UserIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="w-full pl-9 p-2 border rounded"
                />
              </div>

              {/* Correo y Empresa */}
              <div className="col-span-1 relative">
                <PhoneIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Celular"
                  className="w-full pl-9 p-2 border rounded"
                  pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
                  title="Ingrese un número de teléfono válido (XXX) XXX-XXXX"
                />
              </div>
              <div className="col-span-1 relative">
                <EnvelopeIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Correo"
                  className="w-full pl-9 p-2 border rounded"
                />
              </div>

              <div className="col-span-1 relative">
                <BuildingOfficeIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nombre de la empresa"
                  className="w-full pl-9 p-2 border rounded"
                />
              </div>

              {/* Cargo y Usuarios */}
              <div className="col-span-1 relative">
                <BriefcaseIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="text"
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
