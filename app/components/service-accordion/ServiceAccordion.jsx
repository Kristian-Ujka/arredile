"use client";
import Image from "next/image";
import style from "./ServiceAccordion.module.css";
import { useState } from "react";

export const ServiceAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(9).fill(false));

  const toggleAccordion = (index) => {
    const updatedAccordionOpen = [...accordionOpen];
    updatedAccordionOpen[index] = !updatedAccordionOpen[index];
    setAccordionOpen(updatedAccordionOpen);
  };

  return (
    <div className={style.accordionContainer}>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>01/</span>
          <div className={style.itemDescription}>Finanziamenti</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(1)}
            className={accordionOpen[1] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[1] && (
          <div className={style.accordionContent}>
            Spesso approcciarsi ad un nuovo progetto significa ricorrere ai
            propri risparmi. Quando questo non è <br /> possibile, Arredilè
            entra in gioco proponendo molteplici soluzioni finanziarie per
            indirizzare la nostra <br />
            clientela verso l’investimento più vicino alle proprie esigenze, sia
            nella finanza Bancaria Ordinaria che
            <br /> Pubblica Agevolata.
          </div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>02/</span>
          <div className={style.itemDescription}>Progettazione</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(2)}
            className={accordionOpen[2] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[2] && (
          <div className={style.accordionContent}>Accordion Aperto</div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>03/</span>
          <div className={style.itemDescription}>Edilizia ed impiantistica</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(3)}
            className={accordionOpen[3] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[3] && (
          <div className={style.accordionContent}>Accordion Aperto</div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>04/</span>
          <div className={style.itemDescription}>Arredamento e Forniture</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(4)}
            className={accordionOpen[4] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[4] && (
          <div className={style.accordionContent}>Accordion Aperto</div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>05/</span>
          <div className={style.itemDescription}>
            Sicurezza sul lavoro ed HACCP
          </div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(5)}
            className={accordionOpen[5] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[5] && (
          <div className={style.accordionContent}>
            Per garantire sicurezza nei luoghi di lavoro e un efficace rispetto
            del protocollo di sicurezza alimentare
            <br /> (HACCP), forniamo consulenza e servizio di vendita di
            materiale antincendio e di dispositivi di sicurezza
            <br /> dotati di certificazione ISO.
            <br /> Seguiamo procedure di gestione interna dei clienti, anche
            attraverso il supporto di strumenti innovativi per
            <br /> gli esami ambientali come:
            <div className="ml-6">
              Fonometro; <br />
              Misuratori di vibrazione; <br />
              Rilievi topografici e ambientali per ridurre l’inquinamento e
              diminuire il CO2 nell’atmosfera; <br /> Droni per eseguire filmati
              e tutto ciò che contribuisce a garantire la sicurezza
              dell’attività.
            </div>
          </div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>07/</span>
          <div className={style.itemDescription}>Anlisi location</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(7)}
            className={accordionOpen[7] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[7] && (
          <div className={style.accordionContent}>Accordion Aperto</div>
        )}
      </div>
      <div className={style.accordionItemContainer}>
        <div className={style.accordionItem}>
          <span className={style.itemNumber}>06/</span>
          <div className={style.itemDescription}>Marketing e Comunicazione</div>
          <Image
            src="/assets/icon-chevron-down.png"
            alt="Icona apri accordion"
            width={32}
            height={32}
            onClick={() => toggleAccordion(6)}
            className={accordionOpen[6] ? style.accordionActive : ""}
          />
        </div>
        {accordionOpen[6] && (
          <div className={style.accordionContent}>Accordion Aperto</div>
        )}
      </div>
    </div>
  );
};
