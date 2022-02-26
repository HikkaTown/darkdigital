import React, { useState } from "react";
import cs from "classnames";
import s from "./NavigationModalBtn.module.scss";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
  animationTopLine,
  closeVariantsFirst,
  closeVariantsSecond,
  visibleBtn,
  visibleBtnOpen,
} from "./varianAnimate";
import NavigationModal from "../../NavigationModal/NavigationModal";
export default function NavigationModalBtn({ className }) {
  const [isOpened, setIsOpened] = useState(null);
  const handleMenu = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {!isOpened && (
          <motion.button
            onClick={handleMenu}
            className={cs(s.menu_trigger, className)}
            variants={visibleBtnOpen}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, type: "tween" }}
          >
            <motion.span
              className={cs(s.menu_trigger_bar, s.top)}
              variants={animationTopLine}
              initial="initial"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.2, type: "tween" }}
            ></motion.span>
            <motion.span
              className={cs(s.menu_trigger_bar, s.middle)}
              variants={animationTopLine}
              initial="initial"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, type: "tween" }}
            ></motion.span>
            <motion.span
              className={cs(s.menu_trigger_bar, s.bottom)}
              variants={animationTopLine}
              initial="visible"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.2, type: "tween" }}
            ></motion.span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {isOpened && (
          <motion.button
            onClick={handleMenu}
            className={s.close_trigger}
            variants={visibleBtn}
            initial="initial"
            animate="visible"
            exit="hidden2"
            transition={{ duration: 1, type: "tween" }}
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
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpened && (
          <NavigationModal isOpened={isOpened} onClose={handleMenu} />
        )}
      </AnimatePresence>
    </>
  );
}
