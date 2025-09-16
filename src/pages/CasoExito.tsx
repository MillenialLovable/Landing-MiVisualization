import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/CasoExito/hero";
import ChallengeCS from "../components/CasoExito/ChallengeCS";
import Solucion from "../components/CasoExito/Solucion";

const CasoExito: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChallengeCS />
      <Solucion />
    </>
  );
};

export default CasoExito;