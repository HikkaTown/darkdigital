import React from "react";
import s from "./ProjectPreviewModal.module.scss";
import cs from "classnames";
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import { motion } from "framer-motion";

const variatns = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hidden2: {
    opacity: 0,
  },
};

export default function ProjectPreviewModal({ isOpened, onClose, src }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose} child={s.overlay}>
        <motion.div
          className={s.container}
          transition={{ duration: 0.3, type: "tween" }}
          initial="hidden"
          animate="visible"
          exit="hidden2"
          variants={variatns}
        >
          <button className={s.close} onClick={onClose}>
            <span className={s.line} />
            <span className={s.line} />
          </button>
          <img src={src} alt="dsds" className={s.image} />
        </motion.div>
      </OverlayingPopup>
    </Portal>
  );
}
