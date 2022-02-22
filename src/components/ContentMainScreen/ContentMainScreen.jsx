import React from "react";
import s from "./ContentMainScreen.module.scss";

export default function ContentMainScreen() {
  return (
    <div className={s.block}>
      <h1 className={s.head}>Разработка сайтов любой сложности</h1>
      <p className={s.title}>
        Мы разработываем сайты любого типа. От лендинга до мультифункциональных
        информационных порталов.
      </p>
    </div>
  );
}
