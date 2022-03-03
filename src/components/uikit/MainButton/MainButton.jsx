import React, { useState } from "react";
import s from "./MainButton.module.scss";
import cs from "classnames";
import ModalFeedback from "../../ModalFeedback/ModalFeedback";
import { AnimatePresence } from "framer-motion";
export default function MainButton({ text, onClick, className }) {
  const [isOpened, setIsOpened] = useState(false);

  const handlerOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <button onClick={handlerOpened} className={cs(s.btn, className)}>
        {text}
      </button>
      <AnimatePresence>
        {isOpened && (
          <ModalFeedback isOpened={isOpened} onClose={handlerOpened} />
        )}
      </AnimatePresence>
    </>
  );
}
