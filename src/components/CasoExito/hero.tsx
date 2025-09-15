import React from "react";

const herocs: React.FC = () => {
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default herocs;
