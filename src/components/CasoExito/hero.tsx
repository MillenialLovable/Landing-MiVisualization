import React from "react";
import portada from "../../assets/CasoExito/Portada.png";

const herocs: React.FC = () => {
  return (
      <section
      className="text-white py-12 lg:py-[70px] px-6 lg:px-20 font-lato"
      style={{
        backgroundImage: `url(${portada})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container m-auto">
      <h1 className="text-4xl lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-bold mb-[30px] text-center mt-5">
        Mi Visualization
      </h1>
      <h2 className="text-2xl lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-bold mb-[30px] text-center">
        Centraliza tu Business Intelligence y reduce costos operativos Así lo hizo San Miguel Industrial (SMI) con Mi Visualization y Power BI Embedded
      </h2>
      <div className="justify-center flex">
        <div 
          className="p-6 max-w-4xl w-full"
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.15)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-gray-800 text-lg font-semibold mb-3">
                Centralización
              </h3>
              <p className="text-gray-600 text-sm">
                Unifica todos tus reportes y dashboards en una sola plataforma
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-gray-800 text-lg font-semibold mb-3">
                Reducción de Costos
              </h3>
              <p className="text-gray-600 text-sm">
                Optimiza recursos y reduce gastos operativos significativamente
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-gray-800 text-lg font-semibold mb-3">
                Power BI Embedded
              </h3>
              <p className="text-gray-600 text-sm">
                Integración perfecta con Power BI para análisis avanzados
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default herocs;
