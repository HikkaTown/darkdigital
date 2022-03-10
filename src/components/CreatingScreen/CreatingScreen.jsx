import React, { useState } from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import cs from "classnames";
import s from "./CreatingScreen.module.scss";
import Timeline from "../Timeline/Timeline";
import CreatingSlider from "../CreatingSlider/CreatingSlider";

const list = [
  {
    id: 1,
    name: "Создание сайтов",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus.",
    promotionName: "Запросов в продвижении:",
    promotionList: ["позиция", "позиция2", "позиция 3"],
    discountValue: 50,
    discountText: "на первый месяц!",
    price: 70000,
  },
  {
    id: 2,
    name: "Продвижение сайта",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus.",
    promotionName: "Запросов в продвижении:",
    promotionList: ["позиция", "позиция2", "позиция 3"],
    discountValue: 50,
    discountText: "на первый месяц!",
    price: 70000,
  },
  {
    id: 3,
    name: "Интернет маркетинг",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus.",
    promotionName: "Запросов в продвижении:",
    promotionList: ["позиция", "позиция2", "позиция 3"],
    discountValue: 50,
    discountText: "на первый месяц!",
    price: 70000,
  },
  {
    id: 4,
    name: "Контекстная реклама",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus.",
    promotionName: "Запросов в продвижении:",
    promotionList: ["позиция", "позиция2", "позиция 3"],
    discountValue: 50,
    discountText: "на первый месяц!",
    price: 70000,
  },
  {
    id: 5,
    name: "SMM продвижение",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus.",
    promotionName: "Запросов в продвижении:",
    promotionList: ["позиция", "позиция2", "позиция 3"],
    discountValue: 50,
    discountText: "на первый месяц!",
    price: 70000,
  },
];

export default function CreatingScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
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
        <Timeline
          data={list}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <CreatingSlider
          data={list}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </div>
  );
}
