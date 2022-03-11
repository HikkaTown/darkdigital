import React from "react";
import cs from "classnames";
import s from "./WhyWeScreen.module.scss";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import { LazyImageWrapper } from "../LazyImage/LazyImage";

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
      <div className={s.container}>
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
          <p className={s.content_text}>
            <LazyImageWrapper
              src={""}
              className={[s.image]}
              wrapperClass={s.image_wrapper}
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore illo aspernatur rerum. Quis provident dolorem possimus beatae
            tenetur quo sit nemo hic praesentium corporis nesciunt enim fugit
            unde, aliquam officiis laudantium adipisci odit commodi? Pariatur
            exercitationem provident nihil enim! Aut placeat eos voluptatibus
            quam iste reiciendis fuga aspernatur, recusandae maxime.
            Exercitationem, unde. Molestias adipisci voluptas ipsum ut porro
            quasi quae id earum rerum. Accusantium esse quis minima neque, sed
            velit vitae! Fuga quidem eligendi rerum voluptates dolorum quae
            excepturi ea autem alias praesentium, odit repellendus deserunt.
            Itaque nihil quidem, in voluptatum, libero at aspernatur magni
            quaerat explicabo iure assumenda hic deserunt. Rerum molestias,
            itaque quo aliquid animi modi ad vero illo voluptatum exercitationem
            perferendis ea dignissimos vel dolorem, inventore magni quod totam
            quaerat fugiat. Quidem, recusandae. Facere, in? Harum perspiciatis
            quasi ipsam ut maxime dolorum deserunt quis beatae. Repellat,
            repudiandae non! Tempore earum deleniti, sint architecto non nobis
            inventore quasi iure tenetur adipisci sapiente illo, autem id
            aperiam expedita quis eligendi mollitia itaque aspernatur dolorem
            temporibus vero et. Impedit, pariatur. Necessitatibus ullam
            inventore illo voluptatem deserunt dolorum laboriosam aliquid
            perspiciatis minima, asperiores perferendis eligendi voluptatum
            itaque architecto dolores quos blanditiis beatae iste repellat!
            Aspernatur est eius autem delectus quod in voluptas adipisci sunt
            doloribus, fugiat eaque amet dolor ad vel nobis fugit sequi officia
            aliquid accusamus veritatis laboriosam assumenda! Rem ut nobis
            tempora sed laborum suscipit consectetur porro ea ipsam voluptatibus
            quia quod at eaque, repellat non vel sint ipsa quibusdam officia
            officiis veritatis ad. Ab, explicabo! Provident neque dolores
            explicabo fugiat praesentium, accusamus possimus laboriosam minus,
            incidunt illo autem tenetur molestiae eos. Eaque ex cumque eum rerum
            illo iure placeat dolore maiores vero dicta similique dolores, nihil
            iste ut reiciendis, in adipisci? Veniam libero laboriosam officiis
            nulla quas omnis sunt, repudiandae neque, enim dolor iste nemo
            nostrum inventore laudantium iusto fugit quam, quo voluptas. Ipsum
            nemo consequatur optio, asperiores dignissimos blanditiis dolorem ex
            consectetur ea a voluptatem culpa! Magnam maiores dolores quidem
            optio debitis laboriosam cumque quisquam, sed autem impedit nobis
            neque, perspiciatis totam eum expedita, vitae pariatur numquam
            veritatis fuga dignissimos minus illo odio facere perferendis? Iste
            quidem aliquid excepturi commodi, eos totam recusandae doloremque
            porro quo deserunt fugit cumque dolore autem aliquam minus dolorem
            ratione quas libero consectetur quibusdam suscipit vel aperiam sit.
            Minus tempore dolorem excepturi dolorum, accusamus voluptates sit
            temporibus similique doloribus placeat delectus. Vero sit omnis
            perferendis. Aperiam, eius minus. Dolores eius, qui a officiis
            pariatur nobis, voluptate necessitatibus fugiat quas at assumenda
            adipisci architecto repellendus quaerat voluptates, dolorum saepe
            non mollitia odit aspernatur? Reprehenderit at impedit amet, beatae
            aut rem ea quae quod! Facere et in ipsa, similique quaerat dolorem
            eaque architecto repellat rerum voluptatibus delectus aut veritatis
            sunt quibusdam voluptatem quia officia autem error corrupti
            assumenda laudantium? Eaque omnis ad id, similique quisquam nulla,
            facere commodi excepturi tenetur hic amet! Est et accusamus illum
            deserunt sed, dolores officia eveniet, alias vitae iste commodi illo
            magnam quis. Provident repudiandae temporibus officia nulla cum
            minima dicta praesentium harum qui cumque tempora, illo nobis!
          </p>
        </div>
      </div>
    </div>
  );
}
