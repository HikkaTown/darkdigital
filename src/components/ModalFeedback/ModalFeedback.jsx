import React from "react";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import { motion } from "framer-motion";
import s from "./ModalFeedback.module.scss";
import Header from "../uikit/Header/Header";
import LogoComponent from "../uikit/LogoComponent/LogoComponent";
export default function ModalFeedback({ isOpened, onClose }) {
  const variantAnim = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden2: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <Portal>
      <OverlayingPopup
        child={s.overlay_calss}
        isOpened={isOpened}
        onClose={onClose}
      >
        <motion.form
          className={s.form}
          variants={variantAnim}
          initial="hidden"
          animate="visible"
          exit="hidden2"
          transition={{ duration: 0.3, type: "tween" }}
        >
          <LogoComponent classLogo={s.header} classDigital={s.digital} />
          <div className={s.content}>
            <button onClick={onClose} type="button" className={s.button_close}>
              <span className={s.line}></span>
              <span className={s.line}></span>
            </button>
            <h1 className={s.headForm}>Заполните форму</h1>
            <label className={s.label} htmlFor="input">
              <LazyImageWrapper
                src="assets/person.svg"
                className={[s.icon_person]}
                wrapperClass={s.icon_person_wrapper}
              />
              <input
                type="text"
                placeholder="Ваше имя"
                className={s.input}
                id="input"
              />
            </label>
            <label className={s.label} htmlFor="tel">
              <LazyImageWrapper
                src="assets/phone_fff.svg"
                className={[s.icon_phone]}
                wrapperClass={s.icon_phone_wrapper}
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className={s.input}
                id="tel"
              />
            </label>
            <label className={s.label} htmlFor="url">
              <LazyImageWrapper
                src="assets/www.svg"
                className={[s.icon_circl]}
                wrapperClass={s.icon_circl_wrapper}
              />
              <input
                type="text"
                placeholder="Ваш сайт"
                className={s.input}
                id="url"
              />
            </label>
            <div className={s.loading_file}>
              <LazyImageWrapper
                src="assets/clip.svg"
                className={[s.icon_clip]}
                wrapperClass={s.icon_clip_wrapper}
              />
              <a href="#" className={s.loading_text}>
                Загрузите файл с презентацией или описанием
              </a>
            </div>
            <button className={s.btn} type="submit">
              Обсудить мой проект
            </button>
            <div className={s.privacy}>
              {/* <span className={s.checkbox}>check</span> */}
              <p className={s.title}>
                Нажимая на кнопку вы соглашаетесь с{" "}
                <a href="#" className={s.link}>
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </motion.form>
      </OverlayingPopup>
    </Portal>
  );
}
