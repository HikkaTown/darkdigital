import React from "react";
import s from "./ServicesScreen.module.scss";
import cs from "classnames";
import LogoComponent from "../uikit/LogoComponent/LogoComponent";
import ServicesButton from "../uikit/ServicesButton/ServicesButton";
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
        <LogoComponent
          classLogo={s.logo}
          classDark={s.dark}
          classDigital={s.digital}
          classDescription={s.description}
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
