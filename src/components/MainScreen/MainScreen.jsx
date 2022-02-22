import React, { useRef } from "react";
import s from "./MainScreen.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../LazyImage";
import RippleMainScreen from "../RippleMainScreen/RippleMainScreen";

export default function MainScreen({
  classPanel,
  dataXpos,
  dataYpos,
  changePosition,
}) {
  return (
    <div className={cs(classPanel)} data-x-pos={dataXpos} data-y-pos={dataYpos}>
      <div className={s.container}>
        <div className={s.header}>
          <LazyImageWrapper
            src={"/assets/logo.png"}
            className={[s.logo]}
            wrapperClass={s.logo_wrapper}
          />
        </div>
        <RippleMainScreen />
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
