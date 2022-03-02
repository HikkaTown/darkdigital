import React from "react";
import NavigationList from "../../NavigationList/NavigationList";
import LogoComponent from "../LogoComponent/LogoComponent";
import NavigationModalBtn from "../NavigationModalBtn/NavigationModalBtn";
import cs from "classnames";
import s from "./Header.module.scss";
export default function Header({
  className,
  classLogo,
  classModal,
  classNav,
  classDark,
  classDigital,
}) {
  return (
    <div className={cs(s.header, className)}>
      <LogoComponent
        classLogo={cs(s.logo, classLogo)}
        classDark={classDark}
        classDigital={classDigital}
      />
      <NavigationList className={cs(s.nav, classNav)} />
      <NavigationModalBtn className={classModal} />
    </div>
  );
}
