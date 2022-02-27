import React from "react";
import { motion } from "framer-motion";
import s from "./NivagationModalCloseBtn.module.scss";
import cs from "classnames";
import {
  closeVariantsFirst,
  closeVariantsSecond,
  visibleBtn,
} from "../NavigationModalBtn/varianAnimate";
export default function NivagationModalCloseBtn({ onClose }) {
  return (
    <motion.button
      onClick={onClose}
      className={s.close_trigger}
      variants={visibleBtn}
      initial="initial"
      animate="visible"
      exit="hidden2"
      transition={{ type: "tween" }}
    >
      <motion.span
        className={cs(s.close_trigger_bar, s.left)}
        variants={closeVariantsFirst}
        initial="initial"
        animate="visible"
        exit="exit"
      ></motion.span>
      <motion.span
        className={cs(s.close_trigger_bar, s.right)}
        variants={closeVariantsSecond}
        initial="initial"
        animate="visible"
        exit="exit"
      ></motion.span>
    </motion.button>
  );
}
