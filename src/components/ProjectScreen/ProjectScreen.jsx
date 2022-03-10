import React from "react";
import s from "./ProjectScreen.module.scss";
import cs from "classnames";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import ProjectSlider from "../uikit/ProjectSlider/ProjectSlider";
export default function ProjectScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
  setShowAll,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
      onClick={() => {
        setShowAll(false);
        changePosition(dataXpos, dataYpos);
      }}
    >
      <div className={s.container}>
        <Header />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
        />
        <p className={s.head}>Наши сервисы и проекты</p>
      </div>
      <ProjectSlider />
    </div>
  );
}
