import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/CasoExito/hero";
import ChallengeCS from "../components/CasoExito/ChallengeCS";
import Solucion from "../components/CasoExito/Solucion";
import Solucion2 from "../components/CasoExito/Solucion2";
import DemoGratuita from "../components/CasoExito/DemoGratuita";
import KPI from "../components/CasoExito/KPI";

const CasoExito: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChallengeCS />
      <Solucion />
      <KPI />
      <Solucion2 />
      <DemoGratuita />
    </>
  );
};

export default CasoExito;