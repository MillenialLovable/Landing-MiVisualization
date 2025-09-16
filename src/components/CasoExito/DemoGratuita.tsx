import React from "react";

const DemoGratuita: React.FC = () => {
  return (
    <div 
      className="py-16 px-4"
      style={{
        background: 'radial-gradient(50.71% 94.55% at 0% 5.6%, #5F7EFF 0%, rgba(95, 126, 255, 0.00) 100%), linear-gradient(180deg, #212529 36.64%, #5F7EFF 155.52%)'
      }}
    >
      <div className="max-w-6xl mx-auto ">
      <h3 className="text-2xl font-bold text-[#5F7EFF] mb-4 text-center">
        ¿Listo para Replicar Este Éxito?
      </h3>
      <p className="text-white text-center mb-6">
        SMI logró optimizar costos y centralizar su BI. Tu empresa puede ser la siguiente.
      </p>
      <div className="flex justify-center">
        <button 
          className="text-white px-6 py-3 flex gap-2 items-center"
          style={{
            borderRadius: '12px',
            background: '#2EE0A2',
            boxShadow: '0 0 20px 0 #2EE0A2'
          }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M4.21997 2.58984L13.5533 8.58984L4.21997 14.5898V2.58984Z"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Solicita una demo gratuita
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M4.10327 8.58984H13.4366"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.77002 3.92334L13.4367 8.59001L8.77002 13.2567"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default DemoGratuita;
