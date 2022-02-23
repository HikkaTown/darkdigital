import React from "react";
import s from "./NavigationList.module.scss";
import cs from "classnames";
export default function NavigationList({ className }) {
  return (
    <nav className={cs(s.nav, className)}>
      <button className={s.nav_btn}>Проекты</button>
      <button className={s.nav_btn}>Команда</button>
      <button className={s.nav_btn}>Партнеры</button>
      <button className={s.nav_btn}>О нас</button>
      <button className={s.nav_btn}>Контакты</button>
    </nav>
  );
}
