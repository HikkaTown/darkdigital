import React from "react";
import MainButton from "../uikit/MainButton/MainButton";
import s from "./ContentMainScreen.module.scss";

export default function ContentMainScreen() {
  return (
    <div className={s.block}>
      <h1 className={s.head}>СОЗДАНИЕ И ПРОДВИЖЕНИЕ САЙТОВ</h1>
      <p className={s.title}>
        Мы разработываем сайты любого типа. От лендинга до мультифункциональных
        информационных порталов.
      </p>
      <MainButton className={s.btn} text={"Обсудить мой проект"} />
    </div>
  );
}
