import Image from "next/image";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerFirstRow}>
        <div className="flex items-center flex-col">
          <span className={style.logoTitle}>powered by Qubika srl</span>
          <Image
            src="/assets/footer-logo.png"
            alt="Logo Arredilè"
            width={244}
            height={81}
          />
        </div>
        <div className={style.phoneNumber}>+39 3513992495</div>
        <div className={`${style.footerButton} ${style.toHide}`}>
          Scarica brochure
        </div>
      </div>
      <div className={style.footerSecondRow}>
        <div className={style.iconContainer}>
          <Image
            src="/assets/icon-instagram-gold.png"
            width={32}
            height={32}
            alt="Icona instagram"
          />
        </div>
        <div className={style.footerMail}>hello@reallygreatsite.com</div>
      </div>

      <div className={`${style.footerButton}  ${style.toShow}`}>
        Scarica brochure
      </div>

      <div className={style.footerLastRow}>
        <div className={style.lastText}>
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
    </footer>
  );
};
