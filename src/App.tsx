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

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <PowerBi />
      <ConfigurablePlatform />
      <Demo />
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
      </Routes>
    </Router>
  );
}

export default App;
