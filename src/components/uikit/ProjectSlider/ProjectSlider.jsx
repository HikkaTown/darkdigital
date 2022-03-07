import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import s from "./ProjectSlider.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import ProjectPreviewModal from "../../ProjectPreviewModal/ProjectPreviewModal";
import { AnimatePresence } from "framer-motion";
import ArrowSlider from "../ArrowSlider/ArrowSlider";

const projectData = [
  {
    id: 1,
    imagePc: "",
    imageTab: "project/tab/1.jpg",
    name: "REVISUAL",
    status: true,
    nameColor: "white",
    imageMob: "project/mob/1.jpg",
    presentationImage: "project/presentation/1.jpg",
  },
  {
    id: 2,
    imagePc: "",
    imageTab: "",
    name: "Knightsbridge Private Park",
    status: true,
    nameColor: "black",
    imageMob: "project/mob/2.jpg",
    presentationImage: "project/presentation/2.jpg",
  },
  {
    id: 3,
    imagePc: "",
    imageTab: "",
    name: "АКК",
    nameColor: "white",
    status: true,
    imageMob: "project/mob/3.jpg",
    presentationImage: "project/presentation/3.jpg",
  },
  {
    id: 4,
    imagePc: "",
    imageTab: "",
    name: "Арсенал",
    nameColor: "black",
    status: false,
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
    breakpoints: {
      "(min-width: 768px)": {
        rtl: true,
      },
    },
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
                  src={item.imagePc}
                  srcTablet={item.imageTab}
                  srcMobile={item.imageMob}
                  alt={item.name}
                />
                <h3 className={s.card_name} style={{ color: item.nameColor }}>
                  {item.name}
                </h3>
                <button
                  className={s.btn}
                  onClick={(e) => {
                    if (item.status) {
                      handleOpenModal(item.presentationImage);
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.status ? "Подробнее" : "Презентация в разработке"}
                </button>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className={s.arrows}>
            <div className={s.arrow_btns}>
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
            </div>
            <LazyImageWrapper
              src={"assets/finger.svg"}
              className={[s.finger_ico]}
              wrapperClass={s.finger_ico_wrapper}
            />
          </div>
        )}
      </div>
      <AnimatePresence>
        {isOpened && (
          <ProjectPreviewModal
            isOpened={isOpened}
            onClose={handleClose}
            src={src}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return <ArrowSlider onClick={props.onClick} position={props.left} />;
}
