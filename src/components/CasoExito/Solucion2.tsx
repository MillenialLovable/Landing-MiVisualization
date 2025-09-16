import React from "react";

const Solucion2: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#F4F7FB]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#243A52] mb-4">
            La Solución:
          </h2>
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-[#5F7EFF] via-[#26B7FF] to-[#2EE0A2] bg-clip-text text-transparent">
            Mi Visualization + Power BI Embedded
          </h3>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Usuarios Totales */}
          <div className="bg-white border-2 border-[#B2C1FF] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-[#212529] mb-2">
              Usuarios Totales
            </h4>
            <div className="text-4xl font-bold text-[#212529] mb-2">
              125
            </div>
            <p className="text-sm text-[#212529]">
              Registrados en una plataforma
            </p>
          </div>

          {/* Usuarios Activos */}
          <div className="bg-white border-2 border-[#B2FFE4] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-[#212529] mb-2">
              Usuarios Activos
            </h4>
            <div className="text-4xl font-bold text-[#212529] mb-2">
              52
            </div>
            <p className="text-sm text-[#212529]">
              Engagement Constante
            </p>
          </div>

          {/* Sesiones Totales */}
          <div className="bg-white border-2 border-[#98DDFF] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-[#212529] mb-2">
              Sesiones Totales
            </h4>
            <div className="text-4xl font-bold text-[#212529] mb-2">
              438
            </div>
            <p className="text-sm text-[#212529]">
              Alto nivel de utilización
            </p>
          </div>

          {/* Minutos Promedio */}
          <div className="bg-white border-2 border-[#B2C1FF] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-[#212529] mb-2">
              Minutos Promedio
            </h4>
            <div className="text-4xl font-bold text-[#212529] mb-2">
              25
            </div>
            <p className="text-sm text-[#212529]">
              Duración por sesión
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solucion2;
