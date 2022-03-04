import React from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import cs from "classnames";
import s from "./BenefitsScreen.module.scss";
import { LazyImageWrapper } from "../LazyImage";
export default function BenefitsScreen({
  changePosition,
  classPanel,
  dataXpos,
  dataYpos,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
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
          <span className={s.item}>
            <LazyImageWrapper
              src="/assets/benefits.svg"
              className={[s.icon]}
              wrapperClass={s.icon_wrapper}
            />
            <p className={s.text}>Поэтапная система оплаты</p>
          </span>
          <span className={s.item}>
            <span className={s.circl} />
            <p className={cs(s.text, s.text_second)}>Уникальный дизайн</p>
          </span>
          <span className={s.item}>
            <span className={s.circl} />
            <p className={cs(s.text, s.text_second)}>
              100 лет гарантии на сайт
            </p>
          </span>
          <span className={s.item}>
            <span className={s.circl} />
            <p className={cs(s.text, s.text_second)}>Поддержка сайта 24/7</p>
          </span>
          <span className={s.item}>
            <span className={s.circl} />
            <p className={cs(s.text, s.text_second)}>
              Настройка админки под ваши задачи
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
