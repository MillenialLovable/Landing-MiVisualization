import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";

interface MetricsCardsProps {
  primaryColor: string;
}

export const MetricsCards: React.FC<MetricsCardsProps> = ({ primaryColor }) => {
  const metrics = [
    {
      title: "Total Usuarios",
      value: "83",
      trend: "+5 desde el mes anterior",
      trendUp: true,
      icon: Users,
    },
    {
      title: "Usuarios Activos",
      value: "71",
      trend: "+2 desde el mes anterior",
      trendUp: true,
      icon: UserCheck,
    },
    {
      title: "Usuarios Inactivos",
      value: "12",
      trend: "-2 desde el mes anterior",
      trendUp: false,
      icon: UserX,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-lato">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className="rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-full"
                style={{ backgroundColor: primaryColor, color: "#fff" }}
              >
                <Icon size={24} />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-light font-lato mb-2">
              {metric.title}
            </h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">
                {metric.value}
              </span>
            </div>
            <div className="flex items-center mt-3 text-sm">
              {metric.trendUp ? (
                <TrendingUp size={16} className="text-green-500 mr-1" />
              ) : (
                <TrendingDown size={16} className="text-red-500 mr-1" />
              )}
              <span
                className={metric.trendUp ? "text-green-600" : "text-red-600"}
              >
                {metric.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
