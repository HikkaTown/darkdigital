import React from "react";
import cs from "classnames";
import s from "./WhyWeScreen.module.scss";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import Container from "../Container/Container";

export default function WhyWeScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
  setShowAll,
  showAll,
}) {
  return (
    <div
      className={cs(classPanel, s.page)}
      data-x-pos={dataXpos}
      data-y-pos={dataYpos}
      onClick={() => {
        if (showAll) {
          setShowAll(false);
          changePosition(dataXpos, dataYpos);
        }
      }}
    >
      <Container>
        <Header classDark={s.dark} classDigital={s.digital} />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
          setShowAll={setShowAll}
        />
        <p className={s.head}>
          Почему разработку сайта под ключ стоит заказать у нас
        </p>
        <div className={s.content}>
          <LazyImageWrapper
            src={""}
            className={[s.image]}
            wrapperClass={s.image_wrapper}
          />
          <p className={s.content_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            accusantium voluptates et ex hic? Placeat, ducimus asperiores quos
            corrupti numquam cupiditate hic minus modi. Sapiente eum quo quidem
            fugit rerum? Adipisci assumenda maiores omnis, consequuntur hic non
            cupiditate. Sed odit beatae, doloribus harum aspernatur ea, nobis
            praesentium amet ullam earum nam nulla asperiores consequuntur
            dolore sequi consectetur veniam quo saepe accusantium ut deserunt
            dicta nisi! Obcaecati aperiam ipsum qui assumenda quia doloremque
            incidunt amet laboriosam nesciunt explicabo accusamus quam impedit
            iure nihil repudiandae suscipit necessitatibus numquam, facilis ex
            odio velit nisi autem id. Magnam, laboriosam nemo sit hic id atque?
          </p>
        </div>
      </Container>
    </div>
  );
}
