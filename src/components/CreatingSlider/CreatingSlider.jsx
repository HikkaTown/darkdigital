/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import s from "./CreatingSlider.module.scss";
import cs from "classnames";
import CardCreating from "../uikit/CardCreating/CardCreating";

export default function CreatingSlider({
  currentSlide,
  setCurrentSlide,
  data,
}) {
  const [sliderRef, instaceRef] = useKeenSlider({
    initial: currentSlide,
    loop: true,
    drag: false,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
  });
  useEffect(() => {
    instaceRef.current.moveToIdx(currentSlide);
  }, [currentSlide]);
  return (
    <div className={cs("navigation-wrapper", s.wrapper)}>
      <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={cs("keen-slider__slide", s.slide)}
              onClick={() => {
                instaceRef.current.moveToIdx(index);
              }}
            >
              <CardCreating data={item} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
