import React, { useState } from "react";
import s from "./OpenBlockList.module.scss";
import cs from "classnames";
import { AnimatePresence } from "framer-motion";
import ModalSectionList from "../../ModalSectionList/ModalSectionList";
import useWindowSize from "../../../hooks/useWindowSize";
export default function OpenBlockList({
  className,
  onChangePosition,
  onClick,
  setShowAll,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const size = useWindowSize();
  const handlerOpened = () => {
    if (size.width > 768) {
      setShowAll((prev) => !prev);
    } else {
      setIsOpened((prev) => !prev);
    }
  };

  return (
    <>
      <button className={cs(s.btn, className)} onClick={handlerOpened}>
        <span
          className={cs(s.btn_container, isOpened && s.btn_container_animate)}
        >
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
          <span className={s.square}></span>
        </span>
        Открыть блоки
      </button>
      <AnimatePresence>
        {isOpened && (
          <ModalSectionList
            isOpened={isOpened}
            onClose={handlerOpened}
            onChangePosition={onChangePosition}
          />
        )}
      </AnimatePresence>
    </>
  );
}
