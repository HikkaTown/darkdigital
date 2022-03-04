import React, { useRef, useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
import s from "./ContentContainer.module.scss";
import cs from "classnames";
import ConctactScreen from "../ContactScreen/ConctactScreen";
import NavigationBlock from "../NavigationBlock/NavigationBlock";
import ServicesScreen from "../ServicesScreen/ServicesScreen";
import AboutUsScreen from "../AboutUsScreen/AboutUsScreen";
import BenefitsScreen from "../BenefitsScreen/BenefitsScreen";
export default function ContentContainer() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleNav = (dataXpos, dataYpos) => {
    // const newPosX = posX + dataXpos;
    // const newPosY = posY + dataYpos;
    // setPosX(newPosX);
    // setPosY(newPosY);
    setPosX(dataXpos);
    setPosY(dataYpos);
  };
  return (
    <section className={s.site_wrap}>
      <NavigationBlock
        changePosition={handleNav}
        currentPosX={posX}
        currentPosY={posY}
      />
      <div
        style={{
          transform: `translateX(${posX}00%) translateY(${posY}00%)`,
        }}
        className={cs(s.panel_wrap, s.animate_none)}
      >
        <MainScreen
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={0}
          changePosition={handleNav}
        />
        <ConctactScreen
          classPanel={s.panel}
          dataXpos={1}
          dataYpos={1}
          changePosition={handleNav}
        />
        <ServicesScreen
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={1}
          changePosition={handleNav}
        />
        <AboutUsScreen
          classPanel={s.panel}
          dataXpos={-1}
          dataYpos={-1}
          changePosition={handleNav}
        />
        <BenefitsScreen
          classPanel={s.panel}
          dataXpos={1}
          dataYpos={-1}
          changePosition={handleNav}
        />
      </div>
    </section>
  );
}
