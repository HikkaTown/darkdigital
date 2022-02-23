import React from "react";
import s from "./ServicesButton.module.scss";
import cs from "classnames";

export default function ServicesButton({ text, onClick, className }) {
  return <button className={cs(s.btn, className)}>{text}</button>;
}
