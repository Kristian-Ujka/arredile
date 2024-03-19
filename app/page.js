import Image from "next/image";
import { ServiceAccordion } from "./components/service-accordion/ServiceAccordion";
import { ContactForm } from "./components/contact-form/ContactForm";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="landing-container">
      <Header />
      <Hero />
      <div className="info-section">
        <div className="info-details">
          <div className="info-title">Chi siamo</div>
          <div className="info-description">
            <div className="mb-3">
              Arredilè è un’azienda di concezione moderna ed attuale, con
              esperienza decennale al servizio dei nostri
            </div>
            <div className="mb-3">
              clienti. Nel tempo è divenuta punto di riferimento per la
              progettazione, fornitura, realizzazione e
            </div>
            <div className="mb-3">consolidamento delle realtà ristorative.</div>
            <div className="mb-3">
              Realizziamo attività commerciali, anche con formula “chiavi in
              mano”, con particolare focus nell’ambito
            </div>
            <div className="mb-3"> della ristorazione e del ricevimento.</div>
            <div>
              Ci pensiamo noi a fornirti tutti gli strumenti per realizzare
              un’attività di successo.
            </div>
          </div>
        </div>
        <img
          className="info-image"
          src="/assets/description-image.png"
          alt="Description image"
        />
      </div>
      <div className="service-section">
        <div className="service-info">
          <div className="service-title">I Nostri Servizi</div>
          <img src="/assets/service-image.png" alt="Immagine nostri servizi" />
        </div>
        <ServiceAccordion />
      </div>
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
