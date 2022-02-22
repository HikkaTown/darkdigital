import React from "react";
import s from "./MainButton.module.scss";
import cs from "classnames";
export default function MainButton({ text, onClick, className }) {
  return <button className={cs(s.btn, className)}>{text}</button>;
}
