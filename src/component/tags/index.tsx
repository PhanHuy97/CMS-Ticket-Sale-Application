import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./tags.module.scss";

interface TagType {
  selected: boolean;
  children: string;
  icon: string;
  link: string;
}

function Tag({ selected, children, icon, link }: TagType): JSX.Element {
  return (
    <Link
      to={link}
      className={clsx(style.tag, {
        [style.active]: selected,
      })}
    >
      <img src={icon} alt="icon" className={style.icon} />
      <span className={style.title}>{children}</span>
    </Link>
  );
}

export default Tag;
