import { Navbar, Footer } from './components/layout';
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  GallerySection,
  ScheduleSection,
  ContactSection,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
