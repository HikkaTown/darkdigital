import React, { useRef, useState } from "react";
import s from "./MainScreen.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../LazyImage";
import RippleMainScreen from "../RippleMainScreen/RippleMainScreen";
import ContentMainScreen from "../ContentMainScreen/ContentMainScreen";
import NavigationList from "../NavigationList/NavigationList";
import LogoComponent from "../uikit/LogoComponent/LogoComponent";
import NavigationModalBtn from "../uikit/NavigationModalBtn/NavigationModalBtn";
import ModalSectionList from "../ModalSectionList/ModalSectionList";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import OpenBlockList from "../uikit/OpenBlockList/OpenBlockList";
import Header from "../uikit/Header/Header";

export default function MainScreen({
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
        <Header />
        <OpenBlockList
          className={s.show_screens}
          onChangePosition={changePosition}
        />
        <RippleMainScreen />
        <ContentMainScreen />
      </div>
    </div>
  );
}

// {
//   /* <div class="site-wrap">
//   <div class="panel-wrap animate--none">
//     <div class="panel" data-x-pos="0"  data-y-pos="0">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--right-top js-up js-right">up/right</span>
//       <span class="panel__nav panel__nav--left-top js-up js-left">up/left</span>
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <span class="panel__nav panel__nav--right-down js-down js-right">down/right</span>
//       <span class="panel__nav panel__nav--left-down js-down js-left">down/left</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <span class="panel__zoom js-zoom">View All</span>
//       <h1>Main</h1>
//       <div class="panel__animation-list">
//         <span class="js-animation active" data-animation="animate--none">None</span>
//         <span class="js-animation" data-animation="animate--shrink">Shrink</span>
//         <span class="js-animation" data-animation="animate--tilt">Tilt</span>
//         <span class="js-animation" data-animation="animate--tilt2">Tilt-2</span>
//       </div>
//     </div>
//     <div class="panel" data-x-pos="0"  data-y-pos="1">
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <span class="panel__nav panel__nav--right-down js-down js-right">down/right</span>
//       <span class="panel__nav panel__nav--left-down js-down js-left">down/left</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Up</h1>
//     </div>
//     <div class="panel" data-x-pos="-1"  data-y-pos="1">
//       <span class="panel__nav panel__nav--right-down js-down js-right">down/right</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Up Left</h1>
//     </div>
//     <div class="panel" data-x-pos="1"  data-y-pos="1">
//       <span class="panel__nav panel__nav--left-down js-down js-left">down/left</span>
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Up Right</h1>
//     </div>
//     <div class="panel" data-x-pos="-1"  data-y-pos="0">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--right-top js-up js-right">up/right</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <span class="panel__nav panel__nav--right-down js-down js-right">down/right</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Left</h1>
//     </div>
//     <div class="panel" data-x-pos="-1"  data-y-pos="-1">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--right-top js-up js-right">up/right</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <h1>Down Left</h1>
//     </div>
//     <div class="panel" data-x-pos="1"  data-y-pos="-1">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--left-top js-up js-left">up/left</span>
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <h1>Down Right</h1>
//     </div>
//     <div class="panel" data-x-pos="1"  data-y-pos="0">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--left-top js-up js-left">up/left</span>
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <span class="panel__nav panel__nav--left-down js-down js-left">down/left</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Right</h1>
//     </div>
//     <div class="panel" data-x-pos="0"  data-y-pos="-1">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <span class="panel__nav panel__nav--left-top js-up js-left">up/left</span>
//       <span class="panel__nav panel__nav--right-top js-up js-right">up/right</span>
//       <span class="panel__nav panel__nav--left js-left">left</span>
//       <span class="panel__nav panel__nav--right js-right">right</span>
//       <span class="panel__nav panel__nav--down js-down">down</span>
//       <h1>Down</h1>
//     </div>
//     <div class="panel" data-x-pos="0"  data-y-pos="-2">
//       <span class="panel__nav panel__nav--up js-up">up</span>
//       <h1>Down 2</h1>
//     </div>
//   </div> */
// }
