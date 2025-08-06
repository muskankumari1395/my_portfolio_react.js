import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./components/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import NavBar from "./components/NavBar";
import SmoothCursor from "./components/SmoothCursor";
import CustomScrollBar from "./components/CustomScrollBar";

const App = () => (
  <>
    <SmoothCursor />
    <CustomScrollBar/>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
