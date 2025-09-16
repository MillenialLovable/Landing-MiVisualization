import React from 'react';
import totalGobernace from '../../assets/CasoExito/total-gobernace.svg';
import generativeBi from '../../assets/CasoExito/generative-bi.svg';
import scalability from '../../assets/CasoExito/scalability.svg';
import advanceKpi from '../../assets/CasoExito/advanced-kpi.svg';
import totalAccesibility from '../../assets/CasoExito/total-accesibility.svg';
import advancedSecurity from '../../assets/CasoExito/advanced-security.svg';
import audit from '../../assets/CasoExito/audit.svg';
import everyone from '../../assets/CasoExito/everyone.svg';

interface Kpi {
  icon: string;
  title: string;
}

const KPI: React.FC = () => {
  // Iconos SVG para las características
  const kpis: Kpi[] = [
    {
      icon: totalGobernace,
      title: 'Gobierno Total'
    },
    {
      icon: generativeBi,
      title: 'BI generativa con IA'
    },
    {
      icon: scalability,
      title: 'Escabilidad'
    },
    {
      icon: advanceKpi,
      title: 'KPI con analítica avanzada'
    },
    {
      icon: totalAccesibility,
      title: 'Accesibilidad total'
    },
    {
      icon: advancedSecurity,
      title: 'Seguridad avanzada'
    },
    {
      icon: audit,
      title: 'Auditoria'
    },
    {
      icon: everyone,
      title: 'Para todos'
    }
  ]

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

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Grid de características */}
        <div className="grid grid-cols-3 gap-6">
          {kpis.slice(0, 6).map(k => (
            <div key={k.title} className="flex flex-col items-center text-center">
              <img src={k.icon} alt="" />
              <p className="text-sm font-bold text-gray-700 mt-2">{k.title}</p>
            </div>
          ))}

          {/* Últimos 2 centrados */}
          <div className="col-span-3 flex justify-center gap-20">
            <div className="flex flex-col items-center text-center">
              <img src={kpis[6].icon} alt="" />
              <p className="text-sm font-bold text-gray-700 mt-2">{kpis[6].title}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={kpis[7].icon} alt="" />
              <p className="text-sm font-bold text-gray-700 mt-2">{kpis[7].title}</p>
            </div>
          </div>
        </div>


        {/* Tarjeta de precio */}
        <div className="bg-gradient-to-br shadow-[#5F7EFF40] to-cyan-100 border-2 border-cyan-200 rounded-2xl p-3 sm:p-6 w-72 sm:w-80 shadow-xl">
          <div className="text-center bg-white">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Power BI Pro (20 usuarios)</h4>

            {/* Barra de progreso */}
            <div className='w-50 sm:w-70 h-12 flex flex-row items-center justify-center gap-4'>
              <div className="w-44 h-8 flex bg-gray-200 p-2 items-center rounded-full">
                <div className="h-4 flex bg-[#2EE0A2] items-center justify-center rounded-full p-2" style={{ width: '70%' }}>
                  <p className='text-white text-center font-semibold'>70%</p>
                </div>
              </div>
              <h5 className='text-red-400 font-semibold'>3,360</h5>
            </div>

            <div className="text-4xl font-bold text-[#2EE0A2] mb-2">$2,520</div>
            <p className="text-sm text-[#2EE0A2] font-medium">Hasta 30% menos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KPI;
