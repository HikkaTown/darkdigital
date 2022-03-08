import React from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import cs from "classnames";
import s from "./CreatingScreen.module.scss";
export default function CreatingScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
    >
      <div className={s.container}>
        <Header classDark={s.dark} classDigital={s.digital} />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
        />
        <p className={s.head}>Разработка сайтов всех типов</p>
      </div>
    </div>
  );
}
