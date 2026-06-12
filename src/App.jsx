import "./App.css"
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import WhyTrustUs from "./components/Trust";
import BusinessStrategy from "./components/BusinesStrategy";
import OurPartners from "./components/Partners";
import LatestBlog from "./components/LatestBlog";
import HappyClients from "./components/HappyClient";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="max-w-[1440px] bg-white mx-auto">
        <Navbar />
        <HeroSection />
        <WhyTrustUs />
        <BusinessStrategy />
        <OurPartners />
        <LatestBlog />
        <HappyClients />
        <FAQSection />
        <Footer />
      </div>
    </>
  )
};

export default App;