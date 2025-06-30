import React, { useState } from "react";
import { Palette, Type, Layout } from "lucide-react";

interface SettingsPanelProps {
  visualStyle: string;
  setVisualStyle: (style: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  visualStyle,
  setVisualStyle,
  selectedColor,
  setSelectedColor,
}) => {
  const [selectedFont, setSelectedFont] = useState("inter");

  const colorSchemes = [
    {
      id: "corporate",
      name: "Azul Corporativo",
      color: "bg-blue-500",
      cssVar: "--primary-color",
      value: "#3B82F6",
    },
    {
      id: "business",
      name: "Verde Empresarial",
      color: "bg-green-500",
      cssVar: "--primary-color",
      value: "#10B981",
    },
    {
      id: "innovative",
      name: "Púrpura Innovador",
      color: "bg-purple-500",
      cssVar: "--primary-color",
      value: "#8B5CF6",
    },
    {
      id: "energetic",
      name: "Naranja Energético",
      color: "bg-orange-500",
      cssVar: "--primary-color",
      value: "#F97316",
    },
  ];

  const fontOptions = [
    { id: "inter", name: "Inter", fontFamily: "Inter, sans-serif" },
    {
      id: "grotesk",
      name: "Space Grotesk",
      fontFamily: "Space Grotesk, sans-serif",
    },
    { id: "system", name: "System UI", fontFamily: "system-ui, sans-serif" },
  ];

  const styleOptions = [
    { id: "classic", name: "Clásico" },
    { id: "modern", name: "Moderno" },
    { id: "minimal", name: "Minimalista" },
  ];

  const handleColorChange = (colorScheme: any) => {
    setSelectedColor(colorScheme.id);
    document.documentElement.style.setProperty(
      colorScheme.cssVar,
      colorScheme.value
    );
    console.log(`Color scheme changed to: ${colorScheme.name}`);
  };

  const handleFontChange = (font: any) => {
    setSelectedFont(font.id);
    document.documentElement.style.setProperty(
      "--font-family",
      font.fontFamily
    );
    document.body.style.fontFamily = font.fontFamily;
    console.log(`Font changed to: ${font.name}`);
  };

  const handleStyleChange = (style: any) => {
    setVisualStyle(style.id);
    console.log(`Style changed to: ${style.name}`);
    // You can implement style-specific logic here
  };

  return (
    <div className="bg-transparent rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Configuración de Apariencia
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Color Scheme */}
        <div className="space-y-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <Palette className="text-blue-600 mr-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Colores</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => handleColorChange(scheme)}
                className={`p-3 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                  selectedColor === scheme.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div
                    className={`w-4 h-4 rounded-full ${scheme.color} mr-2`}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">
                    {scheme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <Type className="text-blue-600 mr-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Tipografía</h3>
          </div>
          <div className="space-y-2">
            {fontOptions.map((font) => (
              <button
                key={font.id}
                onClick={() => handleFontChange(font)}
                className={`w-full p-3 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                  selectedFont === font.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{ fontFamily: font.fontFamily }}
              >
                <span className="text-sm font-medium text-gray-900">
                  {font.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Style */}
        <div className="space-y-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <Layout className="text-blue-600 mr-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">
              Estilo Visual
            </h3>
          </div>
          <div className="space-y-2">
            {styleOptions.map((style) => (
              <button
                key={style.id}
                onClick={() => handleStyleChange(style)}
                className={`w-full p-3 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                  visualStyle === style.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-sm font-medium text-gray-900 text-center">
                  {style.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
