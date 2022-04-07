import React from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import s from "./AboutUsScreen.module.scss";
import cs from "classnames";
import Container from "../Container/Container";
import { LazyImageWrapper } from "../LazyImage";
import CanvasBackground from "../uikit/CanvasBackground/CanvasBackground";
export default function AboutUsScreen({
  changePosition,
  classPanel,
  dataXpos,
  dataYpos,
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
      <CanvasBackground className={s.canvas} />
      <Container>
        <Header />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
          setShowAll={setShowAll}
        />
        <p className={s.head}>О нас</p>
        <div className={s.content}>
          <p className={s.content_text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            veniam expedita aspernatur cumque debitis dolorum quam quisquam
            velit nihil nam culpa dolor voluptatibus impedit unde, sunt eos quo
            veritatis? Sunt, dolores eos earum hic alias cum. Laborum nulla odit
            dolor neque pariatur vero expedita, ad omnis deleniti est, ipsum
            distinctio explicabo! Quidem magnam autem odio earum tempore
            eligendi id maxime corrupti aliquam. Nostrum, fugiat ullam!
            Repellendus, veniam. Praesentium alias, fuga, vel inventore soluta
            quis tempora modi earum impedit saepe iusto expedita assumenda
            molestiae dignissimos maxime rerum, animi aliquid facere ullam eius
            corrupti sequi dolorum esse neque. Nesciunt consectetur alias
            distinctio?
          </p>
          <button className={cs(s.btn, s.btn_mob)}>Заказать</button>
          <div className={s.images_block}>
            <LazyImageWrapper
              src=""
              alt=""
              ratio={0.23}
              className={[s.image_big]}
              wrapperClass={s.image_big_wrapper}
            />
            <LazyImageWrapper
              src=""
              alt=""
              className={[s.image_small]}
              wrapperClass={s.image_small_wrapper}
            />
            <LazyImageWrapper
              src=""
              alt=""
              className={[s.image_small]}
              wrapperClass={s.image_small_wrapper}
            />
            <button className={s.btn}>Заказать</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
