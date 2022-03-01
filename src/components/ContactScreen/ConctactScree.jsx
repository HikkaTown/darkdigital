import React from "react";
import { LazyImageWrapper } from "../LazyImage";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import s from "./ContactScreen.module.scss";
import cs from "classnames";
export default function ConctactScree({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
}) {
  return (
    <div className={classPanel} data-x-pos={dataXpos} data-y-pos={dataYpos}>
      <div className={s.container}>
        <Header />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
        />
        <p className={s.head}>Контакты</p>
        <p className={s.title}>
          Мы разработываем сайты любого типа. От лендинга до
          мультифункциональных информационных порталов.
        </p>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.row}>
              <LazyImageWrapper
                src="assets/phone.svg"
                className={[s.icon]}
                wrapperClass={s.icon_wrapper}
              />
              <p className={s.name}>Телефон</p>
            </div>
            <div className={s.row}>
              <a href="tel:+7000000" className={s.link}>
                +7 (000)000-00-00
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.row}>
              <LazyImageWrapper
                src="assets/phone.svg"
                className={[s.icon]}
                wrapperClass={s.icon_wrapper}
              />
              <p className={s.name}>Телефон</p>
            </div>
            <div className={s.row}>
              <a href="to:+7000000" className={s.link}>
                +7 (000)000-00-00
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.row}>
              <p className={cs(s.name, s.name_margin)}>Мессенджеры</p>
            </div>
            <div className={s.row}>
              <a className={s.messager_link} href="#">
                <LazyImageWrapper
                  src={"assets/watsapp.svg"}
                  className={[s.icon_messager]}
                  wrapperClass={s.icon_messager_wrapper}
                />
              </a>
              <a className={s.messager_link} href="#">
                <LazyImageWrapper
                  src={"assets/telegram.svg"}
                  className={[s.icon_messager]}
                  wrapperClass={s.icon_messager_wrapper}
                />
              </a>
              <a className={s.messager_link} href="#">
                <LazyImageWrapper
                  src={"assets/viber.svg"}
                  className={[s.icon_messager]}
                  wrapperClass={s.icon_messager_wrapper}
                />
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.row}>
              <LazyImageWrapper
                src="assets/time.svg"
                className={[s.icon]}
                wrapperClass={s.icon_wrapper}
              />
              <p className={s.name} style={{ marginLeft: "10px" }}>
                Режим работы:
              </p>
            </div>
            <div className={s.row}>
              <a href="to:+7000000" className={s.link}>
                +7 (000)000-00-00
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
