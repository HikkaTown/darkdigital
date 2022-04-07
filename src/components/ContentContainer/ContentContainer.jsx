import React, { useRef, useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
import s from "./ContentContainer.module.scss";
import cs from "classnames";
import ConctactScreen from "../ContactScreen/ConctactScreen";
import NavigationBlock from "../NavigationBlock/NavigationBlock";
import ServicesScreen from "../ServicesScreen/ServicesScreen";
import AboutUsScreen from "../AboutUsScreen/AboutUsScreen";
import BenefitsScreen from "../BenefitsScreen/BenefitsScreen";
import ProjectScreen from "../ProjectScreen/ProjectScreen";
import WhyWeScreen from "../WhyWeScreen/WhyWeScreen";
import CreatingScreen from "../CreatingScreen/CreatingScreen";
import useWindowSize from "../../hooks/useWindowSize";
export default function ContentContainer() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const handleNav = (dataXpos, dataYpos) => {
    setPosX(dataXpos);
    setPosY(dataYpos);
  };
  return (
    <section className={cs(s.site_wrap, showAll && s.show_all)}>
      <NavigationBlock
        changePosition={handleNav}
        currentPosX={posX}
        currentPosY={posY}
      />
      <div
        style={{
          transform: `translateX(${-posX}00%) translateY(${-posY}00%)`,
        }}
        className={cs(s.panel_wrap, s.animate_none)}
      >
        <MainScreen
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={0}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <ConctactScreen
          classPanel={s.panel}
          dataXpos={1}
          dataYpos={-1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <ServicesScreen
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={-1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <AboutUsScreen
          classPanel={s.panel}
          dataXpos={-1}
          dataYpos={1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <BenefitsScreen
          classPanel={s.panel}
          dataXpos={1}
          dataYpos={1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <ProjectScreen
          classPanel={s.panel}
          dataXpos={-1}
          dataYpos={-1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <WhyWeScreen
          classPanel={s.panel}
          dataXpos={1}
          dataYpos={0}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <CreatingScreen
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={1}
          changePosition={handleNav}
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>
    </section>
  );
}
