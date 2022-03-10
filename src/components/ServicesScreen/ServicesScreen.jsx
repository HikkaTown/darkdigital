import React from "react";
import s from "./ServicesScreen.module.scss";
import cs from "classnames";
import LogoComponent from "../uikit/LogoComponent/LogoComponent";
import ServicesButton from "../uikit/ServicesButton/ServicesButton";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";

const servicesList = [
  {
    id: 1,
    name: "Аудит сайта",
  },
  {
    id: 2,
    name: "Продвижение сайта",
  },
  {
    id: 3,
    name: "Интернет маркетинг",
  },
  {
    id: 4,
    name: "Создание сайтов",
  },
  {
    id: 5,
    name: "Контекстная реклама",
  },
  {
    id: 6,
    name: "SMM продвижение",
  },
  {
    id: 7,
    name: "Создание сайтов",
  },
  {
    id: 8,
    name: "Обсудить мой проект",
  },
  {
    id: 9,
    name: "Обсудить мой проект",
  },
];

export default function ServicesScreen({
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
        <Header classDigital={s.white_logo} classDark={s.dark_logo} />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
        />
        <div className={s.content}>
          <div className={s.head}>
            <p className={s.text_head}>Услуги</p>
            <LogoComponent
              classLogo={s.logo}
              classDark={s.digital}
              classDigital={s.digital}
              classDescription={s.description_none}
            />
          </div>
          <p className={s.content_description}>
            Мы разработываем сайты любого типа. От лендинга до
            мультифункциональных информационных порталов.
          </p>
          <div className={s.services_list}>
            {servicesList.map((item) => {
              return (
                <ServicesButton
                  key={item.id}
                  text={item.name}
                  className={s.btn}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
