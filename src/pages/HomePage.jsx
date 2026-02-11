

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WhatsNew from "../components/WhatsNew";
import FAQ from "../components/FAQ";
import ApplicationProcess from "../components/ApplicationProcess";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./HomePage.css";

function HomePage(){
    
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

export default HomePage;