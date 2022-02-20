import React, { useRef, useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
import s from "./ContentContainer.module.scss";
import cs from "classnames";
import ConctactScree from "../ContactScreen/ConctactScree";
import NavigationBlock from "../NavigationBlock/NavigationBlock";
export default function ContentContainer() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleNav = (dataXpos, dataYpos) => {
    setPosX(dataXpos);
    setPosY(dataYpos);
  };
  return (
    <section className={s.site_wrap}>
      <NavigationBlock changePosition={handleNav} />
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
        <ConctactScree
          classPanel={s.panel}
          dataXpos={0}
          dataYpos={1}
          changePosition={handleNav}
        />
      </div>
    </section>
  );
}
