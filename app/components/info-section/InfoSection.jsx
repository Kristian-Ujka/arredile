import style from "./InfoSection.module.css";

export const InfoSection = () => {
  return (
    <div className={style.infoSection}>
      <div className={style.infoDetails}>
        <div className={style.infoTitle}>Chi siamo</div>
        <div className={style.infoDescription}>
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
        className={style.infoImage}
        src="/assets/description-image.png"
        alt="Description image"
      />
    </div>
  );
};
