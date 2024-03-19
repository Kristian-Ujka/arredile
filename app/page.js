import Image from "next/image";
import { ContactForm } from "./components/contact-form/ContactForm";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { InfoSection } from "./components/info-section/InfoSection";
import { OurServices } from "./components/our-services/OurServices";

export default function Home() {
  return (
    <div className="landing-container">
      <Header />
      <Hero />
      <InfoSection />
      <OurServices />
      <div className="contact-us">
        <ContactForm />
        <div className="contact-info">
          <div className="contact-info-title">Info Contatti</div>
          <div className="contact-info-row">
            <img src="/assets/Ellipse.png" alt="Icona Telefono" />
            <div className="contact-text-info">
              <span className="contact-text-label">Telefono</span>
              <span className="contact-text-value">+39 3513992495</span>
            </div>
          </div>

          <div className="contact-info-row">
            <img src="/assets/Ellipse.png" alt="Icona Telefono" />
            <div className="contact-text-info">
              <span className="contact-text-label">E-mail</span>
              <span className="contact-text-value">
                hello@reallygreatsite.com
              </span>
            </div>
          </div>

          <div className="contact-info-row">
            <img src="/assets/Ellipse.png" alt="Icona Telefono" />
            <div className="contact-text-info">
              <span className="contact-text-label">Indirizzo</span>
              <span className="contact-text-value">
                Via Cornelio Magni, 71 00147 Roma RM
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
