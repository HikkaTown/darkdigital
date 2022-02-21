import React from "react";
import s from "./NavigationBlock.module.scss";

export default function NavigationBlock({ changePosition }) {
  const positions = [
    { title: "Центр", xPos: 0, yPos: 0 },
    { title: "Вверх", xPos: 0, yPos: 1 },
    { title: "Вниз", xPos: 0, yPos: -1 },
    { title: "В лево", xPos: -1, yPos: 0 },
    { title: "В право", xPos: 1, yPos: 0 },
    { title: "Вверх лево", xPos: -1, yPos: 1 },
    { title: "Вверх право", xPos: 1, yPos: 1 },
    { title: "Вниз лево", xPos: -1, yPos: -1 },
    { title: "Вниз право", xPos: 1, yPos: -1 },
  ];
  return (
    <div className={s.navigation}>
      {positions.map((item, index) => {
        const { title, xPos, yPos } = item;
        return (
          <button
            key={index}
            className={s.nav_btn}
            onClick={() => {
              changePosition(xPos, yPos);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
}
