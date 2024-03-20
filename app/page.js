import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { InfoSection } from "./components/info-section/InfoSection";
import { OurServices } from "./components/our-services/OurServices";
import { ContactUs } from "./components/contact-us/ContactUs";

export default function Home() {
  return (
    <div className="landing-container">
      <Header />
      <Hero />
      <InfoSection />
      <OurServices />
      <ContactUs />
      <Footer />
    </div>
  );
}
