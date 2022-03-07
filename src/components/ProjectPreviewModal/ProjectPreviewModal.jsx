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
          {/* <LazyImageWrapper
            src={src}
            className={[s.image]}
            wrapperClass={s.image_wrapper}
            alt="Preview"
          /> */}
          <img src={src} alt="dsds" className={s.image} />
        </div>
      </OverlayingPopup>
    </Portal>
  );
}
