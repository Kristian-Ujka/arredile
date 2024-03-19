"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import style from "./Hero.module.css";

export const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <Image
          src="/assets/icon-chevron-left.png"
          alt="Previous"
          className={`${style.customPrevArrow} ${
            hasPrev ? "!absolute" : "!hidden"
          } !w-auto !cursor-pointer !pointer-events-auto`}
          onClick={clickHandler}
          width={35}
          height={35}
        />
      )}
      renderArrowNext={(clickHandler, hasNext) => (
        <Image
          src="/assets/icon-chevron-right.png"
          alt="Next"
          className={`${style.customNextArrow} ${
            hasNext ? "!absolute" : "!hidden"
          } !w-auto !cursor-pointer !pointer-events-auto`}
          onClick={clickHandler}
          width={35}
          height={35}
        />
      )}
    >
      <div>
        <img
          src="/assets/hero.png"
          alt="Immagine principale"
          className={style.heroImage}
        />
      </div>
      <div>
        <img
          src="/assets/hero.png"
          alt="Immagine principale"
          className={style.heroImage}
        />
      </div>
      <div>
        <img
          src="/assets/hero.png"
          alt="Immagine principale"
          className={style.heroImage}
        />
      </div>
    </Carousel>
  );
};
