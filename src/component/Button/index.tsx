import clsx from "clsx";
import { MouseEventHandler } from "react";
import style from "./button.module.scss";

interface ButtonType {
  type: "outline" | "fill";
  size: "m" | "xl";
  children: JSX.Element | string;
  icon?: string;
  marginRight?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Button({
  type,
  size,
  children,
  icon,
  marginRight,
  className,
  onClick,
}: ButtonType): JSX.Element {
  return (
    <div
      className={clsx(style.waper, className, {
        [style.outline]: type === "outline",
        [style.fill]: type === "fill",
        [style.sizem]: size === "m",
        [style.sizexl]: size === "xl",
      })}
      style={{ marginRight: marginRight }}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className={style.icon} />}
      <span
        className={clsx(style.label, {
          [style.outlineLabel]: type === "outline",
          [style.fillLabel]: type === "fill",
          [style.sizemLabel]: size === "m",
          [style.sizexlLabel]: size === "xl",
        })}
      >
        {children}
      </span>
    </div>
  );
}

export default Button;
