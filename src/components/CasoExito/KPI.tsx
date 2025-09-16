import React from 'react';

const KPI: React.FC = () => {
  // Iconos SVG para las características
  const GobiernoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <path d="M12 16H28V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V16Z" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M16 12H24V16H16V12Z" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M14 20H18M14 23H22" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const BIGenerativaIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <path d="M12 18L20 12L28 18V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V18Z" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M16 22V24M20 20V24M24 18V24" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const EscalabilidadIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <path d="M12 28H28M12 24H20M12 20H24M12 16H18" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="26" cy="16" r="2" fill="#4A90E2"/>
    </svg>
  );

  const KPIIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <path d="M12 26L16 22L20 24L28 16" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16H28V20" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const AccesibilidadIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <circle cx="20" cy="15" r="3" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M14 22H26M20 22V28M16 28H24" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const SeguridadIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <path d="M20 12L26 15V21C26 24 23 27 20 28C17 27 14 24 14 21V15L20 12Z" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M17 20L19 22L23 18" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const AuditoriaIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <rect x="14" y="16" width="12" height="10" rx="1" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M18 14V16M22 14V16M16 20H24M16 23H20" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const ParaTodosIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E8F4FD"/>
      <circle cx="16" cy="17" r="3" stroke="#4A90E2" strokeWidth="2"/>
      <circle cx="24" cy="17" r="3" stroke="#4A90E2" strokeWidth="2"/>
      <path d="M12 26C12 23 14 21 16 21C18 21 20 23 20 26M20 26C20 23 22 21 24 21C26 21 28 23 28 26" stroke="#4A90E2" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Con Mi Visualización <span className="text-cyan-400">obtén por $2,520 hasta</span>
        </h2>
        <h3 className="text-3xl font-bold text-blue-500">
          20 usuarios <span className="text-gray-800">concurrentes al año.</span>
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Grid de características */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Primera fila */}
          <div className="flex flex-col items-center text-center">
            <GobiernoIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Gobierno total</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <BIGenerativaIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">BI generativa con IA</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <EscalabilidadIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Escalabilidad</p>
          </div>

          {/* Segunda fila */}
          <div className="flex flex-col items-center text-center">
            <KPIIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">KPI con analítica avanzada</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <AccesibilidadIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Accesibilidad total</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <SeguridadIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Seguridad avanzada</p>
          </div>

          {/* Tercera fila */}
          <div className="flex flex-col items-center text-center">
            <AuditoriaIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Auditoría</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <ParaTodosIcon />
            <p className="text-sm font-medium text-gray-700 mt-2">Para Todos</p>
          </div>
        </div>

        {/* Tarjeta de precio */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 rounded-2xl p-6 min-w-[280px] shadow-lg">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Power BI Pro (20 usuarios)</h4>
            
            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-2 rounded-full" style={{width: '70%'}}></div>
            </div>
            
            <div className="text-right mb-2">
              <span className="text-sm text-gray-600">3,360</span>
            </div>
            
            <div className="text-4xl font-bold text-cyan-500 mb-2">$2,520</div>
            <p className="text-sm text-cyan-600 font-medium">Hasta 30% menos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KPI;
