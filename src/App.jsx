/*import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import GrantCard from "./components/GrantCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="center-wrapper"><GrantCard /></div>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;*/


import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WhatsNew from "./components/WhatsNew";
import FAQ from "./components/FAQ";
import ApplicationProcess from "./components/ApplicationProcess";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App(){
    
  return (
    
    <div className="homepage">
    <Header />
    <Hero />
    <Projects />
    <WhatsNew/>
    <FAQ />
    <ApplicationProcess />
    <CTA />
    <Footer />
  </div>
  );
}

export default App;
