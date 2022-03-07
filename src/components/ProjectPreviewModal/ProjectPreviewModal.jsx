import React from "react";
import s from "./ProjectPreviewModal.module.scss";
import cs from "classnames";
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
export default function ProjectPreviewModal({ isOpened, onClose, src }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose} child={s.overlay}>
        <div className={s.container}>
          <button className={s.close} onClick={onClose}>
            <span className={s.line} />
            <span className={s.line} />
          </button>
          <img src={src} alt="dsds" className={s.image} />
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
