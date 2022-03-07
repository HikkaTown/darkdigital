import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import s from "./ProjectSlider.module.scss";
import cs from "classnames";
import { LazyBackgroundImage } from "../../LazyBackgroundImage";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import ProjectPreviewModal from "../../ProjectPreviewModal/ProjectPreviewModal";

const projectData = [
  {
    id: 1,
    imagePc: "",
    imageTab: "",
    name: "REVISUAL",
    status: "prouct",
    nameColor: "white",
    imageMob: "project/mob/1.jpg",
    presentationImage: "project/presentation/1.jpg",
  },
  {
    id: 2,
    imagePc: "",
    imageTab: "",
    name: "Knightsbridge Private Park",
    status: "prouct",
    nameColor: "black",
    imageMob: "project/mob/2.jpg",
    presentationImage: "",
  },
  {
    id: 3,
    imagePc: "",
    imageTab: "",
    name: "АКК",
    nameColor: "white",
    status: "prouct",
    imageMob: "project/mob/3.jpg",
    presentationImage: "",
  },
  {
    id: 4,
    imagePc: "",
    imageTab: "",
    name: "Арсенал",
    nameColor: "black",
    status: "prouct",
    imageMob: "project/mob/4.jpg",
    presentationImage: "",
  },
];

export default function ProjectSlider({ className }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const [src, setSrc] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleClose = () => {
    setIsOpened((prev) => !prev);
  };

  const handleOpenModal = (src) => {
    setSrc((prev) => src);
    setIsOpened((prev) => !prev);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className={cs("navigation-wrapper", s.wrapper)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          {projectData.map((item) => {
            return (
              <div key={item.id} className={cs("keen-slider__slide", s.slide)}>
                <LazyImageWrapper
                  className={[s.image]}
                  wrapperClass={s.image_wrapper}
                  srcMobile={item.imageMob}
                  alt={item.name}
                />
                <h3 className={s.card_name} style={{ color: item.nameColor }}>
                  {item.name}
                </h3>
                <button
                  className={s.btn}
                  onClick={() => {
                    handleOpenModal(item.presentationImage);
                  }}
                >
                  Подробнее
                </button>
              </div>
            );
          })}
        </div>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      {isOpened && (
        <ProjectPreviewModal
          isOpened={isOpened}
          onClose={handleClose}
          src={src}
        />
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    // <svg
    //   onClick={props.onClick}
    //   className={`arrow ${
    //     props.left ? "arrow--left" : "arrow--right"
    //   } ${disabeld}`}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   {props.left && (
    //     <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    //   )}
    //   {!props.left && (
    //     <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    //   )}
    // </svg>
    <></>
  );
}
