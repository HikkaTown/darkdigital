import React from "react";
import s from "./NavigationBlock.module.scss";
import cs from "classnames";

export default function NavigationBlock({
  changePosition,
  currentPosX,
  currentPosY,
}) {
  const positions = [
    // { title: "Центр", xPos: 0, yPos: 0 },
    { title: "Услуги", xPos: 0, yPos: 1, className: s.nav_up },
    { title: "Тарифы", xPos: 0, yPos: -1, className: s.nav_down },
    { title: "В лево", xPos: 1, yPos: 0, className: s.nav_left },
    { title: "Разработка сайтов", xPos: -1, yPos: 0, className: s.nav_right },
    { title: "Вверх лево", xPos: 1, yPos: 1, className: s.nav_up_left },
    { title: "Контакты", xPos: -1, yPos: 1, className: s.nav_up_right },
    { title: "Вниз лево", xPos: 1, yPos: -1, className: s.nav_down_left },
    { title: "Вниз право", xPos: -1, yPos: -1, className: s.nav_down_right },
  ];
  return (
    <div className={s.navigation_list}>
      <div className={s.navigation}>
        {positions.map((item, index) => {
          const { title, xPos, yPos, className } = item;
          return (
            <button
              key={index}
              className={cs(s.nav_btn, className)}
              style={{
                display:
                  (currentPosX === 1 && xPos === 1) ||
                  (currentPosX === -1 && xPos === -1) ||
                  (currentPosY === 1 && yPos === 1) ||
                  (currentPosY === -1 && yPos === -1)
                    ? "none"
                    : "block",
              }}
              onClick={() => {
                changePosition(xPos, yPos);
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
