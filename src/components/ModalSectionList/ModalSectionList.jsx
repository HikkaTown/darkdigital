import React from "react";
import { motion } from "framer-motion";
import { positions } from "../../utils/screens";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import s from "./ModalSectionList.module.scss";

const variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
};

export default function ModalSectionList({
  isOpened,
  onClose,
  onChangePosition,
}) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <div className={s.container}>
          <motion.div className={s.tabs}>
            {positions.map((item, index) => {
              return (
                <motion.button
                  variants={variants}
                  initial="initial"
                  animate="show"
                  exit="exit"
                  transition={{
                    duration: +`0.4${index}`,
                    delay: +`0.9${index}`,
                  }}
                  layout="animation"
                  key={index}
                  type="button"
                  className={s.tab}
                  onClick={() => {
                    onChangePosition(item.xPos, item.yPos);
                    onClose();
                  }}
                >
                  <span className={s.container_btn}>
                    <span className={s.text}>{item.title}</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
