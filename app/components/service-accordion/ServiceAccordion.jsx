import Image from "next/image";
import style from "./ServiceAccordion.module.css";

export const ServiceAccordion = () => {
    return (
        <div className={style.accordionContainer}>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>01/</span>
            <div className={style.itemDescription}>Finanziamenti</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>02/</span>
            <div className={style.itemDescription}>Progettazione</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>03/</span>
            <div className={style.itemDescription}>Edilizia ed impiantistica</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>04/</span>
            <div className={style.itemDescription}>Arredamento e Forniture</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>05/</span>
            <div className={style.itemDescription}>Sicurezza sul lavoro ed HACCP</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>07/</span>
            <div className={style.itemDescription}>Anlisi location</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
          <div className={style.accordionItem}>
            <span className={style.itemNumber}>06/</span>
            <div className={style.itemDescription}>Marketing e Comunicazione</div>
            <Image
              src="/assets/icon-chevron-down.png"
              alt="Icona apri accordion"
              width={32}
              height={32}
            />
          </div>
        </div>
    )
}