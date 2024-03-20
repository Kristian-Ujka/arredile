import Image from "next/image";
import { ContactForm } from "../contact-form/ContactForm";
import style from "./ContactUs.module.css";

export const ContactUs = () => {
  return (
    <div className={style.contactUs}>
      <ContactForm />
      <div className={style.contactInfo}>
        <div className={style.contactInfoTitle}>Info Contatti</div>
        <div className={style.contactInfoRow}>
          <div className={style.iconContainer}>
            <Image
              src="/assets/icon-phone.png"
              alt="Icona Telefono"
              width={26.47}
              height={24.44}
            />
          </div>

          <div className={style.contactTextInfo}>
            <span className={style.contactTextLabel}>Telefono</span>
            <span className={style.contactTextValue}>+39 3513992495</span>
          </div>
        </div>

        <div className={style.contactInfoRow}>
          <div className={style.iconContainer}>
            <Image
              src="/assets/icon-mail.png"
              alt="Icona Email"
              width={26.47}
              height={24.44}
            />
          </div>
          <div className={style.contactTextInfo}>
            <span className={style.contactTextLabel}>E-mail</span>
            <span className={style.contactTextValue}>
              hello@reallygreatsite.com
            </span>
          </div>
        </div>

        <div className={style.contactInfoRow}>
          <div className={style.iconContainer}>
            <Image
              src="/assets/icon-map-pin.png"
              alt="Icona Indirizzo"
              width={26.47}
              height={24.44}
            />
          </div>
          <div className={style.contactTextInfo}>
            <span className={style.contactTextLabel}>Indirizzo</span>
            <span className={style.contactTextValue}>
              Via Cornelio Magni, 71 00147 Roma RM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
