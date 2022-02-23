import React from "react";
import s from "./LogoComponent.module.scss";
import cs from "classnames";
export default function LogoComponent({
  classLogo,
  classCompany,
  classDark,
  classDigital,
  classDescription,
}) {
  return (
    <div className={cs(s.logo, classLogo)}>
      <p className={cs(s.company, classCompany)}>
        <span className={cs(s.dark, classDark)}>Dark</span>
        <span className={cs(s.digital, classDigital)}>Digital</span>
      </p>
      <p className={cs(s.description, classDescription)}>Web Studio</p>
    </div>
  );
}
