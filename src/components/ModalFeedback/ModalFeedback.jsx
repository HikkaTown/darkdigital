import React from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import s from "./ModalFeedback.module.scss";
export default function ModalFeedback({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <form className={s.form}>
          <h1 className={s.headForm}>Заполните форму</h1>
          <label className={s.label} htmlFor="input">
            <input
              type="text"
              placeholder="Ваше имя"
              className={s.input}
              id="input"
            />
          </label>
          <label className={s.label} htmlFor="tel">
            <input
              type="tel"
              placeholder="Ваш телефон"
              className={s.input}
              id="tel"
            />
          </label>
          <label className={s.label} htmlFor="url">
            <input
              type="text"
              placeholder="Ваш сайт"
              className={s.input}
              id="url"
            />
          </label>
          <button className={s.btn} type="submit">
            Обсудить мой проект
          </button>
          <div className={s.privacy}>
            <span className={s.checkbox}>check</span>
            <p className={s.title}>
              Нажимая на кнопку вы соглашаетесь с{" "}
              <a href="#" className={s.link}>
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </form>
      </OverlayingPopup>
    </Portal>
  );
}
