import type React from "react";
import type { Challenge } from "./components/ChallengeCard";
import ChanllengeCard from "./components/ChallengeCard";
import fragments from "../../assets/CasoExito/fragments.png"
import highCost from "../../assets/CasoExito/high-costs.png"
import complexManagement from "../../assets/CasoExito/complex-management.png"
import limit from "../../assets/CasoExito/limit.svg"


const challenges: Challenge[] = [
    {
        icon: fragments,
        title: "Acceso Fragmentado",
        description: "150 usuarios requerían acceso unificado a múltiples reportes dispersos en diferentes plataformas."
    },
    {
        icon: highCost,
        title: "Costos Elevados",
        description: "Licencias individuales de Power Bl resultaban costosas para la escala de la organización."
    },
    {
        icon: complexManagement,
        title: "Gestión Compleja",
        description: "No había sistema centralizado de gestión de usuarios y permisos granulares."
    },
    {
        icon: limit,
        title: "Colaboración Limitada",
        description: "Dificultades para compartir informes y colaborar efectivamente entre equipos."
    }
]

const ChallengeCS: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center px-2 my-4">
                <h1 className="text-center font-bold text-[#243A52]">El Desafío de SMI</h1>
                <h3 className="text-center font-semibold text-[#2EE0A2]">San Miguel Industrial necesitaba una plataforma centralizada</h3>
                <h3 className="text-center font-normal text-[#243A52]">Como una de las empresas industriales líderes,
                    SMI enfrentaba el reto de optimizar el acceso a sus reportes
                    Power BI mientras buscaba reducir costos.
                </h3>
            </div>
            <section className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-8 my-20 sm:px-6">
                {challenges.map(c => (
                    <ChanllengeCard challenge={c} />
                ))
                }
            </section>
        </div>
    )
}

export default ChallengeCS;