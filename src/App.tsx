import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import PowerBi from './components/PowerBI';
import ConfigurablePlatform from "./components/ConfigurablePlatform";
import BiGenerativo from "./components/BiGenerativo";
import Seguridad from "./components/seguridad";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosServicio from "./pages/TerminosServicio";
import PoliticaCookies from "./pages/PoliticaCookies";
import CasoExito from "./pages/CasoExito";
import { useSEO } from "./utils/seo";

function Home() {
  // SEO para la página principal
  useSEO({
    title: "Mi Visualization - Plataforma de Business Intelligence y Análisis de Datos",
    description: "Plataforma líder de Business Intelligence con BI Generativo, dashboards configurables y máxima seguridad. Transforma tus datos en insights accionables.",
    keywords: "business intelligence, BI, análisis de datos, dashboards, Power BI, visualización de datos, analytics, Mi Visualization",
    canonical: "https://mivisualization.com"
  });

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
        <Route path="/caso-exito" element={<CasoExito />} />
      </Routes>
    </Router>
  );
}

export default App;
