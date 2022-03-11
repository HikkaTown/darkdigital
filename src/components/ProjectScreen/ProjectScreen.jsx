import React from "react";
import s from "./ProjectScreen.module.scss";
import cs from "classnames";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import ProjectSlider from "../uikit/ProjectSlider/ProjectSlider";
import Container from "../Container/Container";
import CanvasBackground from "../uikit/CanvasBackground/CanvasBackground";
export default function ProjectScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
  setShowAll,
  showAll,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
      onClick={() => {
        if (showAll) {
          setShowAll(false);
          changePosition(dataXpos, dataYpos);
        }
      }}
    >
      <CanvasBackground className={s.canvas} />
      <Container>
        <Header />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
          setShowAll={setShowAll}
        />
        <p className={s.head}>Наши сервисы и проекты</p>
      </Container>
      <ProjectSlider />
    </div>
  );
}
