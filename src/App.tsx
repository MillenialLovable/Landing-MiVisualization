import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import PowerBi from './components/PowerBI';
import ConfigurablePlatform from "./components/ConfigurablePlatform";
import Demo from "./components/demo";
import BiGenerativo from "./components/BiGenerativo";
import Seguridad from "./components/seguridad";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosServicio from "./pages/TerminosServicio";
import PoliticaCookies from "./pages/PoliticaCookies";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <PowerBi />
      <ConfigurablePlatform />
      <BiGenerativo />
      <Seguridad />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos" element={<TerminosServicio />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>
    </Router>
  );
}

export default App;
