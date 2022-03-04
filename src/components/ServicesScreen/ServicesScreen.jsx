import React from "react";
import s from "./ServicesScreen.module.scss";
import cs from "classnames";
import LogoComponent from "../uikit/LogoComponent/LogoComponent";
import ServicesButton from "../uikit/ServicesButton/ServicesButton";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
export default function ServicesScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
    >
      <div className={s.container}>
        <Header classDigital={s.dark_logo} classDark={s.white_logo} />
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
          {/* <p className={s.content_description}>
            Мы разработываем сайты любого типа. От лендинга до
            мультифункциональных информационных порталов.
          </p> */}
          <div className={s.services_list}>
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
            <ServicesButton text={"Аудит сайта"} className={s.btn} />
          </div>
        </div>
      </div>
    </div>
  );
}
