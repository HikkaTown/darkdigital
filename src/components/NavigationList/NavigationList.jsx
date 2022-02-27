import React from "react";
import s from "./NavigationList.module.scss";
import cs from "classnames";
import { motion } from "framer-motion";
export default function NavigationList({
  className,
  classNameBtn,
  variants,
  initial,
  exit,
  animate,
}) {
  return (
    <motion.nav
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      className={cs(s.nav, className)}
    >
      <a href="#" className={cs(s.nav_btn, classNameBtn)}>
        Проекты
      </a>
      <a href="#" className={cs(s.nav_btn, classNameBtn)}>
        Команда
      </a>
      <a href="#" className={cs(s.nav_btn, classNameBtn)}>
        Партнеры
      </a>
      <a href="#" className={cs(s.nav_btn, classNameBtn)}>
        О нас
      </a>
      <a href="#" className={cs(s.nav_btn, classNameBtn)}>
        Контакты
      </a>
    </motion.nav>
  );
}
