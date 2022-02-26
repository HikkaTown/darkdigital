import React from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import cs from "classnames";
import s from "./NavigationModal.module.scss";
import { motion } from "framer-motion";
import { bottomLine, middleLine, topLine } from "./varianAnimation";

function template({ rotate, y }) {
  return `rotate(${rotate}) translateY(${y})`;
}

function templateScale({ rotate, scaleY }) {
  return `rotate(${rotate}) scaleY(${scaleY})`;
}

export default function NavigationModal({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <motion.div className={s.inner_container}>
          <motion.div
            transformTemplate={template}
            variants={topLine}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7 }}
            className={cs(s.menu_bg, s.top)}
          ></motion.div>
          <motion.div
            transformTemplate={templateScale}
            variants={middleLine}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7 }}
            className={cs(s.menu_bg, s.middle)}
          ></motion.div>
          <motion.div
            transformTemplate={template}
            variants={bottomLine}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7 }}
            className={cs(s.menu_bg, s.bottom)}
          ></motion.div>
        </motion.div>
      </OverlayingPopup>
    </Portal>
  );
}
