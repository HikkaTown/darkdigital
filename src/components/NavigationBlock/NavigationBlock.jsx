import React from "react";
import s from "./NavigationBlock.module.scss";
import cs from "classnames";
import ArrowForNavigation from "../uikit/ArrowForNavigation/ArrowForNavigation";
import { positions } from "../../utils/screens";

export default function NavigationBlock({
  changePosition,
  currentPosX,
  currentPosY,
}) {
  return (
    <div className={s.navigation_list}>
      <div className={s.navigation}>
        {positions.map((item, index) => {
          const {
            title,
            xPos,
            yPos,
            className,
            arrowFirstClass,
            arrowSecondClass,
          } = item;
          return (
            <button
              key={index}
              className={cs(s.nav_btn, className)}
              style={{
                display:
                  (currentPosX === 1 && xPos === 1) ||
                  (currentPosX === -1 && xPos === -1) ||
                  (currentPosY === 1 && yPos === 1) ||
                  (currentPosY === -1 && yPos === -1)
                    ? "none"
                    : "block",
              }}
              onClick={() => {
                changePosition(xPos, yPos);
              }}
            >
              {/* <span className={s.btn_container}> */}
              <ArrowForNavigation
              // arrowFirstClass={arrowFirstClass}
              // arrowSecondClass={arrowSecondClass}
              />
              <span>{title}</span>
              {/* </span> */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
