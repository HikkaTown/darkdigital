import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import s from "./Timeline.module.scss";
import cs from "classnames";

export default function Timeline({ currentSlide, setCurrentSlide, data }) {
  const [sliderRef, instaceRef] = useKeenSlider({
    initial: currentSlide,
    loop: true,
    mode: "free",
    defaultAnimation: {
      duration: 0.6,
    },
    slides: {
      perView: "auto",
      origin: "center",
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  return (
    <div className={cs("navigation-wrapper", s.wrapper)}>
      <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
        <span className={s.line}></span>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={cs("keen-slider__slide", s.slide)}
              onClick={() => {
                instaceRef.current.moveToIdx(index);
              }}
            >
              <span
                className={cs(s.spot, currentSlide === index && s.spot_active)}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
