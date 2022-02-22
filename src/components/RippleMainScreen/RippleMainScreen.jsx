import React from "react";
import s from "./RippleMainScreen.module.scss";
import cs from "classnames";

export default function RippleMainScreen() {
  return (
    <div className={s.block}>
      <div className={s.ripples}>
        <div className={cs(s.ripple, s.ripple_1)}></div>
        <div className={cs(s.ripple, s.ripple_2)}></div>
        <div className={cs(s.ripple, s.ripple_3)}></div>
        <div className={cs(s.ripple, s.ripple_4)}></div>
        <div className={cs(s.ripple, s.ripple_5)}></div>
        <div className={cs(s.ripple, s.ripple_6)}></div>
      </div>
    </div>
  );
}
