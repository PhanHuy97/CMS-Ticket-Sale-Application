import clsx from "clsx";
import React from "react";
import style from "./fill.module.scss";

interface FillType {
  children: string;
  icon?: string;
  type: "disable" | "fill" | "normal";
  border?: boolean;
}

function Fill({ children, icon, type, border }: FillType) {
  return (
    <div
      className={clsx(style.waper, {
        [style.hasicon]: Boolean(icon),
        [style.normal]: type === "normal",
        [style.fill]: type === "fill",
        [style.disable]: type === "disable",
        [style.border]: border,
      })}
    >
      <span className={style.lable}>{children}</span>
      {icon && <img src={icon} alt="" className={style.icon} />}
    </div>
  );
}

export default Fill;
