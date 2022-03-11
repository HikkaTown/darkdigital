import React from "react";
import cs from "classnames";
import s from "./Container.module.scss";
export default function Container({ className, children }) {
  return <div className={cs(s.container, className)}>{children}</div>;
}
