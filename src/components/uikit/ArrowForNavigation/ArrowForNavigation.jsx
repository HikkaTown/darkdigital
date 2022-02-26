import React from "react";
import s from "./ArrowForNavigation.module.scss";
import cs from "classnames";

export default function ArrowForNavigation({
  arrowFirstClass,
  arrowSecondClass,
}) {
  return (
    // <span className={s.arrow_container}>
    <>
      <span className={cs(s.arrow, s.arrow_first)}></span>
      <span className={cs(s.arrow, s.arrow_second)}></span>
    </>
    // </span>
  );
}
