import style from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={style.landingHeader}>
      <Image
        src="/assets/logo.png"
        alt="Arredilè logo"
        width={307}
        className={style.logoImg}
        height={110}
      />
      <div className={style.socialSection}>
        <span className="text-white mr-2">Seguici su</span>
        <Image
          src="/assets/icon-instagram.png"
          alt="Seguici su istagram"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};
