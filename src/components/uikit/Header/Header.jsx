/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavigationList from "../../NavigationList/NavigationList";
import LogoComponent from "../LogoComponent/LogoComponent";
import NavigationModalBtn from "../NavigationModalBtn/NavigationModalBtn";
import cs from "classnames";
import s from "./Header.module.scss";
import MailIcon from "../MailIcon/MailIcon";
import PhoneIcon from "../PhoneIcon/PhoneIcon";
import { callToPhone, mailToEmail, visiblePhone } from "../../../utils/const";
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
      <div className={s.contact_block}>
        <a href={`mailto:${mailToEmail}`} className={s.mail}>
          <MailIcon className={s.mail_icon} classNameFill={s.mail_icon_fill} />
          {mailToEmail}
        </a>
        <a href={`tel:${callToPhone}`} className={s.phone}>
          <PhoneIcon
            className={s.phone_icon}
            classNameFill={s.phone_icon_fill}
          />
          {visiblePhone}
        </a>
      </div>
      <NavigationModalBtn className={classModal} />
    </div>
  );
}
