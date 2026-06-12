import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import WhyUs from "./components/Trust";
import BusinessStrategy from "./components/BusinesStrategy";
import OurPartners from "./components/Partners";
import LatestBlog from "./components/LatestBlog";
import HappyClients from "./components/HappyClient";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-28">
        <HeroSection />
      </section>

      <section id="why-us" className="scroll-mt-28">
        <WhyUs />
      </section>

      <section id="strategy" className="scroll-mt-28">
        <BusinessStrategy />
      </section>

      <section id="partners" className="scroll-mt-28">
        <OurPartners />
      </section>

      <section id="blog" className="scroll-mt-28">
        <LatestBlog />
      </section>

      <section id="clients" className="scroll-mt-28">
        <HappyClients />
      </section>

      <section id="faq" className="scroll-mt-28">
        <FAQSection />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Footer />
      </section>
    </>
  );
}

export default App;