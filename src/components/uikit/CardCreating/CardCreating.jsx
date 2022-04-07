import React, { useState, useEffect } from "react";
import s from "./CardCreating.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage";
import useWindowSize from "../../../hooks/useWindowSize";
export default function CardCreating({ className, data }) {
  const [endPos, setEndPos] = useState(2);
  const {
    name,
    description,
    promotionName,
    promotionList,
    discountValue,
    discountText,
    price,
  } = data;
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 768) {
      setEndPos(promotionList.length);
    }
  }, [size]);

  return (
    <div className={cs(s.card, className)}>
      <h3 className={s.name_card}>{name}</h3>
      <p className={s.description}>{description}</p>
      <div className={s.promotion_list}>
        <h4 className={s.promotion_head}>{promotionName}</h4>
        <ul className={s.list}>
          {promotionList.slice(0, endPos).map((item, index) => {
            return (
              <li className={s.list_item} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        {promotionList.length > endPos ? (
          <button
            className={s.read_more}
            onClick={() => {
              if (endPos + 2 < promotionList.length) {
                setEndPos((prev) => prev + 2);
              } else {
                setEndPos(promotionList.length);
              }
            }}
          >
            Читать ещё
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={s.sale_promotion}>
        <div className={s.sale_block}>
          <LazyImageWrapper
            src="assets/gift.svg"
            alt="gift icon"
            className={[s.sale_icon]}
            wrapperClass={s.sale_icon_wrapper}
          />
          <p className={s.sale_head}>СКИДКА {discountValue}%</p>
        </div>
        <p className={s.sale_text}>{discountText}</p>
      </div>
      <div className={s.payment_block}>
        <button className={s.payment_btn}>Заказать</button>
        <p className={s.price}>
          от <span className={s.amount}>{price}</span>{" "}
          <span className={s.unic}>
            <span className={s.currency}>руб.</span>
            <span className={s.time}>мес.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
