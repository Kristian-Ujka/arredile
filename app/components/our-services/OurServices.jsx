import Image from "next/image";
import { ServiceAccordion } from "../service-accordion/ServiceAccordion";
import style from "./OurServices.module.css";

export const OurServices = () => {
  return (
    <div className={style.serviceSection}>
      <div className={style.serviceInfo}>
        <div className={style.serviceTitle}>I Nostri Servizi</div>
        <Image
          src="/assets/service-image.png"
          alt="Immagine nostri servizi"
          width={566}
          height={719}
        />
      </div>
      <ServiceAccordion />
    </div>
  );
};
