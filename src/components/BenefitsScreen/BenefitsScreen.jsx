import React, { useState } from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import cs from "classnames";
import s from "./BenefitsScreen.module.scss";
import { LazyImageWrapper } from "../LazyImage";

const list = [
  {
    id: 1,
    title: "Поэтапная система оплаты",
    iconSrc: "/assets/benefits.svg",
  },
  {
    id: 2,
    title: "Уникальный дизайн",
    iconSrc: "/assets/benefits.svg",
  },
  {
    id: 3,
    title: "100 лет гарантии на сайт",
    iconSrc: "/assets/benefits.svg",
  },
  {
    id: 4,
    title: "Поддержка сайта 24/7",
    iconSrc: "/assets/benefits.svg",
  },
  {
    id: 5,
    title: "Настройка админки под ваши задачи",
    iconSrc: "/assets/benefits.svg",
  },
];

export default function BenefitsScreen({
  changePosition,
  classPanel,
  dataXpos,
  dataYpos,
  setShowAll,
}) {
  const [activeItem, setActiveItem] = useState(1);
  const handlerSelectItem = (id) => {
    setActiveItem(id);
  };
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
      </div>
      <p className={s.head}>Преимущества</p>
      <div className={s.benefit_list}>
        <div className={s.icon_bar}>
          {list.map((item, index) => {
            return (
              <span
                className={s.item}
                key={index}
                onClick={() => {
                  handlerSelectItem(item.id);
                }}
              >
                <LazyImageWrapper
                  src={item.iconSrc}
                  className={[
                    // cs(s.icon, activeItem !== item.id ? s.icon_deactive : ""),
                    cs(s.icon),
                  ]}
                  wrapperClass={cs(
                    s.icon_wrapper
                    // activeItem !== item.id ? s.icon_wrapper_deactive : ""
                  )}
                />
                <p
                  className={cs(
                    s.text
                    // activeItem !== item.id ? s.text_second : ""
                  )}
                >
                  {item.title}
                </p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
