import React from "react";
import { positions } from "../../utils/screens";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import s from "./ModalSectionList.module.scss";

export default function ModalSectionList({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <div className={s.container}>
          <div className={s.tabs}>
            {positions.map((item, index) => {
              return (
                <button key={index} type="button" className={s.tab}>
                  <span className={s.top_separator}></span>
                  <span className={s.text}>{item.title}</span>
                  <span className={s.bottom_separator}></span>
                </button>
              );
            })}
          </div>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
