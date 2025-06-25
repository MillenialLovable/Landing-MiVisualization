import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ChartsSectionProps {
  primaryColor: string;
}

export const ChartsSection: React.FC<ChartsSectionProps> = ({ primaryColor }) => {
  const dailyData = [
    { day: 'Día 1', sessions: 45 },
    { day: 'Día 2', sessions: 52 },
    { day: 'Día 3', sessions: 38 },
    { day: 'Día 4', sessions: 65 },
    { day: 'Día 5', sessions: 42 },
    { day: 'Día 6', sessions: 58 },
    { day: 'Día 7', sessions: 49 }
  ];

  const deviceData = [
    { name: 'Mobile', value: 60, color: primaryColor },
    { name: 'Ordenador', value: 40, color: hexToRgba(primaryColor, 0.5) }
  ];

  const workAreas = [
    { area: 'Infraestructura', value: 120 },
    { area: 'IT', value: 95 },
    { area: 'Marketing', value: 80 },
    { area: 'Marketing', value: 65 },
    { area: 'Marketing', value: 50 },
    { area: 'Marketing', value: 35 }
  ];

  // Convierte un color hex a rgba con opacidad
  function hexToRgba(hex: string, alpha: number) {
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Daily Sessions Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Historial de sesiones por día</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" />
              <Bar dataKey="sessions" fill={primaryColor} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Device Sessions Pie Chart */}
      <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sesiones por dispositivo</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          {deviceData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }} // Quitado fillOpacity
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work Areas Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sesiones por área de trabajo</h3>
        <div className="space-y-3">
          {workAreas.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 w-20">{item.area}</span>
              <div className="flex-1 mx-3">
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(item.value / 120) * 100}%`,
                      backgroundColor: primaryColor
                    }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900 w-8 text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
