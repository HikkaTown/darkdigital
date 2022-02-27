import React from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import cs from "classnames";
import s from "./NavigationModal.module.scss";
import { motion } from "framer-motion";
import { bottomLine, middleLine, topLine } from "./varianAnimation";
import NivagationModalCloseBtn from "../uikit/NivagationModalCloseBtn/NivagationModalCloseBtn";
import NavigationList from "../NavigationList/NavigationList";

function template({ rotate, y }) {
  return `rotate(${rotate}) translateY(${y})`;
}

function templateScale({ rotate, scaleY }) {
  return `rotate(${rotate}) scaleY(${scaleY})`;
}

const variantNav = {
  initial: {
    opacity: 0,
    marginTop: "50%",
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
  visible: {
    opacity: 1,
    marginTop: "35%",
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      duration: 0.4,
      type: "tween",
    },
  },
  exit: {
    marginTop: "50%",
    opacity: 0,
    duration: 0.3,
    type: "tween",
  },
};

const containerVariants = {
  initial: {
    transition: {
      delay: 2,
    },
    backgroundColor: "rgba(255,255,255,0)",
  },
  visible: {
    transition: {
      delay: 0.4,
    },
    backgroundColor: "rgba(255,255,255,1)",
  },
  exit: {
    backgroundColor: "rgba(98,149,202,0)",
  },
};

export default function NavigationModal({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <motion.div
          className={s.inner_container}
          variants={containerVariants}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          {isOpened && <NivagationModalCloseBtn onClose={onClose} />}
          <NavigationList
            className={s.menu_container}
            classNameBtn={s.menu_btn}
            variants={variantNav}
            initial="initial"
            animate="visible"
            exit="exit"
          />
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
