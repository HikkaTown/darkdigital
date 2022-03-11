import React from "react";
import Header from "../uikit/Header/Header";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import s from "./AboutUsScreen.module.scss";
import cs from "classnames";
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
      <div className={s.container}>
        <Header />
        <OpenBlockList
          className={s.block_list}
          onChangePosition={changePosition}
          setShowAll={setShowAll}
        />
        <p className={s.head}>О нас</p>
        <div className={s.content}>
          <p className={s.content_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            odio accusamus, ad ea quas voluptatum quos impedit ut consectetur
            non aliquam obcaecati doloribus deserunt! Autem, soluta voluptates
            quidem aut consectetur quo atque maiores, nulla, excepturi
            perferendis reiciendis doloribus voluptas. Tempore ullam hic sed
            optio voluptate commodi officiis, consectetur, unde tempora ipsum ex
            ut rerum dolorem aperiam inventore architecto deleniti? Qui id
            recusandae temporibus vero minus deleniti illo aliquid, neque
            aperiam dicta, omnis laborum dignissimos! Ipsam atque iusto et
            aperiam dolorum, nostrum sed quibusdam consequuntur aut velit
            doloremque repudiandae ipsum voluptatibus totam? Eveniet officia
            tempora repudiandae atque nam dolore officiis dolor ratione quia
            aliquid ipsa velit, quae voluptas ipsam porro pariatur molestiae
            facilis! Id hic eum voluptas sed, quibusdam obcaecati aspernatur
            reprehenderit quas. Delectus, beatae esse maxime aliquid debitis
            quod sequi id eveniet vero! Debitis, tenetur quasi? Laboriosam,
            deserunt sapiente fugiat debitis eius odio voluptates nulla
            assumenda, possimus libero quos maxime eaque, hic optio culpa ipsa
            dolores? Incidunt delectus ut reprehenderit? Error accusantium
            aliquam, voluptatum sint eum velit. Atque harum blanditiis
            repudiandae nemo? Tempore reprehenderit qui doloribus laborum quas
            odio fuga, corporis iure quaerat architecto, culpa eveniet. Cum
            autem aperiam, reprehenderit alias aliquid voluptatibus fugit ea
            temporibus ab officia velit qui minus. Sunt quia eligendi unde,
            ullam praesentium perferendis vel beatae iure eos at quis cum quos.
            Exercitationem repellat officia culpa optio distinctio debitis
            inventore iure ad? Hic pariatur temporibus vel sapiente quos soluta,
            nam itaque consectetur officiis ad quia accusantium eos ducimus
            quaerat commodi qui voluptatem voluptas quidem eum, numquam ex ab
            impedit dicta odio! Dolore accusamus sunt, ratione sequi ex
            laudantium in quas repudiandae pariatur eum expedita rerum soluta at
            similique labore error modi exercitationem ipsum aliquam recusandae
            sed nisi neque aliquid nihil. Distinctio eligendi, optio
            reprehenderit voluptatem, dignissimos officiis vero laudantium modi,
            illo est porro fugit laborum libero fuga praesentium ducimus
            delectus ipsa nostrum? Voluptates, reprehenderit beatae! Id expedita
            illo nemo nobis quidem neque voluptatum doloribus minima
            necessitatibus? Modi totam veritatis distinctio, corporis
            reprehenderit officiis nemo ducimus mollitia dolores sit suscipit a
            dignissimos! Et voluptatum velit iste veniam quis omnis eum. Rerum
            nihil dolorum deserunt nam debitis culpa ipsam est, dolor,
            accusantium, a perferendis aliquid. Neque, explicabo! Pariatur,
            culpa eos. Consequuntur quaerat eaque ut? Beatae amet ea voluptatem
            molestiae, quo rem sequi modi nostrum vero quas! Illum reprehenderit
            incidunt, similique esse quibusdam sed obcaecati libero laborum
            eaque facilis iste architecto deleniti ea harum repellat velit
            voluptatibus perferendis temporibus fugit assumenda quis. Numquam
            exercitationem odio nisi aliquam corporis tenetur ad quam voluptate.
            Ratione maxime dicta consequuntur delectus voluptatem eius
            distinctio cumque numquam, facere nisi nam maiores quibusdam vero
            harum at recusandae saepe corporis aut! Voluptas unde doloribus
            animi, similique quisquam necessitatibus est possimus optio
            assumenda ipsum ea. Minima esse laboriosam id eum consequuntur
            temporibus inventore nostrum ratione sed repellat dolores maiores
            deserunt iste omnis provident ipsam, facilis odit cumque ad
            doloribus reiciendis unde laborum nesciunt. Voluptatum molestias
            debitis magni ipsam reprehenderit culpa natus sint quibusdam
            deleniti vitae, ad cumque. Qui delectus voluptatem facilis neque in
            doloremque veniam optio porro assumenda impedit. Culpa itaque eius
            ut in ab impedit necessitatibus hic maxime illo, non, nihil pariatur
            qui laborum exercitationem autem possimus? Ipsum facere ea ex
            laboriosam ducimus laudantium totam, labore dolor cupiditate.
            Inventore cupiditate cum dolores! Dolorum, cumque? Officiis
            necessitatibus similique nulla atque laboriosam quas tempore
            quisquam voluptas possimus. Consequatur quod dignissimos reiciendis
            enim. Aspernatur ex dolores amet repellendus fugit animi
            necessitatibus, aliquam fugiat sed suscipit consectetur reiciendis
            eos earum laborum dignissimos facere omnis consequatur obcaecati
            doloremque corporis. In dolor natus aut, at dicta qui, blanditiis
            cum sunt consequatur, earum quidem. Eos est asperiores laboriosam
            sapiente perferendis, nisi sit culpa voluptas cupiditate! Velit quam
            iure earum necessitatibus, ullam reprehenderit, esse blanditiis at
            fugiat reiciendis odio officia voluptate possimus officiis delectus
            sed similique adipisci obcaecati! Fugit reprehenderit excepturi
            mollitia ea, consequuntur aperiam ratione impedit adipisci totam
            iure voluptates dolores commodi assumenda non alias magni
            necessitatibus amet eum voluptas voluptatum reiciendis distinctio.
            Quia minima quam ab? Hic cum suscipit impedit similique ut
            doloremque sit autem maxime natus magni eaque mollitia fuga, ullam
            accusantium id voluptas nihil laboriosam iusto reprehenderit omnis
            eius at. Rerum pariatur veritatis expedita labore facilis suscipit
            cupiditate minus magnam! Blanditiis minima libero voluptatem dolorem
            facere cupiditate sequi aperiam cum nulla porro enim quae doloremque
            nesciunt facilis magni aspernatur, modi exercitationem soluta! Neque
            libero sapiente placeat autem repellendus, recusandae unde. Eaque
            quibusdam officiis delectus, voluptatem necessitatibus est natus
            iure tempora sint vitae quis optio amet ipsa voluptas tempore
            excepturi quos suscipit dolores recusandae molestiae laudantium
            accusamus ad alias exercitationem. Porro ut magni debitis expedita
            a, omnis nobis, perferendis exercitationem quidem facilis deserunt
            aliquid sapiente fuga, cupiditate praesentium dolore repellat
            laudantium quasi veritatis fugiat non possimus. Sunt magni totam ab
            illo atque quaerat pariatur repellendus. Quidem rem veritatis iste
            aspernatur fuga dolor unde alias vel laudantium pariatur, dolorum
            eius magnam at quis possimus nesciunt atque fugiat optio officiis
            quas ipsa ea dolores quaerat. Dolorum delectus culpa quaerat sunt
            distinctio unde asperiores at, molestiae eius ullam. Neque rem
            consequuntur consequatur dolores aliquam adipisci doloremque
            praesentium iste! Non vitae itaque ex assumenda consequatur aliquid
            deserunt mollitia iure eaque doloribus velit voluptatibus rerum
            consectetur quos dolore quisquam eum corporis eligendi soluta, et
            veniam delectus ut? Nihil voluptatibus impedit sapiente voluptatem
            molestiae qui animi sed enim tempora, facilis veniam dignissimos
            quis, quo voluptates sequi neque odit natus blanditiis consectetur
            at vero nobis dolorum magnam. Dolor eligendi tenetur eius iure at
            alias ad quas excepturi ipsum, laborum, dolorem aliquam repudiandae
            quia dolorum minus velit molestiae dolore hic enim rerum cupiditate.
            Rerum ad totam quod saepe nisi consequuntur explicabo esse, dolor ea
            voluptatem ducimus, repellat deserunt cum iste corporis eligendi
            quaerat facere consequatur vitae enim architecto. Eveniet reiciendis
            delectus dolorum nisi rem voluptatibus architecto dolores
            consequatur necessitatibus perferendis, ad cum illum aliquam minima
            dicta quos facilis autem nostrum repellendus quas assumenda quis
            ullam! Deserunt quos minus, delectus, asperiores eaque natus
            necessitatibus commodi veritatis expedita doloribus odio ullam ex
            repellat. Eligendi neque, odit mollitia quidem ipsam fuga iure
            facere nemo voluptatem labore expedita minus! Nihil blanditiis
            laborum ad!
          </p>
        </div>
      </div>
    </div>
  );
}
