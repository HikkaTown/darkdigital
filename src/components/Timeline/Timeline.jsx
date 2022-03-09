import React from "react";
import s from "./Timeline.module.scss";
import cs from "classnames";

const list = [
  "Создание сайтов",
  "Продвижение сайта",
  "Интернет маркетинг",
  "Контекстная реклама",
  "SMM продвижение",
];

export default function Timeline() {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <div className={s.line}></div>
        {list.map((item, index) => {
          return (
            <span
              key={index}
              className={cs(s.spot, index === 0 && s.spot_active)}
              style={{ marginLeft: 134 * index + "px" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
