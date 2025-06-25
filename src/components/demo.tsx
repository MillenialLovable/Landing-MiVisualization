import React, { useState } from "react";
import { DashboardHeader } from './DashboardHeader';
import { MetricsCards } from './MetricsCards';
import { ChartsSection } from './ChartsSection';
import { SettingsPanel } from './SettingsPanel';

const colorSchemes = [
  { 
    id: 'corporate', 
    name: 'Azul Corporativo', 
    color: 'bg-blue-500',
    cssVar: '--primary-color',
    value: '#3B82F6'
  },
  { 
    id: 'business', 
    name: 'Verde Empresarial', 
    color: 'bg-green-500',
    cssVar: '--primary-color',
    value: '#10B981'
  },
  { 
    id: 'innovative', 
    name: 'Púrpura Innovador', 
    color: 'bg-purple-500',
    cssVar: '--primary-color',
    value: '#8B5CF6'
  },
  { 
    id: 'energetic', 
    name: 'Naranja Energético', 
    color: 'bg-orange-500',
    cssVar: '--primary-color',
    value: '#F97316'
  }
];

const Demo = () => {
  const [visualStyle, setVisualStyle] = useState('classic');
  const [selectedColor, setSelectedColor] = useState(colorSchemes[0].id);

  // Encuentra el color actual
  const currentColor = colorSchemes.find(s => s.id === selectedColor)?.value || '#3B82F6';

  // Cambia la variable CSS global
  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', currentColor);
  }, [currentColor]);

  // SVGs con color dinámico
  const getDecorativeSVG = () => {
    switch (visualStyle) {
      case 'modern':
        return (
          <svg width="788" height="48" viewBox="0 0 788 48" fill="none" xmlns="http://www.w3.org/2000/svg" className=" md:ml-[20px] lg:ml-[110px] xl:ml-[200px]">
            <path d="M0 48C11.4244 47.5089 30.0617 45.2172 42.249 39.8369C46.1247 17.2157 65.83 0.000286102 89.5566 0L697.925 0C724.434 0 745.925 21.4903 745.925 48L0 48Z" fill={currentColor} />
            <path d="M733.719 27.3193C735.73 34.2131 749.4 48 787.999 48H733.719V27.3193Z" fill={currentColor} />
          </svg>
        );
      case 'minimal':
        return (
          <svg viewBox="0 0 100 421" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[150px] ml-4">
            <circle cx="20" cy="20" r="20" fill={currentColor} />
            <circle cx="20" cy="80" r="20" fill={currentColor} fillOpacity="0.5" />
            <circle cx="20" cy="140" r="20" fill={currentColor} fillOpacity="0.5" />
            <circle cx="20" cy="200" r="20" fill={currentColor} fillOpacity="0.5" />
            <circle cx="20" cy="260" r="20" fill={currentColor} fillOpacity="0.5" />
            <circle cx="20" cy="320" r="20" fill={currentColor} fillOpacity="0.5" />
          </svg>
        );
      default: // 'classic'
        return (
          <svg viewBox="0 0 100 421" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-20">
            <path d="M0 0C0.500661 6.22249 2.87122 16.4498 8.47949 22.9482C30.9448 26.9526 48 46.5859 48 70.2021V350.521C47.9996 377.031 26.5094 398.521 0 398.521V0Z" fill={currentColor} />
            <path d="M20.6807 392C13.787 393.074 6.97166e-05 400.378 0 421V392H20.6807Z" fill={currentColor} />
          </svg>
        );
    }
  };

  return (
    <div className="hidden md:block max-w-7xl mx-auto p-6 space-y-6">
      {/* Dashboard Section */}
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Decorative SVG */}
        {visualStyle === "modern" ? (
          <div className="absolute md:left-0 md:-bottom-1 lg:left-0 lg:-bottom-1 xl:left-0 xl:bottom-0 w-full pointer-events-none z-0 flex">
            <div className="w-full flex justify-start">{getDecorativeSVG()}</div>
          </div>
        ) : (
          <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-0">
            {getDecorativeSVG()}
          </div>
        )}

        <div
          className={`relative z-10 pr-8 py-8 space-y-3 transition-all duration-300
            ${visualStyle === "modern" ? "pl-6 pb-16" : "pl-20"}
          `}
        >
          <DashboardHeader />
          <MetricsCards primaryColor={currentColor} />
          <ChartsSection primaryColor={currentColor} />
        </div>
      </div>

      {/* Settings Panel - ahora recibe el setter y el color */}
      <SettingsPanel
        visualStyle={visualStyle}
        setVisualStyle={setVisualStyle}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};


export default Demo;
